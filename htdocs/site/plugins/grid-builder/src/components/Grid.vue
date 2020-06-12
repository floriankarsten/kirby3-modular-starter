<template>
	<div>
		<k-header>Grid width: {{ cols }}</k-header>
		<div>
      <grid-layout
              :layout.sync="layout"
              :col-num="cols"
              :row-height="30"
              :is-draggable="true"
              :is-resizable="true"
              :is-mirrored="false"
              :vertical-compact="false"
              :margin="[gap, gap]"
              :use-css-transforms="true"
              @layout-updated="layoutUpdatedEvent"
            >
              <grid-item
                v-for="item in layout"
                :x="item.x"
                :y="item.y"
                :w="item.w"
                :h="item.h"
                :i="item.i"
                :key="item.i"
              >{{item.i}}</grid-item>
            </grid-layout>
		</div>
	</div>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
// import Basic from "./basic.vue";
String.prototype.hashCode = function(){
	var hash = 0;
	if (this.length == 0) return hash;
	for (i = 0; i < this.length; i++) {
		char = this.charCodeAt(i);
		hash = ((hash<<5)-hash)+char;
		hash = hash & hash; // Convert to 32bit integer
	}
	return hash;
}


export default {
	components: {
		GridLayout: VueGridLayout.GridLayout,
		GridItem: VueGridLayout.GridItem
	},
	data: function() {
		return {
		};
	},
	props: {

    gap: Number,
    cols: Number,
    layout: Array,
    allThis: Object,
    baseLayout: {
      type: Object,
      default: function () {
        return [
          { x: 0, y: 0, w: 2, h: 2, i: "0" },
          // { x: 2, y: 0, w: 2, h: 4, i: "1" },
        ]
      }
    }
  },
  computed: {

  },
	methods: {
    layoutUpdatedEvent(newLayout){
      console.log("Updated layout: ", newLayout);
      this.$emit("input", newLayout);
    },
		onInput(event) {
			this.$emit("input", event.target.value);
		}
  },
  mounted: function() {
    console.log('we are mounted!');
    console.log(this.layout);
  }
};
</script>

<style lang="scss">
/** put your css here **/

.vue-grid-item {
  background-color: gray;
}
</style>
