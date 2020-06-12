// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/vue-grid-layout/dist/vue-grid-layout.min.js":[function(require,module,exports) {
var define;
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueGridLayout=t():e.VueGridLayout=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(e){delete installedChunks[e]}function n(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.type="text/javascript",n.charset="utf-8",n.src=f.p+""+e+"."+x+".hot-update.js",t.appendChild(n)}function r(e){return e=e||1e4,new Promise(function(t,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,i=f.p+""+x+".hot-update.json";r.open("GET",i,!0),r.timeout=e,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)t();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+i+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void n(e)}t(e)}}})}function i(e){var t=$[e];if(!t)return f;var n=function(n){return t.hot.active?($[n]?$[n].parents.indexOf(e)<0&&$[n].parents.push(e):(C=[e],v=n),t.children.indexOf(n)<0&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),C=[]),f(n)};for(var r in f)Object.prototype.hasOwnProperty.call(f,r)&&"e"!==r&&Object.defineProperty(n,r,function(e){return{configurable:!0,enumerable:!0,get:function(){return f[e]},set:function(t){f[e]=t}}}(r));return n.e=function(e){function t(){A--,"prepare"===S&&(O[e]||u(e),0===A&&0===I&&d())}return"ready"===S&&a("prepare"),A++,f.e(e).then(t,function(e){throw t(),e})},n}function o(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:v!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:c,apply:p,status:function(e){if(!e)return S;T.push(e)},addStatusHandler:function(e){T.push(e)},removeStatusHandler:function(e){var t=T.indexOf(e);t>=0&&T.splice(t,1)},data:_[e]};return v=void 0,t}function a(e){S=e;for(var t=0;t<T.length;t++)T[t].call(null,e)}function s(e){return+e+""===e?+e:e}function c(e){if("idle"!==S)throw new Error("check() is only allowed in idle status");return b=e,a("check"),r(w).then(function(e){if(!e)return a("idle"),null;k={},O={},D=e.c,y=e.h,a("prepare");var t=new Promise(function(e,t){g={resolve:e,reject:t}});m={};return u(0),"prepare"===S&&0===A&&0===I&&d(),t})}function l(e,t){if(D[e]&&k[e]){k[e]=!1;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--I&&0===A&&d()}}function u(e){D[e]?(k[e]=!0,I++,n(e)):O[e]=!0}function d(){a("ready");var e=g;if(g=null,e)if(b)Promise.resolve().then(function(){return p(b)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(s(n));e.resolve(t)}}function p(n){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];e.indexOf(r)<0&&e.push(r)}}if("ready"!==S)throw new Error("apply() is only allowed in ready status");n=n||{};var i,o,c,l,u,d={},p=[],h={},v=function(){console.warn("[HMR] unexpected require("+b.moduleId+") to disposed module")};for(var g in m)if(Object.prototype.hasOwnProperty.call(m,g)){u=s(g);var b;b=m[g]?function(e){for(var t=[e],n={},i=t.slice().map(function(e){return{chain:[e],id:e}});i.length>0;){var o=i.pop(),a=o.id,s=o.chain;if((l=$[a])&&!l.hot._selfAccepted){if(l.hot._selfDeclined)return{type:"self-declined",chain:s,moduleId:a};if(l.hot._main)return{type:"unaccepted",chain:s,moduleId:a};for(var c=0;c<l.parents.length;c++){var u=l.parents[c],d=$[u];if(d){if(d.hot._declinedDependencies[a])return{type:"declined",chain:s.concat([u]),moduleId:a,parentId:u};t.indexOf(u)>=0||(d.hot._acceptedDependencies[a]?(n[u]||(n[u]=[]),r(n[u],[a])):(delete n[u],t.push(u),i.push({chain:s.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}(u):{type:"disposed",moduleId:g};var w=!1,E=!1,T=!1,I="";switch(b.chain&&(I="\nUpdate propagation: "+b.chain.join(" -> ")),b.type){case"self-declined":n.onDeclined&&n.onDeclined(b),n.ignoreDeclined||(w=new Error("Aborted because of self decline: "+b.moduleId+I));break;case"declined":n.onDeclined&&n.onDeclined(b),n.ignoreDeclined||(w=new Error("Aborted because of declined dependency: "+b.moduleId+" in "+b.parentId+I));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(b),n.ignoreUnaccepted||(w=new Error("Aborted because "+u+" is not accepted"+I));break;case"accepted":n.onAccepted&&n.onAccepted(b),E=!0;break;case"disposed":n.onDisposed&&n.onDisposed(b),T=!0;break;default:throw new Error("Unexception type "+b.type)}if(w)return a("abort"),Promise.reject(w);if(E){h[u]=m[u],r(p,b.outdatedModules);for(u in b.outdatedDependencies)Object.prototype.hasOwnProperty.call(b.outdatedDependencies,u)&&(d[u]||(d[u]=[]),r(d[u],b.outdatedDependencies[u]))}T&&(r(p,[b.moduleId]),h[u]=v)}var A=[];for(o=0;o<p.length;o++)u=p[o],$[u]&&$[u].hot._selfAccepted&&A.push({module:u,errorHandler:$[u].hot._selfAccepted});a("dispose"),Object.keys(D).forEach(function(e){!1===D[e]&&t(e)});for(var O,k=p.slice();k.length>0;)if(u=k.pop(),l=$[u]){var z={},M=l.hot._disposeHandlers;for(c=0;c<M.length;c++)(i=M[c])(z);for(_[u]=z,l.hot.active=!1,delete $[u],delete d[u],c=0;c<l.children.length;c++){var R=$[l.children[c]];R&&((O=R.parents.indexOf(u))>=0&&R.parents.splice(O,1))}}var P,N;for(u in d)if(Object.prototype.hasOwnProperty.call(d,u)&&(l=$[u]))for(N=d[u],c=0;c<N.length;c++)P=N[c],(O=l.children.indexOf(P))>=0&&l.children.splice(O,1);a("apply"),x=y;for(u in h)Object.prototype.hasOwnProperty.call(h,u)&&(e[u]=h[u]);var j=null;for(u in d)if(Object.prototype.hasOwnProperty.call(d,u)&&(l=$[u])){N=d[u];var L=[];for(o=0;o<N.length;o++)if(P=N[o],i=l.hot._acceptedDependencies[P]){if(L.indexOf(i)>=0)continue;L.push(i)}for(o=0;o<L.length;o++){i=L[o];try{i(N)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:u,dependencyId:N[o],error:e}),n.ignoreErrored||j||(j=e)}}}for(o=0;o<A.length;o++){var H=A[o];u=H.module,C=[u];try{f(u)}catch(e){if("function"==typeof H.errorHandler)try{H.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:u,error:t,orginalError:e,originalError:e}),n.ignoreErrored||j||(j=t),j||(j=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:u,error:e}),n.ignoreErrored||j||(j=e)}}return j?(a("fail"),Promise.reject(j)):(a("idle"),new Promise(function(e){e(p)}))}function f(t){if($[t])return $[t].exports;var n=$[t]={i:t,l:!1,exports:{},hot:o(t),parents:(E=C,C=[],E),children:[]};return e[t].call(n.exports,n,n.exports,i(t)),n.l=!0,n.exports}var h=window.webpackHotUpdateVueGridLayout;window.webpackHotUpdateVueGridLayout=function(e,t){l(e,t),h&&h(e,t)};var v,g,m,y,b=!0,x="ae1121a3bd32b19a46d5",w=1e4,_={},C=[],E=[],T=[],S="idle",I=0,A=0,O={},k={},D={},$={};return f.m=e,f.c=$,f.d=function(e,t,n){f.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},f.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return f.d(t,"a",t),t},f.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},f.p="",f.h=function(){return x},i(9)(f.s=9)}([function(e,t,n){"use strict";function r(e){for(var t=0,n=void 0,r=0,i=e.length;r<i;r++)(n=e[r].y+e[r].h)>t&&(t=n);return t}function i(e){for(var t=Array(e.length),n=0,r=e.length;n<r;n++)t[n]=o(e[n]);return t}function o(e){return JSON.parse(JSON.stringify(e))}function a(e,t){return e!==t&&(!(e.x+e.w<=t.x)&&(!(e.x>=t.x+t.w)&&(!(e.y+e.h<=t.y)&&!(e.y>=t.y+t.h))))}function s(e,t){for(var n=f(e),r=w(e),i=Array(e.length),o=0,a=r.length;o<a;o++){var s=r[o];s.static||(s=c(n,s,t),n.push(s)),i[e.indexOf(s)]=s,s.moved=!1}return i}function c(e,t,n){if(n)for(;t.y>0&&!d(e,t);)t.y--;for(var r=void 0;r=d(e,t);)t.y=r.y+r.h;return t}function l(e,t){for(var n=f(e),r=0,i=e.length;r<i;r++){var o=e[r];if(o.x+o.w>t.cols&&(o.x=t.cols-o.w),o.x<0&&(o.x=0,o.w=t.cols),o.static)for(;d(n,o);)o.y++;else n.push(o)}return e}function u(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n].i===t)return e[n]}function d(e,t){for(var n=0,r=e.length;n<r;n++)if(a(e[n],t))return e[n]}function p(e,t){return e.filter(function(e){return a(e,t)})}function f(e){return e.filter(function(e){return e.static})}function h(e,t,n,r,i){if(t.static)return e;var o=r&&t.y>r;"number"==typeof n&&(t.x=n),"number"==typeof r&&(t.y=r),t.moved=!0;var a=w(e);o&&(a=a.reverse());for(var s=p(a,t),c=0,l=s.length;c<l;c++){var u=s[c];u.moved||(t.y>u.y&&t.y-u.y>u.h/4||(e=u.static?v(e,u,t,i):v(e,t,u,i)))}return e}function v(e,t,n,r){if(r){var i={x:n.x,y:n.y,w:n.w,h:n.h,i:"-1"};if(i.y=Math.max(t.y-n.h,0),!d(e,i))return h(e,n,void 0,i.y)}return h(e,n,void 0,n.y+1)}function g(e){return 100*e+"%"}function m(e,t,n,r){var i="translate3d("+t+"px,"+e+"px, 0)";return{transform:i,WebkitTransform:i,MozTransform:i,msTransform:i,OTransform:i,width:n+"px",height:r+"px",position:"absolute"}}function y(e,t,n,r){var i="translate3d("+-1*t+"px,"+e+"px, 0)";return{transform:i,WebkitTransform:i,MozTransform:i,msTransform:i,OTransform:i,width:n+"px",height:r+"px",position:"absolute"}}function b(e,t,n,r){return{top:e+"px",left:t+"px",width:n+"px",height:r+"px",position:"absolute"}}function x(e,t,n,r){return{top:e+"px",right:t+"px",width:n+"px",height:r+"px",position:"absolute"}}function w(e){return[].concat(e).sort(function(e,t){return e.y>t.y||e.y===t.y&&e.x>t.x?1:-1})}function _(e,t){t=t||"Layout";var n=["x","y","w","h"];if(!Array.isArray(e))throw new Error(t+" must be an array!");for(var r=0,i=e.length;r<i;r++){for(var o=e[r],a=0;a<n.length;a++)if("number"!=typeof o[n[a]])throw new Error("VueGridLayout: "+t+"["+r+"]."+n[a]+" must be a number!");if(o.i&&"string"!=typeof o.i)throw new Error("VueGridLayout: "+t+"["+r+"].i must be a string!");if(void 0!==o.static&&"boolean"!=typeof o.static)throw new Error("VueGridLayout: "+t+"["+r+"].static must be a boolean!")}}function C(e,t){t.forEach(function(t){return e[t]=e[t].bind(e)})}function E(e){var t=Object.keys(e);if(!t.length)return"";var n,r=t.length,i="";for(n=0;n<r;n++){var o=t[n],a=e[o];i+=S(o)+":"+T(o,a)+";"}return i}function T(e,t){return"number"!=typeof t||O[e]?t:t+"px"}function S(e){return e.replace(k,"$1-$2").toLowerCase()}function I(e,t,n){for(var r=0;r<e.length;r++)if(e[r][t]==n)return!0;return!1}function A(e,t,n){e.forEach(function(r,i){r[t]===n&&e.splice(i,1)})}Object.defineProperty(t,"__esModule",{value:!0}),t.bottom=r,t.cloneLayout=i,t.cloneLayoutItem=o,t.collides=a,t.compact=s,t.compactItem=c,t.correctBounds=l,t.getLayoutItem=u,t.getFirstCollision=d,t.getAllCollisions=p,t.getStatics=f,t.moveElement=h,t.moveElementAwayFromCollision=v,t.perc=g,t.setTransform=m,t.setTransformRtl=y,t.setTopLeft=b,t.setTopRight=x,t.sortLayoutItemsByRowCol=w,t.validateLayout=_,t.autoBindHandlers=C,t.createMarkup=E,t.addPx=T,t.hyphenate=S,t.findItemInArray=I,t.findAndRemove=A;var O=t.IS_UNITLESS={animationIterationCount:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridColumn:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,stopOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0},k=t.hyphenateRE=/([a-z\d])([A-Z])/g},function(e,t,n){n(10);var r=n(4)(n(13),n(16),null,null);e.exports=r.exports},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];"number"==typeof o&&(r[o]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=u[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(o(n.parts[i]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var a=[],i=0;i<n.parts.length;i++)a.push(o(n.parts[i]));u[n.id]={id:n.id,refs:1,parts:a}}}}function i(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function o(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(h)return v;r.parentNode.removeChild(r)}if(g){var o=f++;r=p||(p=i()),t=a.bind(null,r,o,!1),n=a.bind(null,r,o,!0)}else r=i(),t=s.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function a(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function s(e,t){var n=t.css,r=t.media,i=t.sourceMap;if(r&&e.setAttribute("media",r),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var c="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!c)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(12),u={},d=c&&(document.head||document.getElementsByTagName("head")[0]),p=null,f=0,h=!1,v=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){h=n;var i=l(e,t);return r(i),function(t){for(var n=[],o=0;o<i.length;o++){var a=i[o],s=u[a.id];s.refs--,n.push(s)}t?(i=l(e,t),r(i)):i=[];for(var o=0;o<n.length;o++){var s=n[o];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete u[s.id]}}}};var m=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t,n,r){var i,o=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(i=e,o=e.default);var s="function"==typeof o?o.options:o;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),r){var c=Object.create(s.computed||null);Object.keys(r).forEach(function(e){var t=r[e];c[e]=function(){return t}}),s.computed=c}return{esModule:i,exports:o,options:s}}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";function r(e){return Array.isArray(e)||void 0!==e.length}function i(e){if(Array.isArray(e))return e;var t=[];return s(e,function(e){t.push(e)}),t}function o(e){return e&&1===e.nodeType}function a(e,t,n){var r=e[t];return void 0!==r&&null!==r||void 0===n?r:n}var s=n(7).forEach,c=n(25),l=n(26),u=n(27),d=n(28),p=n(29),f=n(8),h=n(30),v=n(32),g=n(33),m=n(34);e.exports=function(e){function t(e,t,n){function c(e){var t=T.get(e);s(t,function(t){t(e)})}function l(e,t,n){T.add(t,n),e&&n(t)}if(n||(n=t,t=e,e={}),!t)throw new Error("At least one element required.");if(!n)throw new Error("Listener required.");if(o(t))t=[t];else{if(!r(t))return w.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");t=i(t)}var u=0,d=a(e,"callOnAdd",C.callOnAdd),p=a(e,"onReady",function(){}),f=a(e,"debug",C.debug);s(t,function(e){v.getState(e)||(v.initState(e),y.set(e));var r=y.get(e);if(f&&w.log("Attaching listener to element",r,e),!S.isDetectable(e))return f&&w.log(r,"Not detectable."),S.isBusy(e)?(f&&w.log(r,"System busy making it detectable"),l(d,e,n),O[r]=O[r]||[],void O[r].push(function(){++u===t.length&&p()})):(f&&w.log(r,"Making detectable..."),S.markBusy(e,!0),E.makeDetectable({debug:f},e,function(e){if(f&&w.log(r,"onElementDetectable"),v.getState(e)){S.markAsDetectable(e),S.markBusy(e,!1),E.addListener(e,c),l(d,e,n);var i=v.getState(e);if(i&&i.startSize){var o=e.offsetWidth,a=e.offsetHeight;i.startSize.width===o&&i.startSize.height===a||c(e)}O[r]&&s(O[r],function(e){e()})}else f&&w.log(r,"Element uninstalled before being detectable.");delete O[r],++u===t.length&&p()}));f&&w.log(r,"Already detecable, adding listener."),l(d,e,n),u++}),u===t.length&&p()}function n(e){if(!e)return w.error("At least one element is required.");if(o(e))e=[e];else{if(!r(e))return w.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");e=i(e)}s(e,function(e){T.removeAllListeners(e),E.uninstall(e),v.cleanState(e)})}e=e||{};var y;if(e.idHandler)y={get:function(t){return e.idHandler.get(t,!0)},set:e.idHandler.set};else{var b=u(),x=d({idGenerator:b,stateHandler:v});y=x}var w=e.reporter;if(!w){w=p(!1===w)}var _=a(e,"batchProcessor",h({reporter:w})),C={};C.callOnAdd=!!a(e,"callOnAdd",!0),C.debug=!!a(e,"debug",!1);var E,T=l(y),S=c({stateHandler:v}),I=a(e,"strategy","object"),A={reporter:w,batchProcessor:_,stateHandler:v,idHandler:y};if("scroll"===I&&(f.isLegacyOpera()?(w.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."),I="object"):f.isIE(9)&&(w.warn("Scroll strategy is not supported on IE9. Changing to object strategy."),I="object")),"scroll"===I)E=m(A);else{if("object"!==I)throw new Error("Invalid strategy name: "+I);E=g(A)}var O={};return{listenTo:t,removeListener:T.removeListener,removeAllListeners:T.removeAllListeners,uninstall:n}}},function(e,t,n){"use strict";(e.exports={}).forEach=function(e,t){for(var n=0;n<e.length;n++){var r=t(e[n]);if(r)return r}}},function(e,t,n){"use strict";var r=e.exports={};r.isIE=function(e){return!!function(){var e=navigator.userAgent.toLowerCase();return-1!==e.indexOf("msie")||-1!==e.indexOf("trident")||-1!==e.indexOf(" edge/")}()&&(!e||e===function(){var e=3,t=document.createElement("div"),n=t.getElementsByTagName("i");do{t.innerHTML="\x3c!--[if gt IE "+ ++e+"]><i></i><![endif]--\x3e"}while(n[0]);return e>4?e:void 0}())},r.isLegacyOpera=function(){return!!window.opera}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=n(1),o=r(i),a=n(17),s=r(a),c=n(36),l=r(c),u={ResponsiveGridLayout:l.default,GridLayout:s.default,GridItem:o.default};e.exports=u},function(e,t,n){var r=n(11);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(3)("d96c4fce",r,!0)},function(e,t,n){t=e.exports=n(2)(),t.push([e.i,'.vue-grid-item{transition:all .2s ease;transition-property:left,top,right}.vue-grid-item.cssTransforms{transition-property:transform;left:0;right:auto}.vue-grid-item.cssTransforms.render-rtl{left:auto;right:0}.vue-grid-item.resizing{opacity:.6;z-index:3}.vue-grid-item.vue-draggable-dragging{transition:none;z-index:3}.vue-grid-item.vue-grid-placeholder{background:red;opacity:.2;transition-duration:.1s;z-index:2;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}.vue-grid-item>.vue-resizable-handle{position:absolute;width:20px;height:20px;bottom:0;right:0;background:url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=");background-position:100% 100%;padding:0 3px 3px 0;background-repeat:no-repeat;background-origin:content-box;box-sizing:border-box;cursor:se-resize}.vue-grid-item>.vue-rtl-resizable-handle{bottom:0;left:0;background:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAuMDAwMDAwMDAwMDAwMDAyIiBoZWlnaHQ9IjEwLjAwMDAwMDAwMDAwMDAwMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDwhLS0gQ3JlYXRlZCB3aXRoIE1ldGhvZCBEcmF3IC0gaHR0cDovL2dpdGh1Yi5jb20vZHVvcGl4ZWwvTWV0aG9kLURyYXcvIC0tPgogPGc+CiAgPHRpdGxlPmJhY2tncm91bmQ8L3RpdGxlPgogIDxyZWN0IGZpbGw9Im5vbmUiIGlkPSJjYW52YXNfYmFja2dyb3VuZCIgaGVpZ2h0PSIxMiIgd2lkdGg9IjEyIiB5PSItMSIgeD0iLTEiLz4KICA8ZyBkaXNwbGF5PSJub25lIiBvdmVyZmxvdz0idmlzaWJsZSIgeT0iMCIgeD0iMCIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSIgaWQ9ImNhbnZhc0dyaWQiPgogICA8cmVjdCBmaWxsPSJ1cmwoI2dyaWRwYXR0ZXJuKSIgc3Ryb2tlLXdpZHRoPSIwIiB5PSIwIiB4PSIwIiBoZWlnaHQ9IjEwMCUiIHdpZHRoPSIxMDAlIi8+CiAgPC9nPgogPC9nPgogPGc+CiAgPHRpdGxlPkxheWVyIDE8L3RpdGxlPgogIDxsaW5lIGNhbnZhcz0iI2ZmZmZmZiIgY2FudmFzLW9wYWNpdHk9IjEiIHN0cm9rZS1saW5lY2FwPSJ1bmRlZmluZWQiIHN0cm9rZS1saW5lam9pbj0idW5kZWZpbmVkIiBpZD0ic3ZnXzEiIHkyPSItNzAuMTc4NDA3IiB4Mj0iMTI0LjQ2NDE3NSIgeTE9Ii0zOC4zOTI3MzciIHgxPSIxNDQuODIxMjg5IiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlPSIjMDAwIiBmaWxsPSJub25lIi8+CiAgPGxpbmUgc3Ryb2tlPSIjNjY2NjY2IiBzdHJva2UtbGluZWNhcD0idW5kZWZpbmVkIiBzdHJva2UtbGluZWpvaW49InVuZGVmaW5lZCIgaWQ9InN2Z181IiB5Mj0iOS4xMDY5NTciIHgyPSIwLjk0NzI0NyIgeTE9Ii0wLjAxODEyOCIgeDE9IjAuOTQ3MjQ3IiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz4KICA8bGluZSBzdHJva2UtbGluZWNhcD0idW5kZWZpbmVkIiBzdHJva2UtbGluZWpvaW49InVuZGVmaW5lZCIgaWQ9InN2Z183IiB5Mj0iOSIgeDI9IjEwLjA3MzUyOSIgeTE9IjkiIHgxPSItMC42NTU2NCIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2U9IiM2NjY2NjYiIGZpbGw9Im5vbmUiLz4KIDwvZz4KPC9zdmc+);background-position:0 100%;padding-left:3px;background-repeat:no-repeat;background-origin:content-box;cursor:sw-resize;right:auto}.vue-grid-item.disable-userselect{user-select:none}',""])},function(e,t){e.exports=function(e,t){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],a=o[0],s=o[1],c=o[2],l=o[3],u={id:e+":"+i,css:s,media:c,sourceMap:l};r[a]?r[a].parts.push(u):n.push(r[a]={id:a,parts:[u]})}return n}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),i=n(14),o=n(15);t.default={name:"GridItem",props:{isDraggable:{type:Boolean,required:!1,default:null},isResizable:{type:Boolean,required:!1,default:null},minH:{type:Number,required:!1,default:1},minW:{type:Number,required:!1,default:1},maxH:{type:Number,required:!1,default:1/0},maxW:{type:Number,required:!1,default:1/0},x:{type:Number,required:!0},y:{type:Number,required:!0},w:{type:Number,required:!0},h:{type:Number,required:!0},i:{required:!0},dragIgnoreFrom:{type:String,required:!1,default:"a, button"},dragAllowFrom:{type:String,required:!1,default:null},resizeIgnoreFrom:{type:String,required:!1,default:"a, button"}},inject:["eventBus"],data:function(){return{cols:1,containerWidth:100,rowHeight:30,margin:[10,10],maxRows:1/0,draggable:null,resizable:null,useCssTransforms:!0,isDragging:!1,dragging:null,isResizing:!1,resizing:null,lastX:NaN,lastY:NaN,lastW:NaN,lastH:NaN,style:{},rtl:!1,dragEventSet:!1,resizeEventSet:!1,previousW:null,previousH:null,previousX:null,previousY:null,innerX:this.x,innerY:this.y,innerW:this.w,innerH:this.h}},created:function(){var e=this,t=this;t.updateWidthHandler=function(e){t.updateWidth(e)},t.compactHandler=function(e){t.compact(e)},t.setDraggableHandler=function(e){null===t.isDraggable&&(t.draggable=e)},t.setResizableHandler=function(e){null===t.isResizable&&(t.resizable=e)},t.setRowHeightHandler=function(e){t.rowHeight=e},t.directionchangeHandler=function(t){var t=void 0!==document.dir?document.dir:document.getElementsByTagName("html")[0].getAttribute("dir");e.rtl="rtl"===t,e.compact()},t.setColNum=function(e){t.cols=parseInt(e)},this.eventBus.$on("updateWidth",t.updateWidthHandler),this.eventBus.$on("compact",t.compactHandler),this.eventBus.$on("setDraggable",t.setDraggableHandler),this.eventBus.$on("setResizable",t.setResizableHandler),this.eventBus.$on("setRowHeight",t.setRowHeightHandler),this.eventBus.$on("directionchange",t.directionchangeHandler),this.eventBus.$on("setColNum",t.setColNum);var n=void 0!==document.dir?document.dir:document.getElementsByTagName("html")[0].getAttribute("dir");this.rtl="rtl"===n},beforeDestroy:function(){var e=this;this.eventBus.$off("updateWidth",e.updateWidthHandler),this.eventBus.$off("compact",e.compactHandler),this.eventBus.$off("setDraggable",e.setDraggableHandler),this.eventBus.$off("setResizable",e.setResizableHandler),this.eventBus.$off("setRowHeight",e.setRowHeightHandler),this.eventBus.$off("directionchange",e.directionchangeHandler),this.eventBus.$off("setColNum",e.setColNum)},mounted:function(){this.cols=this.$parent.colNum,this.rowHeight=this.$parent.rowHeight,this.containerWidth=null!==this.$parent.width?this.$parent.width:100,this.margin=void 0!==this.$parent.margin?this.$parent.margin:[10,10],this.maxRows=this.$parent.maxRows,null===this.isDraggable?this.draggable=this.$parent.isDraggable:this.draggable=this.isDraggable,null===this.isResizable?this.resizable=this.$parent.isResizable:this.resizable=this.isResizable,this.useCssTransforms=this.$parent.useCssTransforms,this.createStyle()},watch:{isDraggable:function(){this.draggable=this.isDraggable},draggable:function(){var e=this;if(null!==this.interactObj&&void 0!==this.interactObj||(this.interactObj=o(this.$refs.item)),this.draggable){var t={ignoreFrom:this.dragIgnoreFrom,allowFrom:this.dragAllowFrom};this.interactObj.draggable(t),this.dragEventSet||(this.dragEventSet=!0,this.interactObj.on("dragstart dragmove dragend",function(t){e.handleDrag(t)}))}else this.interactObj.draggable({enabled:!1})},isResizable:function(){this.resizable=this.isResizable},resizable:function(){var e=this;if(null!==this.interactObj&&void 0!==this.interactObj||(this.interactObj=o(this.$refs.item)),this.resizable){var t={preserveAspectRatio:!1,edges:{left:!1,right:"."+this.resizableHandleClass,bottom:"."+this.resizableHandleClass,top:!1},ignoreFrom:this.resizeIgnoreFrom};this.interactObj.resizable(t),this.resizeEventSet||(this.resizeEventSet=!0,this.interactObj.on("resizestart resizemove resizeend",function(t){e.handleResize(t)}))}else this.interactObj.resizable({enabled:!1})},rowHeight:function(){this.createStyle()},cols:function(){this.createStyle()},containerWidth:function(){this.createStyle()},x:function(e){this.innerX=e,this.createStyle()},y:function(e){this.innerY=e,this.createStyle()},h:function(e){this.innerH=e,this.createStyle()},w:function(e){this.innerW=e,this.createStyle()},renderRtl:function(){this.createStyle()}},computed:{renderRtl:function(){return this.$parent.isMirrored?!this.rtl:this.rtl},resizableHandleClass:function(){return this.renderRtl?"vue-resizable-handle vue-rtl-resizable-handle":"vue-resizable-handle"}},methods:{createStyle:function(){this.x+this.w>this.cols?(this.innerX=0,this.innerW=this.w>this.cols?this.cols:this.w):(this.innerX=this.x,this.innerW=this.w);var e=this.calcPosition(this.innerX,this.innerY,this.innerW,this.innerH);this.isDragging&&(e.top=this.dragging.top,this.renderRtl?e.right=this.dragging.left:e.left=this.dragging.left),this.isResizing&&(e.width=this.resizing.width,e.height=this.resizing.height);var t=void 0;t=this.useCssTransforms?this.renderRtl?(0,r.setTransformRtl)(e.top,e.right,e.width,e.height):(0,r.setTransform)(e.top,e.left,e.width,e.height):this.renderRtl?(0,r.setTopRight)(e.top,e.right,e.width,e.height):(0,r.setTopLeft)(e.top,e.left,e.width,e.height),this.style=t},handleResize:function(e){var t=(0,i.getControlPosition)(e);if(null!=t){var n=t.x,r=t.y,o={width:0,height:0};switch(e.type){case"resizestart":this.previousW=this.innerW,this.previousH=this.innerH;var a=this.calcPosition(this.innerX,this.innerY,this.innerW,this.innerH);o.width=a.width,o.height=a.height,this.resizing=o,this.isResizing=!0;break;case"resizemove":var s=(0,i.createCoreData)(this.lastW,this.lastH,n,r);this.renderRtl?o.width=this.resizing.width-s.deltaX:o.width=this.resizing.width+s.deltaX,o.height=this.resizing.height+s.deltaY,this.resizing=o;break;case"resizeend":var a=this.calcPosition(this.innerX,this.innerY,this.innerW,this.innerH);o.width=a.width,o.height=a.height,this.resizing=null,this.isResizing=!1}var a=this.calcWH(o.height,o.width);a.w<this.minW&&(a.w=this.minW),a.w>this.maxW&&(a.w=this.maxW),a.h<this.minH&&(a.h=this.minH),a.h>this.maxH&&(a.h=this.maxH),a.h<1&&(a.h=1),a.w<1&&(a.w=1),this.lastW=n,this.lastH=r,this.innerW===a.w&&this.innerH===a.h||this.$emit("resize",this.i,a.h,a.w,o.height,o.width),"resizeend"!==e.type||this.previousW===this.innerW&&this.previousH===this.innerH||this.$emit("resized",this.i,a.h,a.w,o.height,o.width),this.eventBus.$emit("resizeEvent",e.type,this.i,this.innerX,this.innerY,a.h,a.w)}},handleDrag:function(e){if(!this.isResizing){var t=(0,i.getControlPosition)(e);if(null!==t){var n=t.x,r=t.y,o={top:0,left:0};switch(e.type){case"dragstart":this.previousX=this.innerX,this.previousY=this.innerY;var a=e.target.offsetParent.getBoundingClientRect(),s=e.target.getBoundingClientRect();this.renderRtl?o.left=-1*(s.right-a.right):o.left=s.left-a.left,o.top=s.top-a.top,this.dragging=o,this.isDragging=!0;break;case"dragend":if(!this.isDragging)return;a=e.target.offsetParent.getBoundingClientRect(),s=e.target.getBoundingClientRect(),this.renderRtl?o.left=-1*(s.right-a.right):o.left=s.left-a.left,o.top=s.top-a.top,this.dragging=null,this.isDragging=!1,!0;break;case"dragmove":var c=(0,i.createCoreData)(this.lastX,this.lastY,n,r);this.renderRtl?o.left=this.dragging.left-c.deltaX:o.left=this.dragging.left+c.deltaX,o.top=this.dragging.top+c.deltaY,this.dragging=o}if(this.renderRtl)var l=this.calcXY(o.top,o.left);else var l=this.calcXY(o.top,o.left);this.lastX=n,this.lastY=r,this.innerX===l.x&&this.innerY===l.y||this.$emit("move",this.i,l.x,l.y),"dragend"!==e.type||this.previousX===this.innerX&&this.previousY===this.innerY||this.$emit("moved",this.i,l.x,l.y),this.eventBus.$emit("dragEvent",e.type,this.i,l.x,l.y,this.innerH,this.innerW)}}},calcPosition:function(e,t,n,r){var i=this.calcColWidth();if(this.renderRtl)var o={right:Math.round(i*e+(e+1)*this.margin[0]),top:Math.round(this.rowHeight*t+(t+1)*this.margin[1]),width:n===1/0?n:Math.round(i*n+Math.max(0,n-1)*this.margin[0]),height:r===1/0?r:Math.round(this.rowHeight*r+Math.max(0,r-1)*this.margin[1])};else var o={left:Math.round(i*e+(e+1)*this.margin[0]),top:Math.round(this.rowHeight*t+(t+1)*this.margin[1]),width:n===1/0?n:Math.round(i*n+Math.max(0,n-1)*this.margin[0]),height:r===1/0?r:Math.round(this.rowHeight*r+Math.max(0,r-1)*this.margin[1])};return o},calcXY:function(e,t){var n=this.calcColWidth(),r=Math.round((t-this.margin[0])/(n+this.margin[0])),i=Math.round((e-this.margin[1])/(this.rowHeight+this.margin[1]));return r=Math.max(Math.min(r,this.cols-this.innerW),0),i=Math.max(Math.min(i,this.maxRows-this.innerH),0),{x:r,y:i}},calcColWidth:function(){return(this.containerWidth-this.margin[0]*(this.cols+1))/this.cols},calcWH:function(e,t){var n=this.calcColWidth(),r=Math.round((t+this.margin[0])/(n+this.margin[0])),i=Math.round((e+this.margin[1])/(this.rowHeight+this.margin[1]));return r=Math.max(Math.min(r,this.cols-this.innerX),0),i=Math.max(Math.min(i,this.maxRows-this.innerY),0),{w:r,h:i}},updateWidth:function(e,t){this.containerWidth=e,void 0!==t&&null!==t&&(this.cols=t)},compact:function(){this.createStyle()}}}},function(e,t,n){"use strict";function r(e){return i(e)}function i(e){var t=e.target.offsetParent||document.body,n=e.offsetParent===document.body?{left:0,top:0}:t.getBoundingClientRect();return{x:e.clientX+t.scrollLeft-n.left,y:e.clientY+t.scrollTop-n.top}}function o(e,t,n,r){return a(e)?{deltaX:n-e,deltaY:r-t,lastX:e,lastY:t,x:n,y:r}:{deltaX:0,deltaY:0,lastX:n,lastY:r,x:n,y:r}}function a(e){return"number"==typeof e&&!isNaN(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.getControlPosition=r,t.offsetXYFromParentOf=i,t.createCoreData=o},function(e,t,n){var r,r;!function(t){e.exports=t()}(function(){return function e(t,n,i){function o(s,c){if(!n[s]){if(!t[s]){var l="function"==typeof r&&r;if(!c&&l)return r(s,!0);if(a)return a(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var d=n[s]={exports:{}};t[s][0].call(d.exports,function(e){var n=t[s][1][e];return o(n||e)},d,d.exports,e,t,n,i)}return n[s].exports}for(var a="function"==typeof r&&r,s=0;s<i.length;s++)o(i[s]);return o}({1:[function(e,t,n){"use strict";"undefined"==typeof window?t.exports=function(t){return e("./src/utils/window").init(t),e("./src/index")}:t.exports=e("./src/index")},{"./src/index":19,"./src/utils/window":52}],2:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r;r=t[n];var i=r;if(e.immediatePropagationStopped)break;i(e)}}var o=e("./utils/extend.js"),a=function(){function e(t){r(this,e),this.options=o({},t||{})}return e.prototype.fire=function(e){var t=void 0,n="on"+e.type,r=this.global;(t=this[e.type])&&i(e,t),this[n]&&this[n](e),!e.propagationStopped&&r&&(t=r[e.type])&&i(e,t)},e.prototype.on=function(e,t){this[e]?this[e].push(t):this[e]=[t]},e.prototype.off=function(e,t){var n=this[e],r=n?n.indexOf(t):-1;-1!==r&&n.splice(r,1),(n&&0===n.length||!t)&&(this[e]=void 0)},e}();t.exports=a},{"./utils/extend.js":41}],3:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=e("./utils/extend"),o=e("./utils/getOriginXY"),a=e("./defaultOptions"),s=e("./utils/Signals").new(),c=function(){function e(t,n,c,l,u,d){var p=arguments.length>6&&void 0!==arguments[6]&&arguments[6];r(this,e);var f=t.target,h=(f&&f.options||a).deltaSource,v=o(f,u,c),g="start"===l,m="end"===l,y=g?t.startCoords:t.curCoords,b=t.prevEvent;u=u||t.element;var x=i({},y.page),w=i({},y.client);x.x-=v.x,x.y-=v.y,w.x-=v.x,w.y-=v.y,this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.button=n.button,this.buttons=n.buttons,this.target=u,this.currentTarget=u,this.relatedTarget=d||null,this.preEnd=p,this.type=c+(l||""),this.interaction=t,this.interactable=f,this.t0=g?t.downTimes[t.downTimes.length-1]:b.t0;var _={interaction:t,event:n,action:c,phase:l,element:u,related:d,page:x,client:w,coords:y,starting:g,ending:m,deltaSource:h,iEvent:this};s.fire("set-xy",_),m?(this.pageX=b.pageX,this.pageY=b.pageY,this.clientX=b.clientX,this.clientY=b.clientY):(this.pageX=x.x,this.pageY=x.y,this.clientX=w.x,this.clientY=w.y),this.x0=t.startCoords.page.x-v.x,this.y0=t.startCoords.page.y-v.y,this.clientX0=t.startCoords.client.x-v.x,this.clientY0=t.startCoords.client.y-v.y,s.fire("set-delta",_),this.timeStamp=y.timeStamp,this.dt=t.pointerDelta.timeStamp,this.duration=this.timeStamp-this.t0,this.speed=t.pointerDelta[h].speed,this.velocityX=t.pointerDelta[h].vx,this.velocityY=t.pointerDelta[h].vy,this.swipe=m||"inertiastart"===l?this.getSwipe():null,s.fire("new",_)}return e.prototype.getSwipe=function(){var e=this.interaction;if(e.prevEvent.speed<600||this.timeStamp-e.prevEvent.timeStamp>150)return null;var t=180*Math.atan2(e.prevEvent.velocityY,e.prevEvent.velocityX)/Math.PI;t<0&&(t+=360);var n=112.5<=t&&t<247.5,r=202.5<=t&&t<337.5,i=!n&&(292.5<=t||t<67.5);return{up:r,down:!r&&22.5<=t&&t<157.5,left:n,right:i,angle:t,speed:e.prevEvent.speed,velocity:{x:e.prevEvent.velocityX,y:e.prevEvent.velocityY}}},e.prototype.preventDefault=function(){},e.prototype.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},e.prototype.stopPropagation=function(){this.propagationStopped=!0},e}();s.on("set-delta",function(e){var t=e.iEvent,n=e.interaction,r=e.starting,i=e.deltaSource,o=r?t:n.prevEvent;"client"===i?(t.dx=t.clientX-o.clientX,t.dy=t.clientY-o.clientY):(t.dx=t.pageX-o.pageX,t.dy=t.pageY-o.pageY)}),c.signals=s,t.exports=c},{"./defaultOptions":18,"./utils/Signals":34,"./utils/extend":41,"./utils/getOriginXY":42}],4:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=e("./utils/clone"),o=e("./utils/is"),a=e("./utils/events"),s=e("./utils/extend"),c=e("./actions/base"),l=e("./scope"),u=e("./Eventable"),d=e("./defaultOptions"),p=e("./utils/Signals").new(),f=e("./utils/domUtils"),h=f.getElementRect,v=f.nodeContains,g=f.trySelector,m=f.matchesSelector,y=e("./utils/window"),b=y.getWindow,x=e("./utils/arr"),w=x.contains,_=e("./utils/browser"),C=_.wheelEvent;l.interactables=[];var E=function(){function e(t,n){r(this,e),n=n||{},this.target=t,this.events=new u,this._context=n.context||l.document,this._win=b(g(t)?this._context:t),this._doc=this._win.document,p.fire("new",{target:t,options:n,interactable:this,win:this._win}),l.addDocument(this._doc,this._win),l.interactables.push(this),this.set(n)}return e.prototype.setOnEvents=function(e,t){var n="on"+e;return o.function(t.onstart)&&(this.events[n+"start"]=t.onstart),o.function(t.onmove)&&(this.events[n+"move"]=t.onmove),o.function(t.onend)&&(this.events[n+"end"]=t.onend),o.function(t.oninertiastart)&&(this.events[n+"inertiastart"]=t.oninertiastart),this},e.prototype.setPerAction=function(e,t){for(var n in t)n in d[e]&&(o.object(t[n])?(this.options[e][n]=i(this.options[e][n]||{}),s(this.options[e][n],t[n]),o.object(d.perAction[n])&&"enabled"in d.perAction[n]&&(this.options[e][n].enabled=!1!==t[n].enabled)):o.bool(t[n])&&o.object(d.perAction[n])?this.options[e][n].enabled=t[n]:void 0!==t[n]&&(this.options[e][n]=t[n]))},e.prototype.getRect=function(e){return e=e||this.target,o.string(this.target)&&!o.element(e)&&(e=this._context.querySelector(this.target)),h(e)},e.prototype.rectChecker=function(e){return o.function(e)?(this.getRect=e,this):null===e?(delete this.options.getRect,this):this.getRect},e.prototype._backCompatOption=function(e,t){if(g(t)||o.object(t)){this.options[e]=t;for(var n=0;n<c.names.length;n++){var r;r=c.names[n];var i=r;this.options[i][e]=t}return this}return this.options[e]},e.prototype.origin=function(e){return this._backCompatOption("origin",e)},e.prototype.deltaSource=function(e){return"page"===e||"client"===e?(this.options.deltaSource=e,this):this.options.deltaSource},e.prototype.context=function(){return this._context},e.prototype.inContext=function(e){return this._context===e.ownerDocument||v(this._context,e)},e.prototype.fire=function(e){return this.events.fire(e),this},e.prototype._onOffMultiple=function(e,t,n,r){if(o.string(t)&&-1!==t.search(" ")&&(t=t.trim().split(/ +/)),o.array(t)){for(var i=0;i<t.length;i++){var a;a=t[i];var s=a;this[e](s,n,r)}return!0}if(o.object(t)){for(var c in t)this[e](c,t[c],n);return!0}},e.prototype.on=function(t,n,r){return this._onOffMultiple("on",t,n,r)?this:("wheel"===t&&(t=C),w(e.eventTypes,t)?this.events.on(t,n):o.string(this.target)?a.addDelegate(this.target,this._context,t,n,r):a.add(this.target,t,n,r),this)},e.prototype.off=function(t,n,r){return this._onOffMultiple("off",t,n,r)?this:("wheel"===t&&(t=C),w(e.eventTypes,t)?this.events.off(t,n):o.string(this.target)?a.removeDelegate(this.target,this._context,t,n,r):a.remove(this.target,t,n,r),this)},e.prototype.set=function(t){o.object(t)||(t={}),this.options=i(d.base);var n=i(d.perAction);for(var r in c.methodDict){var a=c.methodDict[r];this.options[r]=i(d[r]),this.setPerAction(r,n),this[a](t[r])}for(var s=0;s<e.settingsMethods.length;s++){var l;l=e.settingsMethods[s];var u=l;this.options[u]=d.base[u],u in t&&this[u](t[u])}return p.fire("set",{options:t,interactable:this}),this},e.prototype.unset=function(){if(a.remove(this.target,"all"),o.string(this.target))for(var e in a.delegatedEvents){var t=a.delegatedEvents[e];t.selectors[0]===this.target&&t.contexts[0]===this._context&&(t.selectors.splice(0,1),t.contexts.splice(0,1),t.listeners.splice(0,1),t.selectors.length||(t[e]=null)),a.remove(this._context,e,a.delegateListener),a.remove(this._context,e,a.delegateUseCapture,!0)}else a.remove(this,"all");p.fire("unset",{interactable:this}),l.interactables.splice(l.interactables.indexOf(this),1);for(var n=0;n<(l.interactions||[]).length;n++){var r;r=(l.interactions||[])[n];var i=r;i.target===this&&i.interacting()&&!i._ending&&i.stop()}return l.interact},e}();l.interactables.indexOfElement=function(e,t){t=t||l.document;for(var n=0;n<this.length;n++){var r=this[n];if(r.target===e&&r._context===t)return n}return-1},l.interactables.get=function(e,t,n){var r=this[this.indexOfElement(e,t&&t.context)];return r&&(o.string(e)||n||r.inContext(e))?r:null},l.interactables.forEachMatch=function(e,t){for(var n=0;n<this.length;n++){var r;r=this[n];var i=r,a=void 0;if((o.string(i.target)?o.element(e)&&m(e,i.target):e===i.target)&&i.inContext(e)&&(a=t(i)),void 0!==a)return a}},E.eventTypes=l.eventTypes=[],E.signals=p,E.settingsMethods=["deltaSource","origin","preventDefault","rectChecker"],t.exports=E},{"./Eventable":2,"./actions/base":6,"./defaultOptions":18,"./scope":33,"./utils/Signals":34,"./utils/arr":35,"./utils/browser":36,"./utils/clone":37,"./utils/domUtils":39,"./utils/events":40,"./utils/extend":41,"./utils/is":46,"./utils/window":52}],5:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e){return function(t){var n=c.getPointerType(t),r=c.getEventTargets(t),i=r[0],o=r[1],a=[];if(u.supportsTouch&&/touch/.test(t.type)){g=(new Date).getTime();for(var l=0;l<t.changedTouches.length;l++){var d;d=t.changedTouches[l];var f=d,h=f,v=p.search(h,t.type,i);a.push([h,v||new m({pointerType:n})])}}else{var y=!1;if(!u.supportsPointerEvent&&/mouse/.test(t.type)){for(var b=0;b<s.interactions.length&&!y;b++)y="mouse"!==s.interactions[b].pointerType&&s.interactions[b].pointerIsDown;y=y||(new Date).getTime()-g<500||0===t.timeStamp}if(!y){var x=p.search(t,t.type,i);x||(x=new m({pointerType:n})),a.push([t,x])}}for(var w=0;w<a.length;w++){var _=a[w],C=_[0],E=_[1];E._updateEventTargets(i,o),E[e](C,t,i,o)}}}function o(e){for(var t=0;t<s.interactions.length;t++){var n;n=s.interactions[t];var r=n;r.end(e),f.fire("endall",{event:e,interaction:r})}}function a(e,t){var n=e.doc,r=0===t.indexOf("add")?l.add:l.remove;for(var i in s.delegatedEvents)r(n,i,l.delegateListener),r(n,i,l.delegateUseCapture,!0);for(var o in x)r(n,o,x[o])}var s=e("./scope"),c=e("./utils"),l=e("./utils/events"),u=e("./utils/browser"),d=e("./utils/domObjects"),p=e("./utils/interactionFinder"),f=e("./utils/Signals").new(),h={},v=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer"],g=0;s.interactions=[];for(var m=function(){function e(t){var n=t.pointerType;r(this,e),this.target=null,this.element=null,this.prepared={name:null,axis:null,edges:null},this.pointers=[],this.pointerIds=[],this.downTargets=[],this.downTimes=[],this.prevCoords={page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},this.curCoords={page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},this.startCoords={page:{x:0,y:0},client:{x:0,y:0},timeStamp:0},this.pointerDelta={page:{x:0,y:0,vx:0,vy:0,speed:0},client:{x:0,y:0,vx:0,vy:0,speed:0},timeStamp:0},this.downEvent=null,this.downPointer={},this._eventTarget=null,this._curEventTarget=null,this.prevEvent=null,this.pointerIsDown=!1,this.pointerWasMoved=!1,this._interacting=!1,this._ending=!1,this.pointerType=n,f.fire("new",this),s.interactions.push(this)}return e.prototype.pointerDown=function(e,t,n){var r=this.updatePointer(e,t,!0);f.fire("down",{pointer:e,event:t,eventTarget:n,pointerIndex:r,interaction:this})},e.prototype.start=function(e,t,n){this.interacting()||!this.pointerIsDown||this.pointerIds.length<("gesture"===e.name?2:1)||(-1===s.interactions.indexOf(this)&&s.interactions.push(this),c.copyAction(this.prepared,e),this.target=t,this.element=n,f.fire("action-start",{interaction:this,event:this.downEvent}))},e.prototype.pointerMove=function(t,n,r){this.simulation||(this.updatePointer(t),c.setCoords(this.curCoords,this.pointers));var i=this.curCoords.page.x===this.prevCoords.page.x&&this.curCoords.page.y===this.prevCoords.page.y&&this.curCoords.client.x===this.prevCoords.client.x&&this.curCoords.client.y===this.prevCoords.client.y,o=void 0,a=void 0;this.pointerIsDown&&!this.pointerWasMoved&&(o=this.curCoords.client.x-this.startCoords.client.x,a=this.curCoords.client.y-this.startCoords.client.y,this.pointerWasMoved=c.hypot(o,a)>e.pointerMoveTolerance);var s={pointer:t,pointerIndex:this.getPointerIndex(t),event:n,eventTarget:r,dx:o,dy:a,duplicate:i,interaction:this,interactingBeforeMove:this.interacting()};i||c.setCoordDeltas(this.pointerDelta,this.prevCoords,this.curCoords),f.fire("move",s),i||(this.interacting()&&this.doMove(s),this.pointerWasMoved&&c.copyCoords(this.prevCoords,this.curCoords))},e.prototype.doMove=function(e){e=c.extend({pointer:this.pointers[0],event:this.prevEvent,eventTarget:this._eventTarget,interaction:this},e||{}),f.fire("before-action-move",e),this._dontFireMove||f.fire("action-move",e),this._dontFireMove=!1},e.prototype.pointerUp=function(e,t,n,r){var i=this.getPointerIndex(e);f.fire(/cancel$/i.test(t.type)?"cancel":"up",{pointer:e,pointerIndex:i,event:t,eventTarget:n,curEventTarget:r,interaction:this}),this.simulation||this.end(t),this.pointerIsDown=!1,this.removePointer(e,t)},e.prototype.end=function(e){this._ending=!0,e=e||this.prevEvent,this.interacting()&&f.fire("action-end",{event:e,interaction:this}),this.stop(),this._ending=!1},e.prototype.currentAction=function(){return this._interacting?this.prepared.name:null},e.prototype.interacting=function(){return this._interacting},e.prototype.stop=function(){f.fire("stop",{interaction:this}),this._interacting&&(f.fire("stop-active",{interaction:this}),f.fire("stop-"+this.prepared.name,{interaction:this})),this.target=this.element=null,this._interacting=!1,this.prepared.name=this.prevEvent=null},e.prototype.getPointerIndex=function(e){return"mouse"===this.pointerType||"pen"===this.pointerType?0:this.pointerIds.indexOf(c.getPointerId(e))},e.prototype.updatePointer=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t&&/(down|start)$/i.test(t.type),r=c.getPointerId(e),i=this.getPointerIndex(e);return-1===i&&(i=this.pointerIds.length,this.pointerIds[i]=r),n&&f.fire("update-pointer-down",{pointer:e,event:t,down:n,pointerId:r,pointerIndex:i,interaction:this}),this.pointers[i]=e,i},e.prototype.removePointer=function(e,t){var n=this.getPointerIndex(e);-1!==n&&(f.fire("remove-pointer",{pointer:e,event:t,pointerIndex:n,interaction:this}),this.pointers.splice(n,1),this.pointerIds.splice(n,1),this.downTargets.splice(n,1),this.downTimes.splice(n,1))},e.prototype._updateEventTargets=function(e,t){this._eventTarget=e,this._curEventTarget=t},e}(),y=0;y<v.length;y++){var b=v[y];h[b]=i(b)}var x={},w=u.pEventTypes;d.PointerEvent?(x[w.down]=h.pointerDown,x[w.move]=h.pointerMove,x[w.up]=h.pointerUp,x[w.cancel]=h.pointerUp):(x.mousedown=h.pointerDown,x.mousemove=h.pointerMove,x.mouseup=h.pointerUp,x.touchstart=h.pointerDown,x.touchmove=h.pointerMove,x.touchend=h.pointerUp,x.touchcancel=h.pointerUp),x.blur=o,f.on("update-pointer-down",function(e){var t=e.interaction,n=e.pointer,r=e.pointerId,i=e.pointerIndex,o=e.event,a=e.eventTarget,s=e.down;t.pointerIds[i]=r,t.pointers[i]=n,s&&(t.pointerIsDown=!0),t.interacting()||(c.setCoords(t.startCoords,t.pointers),c.copyCoords(t.curCoords,t.startCoords),c.copyCoords(t.prevCoords,t.startCoords),t.downEvent=o,t.downTimes[i]=t.curCoords.timeStamp,t.downTargets[i]=a||o&&c.getEventTargets(o)[0],t.pointerWasMoved=!1,c.pointerExtend(t.downPointer,n))}),s.signals.on("add-document",a),s.signals.on("remove-document",a),m.pointerMoveTolerance=1,m.doOnInteractions=i,m.endAll=o,m.signals=f,m.docEvents=x,s.endAllInteractions=o,t.exports=m},{"./scope":33,"./utils":44,"./utils/Signals":34,"./utils/browser":36,"./utils/domObjects":38,"./utils/events":40,"./utils/interactionFinder":45}],6:[function(e,t,n){"use strict";function r(e,t,n,r){var i=e.prepared.name,a=new o(e,t,i,n,e.element,null,r);e.target.fire(a),e.prevEvent=a}var i=e("../Interaction"),o=e("../InteractEvent"),a={firePrepared:r,names:[],methodDict:{}};i.signals.on("action-start",function(e){var t=e.interaction,n=e.event;t._interacting=!0,r(t,n,"start")}),i.signals.on("action-move",function(e){var t=e.interaction;if(r(t,e.event,"move",e.preEnd),!t.interacting())return!1}),i.signals.on("action-end",function(e){r(e.interaction,e.event,"end")}),t.exports=a},{"../InteractEvent":3,"../Interaction":5}],7:[function(e,t,n){"use strict";var r=e("./base"),i=e("../utils"),o=e("../InteractEvent"),a=e("../Interactable"),s=e("../Interaction"),c=e("../defaultOptions"),l={defaults:{enabled:!1,mouseButtons:null,origin:null,snap:null,restrict:null,inertia:null,autoScroll:null,startAxis:"xy",lockAxis:"xy"},checker:function(e,t,n){var r=n.options.drag;return r.enabled?{name:"drag",axis:"start"===r.lockAxis?r.startAxis:r.lockAxis}:null},getCursor:function(){return"move"}};s.signals.on("before-action-move",function(e){var t=e.interaction;if("drag"===t.prepared.name){var n=t.prepared.axis;"x"===n?(t.curCoords.page.y=t.startCoords.page.y,t.curCoords.client.y=t.startCoords.client.y,t.pointerDelta.page.speed=Math.abs(t.pointerDelta.page.vx),t.pointerDelta.client.speed=Math.abs(t.pointerDelta.client.vx),t.pointerDelta.client.vy=0,t.pointerDelta.page.vy=0):"y"===n&&(t.curCoords.page.x=t.startCoords.page.x,t.curCoords.client.x=t.startCoords.client.x,t.pointerDelta.page.speed=Math.abs(t.pointerDelta.page.vy),t.pointerDelta.client.speed=Math.abs(t.pointerDelta.client.vy),t.pointerDelta.client.vx=0,t.pointerDelta.page.vx=0)}}),o.signals.on("new",function(e){var t=e.iEvent,n=e.interaction;if("dragmove"===t.type){var r=n.prepared.axis;"x"===r?(t.pageY=n.startCoords.page.y,t.clientY=n.startCoords.client.y,t.dy=0):"y"===r&&(t.pageX=n.startCoords.page.x,t.clientX=n.startCoords.client.x,t.dx=0)}}),a.prototype.draggable=function(e){return i.is.object(e)?(this.options.drag.enabled=!1!==e.enabled,this.setPerAction("drag",e),this.setOnEvents("drag",e),/^(xy|x|y|start)$/.test(e.lockAxis)&&(this.options.drag.lockAxis=e.lockAxis),/^(xy|x|y)$/.test(e.startAxis)&&(this.options.drag.startAxis=e.startAxis),this):i.is.bool(e)?(this.options.drag.enabled=e,e||(this.ondragstart=this.ondragstart=this.ondragend=null),this):this.options.drag},r.drag=l,r.names.push("drag"),i.merge(a.eventTypes,["dragstart","dragmove","draginertiastart","draginertiaresume","dragend"]),r.methodDict.drag="draggable",c.drag=l.defaults,t.exports=l},{"../InteractEvent":3,"../Interactable":4,"../Interaction":5,"../defaultOptions":18,"../utils":44,"./base":6}],8:[function(e,t,n){"use strict";function r(e,t){for(var n=[],r=[],i=0;i<d.interactables.length;i++){var o;o=d.interactables[i];var a=o;if(a.options.drop.enabled){var s=a.options.drop.accept;if(!(u.is.element(s)&&s!==t||u.is.string(s)&&!u.matchesSelector(t,s)))for(var c=u.is.string(a.target)?a._context.querySelectorAll(a.target):[a.target],l=0;l<c.length;l++){var p;p=c[l];var f=p;f!==t&&(n.push(a),r.push(f))}}}return{elements:r,dropzones:n}}function i(e,t){for(var n=void 0,r=0;r<e.dropzones.length;r++){var i=e.dropzones[r],o=e.elements[r];o!==n&&(t.target=o,i.fire(t)),n=o}}function o(e,t){var n=r(e,t);e.dropzones=n.dropzones,e.elements=n.elements,e.rects=[];for(var i=0;i<e.dropzones.length;i++)e.rects[i]=e.dropzones[i].getRect(e.elements[i])}function a(e,t,n){var r=e.interaction,i=[];y&&o(r.activeDrops,n);for(var a=0;a<r.activeDrops.dropzones.length;a++){var s=r.activeDrops.dropzones[a],c=r.activeDrops.elements[a],l=r.activeDrops.rects[a];i.push(s.dropCheck(e,t,r.target,n,c,l)?c:null)}var d=u.indexOfDeepestElement(i);return{dropzone:r.activeDrops.dropzones[d]||null,element:r.activeDrops.elements[d]||null}}function s(e,t,n){var r={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null},i={dragEvent:n,interaction:e,target:e.dropElement,dropzone:e.dropTarget,relatedTarget:n.target,draggable:n.interactable,timeStamp:n.timeStamp};return e.dropElement!==e.prevDropElement&&(e.prevDropTarget&&(r.leave=u.extend({type:"dragleave"},i),n.dragLeave=r.leave.target=e.prevDropElement,n.prevDropzone=r.leave.dropzone=e.prevDropTarget),e.dropTarget&&(r.enter={dragEvent:n,interaction:e,target:e.dropElement,dropzone:e.dropTarget,relatedTarget:n.target,draggable:n.interactable,timeStamp:n.timeStamp,type:"dragenter"},n.dragEnter=e.dropElement,n.dropzone=e.dropTarget)),"dragend"===n.type&&e.dropTarget&&(r.drop=u.extend({type:"drop"},i),n.dropzone=e.dropTarget,n.relatedTarget=e.dropElement),"dragstart"===n.type&&(r.activate=u.extend({type:"dropactivate"},i),r.activate.target=null,r.activate.dropzone=null),"dragend"===n.type&&(r.deactivate=u.extend({type:"dropdeactivate"},i),r.deactivate.target=null,r.deactivate.dropzone=null),"dragmove"===n.type&&e.dropTarget&&(r.move=u.extend({dragmove:n,type:"dropmove"},i),n.dropzone=e.dropTarget),r}function c(e,t){var n=e.activeDrops,r=e.prevDropTarget,o=e.dropTarget,a=e.dropElement;t.leave&&r.fire(t.leave),t.move&&o.fire(t.move),t.enter&&o.fire(t.enter),t.drop&&o.fire(t.drop),t.deactivate&&i(n,t.deactivate),e.prevDropTarget=o,e.prevDropElement=a}var l=e("./base"),u=e("../utils"),d=e("../scope"),p=e("../interact"),f=e("../InteractEvent"),h=e("../Interactable"),v=e("../Interaction"),g=e("../defaultOptions"),m={defaults:{enabled:!1,accept:null,overlap:"pointer"}},y=!1;v.signals.on("action-start",function(e){var t=e.interaction,n=e.event;if("drag"===t.prepared.name){t.activeDrops.dropzones=[],t.activeDrops.elements=[],t.activeDrops.rects=[],t.dropEvents=null,t.dynamicDrop||o(t.activeDrops,t.element);var r=t.prevEvent,a=s(t,n,r);a.activate&&i(t.activeDrops,a.activate)}}),f.signals.on("new",function(e){var t=e.interaction,n=e.iEvent,r=e.event;if("dragmove"===n.type||"dragend"===n.type){var i=t.element,o=n,c=a(o,r,i);t.dropTarget=c.dropzone,t.dropElement=c.element,t.dropEvents=s(t,r,o)}}),v.signals.on("action-move",function(e){var t=e.interaction;"drag"===t.prepared.name&&c(t,t.dropEvents)}),v.signals.on("action-end",function(e){var t=e.interaction;"drag"===t.prepared.name&&c(t,t.dropEvents)}),v.signals.on("stop-drag",function(e){var t=e.interaction;t.activeDrops={dropzones:null,elements:null,rects:null},t.dropEvents=null}),h.prototype.dropzone=function(e){return u.is.object(e)?(this.options.drop.enabled=!1!==e.enabled,u.is.function(e.ondrop)&&(this.events.ondrop=e.ondrop),u.is.function(e.ondropactivate)&&(this.events.ondropactivate=e.ondropactivate),u.is.function(e.ondropdeactivate)&&(this.events.ondropdeactivate=e.ondropdeactivate),u.is.function(e.ondragenter)&&(this.events.ondragenter=e.ondragenter),u.is.function(e.ondragleave)&&(this.events.ondragleave=e.ondragleave),u.is.function(e.ondropmove)&&(this.events.ondropmove=e.ondropmove),/^(pointer|center)$/.test(e.overlap)?this.options.drop.overlap=e.overlap:u.is.number(e.overlap)&&(this.options.drop.overlap=Math.max(Math.min(1,e.overlap),0)),"accept"in e&&(this.options.drop.accept=e.accept),"checker"in e&&(this.options.drop.checker=e.checker),this):u.is.bool(e)?(this.options.drop.enabled=e,e||(this.ondragenter=this.ondragleave=this.ondrop=this.ondropactivate=this.ondropdeactivate=null),this):this.options.drop},h.prototype.dropCheck=function(e,t,n,r,i,o){var a=!1;if(!(o=o||this.getRect(i)))return!!this.options.drop.checker&&this.options.drop.checker(e,t,a,this,i,n,r);var s=this.options.drop.overlap;if("pointer"===s){var c=u.getOriginXY(n,r,"drag"),l=u.getPageXY(e);l.x+=c.x,l.y+=c.y;var d=l.x>o.left&&l.x<o.right,p=l.y>o.top&&l.y<o.bottom;a=d&&p}var f=n.getRect(r);if(f&&"center"===s){var h=f.left+f.width/2,v=f.top+f.height/2;a=h>=o.left&&h<=o.right&&v>=o.top&&v<=o.bottom}if(f&&u.is.number(s)){a=Math.max(0,Math.min(o.right,f.right)-Math.max(o.left,f.left))*Math.max(0,Math.min(o.bottom,f.bottom)-Math.max(o.top,f.top))/(f.width*f.height)>=s}return this.options.drop.checker&&(a=this.options.drop.checker(e,t,a,this,i,n,r)),a},h.signals.on("unset",function(e){e.interactable.dropzone(!1)}),h.settingsMethods.push("dropChecker"),v.signals.on("new",function(e){e.dropTarget=null,e.dropElement=null,e.prevDropTarget=null,e.prevDropElement=null,e.dropEvents=null,e.activeDrops={dropzones:[],elements:[],rects:[]}}),v.signals.on("stop",function(e){var t=e.interaction;t.dropTarget=t.dropElement=t.prevDropTarget=t.prevDropElement=null}),p.dynamicDrop=function(e){return u.is.bool(e)?(y=e,p):y},u.merge(h.eventTypes,["dragenter","dragleave","dropactivate","dropdeactivate","dropmove","drop"]),l.methodDict.drop="dropzone",g.drop=m.defaults,t.exports=m},{"../InteractEvent":3,"../Interactable":4,"../Interaction":5,"../defaultOptions":18,"../interact":21,"../scope":33,"../utils":44,"./base":6}],9:[function(e,t,n){"use strict";var r=e("./base"),i=e("../utils"),o=e("../InteractEvent"),a=e("../Interactable"),s=e("../Interaction"),c=e("../defaultOptions"),l={defaults:{enabled:!1,origin:null,restrict:null},checker:function(e,t,n,r,i){return i.pointerIds.length>=2?{name:"gesture"}:null},getCursor:function(){return""}};o.signals.on("new",function(e){var t=e.iEvent,n=e.interaction;"gesturestart"===t.type&&(t.ds=0,n.gesture.startDistance=n.gesture.prevDistance=t.distance,n.gesture.startAngle=n.gesture.prevAngle=t.angle,n.gesture.scale=1)}),o.signals.on("new",function(e){var t=e.iEvent,n=e.interaction;"gesturemove"===t.type&&(t.ds=t.scale-n.gesture.scale,n.target.fire(t),n.gesture.prevAngle=t.angle,n.gesture.prevDistance=t.distance,t.scale===1/0||null===t.scale||void 0===t.scale||isNaN(t.scale)||(n.gesture.scale=t.scale))}),a.prototype.gesturable=function(e){return i.is.object(e)?(this.options.gesture.enabled=!1!==e.enabled,this.setPerAction("gesture",e),this.setOnEvents("gesture",e),this):i.is.bool(e)?(this.options.gesture.enabled=e,e||(this.ongesturestart=this.ongesturestart=this.ongestureend=null),this):this.options.gesture},o.signals.on("set-delta",function(e){var t=e.interaction,n=e.iEvent,r=e.action,a=e.event,s=e.starting,c=e.ending,l=e.deltaSource;if("gesture"===r){var u=t.pointers;n.touches=[u[0],u[1]],s?(n.distance=i.touchDistance(u,l),n.box=i.touchBBox(u),n.scale=1,n.ds=0,n.angle=i.touchAngle(u,void 0,l),n.da=0):c||a instanceof o?(n.distance=t.prevEvent.distance,n.box=t.prevEvent.box,n.scale=t.prevEvent.scale,n.ds=n.scale-1,n.angle=t.prevEvent.angle,n.da=n.angle-t.gesture.startAngle):(n.distance=i.touchDistance(u,l),n.box=i.touchBBox(u),n.scale=n.distance/t.gesture.startDistance,n.angle=i.touchAngle(u,t.gesture.prevAngle,l),n.ds=n.scale-t.gesture.prevScale,n.da=n.angle-t.gesture.prevAngle)}}),s.signals.on("new",function(e){e.gesture={start:{x:0,y:0},startDistance:0,prevDistance:0,distance:0,scale:1,startAngle:0,prevAngle:0}}),r.gesture=l,r.names.push("gesture"),i.merge(a.eventTypes,["gesturestart","gesturemove","gestureend"]),r.methodDict.gesture="gesturable",c.gesture=l.defaults,t.exports=l},{"../InteractEvent":3,"../Interactable":4,"../Interaction":5,"../defaultOptions":18,"../utils":44,"./base":6}],10:[function(e,t,n){"use strict";function r(e,t,n,r,i,a,s){if(!t)return!1;if(!0===t){var c=o.is.number(a.width)?a.width:a.right-a.left,l=o.is.number(a.height)?a.height:a.bottom-a.top;if(c<0&&("left"===e?e="right":"right"===e&&(e="left")),l<0&&("top"===e?e="bottom":"bottom"===e&&(e="top")),"left"===e)return n.x<(c>=0?a.left:a.right)+s;if("top"===e)return n.y<(l>=0?a.top:a.bottom)+s;if("right"===e)return n.x>(c>=0?a.right:a.left)-s;if("bottom"===e)return n.y>(l>=0?a.bottom:a.top)-s}return!!o.is.element(r)&&(o.is.element(t)?t===r:o.matchesUpTo(r,t,i))}var i=e("./base"),o=e("../utils"),a=e("../utils/browser"),s=e("../InteractEvent"),c=e("../Interactable"),l=e("../Interaction"),u=e("../defaultOptions"),d=a.supportsTouch||a.supportsPointerEvent?20:10,p={defaults:{enabled:!1,mouseButtons:null,origin:null,snap:null,restrict:null,inertia:null,autoScroll:null,square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},checker:function(e,t,n,i,a,s){if(!s)return null;var c=o.extend({},a.curCoords.page),l=n.options;if(l.resize.enabled){var u=l.resize,p={left:!1,right:!1,top:!1,bottom:!1};if(o.is.object(u.edges)){for(var f in p)p[f]=r(f,u.edges[f],c,a._eventTarget,i,s,u.margin||d);if(p.left=p.left&&!p.right,p.top=p.top&&!p.bottom,p.left||p.right||p.top||p.bottom)return{name:"resize",edges:p}}else{var h="y"!==l.resize.axis&&c.x>s.right-d,v="x"!==l.resize.axis&&c.y>s.bottom-d;if(h||v)return{name:"resize",axes:(h?"x":"")+(v?"y":"")}}}return null},cursors:a.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"},getCursor:function(e){if(e.axis)return p.cursors[e.name+e.axis];if(e.edges){for(var t="",n=["top","bottom","left","right"],r=0;r<4;r++)e.edges[n[r]]&&(t+=n[r]);return p.cursors[t]}}};s.signals.on("new",function(e){var t=e.iEvent,n=e.interaction;if("resizestart"===t.type&&n.prepared.edges){var r=n.target.getRect(n.element),i=n.target.options.resize;if(i.square||i.preserveAspectRatio){var a=o.extend({},n.prepared.edges);a.top=a.top||a.left&&!a.bottom,a.left=a.left||a.top&&!a.right,a.bottom=a.bottom||a.right&&!a.top,a.right=a.right||a.bottom&&!a.left,n.prepared._linkedEdges=a}else n.prepared._linkedEdges=null;i.preserveAspectRatio&&(n.resizeStartAspectRatio=r.width/r.height),n.resizeRects={start:r,current:o.extend({},r),inverted:o.extend({},r),previous:o.extend({},r),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},t.rect=n.resizeRects.inverted,t.deltaRect=n.resizeRects.delta}}),s.signals.on("new",function(e){var t=e.iEvent,n=e.phase,r=e.interaction;if("move"===n&&r.prepared.edges){var i=r.target.options.resize,a=i.invert,s="reposition"===a||"negate"===a,c=r.prepared.edges,l=r.resizeRects.start,u=r.resizeRects.current,d=r.resizeRects.inverted,p=r.resizeRects.delta,f=o.extend(r.resizeRects.previous,d),h=c,v=t.dx,g=t.dy;if(i.preserveAspectRatio||i.square){var m=i.preserveAspectRatio?r.resizeStartAspectRatio:1;c=r.prepared._linkedEdges,h.left&&h.bottom||h.right&&h.top?g=-v/m:h.left||h.right?g=v/m:(h.top||h.bottom)&&(v=g*m)}if(c.top&&(u.top+=g),c.bottom&&(u.bottom+=g),c.left&&(u.left+=v),c.right&&(u.right+=v),s){if(o.extend(d,u),"reposition"===a){var y=void 0;d.top>d.bottom&&(y=d.top,d.top=d.bottom,d.bottom=y),d.left>d.right&&(y=d.left,d.left=d.right,d.right=y)}}else d.top=Math.min(u.top,l.bottom),d.bottom=Math.max(u.bottom,l.top),d.left=Math.min(u.left,l.right),d.right=Math.max(u.right,l.left);d.width=d.right-d.left,d.height=d.bottom-d.top;for(var b in d)p[b]=d[b]-f[b];t.edges=r.prepared.edges,t.rect=d,t.deltaRect=p}}),c.prototype.resizable=function(e){return o.is.object(e)?(this.options.resize.enabled=!1!==e.enabled,this.setPerAction("resize",e),this.setOnEvents("resize",e),/^x$|^y$|^xy$/.test(e.axis)?this.options.resize.axis=e.axis:null===e.axis&&(this.options.resize.axis=u.resize.axis),o.is.bool(e.preserveAspectRatio)?this.options.resize.preserveAspectRatio=e.preserveAspectRatio:o.is.bool(e.square)&&(this.options.resize.square=e.square),this):o.is.bool(e)?(this.options.resize.enabled=e,e||(this.onresizestart=this.onresizestart=this.onresizeend=null),this):this.options.resize},l.signals.on("new",function(e){e.resizeAxes="xy"}),s.signals.on("set-delta",function(e){var t=e.interaction,n=e.iEvent;"resize"===e.action&&t.resizeAxes&&(t.target.options.resize.square?("y"===t.resizeAxes?n.dx=n.dy:n.dy=n.dx,n.axes="xy"):(n.axes=t.resizeAxes,"x"===t.resizeAxes?n.dy=0:"y"===t.resizeAxes&&(n.dx=0)))}),i.resize=p,i.names.push("resize"),o.merge(c.eventTypes,["resizestart","resizemove","resizeinertiastart","resizeinertiaresume","resizeend"]),i.methodDict.resize="resizable",u.resize=p.defaults,t.exports=p},{"../InteractEvent":3,"../Interactable":4,"../Interaction":5,"../defaultOptions":18,"../utils":44,"../utils/browser":36,"./base":6}],11:[function(e,t,n){"use strict";var r=e("./utils/raf"),i=e("./utils/window").getWindow,o=e("./utils/is"),a=e("./utils/domUtils"),s=e("./Interaction"),c=e("./defaultOptions"),l={defaults:{enabled:!1,container:null,margin:60,speed:300},interaction:null,i:null,x:0,y:0,isScrolling:!1,prevTime:0,start:function(e){l.isScrolling=!0,r.cancel(l.i),l.interaction=e,l.prevTime=(new Date).getTime(),l.i=r.request(l.scroll)},stop:function(){l.isScrolling=!1,r.cancel(l.i)},scroll:function(){var e=l.interaction.target.options[l.interaction.prepared.name].autoScroll,t=e.container||i(l.interaction.element),n=(new Date).getTime(),a=(n-l.prevTime)/1e3,s=e.speed*a;s>=1&&(o.window(t)?t.scrollBy(l.x*s,l.y*s):t&&(t.scrollLeft+=l.x*s,t.scrollTop+=l.y*s),l.prevTime=n),l.isScrolling&&(r.cancel(l.i),l.i=r.request(l.scroll))},check:function(e,t){var n=e.options;return n[t].autoScroll&&n[t].autoScroll.enabled},onInteractionMove:function(e){var t=e.interaction,n=e.pointer;if(t.interacting()&&l.check(t.target,t.prepared.name)){if(t.simulation)return void(l.x=l.y=0);var r=void 0,s=void 0,c=void 0,u=void 0,d=t.target.options[t.prepared.name].autoScroll,p=d.container||i(t.element);if(o.window(p))u=n.clientX<l.margin,r=n.clientY<l.margin,s=n.clientX>p.innerWidth-l.margin,c=n.clientY>p.innerHeight-l.margin;else{var f=a.getElementClientRect(p);u=n.clientX<f.left+l.margin,r=n.clientY<f.top+l.margin,s=n.clientX>f.right-l.margin,c=n.clientY>f.bottom-l.margin}l.x=s?1:u?-1:0,l.y=c?1:r?-1:0,l.isScrolling||(l.margin=d.margin,l.speed=d.speed,l.start(t))}}};s.signals.on("stop-active",function(){l.stop()}),s.signals.on("action-move",l.onInteractionMove),c.perAction.autoScroll=l.defaults,t.exports=l},{"./Interaction":5,"./defaultOptions":18,"./utils/domUtils":39,"./utils/is":46,"./utils/raf":50,"./utils/window":52}],12:[function(e,t,n){"use strict";var r=e("../Interactable"),i=e("../actions/base"),o=e("../utils/is"),a=e("../utils/domUtils"),s=e("../utils"),c=s.warnOnce;r.prototype.getAction=function(e,t,n,r){var i=this.defaultActionChecker(e,t,n,r);return this.options.actionChecker?this.options.actionChecker(e,t,i,this,r,n):i},r.prototype.ignoreFrom=c(function(e){return this._backCompatOption("ignoreFrom",e)},"Interactable.ignoreForm() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),r.prototype.allowFrom=c(function(e){return this._backCompatOption("allowFrom",e)},"Interactable.allowForm() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),r.prototype.testIgnore=function(e,t,n){return!(!e||!o.element(n))&&(o.string(e)?a.matchesUpTo(n,e,t):!!o.element(e)&&a.nodeContains(e,n))},r.prototype.testAllow=function(e,t,n){return!e||!!o.element(n)&&(o.string(e)?a.matchesUpTo(n,e,t):!!o.element(e)&&a.nodeContains(e,n))},r.prototype.testIgnoreAllow=function(e,t,n){return!this.testIgnore(e.ignoreFrom,t,n)&&this.testAllow(e.allowFrom,t,n)},r.prototype.actionChecker=function(e){return o.function(e)?(this.options.actionChecker=e,this):null===e?(delete this.options.actionChecker,this):this.options.actionChecker},r.prototype.styleCursor=function(e){return o.bool(e)?(this.options.styleCursor=e,this):null===e?(delete this.options.styleCursor,this):this.options.styleCursor},r.prototype.defaultActionChecker=function(e,t,n,r){for(var o=this.getRect(r),a=t.buttons||{0:1,1:4,3:8,4:16}[t.button],s=null,c=0;c<i.names.length;c++){var l;l=i.names[c];var u=l;if((!n.pointerIsDown||!/mouse|pointer/.test(n.pointerType)||0!=(a&this.options[u].mouseButtons))&&(s=i[u].checker(e,t,this,r,n,o)))return s}}},{"../Interactable":4,"../actions/base":6,"../utils":44,"../utils/domUtils":39,"../utils/is":46}],13:[function(e,t,n){"use strict";function r(e,t,n,r){return h.is.object(e)&&t.testIgnoreAllow(t.options[e.name],n,r)&&t.options[e.name].enabled&&s(t,n,e)?e:null}function i(e,t,n,i,o,a){for(var s=0,c=i.length;s<c;s++){var l=i[s],u=o[s],d=r(l.getAction(t,n,e,u),l,u,a);if(d)return{action:d,target:l,element:u}}return{}}function o(e,t,n,r){function o(e){a.push(e),s.push(c)}for(var a=[],s=[],c=r;h.is.element(c);){a=[],s=[],f.interactables.forEachMatch(c,o);var l=i(e,t,n,a,s,r);if(l.action&&!l.target.options[l.action.name].manualStart)return l;c=h.parentNode(c)}return{}}function a(e,t){var n=t.action,r=t.target,i=t.element;if(n=n||{},e.target&&e.target.options.styleCursor&&(e.target._doc.documentElement.style.cursor=""),e.target=r,e.element=i,h.copyAction(e.prepared,n),r&&r.options.styleCursor){var o=n?d[n.name].getCursor(n):"";e.target._doc.documentElement.style.cursor=o}v.fire("prepared",{interaction:e})}function s(e,t,n){var r=e.options,i=r[n.name].max,o=r[n.name].maxPerElement,a=0,s=0,c=0;if(i&&o&&g.maxInteractions){for(var l=0;l<f.interactions.length;l++){var u;u=f.interactions[l];var d=u,p=d.prepared.name;if(d.interacting()){if(++a>=g.maxInteractions)return!1;if(d.target===e){if((s+=p===n.name|0)>=i)return!1;if(d.element===t&&(c++,p!==n.name||c>=o))return!1}}}return g.maxInteractions>0}}var c=e("../interact"),l=e("../Interactable"),u=e("../Interaction"),d=e("../actions/base"),p=e("../defaultOptions"),f=e("../scope"),h=e("../utils"),v=e("../utils/Signals").new();e("./InteractableMethods");var g={signals:v,withinInteractionLimit:s,maxInteractions:1/0,defaults:{perAction:{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}},setActionDefaults:function(e){h.extend(e.defaults,g.defaults.perAction)},validateAction:r};u.signals.on("down",function(e){var t=e.interaction,n=e.pointer,r=e.event,i=e.eventTarget;if(!t.interacting()){a(t,o(t,n,r,i))}}),u.signals.on("move",function(e){var t=e.interaction,n=e.pointer,r=e.event,i=e.eventTarget;if("mouse"===t.pointerType&&!t.pointerIsDown&&!t.interacting()){a(t,o(t,n,r,i))}}),u.signals.on("move",function(e){var t=e.interaction,n=e.event;if(t.pointerIsDown&&!t.interacting()&&t.pointerWasMoved&&t.prepared.name){v.fire("before-start",e);var r=t.target;t.prepared.name&&r&&(r.options[t.prepared.name].manualStart||!s(r,t.element,t.prepared)?t.stop(n):t.start(t.prepared,r,t.element))}}),u.signals.on("stop",function(e){var t=e.interaction,n=t.target;n&&n.options.styleCursor&&(n._doc.documentElement.style.cursor="")}),c.maxInteractions=function(e){return h.is.number(e)?(g.maxInteractions=e,c):g.maxInteractions},l.settingsMethods.push("styleCursor"),l.settingsMethods.push("actionChecker"),l.settingsMethods.push("ignoreFrom"),l.settingsMethods.push("allowFrom"),p.base.actionChecker=null,p.base.styleCursor=!0,h.extend(p.perAction,g.defaults.perAction),t.exports=g},{"../Interactable":4,"../Interaction":5,"../actions/base":6,"../defaultOptions":18,"../interact":21,"../scope":33,"../utils":44,"../utils/Signals":34,"./InteractableMethods":12}],14:[function(e,t,n){"use strict";function r(e,t){if(!t)return!1;var n=t.options.drag.startAxis;return"xy"===e||"xy"===n||n===e}var i=e("./base"),o=e("../scope"),a=e("../utils/is"),s=e("../utils/domUtils"),c=s.parentNode;i.setActionDefaults(e("../actions/drag")),i.signals.on("before-start",function(e){var t=e.interaction,n=e.eventTarget,s=e.dx,l=e.dy;if("drag"===t.prepared.name){var u=Math.abs(s),d=Math.abs(l),p=t.target.options.drag,f=p.startAxis,h=u>d?"x":u<d?"y":"xy";if(t.prepared.axis="start"===p.lockAxis?h[0]:p.lockAxis,"xy"!==h&&"xy"!==f&&f!==h){t.prepared.name=null;for(var v=n,g=function(e){if(e!==t.target){var o=t.target.options.drag;if(!o.manualStart&&e.testIgnoreAllow(o,v,n)){var a=e.getAction(t.downPointer,t.downEvent,t,v);if(a&&"drag"===a.name&&r(h,e)&&i.validateAction(a,e,v,n))return e}}};a.element(v);){var m=o.interactables.forEachMatch(v,g);if(m){t.prepared.name="drag",t.target=m,t.element=v;break}v=c(v)}}}})},{"../actions/drag":7,"../scope":33,"../utils/domUtils":39,"../utils/is":46,"./base":13}],15:[function(e,t,n){"use strict";e("./base").setActionDefaults(e("../actions/gesture"))},{"../actions/gesture":9,"./base":13}],16:[function(e,t,n){"use strict";function r(e){var t=e.prepared&&e.prepared.name;if(!t)return null;var n=e.target.options;return n[t].hold||n[t].delay}var i=e("./base"),o=e("../Interaction");i.defaults.perAction.hold=0,i.defaults.perAction.delay=0,o.signals.on("new",function(e){e.autoStartHoldTimer=null}),i.signals.on("prepared",function(e){var t=e.interaction,n=r(t);n>0&&(t.autoStartHoldTimer=setTimeout(function(){t.start(t.prepared,t.target,t.element)},n))}),o.signals.on("move",function(e){var t=e.interaction,n=e.duplicate;t.pointerWasMoved&&!n&&clearTimeout(t.autoStartHoldTimer)}),i.signals.on("before-start",function(e){var t=e.interaction;r(t)>0&&(t.prepared.name=null)}),t.exports={getHoldDuration:r}},{"../Interaction":5,"./base":13}],17:[function(e,t,n){"use strict";e("./base").setActionDefaults(e("../actions/resize"))},{"../actions/resize":10,"./base":13}],18:[function(e,t,n){"use strict";t.exports={base:{accept:null,preventDefault:"auto",deltaSource:"page"},perAction:{origin:{x:0,y:0},inertia:{enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}}}},{}],19:[function(e,t,n){"use strict";e("./inertia"),e("./modifiers/snap"),e("./modifiers/restrict"),e("./pointerEvents/base"),e("./pointerEvents/holdRepeat"),e("./pointerEvents/interactableTargets"),e("./autoStart/hold"),e("./actions/gesture"),e("./actions/resize"),e("./actions/drag"),e("./actions/drop"),e("./modifiers/snapSize"),e("./modifiers/restrictEdges"),e("./modifiers/restrictSize"),e("./autoStart/gesture"),e("./autoStart/resize"),e("./autoStart/drag"),e("./interactablePreventDefault.js"),e("./autoScroll"),t.exports=e("./interact")},{"./actions/drag":7,"./actions/drop":8,"./actions/gesture":9,"./actions/resize":10,"./autoScroll":11,"./autoStart/drag":14,"./autoStart/gesture":15,"./autoStart/hold":16,"./autoStart/resize":17,"./inertia":20,"./interact":21,"./interactablePreventDefault.js":22,"./modifiers/restrict":24,"./modifiers/restrictEdges":25,"./modifiers/restrictSize":26,"./modifiers/snap":27,"./modifiers/snapSize":28,"./pointerEvents/base":30,"./pointerEvents/holdRepeat":31,"./pointerEvents/interactableTargets":32}],20:[function(e,t,n){"use strict";function r(e,t){var n=e.target.options[e.prepared.name].inertia,r=n.resistance,i=-Math.log(n.endSpeed/t.v0)/r;t.x0=e.prevEvent.pageX,t.y0=e.prevEvent.pageY,t.t0=t.startEvent.timeStamp/1e3,t.sx=t.sy=0,t.modifiedXe=t.xe=(t.vx0-i)/r,t.modifiedYe=t.ye=(t.vy0-i)/r,t.te=i,t.lambda_v0=r/t.v0,t.one_ve_v0=1-n.endSpeed/t.v0}function i(){a(this),u.setCoordDeltas(this.pointerDelta,this.prevCoords,this.curCoords);var e=this.inertiaStatus,t=this.target.options[this.prepared.name].inertia,n=t.resistance,r=(new Date).getTime()/1e3-e.t0;if(r<e.te){var i=1-(Math.exp(-n*r)-e.lambda_v0)/e.one_ve_v0;if(e.modifiedXe===e.xe&&e.modifiedYe===e.ye)e.sx=e.xe*i,e.sy=e.ye*i;else{var o=u.getQuadraticCurvePoint(0,0,e.xe,e.ye,e.modifiedXe,e.modifiedYe,i);e.sx=o.x,e.sy=o.y}this.doMove(),e.i=d.request(this.boundInertiaFrame)}else e.sx=e.modifiedXe,e.sy=e.modifiedYe,this.doMove(),this.end(e.startEvent),e.active=!1,this.simulation=null;u.copyCoords(this.prevCoords,this.curCoords)}function o(){a(this);var e=this.inertiaStatus,t=(new Date).getTime()-e.t0,n=this.target.options[this.prepared.name].inertia.smoothEndDuration;t<n?(e.sx=u.easeOutQuad(t,0,e.xe,n),e.sy=u.easeOutQuad(t,0,e.ye,n),this.pointerMove(e.startEvent,e.startEvent),e.i=d.request(this.boundSmoothEndFrame)):(e.sx=e.xe,e.sy=e.ye,this.pointerMove(e.startEvent,e.startEvent),this.end(e.startEvent),e.smoothEnd=e.active=!1,this.simulation=null)}function a(e){var t=e.inertiaStatus;if(t.active){var n=t.upCoords.page,r=t.upCoords.client;u.setCoords(e.curCoords,[{pageX:n.x+t.sx,pageY:n.y+t.sy,clientX:r.x+t.sx,clientY:r.y+t.sy}])}}var s=e("./InteractEvent"),c=e("./Interaction"),l=e("./modifiers/base"),u=e("./utils"),d=e("./utils/raf");c.signals.on("new",function(e){e.inertiaStatus={active:!1,smoothEnd:!1,allowResume:!1,startEvent:null,upCoords:{},xe:0,ye:0,sx:0,sy:0,t0:0,vx0:0,vys:0,duration:0,lambda_v0:0,one_ve_v0:0,i:null},e.boundInertiaFrame=function(){return i.apply(e)},e.boundSmoothEndFrame=function(){return o.apply(e)}}),c.signals.on("down",function(e){var t=e.interaction,n=e.event,r=e.pointer,i=e.eventTarget,o=t.inertiaStatus;if(o.active)for(var a=i;u.is.element(a);){if(a===t.element){d.cancel(o.i),o.active=!1,t.simulation=null,t.updatePointer(r),u.setCoords(t.curCoords,t.pointers);var p={interaction:t};c.signals.fire("before-action-move",p),c.signals.fire("action-resume",p);var f=new s(t,n,t.prepared.name,"inertiaresume",t.element);t.target.fire(f),t.prevEvent=f,l.resetStatuses(t.modifierStatuses),u.copyCoords(t.prevCoords,t.curCoords);break}a=u.parentNode(a)}}),c.signals.on("up",function(e){var t=e.interaction,n=e.event,i=t.inertiaStatus;if(t.interacting()&&!i.active){var o=t.target,a=o&&o.options,c=a&&t.prepared.name&&a[t.prepared.name].inertia,p=(new Date).getTime(),f={},h=u.extend({},t.curCoords.page),v=t.pointerDelta.client.speed,g=!1,m=void 0,y=c&&c.enabled&&"gesture"!==t.prepared.name&&n!==i.startEvent,b=y&&p-t.curCoords.timeStamp<50&&v>c.minSpeed&&v>c.endSpeed,x={interaction:t,pageCoords:h,statuses:f,preEnd:!0,requireEndOnly:!0};y&&!b&&(l.resetStatuses(f),m=l.setAll(x),m.shouldMove&&m.locked&&(g=!0)),(b||g)&&(u.copyCoords(i.upCoords,t.curCoords),t.pointers[0]=i.startEvent=new s(t,n,t.prepared.name,"inertiastart",t.element),i.t0=p,i.active=!0,i.allowResume=c.allowResume,t.simulation=i,o.fire(i.startEvent),b?(i.vx0=t.pointerDelta.client.vx,i.vy0=t.pointerDelta.client.vy,i.v0=v,r(t,i),u.extend(h,t.curCoords.page),h.x+=i.xe,h.y+=i.ye,l.resetStatuses(f),m=l.setAll(x),i.modifiedXe+=m.dx,i.modifiedYe+=m.dy,i.i=d.request(t.boundInertiaFrame)):(i.smoothEnd=!0,i.xe=m.dx,i.ye=m.dy,i.sx=i.sy=0,i.i=d.request(t.boundSmoothEndFrame)))}}),c.signals.on("stop-active",function(e){var t=e.interaction,n=t.inertiaStatus;n.active&&(d.cancel(n.i),n.active=!1,t.simulation=null)})},{"./InteractEvent":3,"./Interaction":5,"./modifiers/base":23,"./utils":44,"./utils/raf":50}],21:[function(e,t,n){"use strict";function r(e,t){var n=s.interactables.get(e,t);return n||(n=new c(e,t),n.events.global=u),n}var i=e("./utils/browser"),o=e("./utils/events"),a=e("./utils"),s=e("./scope"),c=e("./Interactable"),l=e("./Interaction"),u={};r.isSet=function(e,t){return-1!==s.interactables.indexOfElement(e,t&&t.context)},r.on=function(e,t,n){if(a.is.string(e)&&-1!==e.search(" ")&&(e=e.trim().split(/ +/)),a.is.array(e)){for(var i=0;i<e.length;i++){var l;l=e[i];var d=l;r.on(d,t,n)}return r}if(a.is.object(e)){for(var p in e)r.on(p,e[p],t);return r}return a.contains(c.eventTypes,e)?u[e]?u[e].push(t):u[e]=[t]:o.add(s.document,e,t,{options:n}),r},r.off=function(e,t,n){if(a.is.string(e)&&-1!==e.search(" ")&&(e=e.trim().split(/ +/)),a.is.array(e)){for(var i=0;i<e.length;i++){var l;l=e[i];var d=l;r.off(d,t,n)}return r}if(a.is.object(e)){for(var p in e)r.off(p,e[p],t);return r}if(a.contains(c.eventTypes,e)){var f=void 0;e in u&&-1!==(f=u[e].indexOf(t))&&u[e].splice(f,1)}else o.remove(s.document,e,t,n);return r},r.debug=function(){return s},r.getPointerAverage=a.pointerAverage,r.getTouchBBox=a.touchBBox,r.getTouchDistance=a.touchDistance,r.getTouchAngle=a.touchAngle,r.getElementRect=a.getElementRect,r.getElementClientRect=a.getElementClientRect,r.matchesSelector=a.matchesSelector,r.closest=a.closest,r.supportsTouch=function(){return i.supportsTouch},r.supportsPointerEvent=function(){return i.supportsPointerEvent},r.stop=function(e){for(var t=s.interactions.length-1;t>=0;t--)s.interactions[t].stop(e);return r},r.pointerMoveTolerance=function(e){return a.is.number(e)?(l.pointerMoveTolerance=e,r):l.pointerMoveTolerance},r.addDocument=s.addDocument,r.removeDocument=s.removeDocument,s.interact=r,t.exports=r},{"./Interactable":4,"./Interaction":5,"./scope":33,"./utils":44,"./utils/browser":36,"./utils/events":40}],22:[function(e,t,n){"use strict";function r(e){var t=e.interaction,n=e.event;t.target&&t.target.checkAndPreventDefault(n)}var i=e("./Interactable"),o=e("./Interaction"),a=e("./scope"),s=e("./utils/is"),c=e("./utils/events"),l=e("./utils/browser"),u=e("./utils/domUtils"),d=u.nodeContains,p=u.matchesSelector;i.prototype.preventDefault=function(e){return/^(always|never|auto)$/.test(e)?(this.options.preventDefault=e,this):s.bool(e)?(this.options.preventDefault=e?"always":"never",this):this.options.preventDefault},i.prototype.checkAndPreventDefault=function(e){var t=this.options.preventDefault;if("never"!==t)return"always"===t?void e.preventDefault():void(c.supportsPassive&&/^touch(start|move)$/.test(e.type)&&!l.isIOS||/^(mouse|pointer|touch)*(down|start)/i.test(e.type)||s.element(e.target)&&p(e.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||e.preventDefault())};for(var f=["down","move","up","cancel"],h=0;h<f.length;h++){var v=f[h];o.signals.on(v,r)}o.docEvents.dragstart=function(e){for(var t=0;t<a.interactions.length;t++){var n;n=a.interactions[t];var r=n;if(r.element&&(r.element===e.target||d(r.element,e.target)))return void r.target.checkAndPreventDefault(e)}}},{"./Interactable":4,"./Interaction":5,"./scope":33,"./utils/browser":36,"./utils/domUtils":39,"./utils/events":40,"./utils/is":46}],23:[function(e,t,n){"use strict";function r(e,t,n){return e&&e.enabled&&(t||!e.endOnly)&&(!n||e.endOnly)}var i=e("../InteractEvent"),o=e("../Interaction"),a=e("../utils/extend"),s={names:[],setOffsets:function(e){var t=e.interaction,n=e.pageCoords,r=t.target,i=t.element,o=t.startOffset,a=r.getRect(i);a?(o.left=n.x-a.left,o.top=n.y-a.top,o.right=a.right-n.x,o.bottom=a.bottom-n.y,"width"in a||(a.width=a.right-a.left),"height"in a||(a.height=a.bottom-a.top)):o.left=o.top=o.right=o.bottom=0,e.rect=a,e.interactable=r,e.element=i;for(var c=0;c<s.names.length;c++){var l;l=s.names[c];var u=l;e.options=r.options[t.prepared.name][u],e.options&&(t.modifierOffsets[u]=s[u].setOffset(e))}},setAll:function(e){var t=e.interaction,n=e.statuses,i=e.preEnd,o=e.requireEndOnly,c={dx:0,dy:0,changed:!1,locked:!1,shouldMove:!0};e.modifiedCoords=a({},e.pageCoords);for(var l=0;l<s.names.length;l++){var u;u=s.names[l];var d=u,p=s[d],f=t.target.options[t.prepared.name][d];r(f,i,o)&&(e.status=e.status=n[d],e.options=f,e.offset=e.interaction.modifierOffsets[d],p.set(e),e.status.locked&&(e.modifiedCoords.x+=e.status.dx,e.modifiedCoords.y+=e.status.dy,c.dx+=e.status.dx,c.dy+=e.status.dy,c.locked=!0))}return c.shouldMove=!e.status||!c.locked||e.status.changed,c},resetStatuses:function(e){for(var t=0;t<s.names.length;t++){var n;n=s.names[t];var r=n,i=e[r]||{};i.dx=i.dy=0,i.modifiedX=i.modifiedY=NaN,i.locked=!1,i.changed=!0,e[r]=i}return e},start:function(e,t){var n=e.interaction,r={interaction:n,pageCoords:("action-resume"===t?n.curCoords:n.startCoords).page,startOffset:n.startOffset,statuses:n.modifierStatuses,preEnd:!1,requireEndOnly:!1};s.setOffsets(r),s.resetStatuses(r.statuses),r.pageCoords=a({},n.startCoords.page),n.modifierResult=s.setAll(r)},beforeMove:function(e){var t=e.interaction,n=e.preEnd,r=e.interactingBeforeMove,i=s.setAll({interaction:t,preEnd:n,pageCoords:t.curCoords.page,statuses:t.modifierStatuses,requireEndOnly:!1});!i.shouldMove&&r&&(t._dontFireMove=!0),t.modifierResult=i},end:function(e){for(var t=e.interaction,n=e.event,i=0;i<s.names.length;i++){var o;o=s.names[i];var a=o;if(r(t.target.options[t.prepared.name][a],!0,!0)){t.doMove({event:n,preEnd:!0});break}}},setXY:function(e){for(var t=e.iEvent,n=e.interaction,r=a({},e),i=0;i<s.names.length;i++){var o=s.names[i];if(r.options=n.target.options[n.prepared.name][o],r.options){var c=s[o];r.status=n.modifierStatuses[o],t[o]=c.modifyCoords(r)}}}};o.signals.on("new",function(e){e.startOffset={left:0,right:0,top:0,bottom:0},e.modifierOffsets={},e.modifierStatuses=s.resetStatuses({}),e.modifierResult=null}),o.signals.on("action-start",s.start),o.signals.on("action-resume",s.start),o.signals.on("before-action-move",s.beforeMove),o.signals.on("action-end",s.end),i.signals.on("set-xy",s.setXY),t.exports=s},{"../InteractEvent":3,"../Interaction":5,"../utils/extend":41}],24:[function(e,t,n){"use strict";function r(e,t,n){return o.is.function(e)?o.resolveRectLike(e,t.target,t.element,[n.x,n.y,t]):o.resolveRectLike(e,t.target,t.element)}var i=e("./base"),o=e("../utils"),a=e("../defaultOptions"),s={defaults:{enabled:!1,endOnly:!1,restriction:null,elementRect:null},setOffset:function(e){var t=e.rect,n=e.startOffset,r=e.options,i=r&&r.elementRect,o={};return t&&i?(o.left=n.left-t.width*i.left,o.top=n.top-t.height*i.top,o.right=n.right-t.width*(1-i.right),o.bottom=n.bottom-t.height*(1-i.bottom)):o.left=o.top=o.right=o.bottom=0,o},set:function(e){var t=e.modifiedCoords,n=e.interaction,i=e.status,a=e.options;if(!a)return i;var s=i.useStatusXY?{x:i.x,y:i.y}:o.extend({},t),c=r(a.restriction,n,s);if(!c)return i;i.dx=0,i.dy=0,i.locked=!1;var l=c,u=s.x,d=s.y,p=n.modifierOffsets.restrict;"x"in c&&"y"in c?(u=Math.max(Math.min(l.x+l.width-p.right,s.x),l.x+p.left),d=Math.max(Math.min(l.y+l.height-p.bottom,s.y),l.y+p.top)):(u=Math.max(Math.min(l.right-p.right,s.x),l.left+p.left),d=Math.max(Math.min(l.bottom-p.bottom,s.y),l.top+p.top)),i.dx=u-s.x,i.dy=d-s.y,i.changed=i.modifiedX!==u||i.modifiedY!==d,i.locked=!(!i.dx&&!i.dy),i.modifiedX=u,i.modifiedY=d},modifyCoords:function(e){var t=e.page,n=e.client,r=e.status,i=e.phase,o=e.options,a=o&&o.elementRect;if(o&&o.enabled&&("start"!==i||!a||!r.locked)&&r.locked)return t.x+=r.dx,t.y+=r.dy,n.x+=r.dx,n.y+=r.dy,{dx:r.dx,dy:r.dy}},getRestrictionRect:r};i.restrict=s,i.names.push("restrict"),a.perAction.restrict=s.defaults,t.exports=s},{"../defaultOptions":18,"../utils":44,"./base":23}],25:[function(e,t,n){"use strict";var r=e("./base"),i=e("../utils"),o=e("../utils/rect"),a=e("../defaultOptions"),s=e("../actions/resize"),c=e("./restrict"),l=c.getRestrictionRect,u={top:1/0,left:1/0,bottom:-1/0,right:-1/0},d={top:-1/0,left:-1/0,bottom:1/0,right:1/0},p={defaults:{enabled:!1,endOnly:!1,min:null,max:null,offset:null},setOffset:function(e){var t=e.interaction,n=e.startOffset,r=e.options;if(!r)return i.extend({},n);var o=l(r.offset,t,t.startCoords.page);return o?{top:n.top+o.y,left:n.left+o.x,bottom:n.bottom+o.y,right:n.right+o.x}:n},set:function(e){var t=e.modifiedCoords,n=e.interaction,r=e.status,a=e.offset,s=e.options,c=n.prepared.linkedEdges||n.prepared.edges;if(n.interacting()&&c){var p=r.useStatusXY?{x:r.x,y:r.y}:i.extend({},t),f=o.xywhToTlbr(l(s.inner,n,p))||u,h=o.xywhToTlbr(l(s.outer,n,p))||d,v=p.x,g=p.y;r.dx=0,r.dy=0,r.locked=!1,c.top?g=Math.min(Math.max(h.top+a.top,p.y),f.top+a.top):c.bottom&&(g=Math.max(Math.min(h.bottom-a.bottom,p.y),f.bottom-a.bottom)),c.left?v=Math.min(Math.max(h.left+a.left,p.x),f.left+a.left):c.right&&(v=Math.max(Math.min(h.right-a.right,p.x),f.right-a.right)),r.dx=v-p.x,r.dy=g-p.y,r.changed=r.modifiedX!==v||r.modifiedY!==g,r.locked=!(!r.dx&&!r.dy),r.modifiedX=v,r.modifiedY=g}},modifyCoords:function(e){var t=e.page,n=e.client,r=e.status,i=e.phase,o=e.options;if(o&&o.enabled&&("start"!==i||!r.locked)&&r.locked)return t.x+=r.dx,t.y+=r.dy,n.x+=r.dx,n.y+=r.dy,{dx:r.dx,dy:r.dy}},noInner:u,noOuter:d,getRestrictionRect:l};r.restrictEdges=p,r.names.push("restrictEdges"),a.perAction.restrictEdges=p.defaults,s.defaults.restrictEdges=p.defaults,t.exports=p},{"../actions/resize":10,"../defaultOptions":18,"../utils":44,"../utils/rect":51,"./base":23,"./restrict":24}],26:[function(e,t,n){"use strict";var r=e("./base"),i=e("./restrictEdges"),o=e("../utils"),a=e("../utils/rect"),s=e("../defaultOptions"),c=e("../actions/resize"),l={width:-1/0,height:-1/0},u={width:1/0,height:1/0},d={defaults:{enabled:!1,endOnly:!1,min:null,max:null},setOffset:function(e){return e.interaction.startOffset},set:function(e){var t=e.interaction,n=e.options,r=t.prepared.linkedEdges||t.prepared.edges;if(t.interacting()&&r){var s=a.xywhToTlbr(t.resizeRects.inverted),c=a.tlbrToXywh(i.getRestrictionRect(n.min,t))||l,d=a.tlbrToXywh(i.getRestrictionRect(n.max,t))||u;e.options={enabled:n.enabled,endOnly:n.endOnly,inner:o.extend({},i.noInner),outer:o.extend({},i.noOuter)},r.top?(e.options.inner.top=s.bottom-c.height,e.options.outer.top=s.bottom-d.height):r.bottom&&(e.options.inner.bottom=s.top+c.height,e.options.outer.bottom=s.top+d.height),r.left?(e.options.inner.left=s.right-c.width,e.options.outer.left=s.right-d.width):r.right&&(e.options.inner.right=s.left+c.width,e.options.outer.right=s.left+d.width),i.set(e)}},modifyCoords:i.modifyCoords};r.restrictSize=d,r.names.push("restrictSize"),s.perAction.restrictSize=d.defaults,c.defaults.restrictSize=d.defaults,t.exports=d},{"../actions/resize":10,"../defaultOptions":18,"../utils":44,"../utils/rect":51,"./base":23,"./restrictEdges":25}],27:[function(e,t,n){"use strict";var r=e("./base"),i=e("../interact"),o=e("../utils"),a=e("../defaultOptions"),s={defaults:{enabled:!1,endOnly:!1,range:1/0,targets:null,offsets:null,relativePoints:null},setOffset:function(e){var t=e.interaction,n=e.interactable,r=e.element,i=e.rect,a=e.startOffset,s=e.options,c=[],l=o.rectToXY(o.resolveRectLike(s.origin)),u=l||o.getOriginXY(n,r,t.prepared.name);s=s||n.options[t.prepared.name].snap||{};var d=void 0;if("startCoords"===s.offset)d={x:t.startCoords.page.x-u.x,y:t.startCoords.page.y-u.y};else{var p=o.resolveRectLike(s.offset,n,r,[t]);d=o.rectToXY(p)||{x:0,y:0}}if(i&&s.relativePoints&&s.relativePoints.length)for(var f=0;f<s.relativePoints.length;f++){var h;h=s.relativePoints[f];var v=h,g=v.x,m=v.y;c.push({x:a.left-i.width*g+d.x,y:a.top-i.height*m+d.y})}else c.push(d);return c},set:function(e){var t=e.interaction,n=e.modifiedCoords,r=e.status,i=e.options,a=e.offset,s=[],c=void 0,l=void 0,u=void 0;if(r.useStatusXY)l={x:r.x,y:r.y};else{var d=o.getOriginXY(t.target,t.element,t.prepared.name);l=o.extend({},n),l.x-=d.x,l.y-=d.y}r.realX=l.x,r.realY=l.y;for(var p=i.targets?i.targets.length:0,f=0;f<a.length;f++){var h;h=a[f];for(var v=h,g=v.x,m=v.y,y=l.x-g,b=l.y-m,x=0;x<(i.targets||[]).length;x++){var w;w=(i.targets||[])[x];var _=w;c=o.is.function(_)?_(y,b,t):_,c&&s.push({x:o.is.number(c.x)?c.x+g:y,y:o.is.number(c.y)?c.y+m:b,range:o.is.number(c.range)?c.range:i.range})}}var C={target:null,inRange:!1,distance:0,range:0,dx:0,dy:0};for(u=0,p=s.length;u<p;u++){c=s[u];var E=c.range,T=c.x-l.x,S=c.y-l.y,I=o.hypot(T,S),A=I<=E;E===1/0&&C.inRange&&C.range!==1/0&&(A=!1),C.target&&!(A?C.inRange&&E!==1/0?I/E<C.distance/C.range:E===1/0&&C.range!==1/0||I<C.distance:!C.inRange&&I<C.distance)||(C.target=c,C.distance=I,C.range=E,C.inRange=A,C.dx=T,C.dy=S,r.range=E)}var O=void 0;C.target?(O=r.modifiedX!==C.target.x||r.modifiedY!==C.target.y,r.modifiedX=C.target.x,r.modifiedY=C.target.y):(O=!0,r.modifiedX=NaN,r.modifiedY=NaN),r.dx=C.dx,r.dy=C.dy,r.changed=O||C.inRange&&!r.locked,r.locked=C.inRange},modifyCoords:function(e){var t=e.page,n=e.client,r=e.status,i=e.phase,o=e.options,a=o&&o.relativePoints;if(o&&o.enabled&&("start"!==i||!a||!a.length))return r.locked&&(t.x+=r.dx,t.y+=r.dy,n.x+=r.dx,n.y+=r.dy),{range:r.range,locked:r.locked,x:r.modifiedX,y:r.modifiedY,realX:r.realX,realY:r.realY,dx:r.dx,dy:r.dy}}};i.createSnapGrid=function(e){return function(t,n){var r=e.limits||{left:-1/0,right:1/0,top:-1/0,bottom:1/0},i=0,a=0;o.is.object(e.offset)&&(i=e.offset.x,a=e.offset.y);var s=Math.round((t-i)/e.x),c=Math.round((n-a)/e.y);return{x:Math.max(r.left,Math.min(r.right,s*e.x+i)),y:Math.max(r.top,Math.min(r.bottom,c*e.y+a)),range:e.range}}},r.snap=s,r.names.push("snap"),a.perAction.snap=s.defaults,t.exports=s},{"../defaultOptions":18,"../interact":21,"../utils":44,"./base":23}],28:[function(e,t,n){"use strict";var r=e("./base"),i=e("./snap"),o=e("../defaultOptions"),a=e("../actions/resize"),s=e("../utils/"),c={defaults:{enabled:!1,endOnly:!1,range:1/0,targets:null,offsets:null},setOffset:function(e){var t=e.interaction,n=e.options,r=t.prepared.edges;if(r){e.options={relativePoints:[{x:r.left?0:1,y:r.top?0:1}],origin:{x:0,y:0},offset:"self",range:n.range};var o=i.setOffset(e);return e.options=n,o}},set:function(e){var t=e.interaction,n=e.options,r=e.offset,o=e.modifiedCoords,a=s.extend({},o),c=a.x-r[0].x,l=a.y-r[0].y;e.options=s.extend({},n),e.options.targets=[];for(var u=0;u<(n.targets||[]).length;u++){var d;d=(n.targets||[])[u];var p=d,f=void 0;f=s.is.function(p)?p(c,l,t):p,f&&("width"in f&&"height"in f&&(f.x=f.width,f.y=f.height),e.options.targets.push(f))}i.set(e)},modifyCoords:function(e){var t=e.options;e.options=s.extend({},t),e.options.enabled=t.enabled,e.options.relativePoints=[null],i.modifyCoords(e)}};r.snapSize=c,r.names.push("snapSize"),o.perAction.snapSize=c.defaults,a.defaults.snapSize=c.defaults,t.exports=c},{"../actions/resize":10,"../defaultOptions":18,"../utils/":44,"./base":23,"./snap":27}],29:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=e("../utils/pointerUtils");t.exports=function(){function e(t,n,o,a,s){if(r(this,e),i.pointerExtend(this,o),o!==n&&i.pointerExtend(this,n),this.interaction=s,this.timeStamp=(new Date).getTime(),this.originalEvent=o,this.type=t,this.pointerId=i.getPointerId(n),this.pointerType=i.getPointerType(n),this.target=a,this.currentTarget=null,"tap"===t){var c=s.getPointerIndex(n);this.dt=this.timeStamp-s.downTimes[c];var l=this.timeStamp-s.tapTime;this.double=!!(s.prevTap&&"doubletap"!==s.prevTap.type&&s.prevTap.target===this.target&&l<500)}else"doubletap"===t&&(this.dt=n.timeStamp-s.tapTime)}return e.prototype.subtractOrigin=function(e){var t=e.x,n=e.y;return this.pageX-=t,this.pageY-=n,this.clientX-=t,this.clientY-=n,this},e.prototype.addOrigin=function(e){var t=e.x,n=e.y;return this.pageX+=t,this.pageY+=n,this.clientX+=t,this.clientY+=n,this},e.prototype.preventDefault=function(){this.originalEvent.preventDefault()},e.prototype.stopPropagation=function(){this.propagationStopped=!0},e.prototype.stopImmediatePropagation=function(){this.immediatePropagationStopped=this.propagationStopped=!0},e}()},{"../utils/pointerUtils":49}],30:[function(e,t,n){"use strict";function r(e){for(var t=e.interaction,n=e.pointer,a=e.event,c=e.eventTarget,u=e.type,d=void 0===u?e.pointerEvent.type:u,p=e.targets,f=void 0===p?i(e):p,h=e.pointerEvent,v=void 0===h?new o(d,n,a,c,t):h,g={interaction:t,pointer:n,event:a,eventTarget:c,targets:f,type:d,pointerEvent:v},m=0;m<f.length;m++){var y=f[m];for(var b in y.props||{})v[b]=y.props[b];var x=s.getOriginXY(y.eventable,y.element);if(v.subtractOrigin(x),v.eventable=y.eventable,v.currentTarget=y.element,y.eventable.fire(v),v.addOrigin(x),v.immediatePropagationStopped||v.propagationStopped&&m+1<f.length&&f[m+1].element!==v.currentTarget)break}if(l.fire("fired",g),"tap"===d){var w=v.double?r({interaction:t,pointer:n,event:a,eventTarget:c,type:"doubletap"}):v;t.prevTap=w,t.tapTime=w.timeStamp}return v}function i(e){var t=e.interaction,n=e.pointer,r=e.event,i=e.eventTarget,o=e.type,a=t.getPointerIndex(n);if("tap"===o&&(t.pointerWasMoved||!t.downTargets[a]||t.downTargets[a]!==i))return[];for(var c=s.getPath(i),u={interaction:t,pointer:n,event:r,eventTarget:i,type:o,path:c,targets:[],element:null},d=0;d<c.length;d++){var p;p=c[d];var f=p;u.element=f,l.fire("collect-targets",u)}return"hold"===o&&(u.targets=u.targets.filter(function(e){return e.eventable.options.holdDuration===t.holdTimers[a].duration})),u.targets}var o=e("./PointerEvent"),a=e("../Interaction"),s=e("../utils"),c=e("../defaultOptions"),l=e("../utils/Signals").new(),u=["down","up","cancel"],d=["down","up","cancel"],p={PointerEvent:o,fire:r,collectEventTargets:i,signals:l,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:["down","move","up","cancel","tap","doubletap","hold"]};a.signals.on("update-pointer-down",function(e){var t=e.interaction,n=e.pointerIndex;t.holdTimers[n]={duration:1/0,timeout:null}}),a.signals.on("remove-pointer",function(e){var t=e.interaction,n=e.pointerIndex;t.holdTimers.splice(n,1)}),a.signals.on("move",function(e){var t=e.interaction,n=e.pointer,i=e.event,o=e.eventTarget,a=e.duplicateMove,s=t.getPointerIndex(n);a||t.pointerIsDown&&!t.pointerWasMoved||(t.pointerIsDown&&clearTimeout(t.holdTimers[s].timeout),r({interaction:t,pointer:n,event:i,eventTarget:o,type:"move"}))}),a.signals.on("down",function(e){for(var t=e.interaction,n=e.pointer,i=e.event,o=e.eventTarget,a=e.pointerIndex,c=t.holdTimers[a],u=s.getPath(o),d={interaction:t,pointer:n,event:i,eventTarget:o,type:"hold",targets:[],path:u,element:null},p=0;p<u.length;p++){var f;f=u[p];var h=f;d.element=h,l.fire("collect-targets",d)}if(d.targets.length){for(var v=1/0,g=0;g<d.targets.length;g++){var m;m=d.targets[g];var y=m,b=y.eventable.options.holdDuration;b<v&&(v=b)}c.duration=v,c.timeout=setTimeout(function(){r({interaction:t,eventTarget:o,pointer:n,event:i,type:"hold"})},v)}}),a.signals.on("up",function(e){var t=e.interaction,n=e.pointer,i=e.event,o=e.eventTarget;t.pointerWasMoved||r({interaction:t,eventTarget:o,pointer:n,event:i,type:"tap"})});for(var f=["up","cancel"],h=0;h<f.length;h++){var v=f[h];a.signals.on(v,function(e){var t=e.interaction,n=e.pointerIndex;t.holdTimers[n]&&clearTimeout(t.holdTimers[n].timeout)})}for(var g=0;g<u.length;g++)a.signals.on(u[g],function(e){return function(t){var n=t.interaction,i=t.pointer,o=t.event;r({interaction:n,eventTarget:t.eventTarget,pointer:i,event:o,type:e})}}(d[g]));a.signals.on("new",function(e){e.prevTap=null,e.tapTime=0,e.holdTimers=[]}),c.pointerEvents=p.defaults,t.exports=p},{"../Interaction":5,"../defaultOptions":18,"../utils":44,"../utils/Signals":34,"./PointerEvent":29}],31:[function(e,t,n){"use strict";function r(e){var t=e.pointerEvent;"hold"===t.type&&(t.count=(t.count||0)+1)}function i(e){var t=e.interaction,n=e.pointerEvent,r=e.eventTarget,i=e.targets;if("hold"===n.type&&i.length){var o=i[0].eventable.options.holdRepeatInterval;o<=0||(t.holdIntervalHandle=setTimeout(function(){a.fire({interaction:t,eventTarget:r,type:"hold",pointer:n,event:n})},o))}}function o(e){var t=e.interaction;t.holdIntervalHandle&&(clearInterval(t.holdIntervalHandle),t.holdIntervalHandle=null)}var a=e("./base"),s=e("../Interaction");a.signals.on("new",r),a.signals.on("fired",i);for(var c=["move","up","cancel","endall"],l=0;l<c.length;l++){var u=c[l];s.signals.on(u,o)}a.defaults.holdRepeatInterval=0,a.types.push("holdrepeat"),t.exports={onNew:r,onFired:i,endHoldRepeat:o}},{"../Interaction":5,"./base":30}],32:[function(e,t,n){"use strict";var r=e("./base"),i=e("../Interactable"),o=e("../utils/is"),a=e("../scope"),s=e("../utils/extend"),c=e("../utils/arr"),l=c.merge;r.signals.on("collect-targets",function(e){var t=e.targets,n=e.element,r=e.type,i=e.eventTarget;a.interactables.forEachMatch(n,function(e){var a=e.events,s=a.options;a[r]&&o.element(n)&&e.testIgnoreAllow(s,n,i)&&t.push({element:n,eventable:a,props:{interactable:e}})})}),i.signals.on("new",function(e){var t=e.interactable;t.events.getRect=function(e){return t.getRect(e)}}),i.signals.on("set",function(e){var t=e.interactable,n=e.options;s(t.events.options,r.defaults),s(t.events.options,n)}),l(i.eventTypes,r.types),i.prototype.pointerEvents=function(e){return s(this.events.options,e),this};var u=i.prototype._backCompatOption;i.prototype._backCompatOption=function(e,t){var n=u.call(this,e,t);return n===this&&(this.events.options[e]=t),n},i.settingsMethods.push("pointerEvents")},{"../Interactable":4,"../scope":33,"../utils/arr":35,"../utils/extend":41,"../utils/is":46,"./base":30}],33:[function(e,t,n){"use strict";var r=e("./utils"),i=e("./utils/events"),o=e("./utils/Signals").new(),a=e("./utils/window"),s=a.getWindow,c={signals:o,events:i,utils:r,document:e("./utils/domObjects").document,documents:[],addDocument:function(e,t){if(r.contains(c.documents,e))return!1;t=t||s(e),c.documents.push(e),i.documents.push(e),e!==c.document&&i.add(t,"unload",c.onWindowUnload),o.fire("add-document",{doc:e,win:t})},removeDocument:function(e,t){var n=c.documents.indexOf(e);t=t||s(e),i.remove(t,"unload",c.onWindowUnload),c.documents.splice(n,1),i.documents.splice(n,1),o.fire("remove-document",{win:t,doc:e})},onWindowUnload:function(){c.removeDocument(this.document,this)}};t.exports=c},{"./utils":44,"./utils/Signals":34,"./utils/domObjects":38,"./utils/events":40,"./utils/window":52}],34:[function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(){r(this,e),this.listeners={}}return e.prototype.on=function(e,t){if(!this.listeners[e])return void(this.listeners[e]=[t]);this.listeners[e].push(t)},e.prototype.off=function(e,t){if(this.listeners[e]){var n=this.listeners[e].indexOf(t);-1!==n&&this.listeners[e].splice(n,1)}},e.prototype.fire=function(e,t){var n=this.listeners[e];if(n)for(var r=0;r<n.length;r++){var i;i=n[r];var o=i;if(!1===o(t,e))return}},e}();i.new=function(){return new i},t.exports=i},{}],35:[function(e,t,n){"use strict";function r(e,t){return-1!==e.indexOf(t)}function i(e,t){for(var n=0;n<t.length;n++){var r;r=t[n];var i=r;e.push(i)}return e}t.exports={contains:r,merge:i}},{}],36:[function(e,t,n){"use strict";var r=e("./window"),i=r.window,o=e("./is"),a=e("./domObjects"),s=a.Element,c=i.navigator,l={supportsTouch:!!("ontouchstart"in i||o.function(i.DocumentTouch)&&a.document instanceof i.DocumentTouch),supportsPointerEvent:!!a.PointerEvent,isIOS:/iP(hone|od|ad)/.test(c.platform),isIOS7:/iP(hone|od|ad)/.test(c.platform)&&/OS 7[^\d]/.test(c.appVersion),isIe9:/MSIE 9/.test(c.userAgent),prefixedMatchesSelector:"matches"in s.prototype?"matches":"webkitMatchesSelector"in s.prototype?"webkitMatchesSelector":"mozMatchesSelector"in s.prototype?"mozMatchesSelector":"oMatchesSelector"in s.prototype?"oMatchesSelector":"msMatchesSelector",pEventTypes:a.PointerEvent?a.PointerEvent===i.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,wheelEvent:"onmousewheel"in a.document?"mousewheel":"wheel"};l.isOperaMobile="Opera"===c.appName&&l.supportsTouch&&c.userAgent.match("Presto"),t.exports=l},{"./domObjects":38,"./is":46,"./window":52}],37:[function(e,t,n){"use strict";var r=e("./is");t.exports=function e(t){var n={};for(var i in t)r.plainObject(t[i])?n[i]=e(t[i]):n[i]=t[i];return n}},{"./is":46}],38:[function(e,t,n){"use strict";function r(){}var i={},o=e("./window").window;i.document=o.document,i.DocumentFragment=o.DocumentFragment||r,i.SVGElement=o.SVGElement||r,i.SVGSVGElement=o.SVGSVGElement||r,i.SVGElementInstance=o.SVGElementInstance||r,i.Element=o.Element||r,i.HTMLElement=o.HTMLElement||i.Element,i.Event=o.Event,i.Touch=o.Touch||r,i.PointerEvent=o.PointerEvent||o.MSPointerEvent,t.exports=i},{"./window":52}],39:[function(e,t,n){"use strict";var r=e("./window"),i=e("./browser"),o=e("./is"),a=e("./domObjects"),s={nodeContains:function(e,t){for(;t;){if(t===e)return!0;t=t.parentNode}return!1},closest:function(e,t){for(;o.element(e);){if(s.matchesSelector(e,t))return e;e=s.parentNode(e)}return null},parentNode:function(e){var t=e.parentNode;if(o.docFrag(t)){for(;(t=t.host)&&o.docFrag(t););return t}return t},matchesSelector:function(e,t){return r.window!==r.realWindow&&(t=t.replace(/\/deep\//g," ")),e[i.prefixedMatchesSelector](t)},indexOfDeepestElement:function(e){var t=[],n=[],r=void 0,i=e[0],o=i?0:-1,s=void 0,c=void 0,l=void 0,u=void 0;for(l=1;l<e.length;l++)if((r=e[l])&&r!==i)if(i){if(r.parentNode!==r.ownerDocument)if(i.parentNode!==r.ownerDocument){if(!t.length)for(s=i;s.parentNode&&s.parentNode!==s.ownerDocument;)t.unshift(s),s=s.parentNode;if(i instanceof a.HTMLElement&&r instanceof a.SVGElement&&!(r instanceof a.SVGSVGElement)){if(r===i.parentNode)continue;s=r.ownerSVGElement}else s=r;for(n=[];s.parentNode!==s.ownerDocument;)n.unshift(s),s=s.parentNode;for(u=0;n[u]&&n[u]===t[u];)u++;var d=[n[u-1],n[u],t[u]];for(c=d[0].lastChild;c;){if(c===d[1]){i=r,o=l,t=[];break}if(c===d[2])break;c=c.previousSibling}}else i=r,o=l}else i=r,o=l;return o},matchesUpTo:function(e,t,n){for(;o.element(e);){if(s.matchesSelector(e,t))return!0;if((e=s.parentNode(e))===n)return s.matchesSelector(e,t)}return!1},getActualElement:function(e){return e instanceof a.SVGElementInstance?e.correspondingUseElement:e},getScrollXY:function(e){return e=e||r.window,{x:e.scrollX||e.document.documentElement.scrollLeft,y:e.scrollY||e.document.documentElement.scrollTop}},getElementClientRect:function(e){var t=e instanceof a.SVGElement?e.getBoundingClientRect():e.getClientRects()[0];return t&&{left:t.left,right:t.right,top:t.top,bottom:t.bottom,width:t.width||t.right-t.left,height:t.height||t.bottom-t.top}},getElementRect:function(e){var t=s.getElementClientRect(e);if(!i.isIOS7&&t){var n=s.getScrollXY(r.getWindow(e));t.left+=n.x,t.right+=n.x,t.top+=n.y,t.bottom+=n.y}return t},getPath:function(e){for(var t=[];e;)t.push(e),e=s.parentNode(e);return t},trySelector:function(e){return!!o.string(e)&&(a.document.querySelector(e),!0)}};t.exports=s},{"./browser":36,"./domObjects":38,"./is":46,"./window":52}],40:[function(e,t,n){"use strict";function r(e,t,n,r){var i=u(r),o=b.indexOf(e),a=x[o];a||(a={events:{},typeCount:0},o=b.push(e)-1,x.push(a)),a.events[t]||(a.events[t]=[],a.typeCount++),y(a.events[t],n)||(e.addEventListener(t,n,C?i:!!i.capture),a.events[t].push(n))}function i(e,t,n,r){var o=u(r),a=b.indexOf(e),s=x[a];if(s&&s.events)if("all"!==t){if(s.events[t]){var c=s.events[t].length;if("all"===n){for(var l=0;l<c;l++)i(e,t,s.events[t][l],o);return}for(var d=0;d<c;d++)if(s.events[t][d]===n){e.removeEventListener("on"+t,n,C?o:!!o.capture),s.events[t].splice(d,1);break}s.events[t]&&0===s.events[t].length&&(s.events[t]=null,s.typeCount--)}s.typeCount||(x.splice(a,1),b.splice(a,1))}else for(t in s.events)s.events.hasOwnProperty(t)&&i(e,t,"all")}function o(e,t,n,i,o){var a=u(o);if(!w[n]){w[n]={selectors:[],contexts:[],listeners:[]};for(var l=0;l<_.length;l++){var d=_[l];r(d,n,s),r(d,n,c,!0)}}var p=w[n],f=void 0;for(f=p.selectors.length-1;f>=0&&(p.selectors[f]!==e||p.contexts[f]!==t);f--);-1===f&&(f=p.selectors.length,p.selectors.push(e),p.contexts.push(t),p.listeners.push([])),p.listeners[f].push([i,!!a.capture,a.passive])}function a(e,t,n,r,o){var a=u(o),l=w[n],d=!1,p=void 0;if(l)for(p=l.selectors.length-1;p>=0;p--)if(l.selectors[p]===e&&l.contexts[p]===t){for(var f=l.listeners[p],h=f.length-1;h>=0;h--){var v=f[h],g=v[0],m=v[1],y=v[2];if(g===r&&m===!!a.capture&&y===a.passive){f.splice(h,1),f.length||(l.selectors.splice(p,1),l.contexts.splice(p,1),l.listeners.splice(p,1),i(t,n,s),i(t,n,c,!0),l.selectors.length||(w[n]=null)),d=!0;break}}if(d)break}}function s(e,t){var n=u(t),r={},i=w[e.type],o=f.getEventTargets(e),a=o[0],s=a;for(h(r,e),r.originalEvent=e,r.preventDefault=l;d.element(s);){for(var c=0;c<i.selectors.length;c++){var v=i.selectors[c],g=i.contexts[c];if(p.matchesSelector(s,v)&&p.nodeContains(g,a)&&p.nodeContains(g,s)){var m=i.listeners[c];r.currentTarget=s;for(var y=0;y<m.length;y++){var b=m[y],x=b[0],_=b[1],C=b[2];_===!!n.capture&&C===n.passive&&x(r)}}}s=p.parentNode(s)}}function c(e){return s.call(this,e,!0)}function l(){this.originalEvent.preventDefault()}function u(e){return d.object(e)?e:{capture:e}}var d=e("./is"),p=e("./domUtils"),f=e("./pointerUtils"),h=e("./pointerExtend"),v=e("./window"),g=v.window,m=e("./arr"),y=m.contains,b=[],x=[],w={},_=[],C=function(){var e=!1;return g.document.createElement("div").addEventListener("test",null,{get capture(){e=!0}}),e}();t.exports={add:r,remove:i,addDelegate:o,removeDelegate:a,delegateListener:s,delegateUseCapture:c,delegatedEvents:w,documents:_,supportsOptions:C,_elements:b,_targets:x}},{"./arr":35,"./domUtils":39,"./is":46,"./pointerExtend":48,"./pointerUtils":49,"./window":52}],41:[function(e,t,n){"use strict";t.exports=function(e,t){for(var n in t)e[n]=t[n];return e}},{}],42:[function(e,t,n){"use strict";var r=e("./rect"),i=r.resolveRectLike,o=r.rectToXY;t.exports=function(e,t,n){var r=e.options[n],a=r&&r.origin,s=a||e.options.origin,c=i(s,e,t,[e&&t]);return o(c)||{x:0,y:0}}},{"./rect":51}],43:[function(e,t,n){"use strict";t.exports=function(e,t){return Math.sqrt(e*e+t*t)}},{}],44:[function(e,t,n){"use strict";var r=e("./extend"),i=e("./window"),o={warnOnce:function(e,t){var n=!1;return function(){return n||(i.window.console.warn(t),n=!0),e.apply(this,arguments)}},_getQBezierValue:function(e,t,n,r){var i=1-e;return i*i*t+2*i*e*n+e*e*r},getQuadraticCurvePoint:function(e,t,n,r,i,a,s){return{x:o._getQBezierValue(s,e,n,i),y:o._getQBezierValue(s,t,r,a)}},easeOutQuad:function(e,t,n,r){return e/=r,-n*e*(e-2)+t},copyAction:function(e,t){return e.name=t.name,e.axis=t.axis,e.edges=t.edges,e},is:e("./is"),extend:r,hypot:e("./hypot"),getOriginXY:e("./getOriginXY")};r(o,e("./arr")),r(o,e("./domUtils")),r(o,e("./pointerUtils")),r(o,e("./rect")),t.exports=o},{"./arr":35,"./domUtils":39,"./extend":41,"./getOriginXY":42,"./hypot":43,"./is":46,"./pointerUtils":49,"./rect":51,"./window":52}],45:[function(e,t,n){"use strict";var r=e("../scope"),i=e("./index"),o={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(e,t,n){for(var r=i.getPointerType(e),a=i.getPointerId(e),s={pointer:e,pointerId:a,pointerType:r,eventType:t,eventTarget:n},c=0;c<o.methodOrder.length;c++){var l;l=o.methodOrder[c];var u=l,d=o[u](s);if(d)return d}},simulationResume:function(e){var t=e.pointerType,n=e.eventType,o=e.eventTarget;if(!/down|start/i.test(n))return null;for(var a=0;a<r.interactions.length;a++){var s;s=r.interactions[a];var c=s,l=o;if(c.simulation&&c.simulation.allowResume&&c.pointerType===t)for(;l;){if(l===c.element)return c;l=i.parentNode(l)}}return null},mouseOrPen:function(e){var t=e.pointerId,n=e.pointerType,o=e.eventType;if("mouse"!==n&&"pen"!==n)return null;for(var a=void 0,s=0;s<r.interactions.length;s++){var c;c=r.interactions[s];var l=c;if(l.pointerType===n){if(l.simulation&&!i.contains(l.pointerIds,t))continue;if(l.interacting())return l;a||(a=l)}}if(a)return a;for(var u=0;u<r.interactions.length;u++){var d;d=r.interactions[u];var p=d;if(!(p.pointerType!==n||/down/i.test(o)&&p.simulation))return p}return null},hasPointer:function(e){for(var t=e.pointerId,n=0;n<r.interactions.length;n++){var o;o=r.interactions[n];var a=o;if(i.contains(a.pointerIds,t))return a}},idle:function(e){for(var t=e.pointerType,n=0;n<r.interactions.length;n++){var i;i=r.interactions[n];var o=i;if(1===o.pointerIds.length){var a=o.target;if(a&&!a.options.gesture.enabled)continue}else if(o.pointerIds.length>=2)continue;if(!o.interacting()&&t===o.pointerType)return o}return null}};t.exports=o},{"../scope":33,"./index":44}],46:[function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=e("./window"),o=e("./isWindow"),a={array:function(){},window:function(e){return e===i.window||o(e)},docFrag:function(e){return a.object(e)&&11===e.nodeType},object:function(e){return!!e&&"object"===(void 0===e?"undefined":r(e))},function:function(e){return"function"==typeof e},number:function(e){return"number"==typeof e},bool:function(e){return"boolean"==typeof e},string:function(e){return"string"==typeof e},element:function(e){if(!e||"object"!==(void 0===e?"undefined":r(e)))return!1;var t=i.getWindow(e)||i.window;return/object|function/.test(r(t.Element))?e instanceof t.Element:1===e.nodeType&&"string"==typeof e.nodeName},plainObject:function(e){return a.object(e)&&"Object"===e.constructor.name}};a.array=function(e){return a.object(e)&&void 0!==e.length&&a.function(e.splice)},t.exports=a},{"./isWindow":47,"./window":52}],47:[function(e,t,n){"use strict";t.exports=function(e){return!(!e||!e.Window)&&e instanceof e.Window}},{}],48:[function(e,t,n){"use strict";function r(e,n){for(var r in n){var i=t.exports.prefixedPropREs,o=!1;for(var a in i)if(0===r.indexOf(a)&&i[a].test(r)){o=!0;break}o||"function"==typeof n[r]||(e[r]=n[r])}return e}r.prefixedPropREs={webkit:/(Movement[XY]|Radius[XY]|RotationAngle|Force)$/},t.exports=r},{}],49:[function(e,t,n){"use strict";var r=e("./hypot"),i=e("./browser"),o=e("./domObjects"),a=e("./domUtils"),s=e("./domObjects"),c=e("./is"),l=e("./pointerExtend"),u={copyCoords:function(e,t){e.page=e.page||{},e.page.x=t.page.x,e.page.y=t.page.y,e.client=e.client||{},e.client.x=t.client.x,e.client.y=t.client.y,e.timeStamp=t.timeStamp},setCoordDeltas:function(e,t,n){e.page.x=n.page.x-t.page.x,e.page.y=n.page.y-t.page.y,e.client.x=n.client.x-t.client.x,e.client.y=n.client.y-t.client.y,e.timeStamp=n.timeStamp-t.timeStamp;var i=Math.max(e.timeStamp/1e3,.001);e.page.speed=r(e.page.x,e.page.y)/i,e.page.vx=e.page.x/i,e.page.vy=e.page.y/i,e.client.speed=r(e.client.x,e.page.y)/i,e.client.vx=e.client.x/i,e.client.vy=e.client.y/i},isNativePointer:function(e){return e instanceof o.Event||e instanceof o.Touch},getXY:function(e,t,n){return n=n||{},e=e||"page",n.x=t[e+"X"],n.y=t[e+"Y"],n},getPageXY:function(e,t){return t=t||{},i.isOperaMobile&&u.isNativePointer(e)?(u.getXY("screen",e,t),t.x+=window.scrollX,t.y+=window.scrollY):u.getXY("page",e,t),t},getClientXY:function(e,t){return t=t||{},i.isOperaMobile&&u.isNativePointer(e)?u.getXY("screen",e,t):u.getXY("client",e,t),t},getPointerId:function(e){return c.number(e.pointerId)?e.pointerId:e.identifier},setCoords:function(e,t,n){var r=t.length>1?u.pointerAverage(t):t[0],i={};u.getPageXY(r,i),e.page.x=i.x,e.page.y=i.y,u.getClientXY(r,i),e.client.x=i.x,e.client.y=i.y,e.timeStamp=c.number(n)?n:(new Date).getTime()},pointerExtend:l,getTouchPair:function(e){var t=[];return c.array(e)?(t[0]=e[0],t[1]=e[1]):"touchend"===e.type?1===e.touches.length?(t[0]=e.touches[0],t[1]=e.changedTouches[0]):0===e.touches.length&&(t[0]=e.changedTouches[0],t[1]=e.changedTouches[1]):(t[0]=e.touches[0],t[1]=e.touches[1]),t},pointerAverage:function(e){for(var t={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},n=0;n<e.length;n++){var r;r=e[n];var i=r;for(var o in t)t[o]+=i[o]}for(var a in t)t[a]/=e.length;return t},touchBBox:function(e){if(e.length||e.touches&&e.touches.length>1){var t=u.getTouchPair(e),n=Math.min(t[0].pageX,t[1].pageX),r=Math.min(t[0].pageY,t[1].pageY);return{x:n,y:r,left:n,top:r,width:Math.max(t[0].pageX,t[1].pageX)-n,height:Math.max(t[0].pageY,t[1].pageY)-r}}},touchDistance:function(e,t){var n=t+"X",i=t+"Y",o=u.getTouchPair(e),a=o[0][n]-o[1][n],s=o[0][i]-o[1][i];return r(a,s)},touchAngle:function(e,t,n){var r=n+"X",i=n+"Y",o=u.getTouchPair(e),a=o[1][r]-o[0][r],s=o[1][i]-o[0][i];return 180*Math.atan2(s,a)/Math.PI},getPointerType:function(e){return c.string(e.pointerType)?e.pointerType:c.number(e.pointerType)?[void 0,void 0,"touch","pen","mouse"][e.pointerType]:/touch/.test(e.type)||e instanceof s.Touch?"touch":"mouse"},getEventTargets:function(e){var t=c.function(e.composedPath)?e.composedPath():e.path;return[a.getActualElement(t?t[0]:e.target),a.getActualElement(e.currentTarget)]}};t.exports=u},{"./browser":36,"./domObjects":38,"./domUtils":39,"./hypot":43,"./is":46,"./pointerExtend":48}],50:[function(e,t,n){"use strict";for(var r=e("./window"),i=r.window,o=["ms","moz","webkit","o"],a=0,s=void 0,c=void 0,l=0;l<o.length&&!i.requestAnimationFrame;l++)s=i[o[l]+"RequestAnimationFrame"],c=i[o[l]+"CancelAnimationFrame"]||i[o[l]+"CancelRequestAnimationFrame"];s||(s=function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-a)),r=setTimeout(function(){e(t+n)},n);return a=t+n,r}),c||(c=function(e){clearTimeout(e)}),t.exports={request:s,cancel:c}},{"./window":52}],51:[function(e,t,n){"use strict";var r=e("./extend"),i=e("./is"),o=e("./domUtils"),a=o.closest,s=o.parentNode,c=o.getElementRect,l={getStringOptionResult:function(e,t,n){return i.string(e)?e="parent"===e?s(n):"self"===e?t.getRect(n):a(n,e):null},resolveRectLike:function(e,t,n,r){return e=l.getStringOptionResult(e,t,n)||e,i.function(e)&&(e=e.apply(null,r)),i.element(e)&&(e=c(e)),e},rectToXY:function(e){return e&&{x:"x"in e?e.x:e.left,y:"y"in e?e.y:e.top}},xywhToTlbr:function(e){return!e||"left"in e&&"top"in e||(e=r({},e),e.left=e.x||0,e.top=e.y||0,e.right=e.right||e.left+e.width,e.bottom=e.bottom||e.top+e.height),e},tlbrToXywh:function(e){return!e||"x"in e&&"y"in e||(e=r({},e),e.x=e.left||0,e.top=e.top||0,e.width=e.width||e.right-e.x,e.height=e.height||e.bottom-e.y),e}};t.exports=l},{"./domUtils":39,"./extend":41,"./is":46}],52:[function(e,t,n){"use strict";function r(e){i.realWindow=e;var t=e.document.createTextNode("");t.ownerDocument!==e.document&&"function"==typeof e.wrap&&e.wrap(t)===t&&(e=e.wrap(e)),i.window=e}var i=t.exports,o=e("./isWindow");"undefined"==typeof window?(i.window=void 0,i.realWindow=void 0):r(window),i.getWindow=function(e){if(o(e))return e;var t=e.ownerDocument||e;return t.defaultView||t.parentWindow||i.window},i.init=r},{"./isWindow":47}]},{},[1])(1)})},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"item",staticClass:"vue-grid-item",class:{"vue-resizable":e.resizable,resizing:e.isResizing,"vue-draggable-dragging":e.isDragging,cssTransforms:e.useCssTransforms,"render-rtl":e.renderRtl,"disable-userselect":e.isDragging},style:e.style},[e._t("default"),e._v(" "),e.resizable?n("span",{ref:"handle",class:e.resizableHandleClass}):e._e()],2)},staticRenderFns:[]}},function(e,t,n){n(18);var r=n(4)(n(20),n(35),null,null);e.exports=r.exports},function(e,t,n){var r=n(19);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(3)("6c77225e",r,!0)},function(e,t,n){t=e.exports=n(2)(),t.push([e.i,".vue-grid-layout{position:relative;transition:height .2s ease}",""])},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n(21),o=r(i),a=n(0),s=n(1),c=r(s),l=n(6);t.default={name:"GridLayout",provide:function(){return{eventBus:null}},components:{GridItem:c.default},props:{autoSize:{type:Boolean,default:!0},colNum:{type:Number,default:12},rowHeight:{type:Number,default:150},maxRows:{type:Number,default:1/0},margin:{type:Array,default:function(){return[10,10]}},isDraggable:{type:Boolean,default:!0},isResizable:{type:Boolean,default:!0},isMirrored:{type:Boolean,default:!1},useCssTransforms:{type:Boolean,default:!0},verticalCompact:{type:Boolean,default:!0},layout:{type:Array,required:!0}},data:function(){return{width:null,mergedStyle:{},lastLayoutLength:0,isDragging:!1,placeholder:{x:0,y:0,w:0,h:0,i:-1}}},created:function(){var e=this;e.resizeEventHandler=function(t,n,r,i,o,a){e.resizeEvent(t,n,r,i,o,a)},e.dragEventHandler=function(t,n,r,i,o,a){e.dragEvent(t,n,r,i,o,a)},e._provided.eventBus=new o.default,e.eventBus=e._provided.eventBus,e.eventBus.$on("resizeEvent",e.resizeEventHandler),e.eventBus.$on("dragEvent",e.dragEventHandler)},beforeDestroy:function(){this.eventBus.$off("resizeEvent",self.resizeEventHandler),this.eventBus.$off("dragEvent",self.dragEventHandler),window.removeEventListener("resize",self.onWindowResize)},mounted:function(){this.$nextTick(function(){(0,a.validateLayout)(this.layout);var e=this;this.$nextTick(function(){null===e.width&&(e.onWindowResize(),window.addEventListener("resize",e.onWindowResize)),(0,a.compact)(e.layout,e.verticalCompact),e.updateHeight(),e.$nextTick(function(){l({strategy:"scroll"}).listenTo(e.$refs.item,function(t){e.onWindowResize()})})}),window.onload=function(){null===e.width&&(e.onWindowResize(),window.addEventListener("resize",e.onWindowResize)),(0,a.compact)(e.layout,e.verticalCompact),e.updateHeight(),e.$nextTick(function(){l({strategy:"scroll"}).listenTo(e.$refs.item,function(t){e.onWindowResize()})})}})},watch:{width:function(){this.$nextTick(function(){this.eventBus.$emit("updateWidth",this.width),this.updateHeight()})},layout:function(){this.layoutUpdate()},colNum:function(e){this.eventBus.$emit("setColNum",e)},rowHeight:function(){this.eventBus.$emit("setRowHeight",this.rowHeight)},isDraggable:function(){this.eventBus.$emit("setDraggable",this.isDraggable)},isResizable:function(){this.eventBus.$emit("setResizable",this.isResizable)}},methods:{layoutUpdate:function(){void 0!==this.layout&&(this.layout.length!==this.lastLayoutLength&&(this.lastLayoutLength=this.layout.length),(0,a.compact)(this.layout,this.verticalCompact),this.eventBus.$emit("updateWidth",this.width),this.updateHeight())},updateHeight:function(){this.mergedStyle={height:this.containerHeight()}},onWindowResize:function(){null!==this.$refs&&null!==this.$refs.item&&void 0!==this.$refs.item&&(this.width=this.$refs.item.offsetWidth)},containerHeight:function(){if(this.autoSize)return(0,a.bottom)(this.layout)*(this.rowHeight+this.margin[1])+this.margin[1]+"px"},dragEvent:function(e,t,n,r,i,o){"dragmove"===e||"dragstart"===e?(this.placeholder.i=t,this.placeholder.x=n,this.placeholder.y=r,this.placeholder.w=o,this.placeholder.h=i,this.$nextTick(function(){this.isDragging=!0}),this.eventBus.$emit("updateWidth",this.width)):this.$nextTick(function(){this.isDragging=!1});var s=(0,a.getLayoutItem)(this.layout,t);void 0!==s&&null!==s||(s={x:0,y:0}),s.x=n,s.y=r,this.layout=(0,a.moveElement)(this.layout,s,n,r,!0),(0,a.compact)(this.layout,this.verticalCompact),this.eventBus.$emit("compact"),this.updateHeight(),"dragend"===e&&this.$emit("layout-updated",this.layout)},resizeEvent:function(e,t,n,r,i,o){"resizestart"===e||"resizemove"===e?(this.placeholder.i=t,this.placeholder.x=n,this.placeholder.y=r,this.placeholder.w=o,this.placeholder.h=i,this.$nextTick(function(){this.isDragging=!0}),this.eventBus.$emit("updateWidth",this.width)):this.$nextTick(function(){this.isDragging=!1});var s=(0,a.getLayoutItem)(this.layout,t);void 0!==s&&null!==s||(s={h:0,w:0}),s.h=i,s.w=o,(0,a.compact)(this.layout,this.verticalCompact),this.eventBus.$emit("compact"),this.updateHeight(),"resizeend"===e&&this.$emit("layout-updated",this.layout)}}}},function(e,t,n){"use strict";(function(t,n){function r(e){return void 0===e||null===e}function i(e){return void 0!==e&&null!==e}function o(e){return!0===e}function a(e){return!1===e}function s(e){return"string"==typeof e||"number"==typeof e||"symbol"==typeof e||"boolean"==typeof e}function c(e){return null!==e&&"object"==typeof e}function l(e){return"[object Object]"===no.call(e)}function u(e){return"[object RegExp]"===no.call(e)}function d(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function p(e){return null==e?"":"object"==typeof e?JSON.stringify(e,null,2):String(e)}function f(e){var t=parseFloat(e);return isNaN(t)?e:t}function h(e,t){for(var n=Object.create(null),r=e.split(","),i=0;i<r.length;i++)n[r[i]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}function v(e,t){if(e.length){var n=e.indexOf(t);if(n>-1)return e.splice(n,1)}}function g(e,t){return oo.call(e,t)}function m(e){var t=Object.create(null);return function(n){return t[n]||(t[n]=e(n))}}function y(e,t){function n(n){var r=arguments.length;return r?r>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function b(e,t){t=t||0;for(var n=e.length-t,r=new Array(n);n--;)r[n]=e[n+t];return r}function x(e,t){for(var n in t)e[n]=t[n];return e}function w(e){for(var t={},n=0;n<e.length;n++)e[n]&&x(t,e[n]);return t}function _(e,t,n){}function C(e,t){if(e===t)return!0;var n=c(e),r=c(t);if(!n||!r)return!n&&!r&&String(e)===String(t);try{var i=Array.isArray(e),o=Array.isArray(t);if(i&&o)return e.length===t.length&&e.every(function(e,n){return C(e,t[n])});if(i||o)return!1;var a=Object.keys(e),s=Object.keys(t);return a.length===s.length&&a.every(function(n){return C(e[n],t[n])})}catch(e){return!1}}function E(e,t){for(var n=0;n<e.length;n++)if(C(e[n],t))return n;return-1}function T(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}function S(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function I(e,t,n,r){Object.defineProperty(e,t,{value:n,enumerable:!!r,writable:!0,configurable:!0})}function A(e){if(!yo.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}function O(e){return"function"==typeof e&&/native code/.test(e.toString())}function k(e){Lo.target&&Ho.push(Lo.target),Lo.target=e}function D(){Lo.target=Ho.pop()}function $(e){return new Wo(void 0,void 0,void 0,String(e))}function z(e,t){var n=e.componentOptions,r=new Wo(e.tag,e.data,e.children,e.text,e.elm,e.context,n,e.asyncFactory);return r.ns=e.ns,r.isStatic=e.isStatic,r.key=e.key,r.isComment=e.isComment,r.fnContext=e.fnContext,r.fnOptions=e.fnOptions,r.fnScopeId=e.fnScopeId,r.isCloned=!0,t&&(e.children&&(r.children=M(e.children,!0)),n&&n.children&&(n.children=M(n.children,!0))),r}function M(e,t){for(var n=e.length,r=new Array(n),i=0;i<n;i++)r[i]=z(e[i],t);return r}function R(e,t,n){e.__proto__=t}function P(e,t,n){for(var r=0,i=n.length;r<i;r++){var o=n[r];I(e,o,t[o])}}function N(e,t){if(c(e)&&!(e instanceof Wo)){var n;return g(e,"__ob__")&&e.__ob__ instanceof Vo?n=e.__ob__:Go.shouldConvert&&!Mo()&&(Array.isArray(e)||l(e))&&Object.isExtensible(e)&&!e._isVue&&(n=new Vo(e)),t&&n&&n.vmCount++,n}}function j(e,t,n,r,i){var o=new Lo,a=Object.getOwnPropertyDescriptor(e,t);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,l=!i&&N(n);Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=s?s.call(e):n;return Lo.target&&(o.depend(),l&&(l.dep.depend(),Array.isArray(t)&&W(t))),t},set:function(t){var r=s?s.call(e):n;t===r||t!==t&&r!==r||(c?c.call(e,t):n=t,l=!i&&N(t),o.notify())}})}}function L(e,t,n){if(Array.isArray(e)&&d(t))return e.length=Math.max(e.length,t),e.splice(t,1,n),n;if(t in e&&!(t in Object.prototype))return e[t]=n,n;var r=e.__ob__;return e._isVue||r&&r.vmCount?n:r?(j(r.value,t,n),r.dep.notify(),n):(e[t]=n,n)}function H(e,t){if(Array.isArray(e)&&d(t))return void e.splice(t,1);var n=e.__ob__;e._isVue||n&&n.vmCount||g(e,t)&&(delete e[t],n&&n.dep.notify())}function W(e){for(var t=void 0,n=0,r=e.length;n<r;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),Array.isArray(t)&&W(t)}function B(e,t){if(!t)return e;for(var n,r,i,o=Object.keys(t),a=0;a<o.length;a++)n=o[a],r=e[n],i=t[n],g(e,n)?l(r)&&l(i)&&B(r,i):L(e,n,i);return e}function X(e,t,n){return n?function(){var r="function"==typeof t?t.call(n,n):t,i="function"==typeof e?e.call(n,n):e;return r?B(r,i):i}:t?e?function(){return B("function"==typeof t?t.call(this,this):t,"function"==typeof e?e.call(this,this):e)}:t:e}function Y(e,t){return t?e?e.concat(t):Array.isArray(t)?t:[t]:e}function F(e,t,n,r){var i=Object.create(e||null);return t?x(i,t):i}function U(e,t){var n=e.props;if(n){var r,i,o,a={};if(Array.isArray(n))for(r=n.length;r--;)"string"==typeof(i=n[r])&&(o=so(i),a[o]={type:null});else if(l(n))for(var s in n)i=n[s],o=so(s),a[o]=l(i)?i:{type:i};e.props=a}}function G(e,t){var n=e.inject;if(n){var r=e.inject={};if(Array.isArray(n))for(var i=0;i<n.length;i++)r[n[i]]={from:n[i]};else if(l(n))for(var o in n){var a=n[o];r[o]=l(a)?x({from:o},a):{from:a}}}}function V(e){var t=e.directives;if(t)for(var n in t){var r=t[n];"function"==typeof r&&(t[n]={bind:r,update:r})}}function Z(e,t,n){function r(r){var i=Zo[r]||Ko;c[r]=i(e[r],t[r],n,r)}"function"==typeof t&&(t=t.options),U(t,n),G(t,n),V(t);var i=t.extends;if(i&&(e=Z(e,i,n)),t.mixins)for(var o=0,a=t.mixins.length;o<a;o++)e=Z(e,t.mixins[o],n);var s,c={};for(s in e)r(s);for(s in t)g(e,s)||r(s);return c}function q(e,t,n,r){if("string"==typeof n){var i=e[t];if(g(i,n))return i[n];var o=so(n);if(g(i,o))return i[o];var a=co(o);if(g(i,a))return i[a];return i[n]||i[o]||i[a]}}function J(e,t,n,r){var i=t[e],o=!g(n,e),a=n[e];if(ee(Boolean,i.type)&&(o&&!g(i,"default")?a=!1:ee(String,i.type)||""!==a&&a!==uo(e)||(a=!0)),void 0===a){a=K(r,i,e);var s=Go.shouldConvert;Go.shouldConvert=!0,N(a),Go.shouldConvert=s}return a}function K(e,t,n){if(g(t,"default")){var r=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:"function"==typeof r&&"Function"!==Q(t.type)?r.call(e):r}}function Q(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}function ee(e,t){if(!Array.isArray(t))return Q(t)===Q(e);for(var n=0,r=t.length;n<r;n++)if(Q(t[n])===Q(e))return!0;return!1}function te(e,t,n){if(t)for(var r=t;r=r.$parent;){var i=r.$options.errorCaptured;if(i)for(var o=0;o<i.length;o++)try{var a=!1===i[o].call(r,e,t,n);if(a)return}catch(e){ne(e,r,"errorCaptured hook")}}ne(e,t,n)}function ne(e,t,n){if(mo.errorHandler)try{return mo.errorHandler.call(null,e,t,n)}catch(e){re(e,null,"config.errorHandler")}re(e,t,n)}function re(e,t,n){if(!xo&&!wo||"undefined"==typeof console)throw e;console.error(e)}function ie(){ea=!1;var e=Qo.slice(0);Qo.length=0;for(var t=0;t<e.length;t++)e[t]()}function oe(e){return e._withTask||(e._withTask=function(){ta=!0;var t=e.apply(null,arguments);return ta=!1,t})}function ae(e,t){var n;if(Qo.push(function(){if(e)try{e.call(t)}catch(e){te(e,t,"nextTick")}else n&&n(t)}),ea||(ea=!0,ta?Jo():qo()),!e&&"undefined"!=typeof Promise)return new Promise(function(e){n=e})}function se(e){ce(e,aa),aa.clear()}function ce(e,t){var n,r,i=Array.isArray(e);if((i||c(e))&&!Object.isFrozen(e)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o))return;t.add(o)}if(i)for(n=e.length;n--;)ce(e[n],t);else for(r=Object.keys(e),n=r.length;n--;)ce(e[r[n]],t)}}function le(e){function t(){var e=arguments,n=t.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),i=0;i<r.length;i++)r[i].apply(null,e)}return t.fns=e,t}function ue(e,t,n,i,o){var a,s,c,l;for(a in e)s=e[a],c=t[a],l=sa(a),r(s)||(r(c)?(r(s.fns)&&(s=e[a]=le(s)),n(l.name,s,l.once,l.capture,l.passive,l.params)):s!==c&&(c.fns=s,e[a]=c));for(a in t)r(e[a])&&(l=sa(a),i(l.name,t[a],l.capture))}function de(e,t,n){function a(){n.apply(this,arguments),v(s.fns,a)}e instanceof Wo&&(e=e.data.hook||(e.data.hook={}));var s,c=e[t];r(c)?s=le([a]):i(c.fns)&&o(c.merged)?(s=c,s.fns.push(a)):s=le([c,a]),s.merged=!0,e[t]=s}function pe(e,t,n){var o=t.options.props;if(!r(o)){var a={},s=e.attrs,c=e.props;if(i(s)||i(c))for(var l in o){var u=uo(l);fe(a,c,l,u,!0)||fe(a,s,l,u,!1)}return a}}function fe(e,t,n,r,o){if(i(t)){if(g(t,n))return e[n]=t[n],o||delete t[n],!0;if(g(t,r))return e[n]=t[r],o||delete t[r],!0}return!1}function he(e){for(var t=0;t<e.length;t++)if(Array.isArray(e[t]))return Array.prototype.concat.apply([],e);return e}function ve(e){return s(e)?[$(e)]:Array.isArray(e)?me(e):void 0}function ge(e){return i(e)&&i(e.text)&&a(e.isComment)}function me(e,t){var n,a,c,l,u=[];for(n=0;n<e.length;n++)a=e[n],r(a)||"boolean"==typeof a||(c=u.length-1,l=u[c],Array.isArray(a)?a.length>0&&(a=me(a,(t||"")+"_"+n),ge(a[0])&&ge(l)&&(u[c]=$(l.text+a[0].text),a.shift()),u.push.apply(u,a)):s(a)?ge(l)?u[c]=$(l.text+a):""!==a&&u.push($(a)):ge(a)&&ge(l)?u[c]=$(l.text+a.text):(o(e._isVList)&&i(a.tag)&&r(a.key)&&i(t)&&(a.key="__vlist"+t+"_"+n+"__"),u.push(a)));return u}function ye(e,t){return(e.__esModule||Po&&"Module"===e[Symbol.toStringTag])&&(e=e.default),c(e)?t.extend(e):e}function be(e,t,n,r,i){var o=Xo();return o.asyncFactory=e,o.asyncMeta={data:t,context:n,children:r,tag:i},o}function xe(e,t,n){if(o(e.error)&&i(e.errorComp))return e.errorComp;if(i(e.resolved))return e.resolved;if(o(e.loading)&&i(e.loadingComp))return e.loadingComp;if(!i(e.contexts)){var a=e.contexts=[n],s=!0,l=function(){for(var e=0,t=a.length;e<t;e++)a[e].$forceUpdate()},u=T(function(n){e.resolved=ye(n,t),s||l()}),d=T(function(t){i(e.errorComp)&&(e.error=!0,l())}),p=e(u,d);return c(p)&&("function"==typeof p.then?r(e.resolved)&&p.then(u,d):i(p.component)&&"function"==typeof p.component.then&&(p.component.then(u,d),i(p.error)&&(e.errorComp=ye(p.error,t)),i(p.loading)&&(e.loadingComp=ye(p.loading,t),0===p.delay?e.loading=!0:setTimeout(function(){r(e.resolved)&&r(e.error)&&(e.loading=!0,l())},p.delay||200)),i(p.timeout)&&setTimeout(function(){r(e.resolved)&&d(null)},p.timeout))),s=!1,e.loading?e.loadingComp:e.resolved}e.contexts.push(n)}function we(e){return e.isComment&&e.asyncFactory}function _e(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(i(n)&&(i(n.componentOptions)||we(n)))return n}}function Ce(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&Se(e,t)}function Ee(e,t,n){n?oa.$once(e,t):oa.$on(e,t)}function Te(e,t){oa.$off(e,t)}function Se(e,t,n){oa=e,ue(t,n||{},Ee,Te,e),oa=void 0}function Ie(e,t){var n={};if(!e)return n;for(var r=0,i=e.length;r<i;r++){var o=e[r],a=o.data;if(a&&a.attrs&&a.attrs.slot&&delete a.attrs.slot,o.context!==t&&o.fnContext!==t||!a||null==a.slot)(n.default||(n.default=[])).push(o);else{var s=a.slot,c=n[s]||(n[s]=[]);"template"===o.tag?c.push.apply(c,o.children||[]):c.push(o)}}for(var l in n)n[l].every(Ae)&&delete n[l];return n}function Ae(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Oe(e,t){t=t||{};for(var n=0;n<e.length;n++)Array.isArray(e[n])?Oe(e[n],t):t[e[n].key]=e[n].fn;return t}function ke(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function De(e,t,n){e.$el=t,e.$options.render||(e.$options.render=Xo),Pe(e,"beforeMount");var r;return r=function(){e._update(e._render(),n)},new ga(e,r,_,null,!0),n=!1,null==e.$vnode&&(e._isMounted=!0,Pe(e,"mounted")),e}function $e(e,t,n,r,i){var o=!!(i||e.$options._renderChildren||r.data.scopedSlots||e.$scopedSlots!==to);if(e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=i,e.$attrs=r.data&&r.data.attrs||to,e.$listeners=n||to,t&&e.$options.props){Go.shouldConvert=!1;for(var a=e._props,s=e.$options._propKeys||[],c=0;c<s.length;c++){var l=s[c];a[l]=J(l,e.$options.props,t,e)}Go.shouldConvert=!0,e.$options.propsData=t}if(n){var u=e.$options._parentListeners;e.$options._parentListeners=n,Se(e,n,u)}o&&(e.$slots=Ie(i,r.context),e.$forceUpdate())}function ze(e){for(;e&&(e=e.$parent);)if(e._inactive)return!0;return!1}function Me(e,t){if(t){if(e._directInactive=!1,ze(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Me(e.$children[n]);Pe(e,"activated")}}function Re(e,t){if(!(t&&(e._directInactive=!0,ze(e))||e._inactive)){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Re(e.$children[n]);Pe(e,"deactivated")}}function Pe(e,t){var n=e.$options[t];if(n)for(var r=0,i=n.length;r<i;r++)try{n[r].call(e)}catch(n){te(n,e,t+" hook")}e._hasHookEvent&&e.$emit("hook:"+t)}function Ne(){ha=la.length=ua.length=0,da={},pa=fa=!1}function je(){fa=!0;var e,t;for(la.sort(function(e,t){return e.id-t.id}),ha=0;ha<la.length;ha++)e=la[ha],t=e.id,da[t]=null,e.run();var n=ua.slice(),r=la.slice();Ne(),We(n),Le(r),Ro&&mo.devtools&&Ro.emit("flush")}function Le(e){for(var t=e.length;t--;){var n=e[t],r=n.vm;r._watcher===n&&r._isMounted&&Pe(r,"updated")}}function He(e){e._inactive=!1,ua.push(e)}function We(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Me(e[t],!0)}function Be(e){var t=e.id;if(null==da[t]){if(da[t]=!0,fa){for(var n=la.length-1;n>ha&&la[n].id>e.id;)n--;la.splice(n+1,0,e)}else la.push(e);pa||(pa=!0,ae(je))}}function Xe(e,t,n){ma.get=function(){return this[t][n]},ma.set=function(e){this[t][n]=e},Object.defineProperty(e,n,ma)}function Ye(e){e._watchers=[];var t=e.$options;t.props&&Fe(e,t.props),t.methods&&Je(e,t.methods),t.data?Ue(e):N(e._data={},!0),t.computed&&Ve(e,t.computed),t.watch&&t.watch!==Oo&&Ke(e,t.watch)}function Fe(e,t){var n=e.$options.propsData||{},r=e._props={},i=e.$options._propKeys=[],o=!e.$parent;Go.shouldConvert=o;for(var a in t)!function(o){i.push(o);var a=J(o,t,n,e);j(r,o,a),o in e||Xe(e,"_props",o)}(a);Go.shouldConvert=!0}function Ue(e){var t=e.$options.data;t=e._data="function"==typeof t?Ge(t,e):t||{},l(t)||(t={});for(var n=Object.keys(t),r=e.$options.props,i=(e.$options.methods,n.length);i--;){var o=n[i];r&&g(r,o)||S(o)||Xe(e,"_data",o)}N(t,!0)}function Ge(e,t){try{return e.call(t,t)}catch(e){return te(e,t,"data()"),{}}}function Ve(e,t){var n=e._computedWatchers=Object.create(null),r=Mo();for(var i in t){var o=t[i],a="function"==typeof o?o:o.get;r||(n[i]=new ga(e,a||_,_,ya)),i in e||Ze(e,i,o)}}function Ze(e,t,n){var r=!Mo();"function"==typeof n?(ma.get=r?qe(t):n,ma.set=_):(ma.get=n.get?r&&!1!==n.cache?qe(t):n.get:_,ma.set=n.set?n.set:_),Object.defineProperty(e,t,ma)}function qe(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),Lo.target&&t.depend(),t.value}}function Je(e,t){e.$options.props;for(var n in t)e[n]=null==t[n]?_:y(t[n],e)}function Ke(e,t){for(var n in t){var r=t[n];if(Array.isArray(r))for(var i=0;i<r.length;i++)Qe(e,n,r[i]);else Qe(e,n,r)}}function Qe(e,t,n,r){return l(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=e[n]),e.$watch(t,n,r)}function et(e){var t=e.$options.provide;t&&(e._provided="function"==typeof t?t.call(e):t)}function tt(e){var t=nt(e.$options.inject,e);t&&(Go.shouldConvert=!1,Object.keys(t).forEach(function(n){j(e,n,t[n])}),Go.shouldConvert=!0)}function nt(e,t){if(e){for(var n=Object.create(null),r=Po?Reflect.ownKeys(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}):Object.keys(e),i=0;i<r.length;i++){for(var o=r[i],a=e[o].from,s=t;s;){if(s._provided&&a in s._provided){n[o]=s._provided[a];break}s=s.$parent}if(!s&&"default"in e[o]){var c=e[o].default;n[o]="function"==typeof c?c.call(t):c}}return n}}function rt(e,t){var n,r,o,a,s;if(Array.isArray(e)||"string"==typeof e)for(n=new Array(e.length),r=0,o=e.length;r<o;r++)n[r]=t(e[r],r);else if("number"==typeof e)for(n=new Array(e),r=0;r<e;r++)n[r]=t(r+1,r);else if(c(e))for(a=Object.keys(e),n=new Array(a.length),r=0,o=a.length;r<o;r++)s=a[r],n[r]=t(e[s],s,r);return i(n)&&(n._isVList=!0),n}function it(e,t,n,r){var i,o=this.$scopedSlots[e];if(o)n=n||{},r&&(n=x(x({},r),n)),i=o(n)||t;else{var a=this.$slots[e];a&&(a._rendered=!0),i=a||t}var s=n&&n.slot;return s?this.$createElement("template",{slot:s},i):i}function ot(e){return q(this.$options,"filters",e,!0)||fo}function at(e,t,n,r){var i=mo.keyCodes[t]||n;return i?Array.isArray(i)?-1===i.indexOf(e):i!==e:r?uo(r)!==t:void 0}function st(e,t,n,r,i){if(n)if(c(n)){Array.isArray(n)&&(n=w(n));var o;for(var a in n)!function(a){if("class"===a||"style"===a||io(a))o=e;else{var s=e.attrs&&e.attrs.type;o=r||mo.mustUseProp(t,s,a)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}if(!(a in o)&&(o[a]=n[a],i)){(e.on||(e.on={}))["update:"+a]=function(e){n[a]=e}}}(a)}else;return e}function ct(e,t){var n=this._staticTrees||(this._staticTrees=[]),r=n[e];return r&&!t?Array.isArray(r)?M(r):z(r):(r=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,null,this),ut(r,"__static__"+e,!1),r)}function lt(e,t,n){return ut(e,"__once__"+t+(n?"_"+n:""),!0),e}function ut(e,t,n){if(Array.isArray(e))for(var r=0;r<e.length;r++)e[r]&&"string"!=typeof e[r]&&dt(e[r],t+"_"+r,n);else dt(e,t,n)}function dt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function pt(e,t){if(t)if(l(t)){var n=e.on=e.on?x({},e.on):{};for(var r in t){var i=n[r],o=t[r];n[r]=i?[].concat(i,o):o}}else;return e}function ft(e){e._o=lt,e._n=f,e._s=p,e._l=rt,e._t=it,e._q=C,e._i=E,e._m=ct,e._f=ot,e._k=at,e._b=st,e._v=$,e._e=Xo,e._u=Oe,e._g=pt}function ht(e,t,n,r,i){var a=i.options;this.data=e,this.props=t,this.children=n,this.parent=r,this.listeners=e.on||to,this.injections=nt(a.inject,r),this.slots=function(){return Ie(n,r)};var s=Object.create(r),c=o(a._compiled),l=!c;c&&(this.$options=a,this.$slots=this.slots(),this.$scopedSlots=e.scopedSlots||to),a._scopeId?this._c=function(e,t,n,i){var o=_t(s,e,t,n,i,l);return o&&(o.fnScopeId=a._scopeId,o.fnContext=r),o}:this._c=function(e,t,n,r){return _t(s,e,t,n,r,l)}}function vt(e,t,n,r,o){var a=e.options,s={},c=a.props;if(i(c))for(var l in c)s[l]=J(l,c,t||to);else i(n.attrs)&&gt(s,n.attrs),i(n.props)&&gt(s,n.props);var u=new ht(n,s,o,r,e),d=a.render.call(null,u._c,u);return d instanceof Wo&&(d.fnContext=r,d.fnOptions=a,n.slot&&((d.data||(d.data={})).slot=n.slot)),d}function gt(e,t){for(var n in t)e[so(n)]=t[n]}function mt(e,t,n,a,s){if(!r(e)){var l=n.$options._base;if(c(e)&&(e=l.extend(e)),"function"==typeof e){var u;if(r(e.cid)&&(u=e,void 0===(e=xe(u,l,n))))return be(u,t,n,a,s);t=t||{},It(e),i(t.model)&&wt(e.options,t);var d=pe(t,e,s);if(o(e.options.functional))return vt(e,d,t,n,a);var p=t.on;if(t.on=t.nativeOn,o(e.options.abstract)){var f=t.slot;t={},f&&(t.slot=f)}bt(t);var h=e.options.name||s;return new Wo("vue-component-"+e.cid+(h?"-"+h:""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:d,listeners:p,tag:s,children:a},u)}}}function yt(e,t,n,r){var o={_isComponent:!0,parent:t,_parentVnode:e,_parentElm:n||null,_refElm:r||null},a=e.data.inlineTemplate;return i(a)&&(o.render=a.render,o.staticRenderFns=a.staticRenderFns),new e.componentOptions.Ctor(o)}function bt(e){e.hook||(e.hook={});for(var t=0;t<xa.length;t++){var n=xa[t],r=e.hook[n],i=ba[n];e.hook[n]=r?xt(i,r):i}}function xt(e,t){return function(n,r,i,o){e(n,r,i,o),t(n,r,i,o)}}function wt(e,t){var n=e.model&&e.model.prop||"value",r=e.model&&e.model.event||"input";(t.props||(t.props={}))[n]=t.model.value;var o=t.on||(t.on={});i(o[r])?o[r]=[t.model.callback].concat(o[r]):o[r]=t.model.callback}function _t(e,t,n,r,i,a){return(Array.isArray(n)||s(n))&&(i=r,r=n,n=void 0),o(a)&&(i=_a),Ct(e,t,n,r,i)}function Ct(e,t,n,r,o){if(i(n)&&i(n.__ob__))return Xo();if(i(n)&&i(n.is)&&(t=n.is),!t)return Xo();Array.isArray(r)&&"function"==typeof r[0]&&(n=n||{},n.scopedSlots={default:r[0]},r.length=0),o===_a?r=ve(r):o===wa&&(r=he(r));var a,s;if("string"==typeof t){var c;s=e.$vnode&&e.$vnode.ns||mo.getTagNamespace(t),a=mo.isReservedTag(t)?new Wo(mo.parsePlatformTagName(t),n,r,void 0,void 0,e):i(c=q(e.$options,"components",t))?mt(c,n,e,r,t):new Wo(t,n,r,void 0,void 0,e)}else a=mt(t,n,e,r);return i(a)?(s&&Et(a,s),a):Xo()}function Et(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),i(e.children))for(var a=0,s=e.children.length;a<s;a++){var c=e.children[a];i(c.tag)&&(r(c.ns)||o(n))&&Et(c,t,n)}}function Tt(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,r=n&&n.context;e.$slots=Ie(t._renderChildren,r),e.$scopedSlots=to,e._c=function(t,n,r,i){return _t(e,t,n,r,i,!1)},e.$createElement=function(t,n,r,i){return _t(e,t,n,r,i,!0)};var i=n&&n.data;j(e,"$attrs",i&&i.attrs||to,null,!0),j(e,"$listeners",t._parentListeners||to,null,!0)}function St(e,t){var n=e.$options=Object.create(e.constructor.options),r=t._parentVnode;n.parent=t.parent,n._parentVnode=r,n._parentElm=t._parentElm,n._refElm=t._refElm;var i=r.componentOptions;n.propsData=i.propsData,n._parentListeners=i.listeners,n._renderChildren=i.children,n._componentTag=i.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function It(e){var t=e.options;if(e.super){var n=It(e.super);if(n!==e.superOptions){e.superOptions=n;var r=At(e);r&&x(e.extendOptions,r),t=e.options=Z(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function At(e){var t,n=e.options,r=e.extendOptions,i=e.sealedOptions;for(var o in n)n[o]!==i[o]&&(t||(t={}),t[o]=Ot(n[o],r[o],i[o]));return t}function Ot(e,t,n){if(Array.isArray(e)){var r=[];n=Array.isArray(n)?n:[n],t=Array.isArray(t)?t:[t];for(var i=0;i<e.length;i++)(t.indexOf(e[i])>=0||n.indexOf(e[i])<0)&&r.push(e[i]);return r}return e}function kt(e){this._init(e)}function Dt(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=b(arguments,1);return n.unshift(this),"function"==typeof e.install?e.install.apply(e,n):"function"==typeof e&&e.apply(null,n),t.push(e),this}}function $t(e){e.mixin=function(e){return this.options=Z(this.options,e),this}}function zt(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,r=n.cid,i=e._Ctor||(e._Ctor={});if(i[r])return i[r];var o=e.name||n.options.name,a=function(e){this._init(e)};return a.prototype=Object.create(n.prototype),a.prototype.constructor=a,a.cid=t++,a.options=Z(n.options,e),a.super=n,a.options.props&&Mt(a),a.options.computed&&Rt(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,vo.forEach(function(e){a[e]=n[e]}),o&&(a.options.components[o]=a),a.superOptions=n.options,a.extendOptions=e,a.sealedOptions=x({},a.options),i[r]=a,a}}function Mt(e){var t=e.options.props;for(var n in t)Xe(e.prototype,"_props",n)}function Rt(e){var t=e.options.computed;for(var n in t)Ze(e.prototype,n,t[n])}function Pt(e){vo.forEach(function(t){e[t]=function(e,n){return n?("component"===t&&l(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&"function"==typeof n&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}})}function Nt(e){return e&&(e.Ctor.options.name||e.tag)}function jt(e,t){return Array.isArray(e)?e.indexOf(t)>-1:"string"==typeof e?e.split(",").indexOf(t)>-1:!!u(e)&&e.test(t)}function Lt(e,t){var n=e.cache,r=e.keys,i=e._vnode;for(var o in n){var a=n[o];if(a){var s=Nt(a.componentOptions);s&&!t(s)&&Ht(n,o,r,i)}}}function Ht(e,t,n,r){var i=e[t];!i||r&&i.tag===r.tag||i.componentInstance.$destroy(),e[t]=null,v(n,t)}function Wt(e){for(var t=e.data,n=e,r=e;i(r.componentInstance);)(r=r.componentInstance._vnode)&&r.data&&(t=Bt(r.data,t));for(;i(n=n.parent);)n&&n.data&&(t=Bt(t,n.data));return Xt(t.staticClass,t.class)}function Bt(e,t){return{staticClass:Yt(e.staticClass,t.staticClass),class:i(e.class)?[e.class,t.class]:t.class}}function Xt(e,t){return i(e)||i(t)?Yt(e,Ft(t)):""}function Yt(e,t){return e?t?e+" "+t:e:t||""}function Ft(e){return Array.isArray(e)?Ut(e):c(e)?Gt(e):"string"==typeof e?e:""}function Ut(e){for(var t,n="",r=0,o=e.length;r<o;r++)i(t=Ft(e[r]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function Gt(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}function Vt(e){return Ga(e)?"svg":"math"===e?"math":void 0}function Zt(e){if(!xo)return!0;if(Za(e))return!1;if(e=e.toLowerCase(),null!=qa[e])return qa[e];var t=document.createElement(e);return e.indexOf("-")>-1?qa[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:qa[e]=/HTMLUnknownElement/.test(t.toString())}function qt(e){if("string"==typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function Jt(e,t){var n=document.createElement(e);return"select"!==e?n:(t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n)}function Kt(e,t){return document.createElementNS(Fa[e],t)}function Qt(e){return document.createTextNode(e)}function en(e){return document.createComment(e)}function tn(e,t,n){e.insertBefore(t,n)}function nn(e,t){e.removeChild(t)}function rn(e,t){e.appendChild(t)}function on(e){return e.parentNode}function an(e){return e.nextSibling}function sn(e){return e.tagName}function cn(e,t){e.textContent=t}function ln(e,t,n){e.setAttribute(t,n)}function un(e,t){var n=e.data.ref;if(n){var r=e.context,i=e.componentInstance||e.elm,o=r.$refs;t?Array.isArray(o[n])?v(o[n],i):o[n]===i&&(o[n]=void 0):e.data.refInFor?Array.isArray(o[n])?o[n].indexOf(i)<0&&o[n].push(i):o[n]=[i]:o[n]=i}}function dn(e,t){return e.key===t.key&&(e.tag===t.tag&&e.isComment===t.isComment&&i(e.data)===i(t.data)&&pn(e,t)||o(e.isAsyncPlaceholder)&&e.asyncFactory===t.asyncFactory&&r(t.asyncFactory.error))}function pn(e,t){if("input"!==e.tag)return!0;var n,r=i(n=e.data)&&i(n=n.attrs)&&n.type,o=i(n=t.data)&&i(n=n.attrs)&&n.type;return r===o||Ja(r)&&Ja(o)}function fn(e,t,n){var r,o,a={};for(r=t;r<=n;++r)o=e[r].key,i(o)&&(a[o]=r);return a}function hn(e,t){(e.data.directives||t.data.directives)&&vn(e,t)}function vn(e,t){var n,r,i,o=e===es,a=t===es,s=gn(e.data.directives,e.context),c=gn(t.data.directives,t.context),l=[],u=[];for(n in c)r=s[n],i=c[n],r?(i.oldValue=r.value,yn(i,"update",t,e),i.def&&i.def.componentUpdated&&u.push(i)):(yn(i,"bind",t,e),i.def&&i.def.inserted&&l.push(i));if(l.length){var d=function(){for(var n=0;n<l.length;n++)yn(l[n],"inserted",t,e)};o?de(t,"insert",d):d()}if(u.length&&de(t,"postpatch",function(){for(var n=0;n<u.length;n++)yn(u[n],"componentUpdated",t,e)}),!o)for(n in s)c[n]||yn(s[n],"unbind",e,e,a)}function gn(e,t){var n=Object.create(null);if(!e)return n;var r,i;for(r=0;r<e.length;r++)i=e[r],i.modifiers||(i.modifiers=rs),n[mn(i)]=i,i.def=q(t.$options,"directives",i.name,!0);return n}function mn(e){return e.rawName||e.name+"."+Object.keys(e.modifiers||{}).join(".")}function yn(e,t,n,r,i){var o=e.def&&e.def[t];if(o)try{o(n.elm,e,n,r,i)}catch(r){te(r,n.context,"directive "+e.name+" "+t+" hook")}}function bn(e,t){var n=t.componentOptions;if(!(i(n)&&!1===n.Ctor.options.inheritAttrs||r(e.data.attrs)&&r(t.data.attrs))){var o,a,s=t.elm,c=e.data.attrs||{},l=t.data.attrs||{};i(l.__ob__)&&(l=t.data.attrs=x({},l));for(o in l)a=l[o],c[o]!==a&&xn(s,o,a);(Eo||So)&&l.value!==c.value&&xn(s,"value",l.value);for(o in c)r(l[o])&&(Ba(o)?s.removeAttributeNS(Wa,Xa(o)):La(o)||s.removeAttribute(o))}}function xn(e,t,n){if(Ha(t))Ya(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n));else if(La(t))e.setAttribute(t,Ya(n)||"false"===n?"false":"true");else if(Ba(t))Ya(n)?e.removeAttributeNS(Wa,Xa(t)):e.setAttributeNS(Wa,t,n);else if(Ya(n))e.removeAttribute(t);else{if(Eo&&!To&&"TEXTAREA"===e.tagName&&"placeholder"===t&&!e.__ieph){var r=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",r)};e.addEventListener("input",r),e.__ieph=!0}e.setAttribute(t,n)}}function wn(e,t){var n=t.elm,o=t.data,a=e.data;if(!(r(o.staticClass)&&r(o.class)&&(r(a)||r(a.staticClass)&&r(a.class)))){var s=Wt(t),c=n._transitionClasses;i(c)&&(s=Yt(s,Ft(c))),s!==n._prevClass&&(n.setAttribute("class",s),n._prevClass=s)}}function _n(e){function t(){(a||(a=[])).push(e.slice(h,i).trim()),h=i+1}var n,r,i,o,a,s=!1,c=!1,l=!1,u=!1,d=0,p=0,f=0,h=0;for(i=0;i<e.length;i++)if(r=n,n=e.charCodeAt(i),s)39===n&&92!==r&&(s=!1);else if(c)34===n&&92!==r&&(c=!1);else if(l)96===n&&92!==r&&(l=!1);else if(u)47===n&&92!==r&&(u=!1);else if(124!==n||124===e.charCodeAt(i+1)||124===e.charCodeAt(i-1)||d||p||f){switch(n){case 34:c=!0;break;case 39:s=!0;break;case 96:l=!0;break;case 40:f++;break;case 41:f--;break;case 91:p++;break;case 93:p--;break;case 123:d++;break;case 125:d--}if(47===n){for(var v=i-1,g=void 0;v>=0&&" "===(g=e.charAt(v));v--);g&&ss.test(g)||(u=!0)}}else void 0===o?(h=i+1,o=e.slice(0,i).trim()):t();if(void 0===o?o=e.slice(0,i).trim():0!==h&&t(),a)for(i=0;i<a.length;i++)o=Cn(o,a[i]);return o}function Cn(e,t){var n=t.indexOf("(");return n<0?'_f("'+t+'")('+e+")":'_f("'+t.slice(0,n)+'")('+e+","+t.slice(n+1)}function En(e){console.error("[Vue compiler]: "+e)}function Tn(e,t){return e?e.map(function(e){return e[t]}).filter(function(e){return e}):[]}function Sn(e,t,n){(e.props||(e.props=[])).push({name:t,value:n}),e.plain=!1}function In(e,t,n){(e.attrs||(e.attrs=[])).push({name:t,value:n}),e.plain=!1}function An(e,t,n){e.attrsMap[t]=n,e.attrsList.push({name:t,value:n})}function On(e,t,n,r,i,o){(e.directives||(e.directives=[])).push({name:t,rawName:n,value:r,arg:i,modifiers:o}),e.plain=!1}function kn(e,t,n,r,i,o){r=r||to,r.capture&&(delete r.capture,t="!"+t),r.once&&(delete r.once,t="~"+t),r.passive&&(delete r.passive,t="&"+t),"click"===t&&(r.right?(t="contextmenu",delete r.right):r.middle&&(t="mouseup"));var a;r.native?(delete r.native,a=e.nativeEvents||(e.nativeEvents={})):a=e.events||(e.events={});var s={value:n};r!==to&&(s.modifiers=r);var c=a[t];Array.isArray(c)?i?c.unshift(s):c.push(s):a[t]=c?i?[s,c]:[c,s]:s,e.plain=!1}function Dn(e,t,n){var r=$n(e,":"+t)||$n(e,"v-bind:"+t);if(null!=r)return _n(r);if(!1!==n){var i=$n(e,t);if(null!=i)return JSON.stringify(i)}}function $n(e,t,n){var r;if(null!=(r=e.attrsMap[t]))for(var i=e.attrsList,o=0,a=i.length;o<a;o++)if(i[o].name===t){i.splice(o,1);break}return n&&delete e.attrsMap[t],r}function zn(e,t,n){var r=n||{},i=r.number,o=r.trim,a="$$v";o&&(a="(typeof $$v === 'string'? $$v.trim(): $$v)"),i&&(a="_n("+a+")");var s=Mn(t,a);e.model={value:"("+t+")",expression:'"'+t+'"',callback:"function ($$v) {"+s+"}"}}function Mn(e,t){var n=Rn(e);return null===n.key?e+"="+t:"$set("+n.exp+", "+n.key+", "+t+")"}function Rn(e){if(Ia=e.length,e.indexOf("[")<0||e.lastIndexOf("]")<Ia-1)return ka=e.lastIndexOf("."),ka>-1?{exp:e.slice(0,ka),key:'"'+e.slice(ka+1)+'"'}:{exp:e,key:null};for(Aa=e,ka=Da=$a=0;!Nn();)Oa=Pn(),jn(Oa)?Hn(Oa):91===Oa&&Ln(Oa);return{exp:e.slice(0,Da),key:e.slice(Da+1,$a)}}function Pn(){return Aa.charCodeAt(++ka)}function Nn(){return ka>=Ia}function jn(e){return 34===e||39===e}function Ln(e){var t=1;for(Da=ka;!Nn();)if(e=Pn(),jn(e))Hn(e);else if(91===e&&t++,93===e&&t--,0===t){$a=ka;break}}function Hn(e){for(var t=e;!Nn()&&(e=Pn())!==t;);}function Wn(e,t,n){za=n;var r=t.value,i=t.modifiers,o=e.tag,a=e.attrsMap.type;if(e.component)return zn(e,r,i),!1;if("select"===o)Yn(e,r,i);else if("input"===o&&"checkbox"===a)Bn(e,r,i);else if("input"===o&&"radio"===a)Xn(e,r,i);else if("input"===o||"textarea"===o)Fn(e,r,i);else if(!mo.isReservedTag(o))return zn(e,r,i),!1;return!0}function Bn(e,t,n){var r=n&&n.number,i=Dn(e,"value")||"null",o=Dn(e,"true-value")||"true",a=Dn(e,"false-value")||"false";Sn(e,"checked","Array.isArray("+t+")?_i("+t+","+i+")>-1"+("true"===o?":("+t+")":":_q("+t+","+o+")")),kn(e,"change","var $$a="+t+",$$el=$event.target,$$c=$$el.checked?("+o+"):("+a+");if(Array.isArray($$a)){var $$v="+(r?"_n("+i+")":i)+",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&("+t+"=$$a.concat([$$v]))}else{$$i>-1&&("+t+"=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{"+Mn(t,"$$c")+"}",null,!0)}function Xn(e,t,n){var r=n&&n.number,i=Dn(e,"value")||"null";i=r?"_n("+i+")":i,Sn(e,"checked","_q("+t+","+i+")"),kn(e,"change",Mn(t,i),null,!0)}function Yn(e,t,n){var r=n&&n.number,i='Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return '+(r?"_n(val)":"val")+"})",o="var $$selectedVal = "+i+";";o=o+" "+Mn(t,"$event.target.multiple ? $$selectedVal : $$selectedVal[0]"),kn(e,"change",o,null,!0)}function Fn(e,t,n){var r=e.attrsMap.type,i=n||{},o=i.lazy,a=i.number,s=i.trim,c=!o&&"range"!==r,l=o?"change":"range"===r?cs:"input",u="$event.target.value";s&&(u="$event.target.value.trim()"),a&&(u="_n("+u+")");var d=Mn(t,u);c&&(d="if($event.target.composing)return;"+d),Sn(e,"value","("+t+")"),kn(e,l,d,null,!0),(s||a)&&kn(e,"blur","$forceUpdate()")}function Un(e){if(i(e[cs])){var t=Eo?"change":"input";e[t]=[].concat(e[cs],e[t]||[]),delete e[cs]}i(e[ls])&&(e.change=[].concat(e[ls],e.change||[]),delete e[ls])}function Gn(e,t,n){var r=Ma;return function i(){null!==e.apply(null,arguments)&&Zn(t,i,n,r)}}function Vn(e,t,n,r,i){t=oe(t),n&&(t=Gn(t,e,r)),Ma.addEventListener(e,t,ko?{capture:r,passive:i}:r)}function Zn(e,t,n,r){(r||Ma).removeEventListener(e,t._withTask||t,n)}function qn(e,t){if(!r(e.data.on)||!r(t.data.on)){var n=t.data.on||{},i=e.data.on||{};Ma=t.elm,Un(n),ue(n,i,Vn,Zn,t.context),Ma=void 0}}function Jn(e,t){if(!r(e.data.domProps)||!r(t.data.domProps)){var n,o,a=t.elm,s=e.data.domProps||{},c=t.data.domProps||{};i(c.__ob__)&&(c=t.data.domProps=x({},c));for(n in s)r(c[n])&&(a[n]="");for(n in c){if(o=c[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),o===s[n])continue;1===a.childNodes.length&&a.removeChild(a.childNodes[0])}if("value"===n){a._value=o;var l=r(o)?"":String(o);Kn(a,l)&&(a.value=l)}else a[n]=o}}}function Kn(e,t){return!e.composing&&("OPTION"===e.tagName||Qn(e,t)||er(e,t))}function Qn(e,t){var n=!0;try{n=document.activeElement!==e}catch(e){}return n&&e.value!==t}function er(e,t){var n=e.value,r=e._vModifiers;if(i(r)){if(r.lazy)return!1;if(r.number)return f(n)!==f(t);if(r.trim)return n.trim()!==t.trim()}return n!==t}function tr(e){var t=nr(e.style);return e.staticStyle?x(e.staticStyle,t):t}function nr(e){return Array.isArray(e)?w(e):"string"==typeof e?ps(e):e}function rr(e,t){var n,r={};if(t)for(var i=e;i.componentInstance;)(i=i.componentInstance._vnode)&&i.data&&(n=tr(i.data))&&x(r,n);(n=tr(e.data))&&x(r,n);for(var o=e;o=o.parent;)o.data&&(n=tr(o.data))&&x(r,n);return r}function ir(e,t){var n=t.data,o=e.data;if(!(r(n.staticStyle)&&r(n.style)&&r(o.staticStyle)&&r(o.style))){var a,s,c=t.elm,l=o.staticStyle,u=o.normalizedStyle||o.style||{},d=l||u,p=nr(t.data.style)||{};t.data.normalizedStyle=i(p.__ob__)?x({},p):p;var f=rr(t,!0);for(s in d)r(f[s])&&vs(c,s,"");for(s in f)(a=f[s])!==d[s]&&vs(c,s,null==a?"":a)}}function or(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.add(t)}):e.classList.add(t);else{var n=" "+(e.getAttribute("class")||"")+" ";n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function ar(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(/\s+/).forEach(function(t){return e.classList.remove(t)}):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{for(var n=" "+(e.getAttribute("class")||"")+" ",r=" "+t+" ";n.indexOf(r)>=0;)n=n.replace(r," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function sr(e){if(e){if("object"==typeof e){var t={};return!1!==e.css&&x(t,bs(e.name||"v")),x(t,e),t}return"string"==typeof e?bs(e):void 0}}function cr(e){Is(function(){Is(e)})}function lr(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),or(e,t))}function ur(e,t){e._transitionClasses&&v(e._transitionClasses,t),ar(e,t)}function dr(e,t,n){var r=pr(e,t),i=r.type,o=r.timeout,a=r.propCount;if(!i)return n();var s=i===ws?Es:Ss,c=0,l=function(){e.removeEventListener(s,u),n()},u=function(t){t.target===e&&++c>=a&&l()};setTimeout(function(){c<a&&l()},o+1),e.addEventListener(s,u)}function pr(e,t){var n,r=window.getComputedStyle(e),i=r[Cs+"Delay"].split(", "),o=r[Cs+"Duration"].split(", "),a=fr(i,o),s=r[Ts+"Delay"].split(", "),c=r[Ts+"Duration"].split(", "),l=fr(s,c),u=0,d=0;return t===ws?a>0&&(n=ws,u=a,d=o.length):t===_s?l>0&&(n=_s,u=l,d=c.length):(u=Math.max(a,l),n=u>0?a>l?ws:_s:null,d=n?n===ws?o.length:c.length:0),{type:n,timeout:u,propCount:d,hasTransform:n===ws&&As.test(r[Cs+"Property"])}}function fr(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max.apply(null,t.map(function(t,n){return hr(t)+hr(e[n])}))}function hr(e){return 1e3*Number(e.slice(0,-1))}function vr(e,t){var n=e.elm;i(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var o=sr(e.data.transition);if(!r(o)&&!i(n._enterCb)&&1===n.nodeType){for(var a=o.css,s=o.type,l=o.enterClass,u=o.enterToClass,d=o.enterActiveClass,p=o.appearClass,h=o.appearToClass,v=o.appearActiveClass,g=o.beforeEnter,m=o.enter,y=o.afterEnter,b=o.enterCancelled,x=o.beforeAppear,w=o.appear,_=o.afterAppear,C=o.appearCancelled,E=o.duration,S=ca,I=ca.$vnode;I&&I.parent;)I=I.parent,S=I.context;var A=!S._isMounted||!e.isRootInsert;if(!A||w||""===w){var O=A&&p?p:l,k=A&&v?v:d,D=A&&h?h:u,$=A?x||g:g,z=A&&"function"==typeof w?w:m,M=A?_||y:y,R=A?C||b:b,P=f(c(E)?E.enter:E),N=!1!==a&&!To,j=yr(z),L=n._enterCb=T(function(){N&&(ur(n,D),ur(n,k)),L.cancelled?(N&&ur(n,O),R&&R(n)):M&&M(n),n._enterCb=null});e.data.show||de(e,"insert",function(){var t=n.parentNode,r=t&&t._pending&&t._pending[e.key];r&&r.tag===e.tag&&r.elm._leaveCb&&r.elm._leaveCb(),z&&z(n,L)}),$&&$(n),N&&(lr(n,O),lr(n,k),cr(function(){lr(n,D),ur(n,O),L.cancelled||j||(mr(P)?setTimeout(L,P):dr(n,s,L))})),e.data.show&&(t&&t(),z&&z(n,L)),N||j||L()}}}function gr(e,t){function n(){C.cancelled||(e.data.show||((o.parentNode._pending||(o.parentNode._pending={}))[e.key]=e),h&&h(o),x&&(lr(o,u),lr(o,p),cr(function(){lr(o,d),ur(o,u),C.cancelled||w||(mr(_)?setTimeout(C,_):dr(o,l,C))})),v&&v(o,C),x||w||C())}var o=e.elm;i(o._enterCb)&&(o._enterCb.cancelled=!0,o._enterCb());var a=sr(e.data.transition);if(r(a)||1!==o.nodeType)return t();if(!i(o._leaveCb)){var s=a.css,l=a.type,u=a.leaveClass,d=a.leaveToClass,p=a.leaveActiveClass,h=a.beforeLeave,v=a.leave,g=a.afterLeave,m=a.leaveCancelled,y=a.delayLeave,b=a.duration,x=!1!==s&&!To,w=yr(v),_=f(c(b)?b.leave:b),C=o._leaveCb=T(function(){o.parentNode&&o.parentNode._pending&&(o.parentNode._pending[e.key]=null),x&&(ur(o,d),ur(o,p)),C.cancelled?(x&&ur(o,u),m&&m(o)):(t(),g&&g(o)),o._leaveCb=null});y?y(n):n()}}function mr(e){return"number"==typeof e&&!isNaN(e)}function yr(e){if(r(e))return!1;var t=e.fns;return i(t)?yr(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function br(e,t){!0!==t.data.show&&vr(t)}function xr(e,t,n){wr(e,t,n),(Eo||So)&&setTimeout(function(){wr(e,t,n)},0)}function wr(e,t,n){var r=t.value,i=e.multiple;if(!i||Array.isArray(r)){for(var o,a,s=0,c=e.options.length;s<c;s++)if(a=e.options[s],i)o=E(r,Cr(a))>-1,a.selected!==o&&(a.selected=o);else if(C(Cr(a),r))return void(e.selectedIndex!==s&&(e.selectedIndex=s));i||(e.selectedIndex=-1)}}function _r(e,t){return t.every(function(t){return!C(t,e)})}function Cr(e){return"_value"in e?e._value:e.value}function Er(e){e.target.composing=!0}function Tr(e){e.target.composing&&(e.target.composing=!1,Sr(e.target,"input"))}function Sr(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Ir(e){return!e.componentInstance||e.data&&e.data.transition?e:Ir(e.componentInstance._vnode)}function Ar(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Ar(_e(t.children)):e}function Or(e){var t={},n=e.$options;for(var r in n.propsData)t[r]=e[r];var i=n._parentListeners;for(var o in i)t[so(o)]=i[o];return t}function kr(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function Dr(e){for(;e=e.parent;)if(e.data.transition)return!0}function $r(e,t){return t.key===e.key&&t.tag===e.tag}function zr(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Mr(e){e.data.newPos=e.elm.getBoundingClientRect()}function Rr(e){var t=e.data.pos,n=e.data.newPos,r=t.left-n.left,i=t.top-n.top;if(r||i){e.data.moved=!0;var o=e.elm.style;o.transform=o.WebkitTransform="translate("+r+"px,"+i+"px)",o.transitionDuration="0s"}}function Pr(e,t){var n=t?Ys(t):Bs;if(n.test(e)){for(var r,i,o,a=[],s=[],c=n.lastIndex=0;r=n.exec(e);){i=r.index,i>c&&(s.push(o=e.slice(c,i)),a.push(JSON.stringify(o)));var l=_n(r[1].trim());a.push("_s("+l+")"),s.push({"@binding":l}),c=i+r[0].length}return c<e.length&&(s.push(o=e.slice(c)),a.push(JSON.stringify(o))),{expression:a.join("+"),tokens:s}}}function Nr(e,t){var n=(t.warn,$n(e,"class"));n&&(e.staticClass=JSON.stringify(n));var r=Dn(e,"class",!1);r&&(e.classBinding=r)}function jr(e){var t="";return e.staticClass&&(t+="staticClass:"+e.staticClass+","),e.classBinding&&(t+="class:"+e.classBinding+","),t}function Lr(e,t){var n=(t.warn,$n(e,"style"));if(n){e.staticStyle=JSON.stringify(ps(n))}var r=Dn(e,"style",!1);r&&(e.styleBinding=r)}function Hr(e){var t="";return e.staticStyle&&(t+="staticStyle:"+e.staticStyle+","),e.styleBinding&&(t+="style:("+e.styleBinding+"),"),t}function Wr(e,t){var n=t?_c:wc;return e.replace(n,function(e){return xc[e]})}function Br(e,t){function n(t){u+=t,e=e.substring(t)}function r(e,n,r){var i,s;if(null==n&&(n=u),null==r&&(r=u),e&&(s=e.toLowerCase()),e)for(i=a.length-1;i>=0&&a[i].lowerCasedTag!==s;i--);else i=0;if(i>=0){for(var c=a.length-1;c>=i;c--)t.end&&t.end(a[c].tag,n,r);a.length=i,o=i&&a[i-1].tag}else"br"===s?t.start&&t.start(e,[],!0,n,r):"p"===s&&(t.start&&t.start(e,[],!1,n,r),t.end&&t.end(e,n,r))}for(var i,o,a=[],s=t.expectHTML,c=t.isUnaryTag||po,l=t.canBeLeftOpenTag||po,u=0;e;){if(i=e,o&&yc(o)){var d=0,p=o.toLowerCase(),f=bc[p]||(bc[p]=new RegExp("([\\s\\S]*?)(</"+p+"[^>]*>)","i")),h=e.replace(f,function(e,n,r){return d=r.length,yc(p)||"noscript"===p||(n=n.replace(/<!--([\s\S]*?)-->/g,"$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g,"$1")),Ec(p,n)&&(n=n.slice(1)),t.chars&&t.chars(n),""});u+=e.length-h.length,e=h,r(p,u-d,u)}else{var v=e.indexOf("<");if(0===v){if(ic.test(e)){var g=e.indexOf("--\x3e");if(g>=0){t.shouldKeepComment&&t.comment(e.substring(4,g)),n(g+3);continue}}if(oc.test(e)){var m=e.indexOf("]>");if(m>=0){n(m+2);continue}}var y=e.match(rc);if(y){n(y[0].length);continue}var b=e.match(nc);if(b){var x=u;n(b[0].length),r(b[1],x,u);continue}var w=function(){var t=e.match(ec);if(t){var r={tagName:t[1],attrs:[],start:u};n(t[0].length);for(var i,o;!(i=e.match(tc))&&(o=e.match(Js));)n(o[0].length),r.attrs.push(o);if(i)return r.unarySlash=i[1],n(i[0].length),r.end=u,r}}();if(w){!function(e){var n=e.tagName,i=e.unarySlash;s&&("p"===o&&qs(n)&&r(o),l(n)&&o===n&&r(n));for(var u=c(n)||!!i,d=e.attrs.length,p=new Array(d),f=0;f<d;f++){var h=e.attrs[f];ac&&-1===h[0].indexOf('""')&&(""===h[3]&&delete h[3],""===h[4]&&delete h[4],""===h[5]&&delete h[5]);var v=h[3]||h[4]||h[5]||"",g="a"===n&&"href"===h[1]?t.shouldDecodeNewlinesForHref:t.shouldDecodeNewlines;p[f]={name:h[1],value:Wr(v,g)}}u||(a.push({tag:n,lowerCasedTag:n.toLowerCase(),attrs:p}),o=n),t.start&&t.start(n,p,u,e.start,e.end)}(w),Ec(o,e)&&n(1);continue}}var _=void 0,C=void 0,E=void 0;if(v>=0){for(C=e.slice(v);!(nc.test(C)||ec.test(C)||ic.test(C)||oc.test(C)||(E=C.indexOf("<",1))<0);)v+=E,C=e.slice(v);_=e.substring(0,v),n(v)}v<0&&(_=e,e=""),t.chars&&_&&t.chars(_)}if(e===i){t.chars&&t.chars(e);break}}r()}function Xr(e,t,n){return{type:1,tag:e,attrsList:t,attrsMap:ci(t),parent:n,children:[]}}function Yr(e,t){function n(e){e.pre&&(s=!1),pc(e.tag)&&(c=!1);for(var n=0;n<dc.length;n++)dc[n](e,t)}sc=t.warn||En,pc=t.isPreTag||po,fc=t.mustUseProp||po,hc=t.getTagNamespace||po,lc=Tn(t.modules,"transformNode"),uc=Tn(t.modules,"preTransformNode"),dc=Tn(t.modules,"postTransformNode"),cc=t.delimiters;var r,i,o=[],a=!1!==t.preserveWhitespace,s=!1,c=!1;return Br(e,{warn:sc,expectHTML:t.expectHTML,isUnaryTag:t.isUnaryTag,canBeLeftOpenTag:t.canBeLeftOpenTag,shouldDecodeNewlines:t.shouldDecodeNewlines,shouldDecodeNewlinesForHref:t.shouldDecodeNewlinesForHref,shouldKeepComment:t.comments,start:function(e,a,l){var u=i&&i.ns||hc(e);Eo&&"svg"===u&&(a=di(a));var d=Xr(e,a,i);u&&(d.ns=u),ui(d)&&!Mo()&&(d.forbidden=!0);for(var p=0;p<uc.length;p++)d=uc[p](d,t)||d;if(s||(Fr(d),d.pre&&(s=!0)),pc(d.tag)&&(c=!0),s?Ur(d):d.processed||(qr(d),Kr(d),ni(d),Gr(d,t)),r?o.length||r.if&&(d.elseif||d.else)&&ti(r,{exp:d.elseif,block:d}):r=d,i&&!d.forbidden)if(d.elseif||d.else)Qr(d,i);else if(d.slotScope){i.plain=!1;var f=d.slotTarget||'"default"';(i.scopedSlots||(i.scopedSlots={}))[f]=d}else i.children.push(d),d.parent=i;l?n(d):(i=d,o.push(d))},end:function(){var e=o[o.length-1],t=e.children[e.children.length-1];t&&3===t.type&&" "===t.text&&!c&&e.children.pop(),o.length-=1,i=o[o.length-1],n(e)},chars:function(e){if(i&&(!Eo||"textarea"!==i.tag||i.attrsMap.placeholder!==e)){var t=i.children;if(e=c||e.trim()?li(i)?e:zc(e):a&&t.length?" ":""){var n;!s&&" "!==e&&(n=Pr(e,cc))?t.push({type:2,expression:n.expression,tokens:n.tokens,text:e}):" "===e&&t.length&&" "===t[t.length-1].text||t.push({type:3,text:e})}}},comment:function(e){i.children.push({type:3,text:e,isComment:!0})}}),r}function Fr(e){null!=$n(e,"v-pre")&&(e.pre=!0)}function Ur(e){var t=e.attrsList.length;if(t)for(var n=e.attrs=new Array(t),r=0;r<t;r++)n[r]={name:e.attrsList[r].name,value:JSON.stringify(e.attrsList[r].value)};else e.pre||(e.plain=!0)}function Gr(e,t){Vr(e),e.plain=!e.key&&!e.attrsList.length,Zr(e),ri(e),ii(e);for(var n=0;n<lc.length;n++)e=lc[n](e,t)||e;oi(e)}function Vr(e){var t=Dn(e,"key");t&&(e.key=t)}function Zr(e){var t=Dn(e,"ref");t&&(e.ref=t,e.refInFor=ai(e))}function qr(e){var t;if(t=$n(e,"v-for")){var n=Jr(t);n&&x(e,n)}}function Jr(e){var t=e.match(Ic);if(t){var n={};n.for=t[2].trim();var r=t[1].trim().replace(Oc,""),i=r.match(Ac);return i?(n.alias=r.replace(Ac,""),n.iterator1=i[1].trim(),i[2]&&(n.iterator2=i[2].trim())):n.alias=r,n}}function Kr(e){var t=$n(e,"v-if");if(t)e.if=t,ti(e,{exp:t,block:e});else{null!=$n(e,"v-else")&&(e.else=!0);var n=$n(e,"v-else-if");n&&(e.elseif=n)}}function Qr(e,t){var n=ei(t.children);n&&n.if&&ti(n,{exp:e.elseif,block:e})}function ei(e){for(var t=e.length;t--;){if(1===e[t].type)return e[t];e.pop()}}function ti(e,t){e.ifConditions||(e.ifConditions=[]),e.ifConditions.push(t)}function ni(e){null!=$n(e,"v-once")&&(e.once=!0)}function ri(e){if("slot"===e.tag)e.slotName=Dn(e,"name");else{var t;"template"===e.tag?(t=$n(e,"scope"),e.slotScope=t||$n(e,"slot-scope")):(t=$n(e,"slot-scope"))&&(e.slotScope=t);var n=Dn(e,"slot");n&&(e.slotTarget='""'===n?'"default"':n,"template"===e.tag||e.slotScope||In(e,"slot",n))}}function ii(e){var t;(t=Dn(e,"is"))&&(e.component=t),null!=$n(e,"inline-template")&&(e.inlineTemplate=!0)}function oi(e){var t,n,r,i,o,a,s,c=e.attrsList;for(t=0,n=c.length;t<n;t++)if(r=i=c[t].name,o=c[t].value,Sc.test(r))if(e.hasBindings=!0,a=si(r),a&&(r=r.replace($c,"")),Dc.test(r))r=r.replace(Dc,""),o=_n(o),s=!1,a&&(a.prop&&(s=!0,"innerHtml"===(r=so(r))&&(r="innerHTML")),a.camel&&(r=so(r)),a.sync&&kn(e,"update:"+so(r),Mn(o,"$event"))),s||!e.component&&fc(e.tag,e.attrsMap.type,r)?Sn(e,r,o):In(e,r,o);else if(Tc.test(r))r=r.replace(Tc,""),kn(e,r,o,a,!1,sc);else{r=r.replace(Sc,"");var l=r.match(kc),u=l&&l[1];u&&(r=r.slice(0,-(u.length+1))),On(e,r,i,o,u,a)}else{In(e,r,JSON.stringify(o)),!e.component&&"muted"===r&&fc(e.tag,e.attrsMap.type,r)&&Sn(e,r,"true")}}function ai(e){for(var t=e;t;){if(void 0!==t.for)return!0;t=t.parent}return!1}function si(e){var t=e.match($c);if(t){var n={};return t.forEach(function(e){n[e.slice(1)]=!0}),n}}function ci(e){for(var t={},n=0,r=e.length;n<r;n++)t[e[n].name]=e[n].value;return t}function li(e){return"script"===e.tag||"style"===e.tag}function ui(e){return"style"===e.tag||"script"===e.tag&&(!e.attrsMap.type||"text/javascript"===e.attrsMap.type)}function di(e){for(var t=[],n=0;n<e.length;n++){var r=e[n];Mc.test(r.name)||(r.name=r.name.replace(Rc,""),t.push(r))}return t}function pi(e,t){if("input"===e.tag){var n=e.attrsMap;if(n["v-model"]&&(n["v-bind:type"]||n[":type"])){var r=Dn(e,"type"),i=$n(e,"v-if",!0),o=i?"&&("+i+")":"",a=null!=$n(e,"v-else",!0),s=$n(e,"v-else-if",!0),c=fi(e);qr(c),An(c,"type","checkbox"),Gr(c,t),c.processed=!0,c.if="("+r+")==='checkbox'"+o,ti(c,{exp:c.if,block:c});var l=fi(e);$n(l,"v-for",!0),An(l,"type","radio"),Gr(l,t),ti(c,{exp:"("+r+")==='radio'"+o,block:l});var u=fi(e);return $n(u,"v-for",!0),An(u,":type",r),Gr(u,t),ti(c,{exp:i,block:u}),a?c.else=!0:s&&(c.elseif=s),c}}}function fi(e){return Xr(e.tag,e.attrsList.slice(),e.parent)}function hi(e,t){t.value&&Sn(e,"textContent","_s("+t.value+")")}function vi(e,t){t.value&&Sn(e,"innerHTML","_s("+t.value+")")}function gi(e,t){e&&(vc=Hc(t.staticKeys||""),gc=t.isReservedTag||po,yi(e),bi(e,!1))}function mi(e){return h("type,tag,attrsList,attrsMap,plain,parent,children,attrs"+(e?","+e:""))}function yi(e){if(e.static=xi(e),1===e.type){if(!gc(e.tag)&&"slot"!==e.tag&&null==e.attrsMap["inline-template"])return;for(var t=0,n=e.children.length;t<n;t++){var r=e.children[t];yi(r),r.static||(e.static=!1)}if(e.ifConditions)for(var i=1,o=e.ifConditions.length;i<o;i++){var a=e.ifConditions[i].block;yi(a),a.static||(e.static=!1)}}}function bi(e,t){if(1===e.type){if((e.static||e.once)&&(e.staticInFor=t),e.static&&e.children.length&&(1!==e.children.length||3!==e.children[0].type))return void(e.staticRoot=!0);if(e.staticRoot=!1,e.children)for(var n=0,r=e.children.length;n<r;n++)bi(e.children[n],t||!!e.for);if(e.ifConditions)for(var i=1,o=e.ifConditions.length;i<o;i++)bi(e.ifConditions[i].block,t)}}function xi(e){return 2!==e.type&&(3===e.type||!(!e.pre&&(e.hasBindings||e.if||e.for||ro(e.tag)||!gc(e.tag)||wi(e)||!Object.keys(e).every(vc))))}function wi(e){for(;e.parent;){if(e=e.parent,"template"!==e.tag)return!1;if(e.for)return!0}return!1}function _i(e,t,n){var r=t?"nativeOn:{":"on:{";for(var i in e)r+='"'+i+'":'+Ci(i,e[i])+",";return r.slice(0,-1)+"}"}function Ci(e,t){if(!t)return"function(){}";if(Array.isArray(t))return"["+t.map(function(t){return Ci(e,t)}).join(",")+"]";var n=Bc.test(t.value),r=Wc.test(t.value);if(t.modifiers){var i="",o="",a=[];for(var s in t.modifiers)if(Fc[s])o+=Fc[s],Xc[s]&&a.push(s);else if("exact"===s){var c=t.modifiers;o+=Yc(["ctrl","shift","alt","meta"].filter(function(e){return!c[e]}).map(function(e){return"$event."+e+"Key"}).join("||"))}else a.push(s);a.length&&(i+=Ei(a)),o&&(i+=o);return"function($event){"+i+(n?t.value+"($event)":r?"("+t.value+")($event)":t.value)+"}"}return n||r?t.value:"function($event){"+t.value+"}"}function Ei(e){return"if(!('button' in $event)&&"+e.map(Ti).join("&&")+")return null;"}function Ti(e){var t=parseInt(e,10);if(t)return"$event.keyCode!=="+t;var n=Xc[e];return"_k($event.keyCode,"+JSON.stringify(e)+","+JSON.stringify(n)+",$event.key)"}function Si(e,t){e.wrapListeners=function(e){return"_g("+e+","+t.value+")"}}function Ii(e,t){e.wrapData=function(n){return"_b("+n+",'"+e.tag+"',"+t.value+","+(t.modifiers&&t.modifiers.prop?"true":"false")+(t.modifiers&&t.modifiers.sync?",true":"")+")"}}function Ai(e,t){var n=new Gc(t);return{render:"with(this){return "+(e?Oi(e,n):'_c("div")')+"}",staticRenderFns:n.staticRenderFns}}function Oi(e,t){if(e.staticRoot&&!e.staticProcessed)return ki(e,t);if(e.once&&!e.onceProcessed)return Di(e,t);if(e.for&&!e.forProcessed)return Mi(e,t);if(e.if&&!e.ifProcessed)return $i(e,t);if("template"!==e.tag||e.slotTarget){if("slot"===e.tag)return Gi(e,t);var n;if(e.component)n=Vi(e.component,e,t);else{var r=e.plain?void 0:Ri(e,t),i=e.inlineTemplate?null:Wi(e,t,!0);n="_c('"+e.tag+"'"+(r?","+r:"")+(i?","+i:"")+")"}for(var o=0;o<t.transforms.length;o++)n=t.transforms[o](e,n);return n}return Wi(e,t)||"void 0"}function ki(e,t){return e.staticProcessed=!0,t.staticRenderFns.push("with(this){return "+Oi(e,t)+"}"),"_m("+(t.staticRenderFns.length-1)+(e.staticInFor?",true":"")+")"}function Di(e,t){if(e.onceProcessed=!0,e.if&&!e.ifProcessed)return $i(e,t);if(e.staticInFor){for(var n="",r=e.parent;r;){if(r.for){n=r.key;break}r=r.parent}return n?"_o("+Oi(e,t)+","+t.onceId+++","+n+")":Oi(e,t)}return ki(e,t)}function $i(e,t,n,r){return e.ifProcessed=!0,zi(e.ifConditions.slice(),t,n,r)}function zi(e,t,n,r){function i(e){return n?n(e,t):e.once?Di(e,t):Oi(e,t)}if(!e.length)return r||"_e()";var o=e.shift();return o.exp?"("+o.exp+")?"+i(o.block)+":"+zi(e,t,n,r):""+i(o.block)}function Mi(e,t,n,r){var i=e.for,o=e.alias,a=e.iterator1?","+e.iterator1:"",s=e.iterator2?","+e.iterator2:"";return e.forProcessed=!0,(r||"_l")+"(("+i+"),function("+o+a+s+"){return "+(n||Oi)(e,t)+"})"}function Ri(e,t){var n="{",r=Pi(e,t);r&&(n+=r+","),e.key&&(n+="key:"+e.key+","),e.ref&&(n+="ref:"+e.ref+","),e.refInFor&&(n+="refInFor:true,"),e.pre&&(n+="pre:true,"),e.component&&(n+='tag:"'+e.tag+'",');for(var i=0;i<t.dataGenFns.length;i++)n+=t.dataGenFns[i](e);if(e.attrs&&(n+="attrs:{"+Zi(e.attrs)+"},"),e.props&&(n+="domProps:{"+Zi(e.props)+"},"),e.events&&(n+=_i(e.events,!1,t.warn)+","),e.nativeEvents&&(n+=_i(e.nativeEvents,!0,t.warn)+","),e.slotTarget&&!e.slotScope&&(n+="slot:"+e.slotTarget+","),e.scopedSlots&&(n+=ji(e.scopedSlots,t)+","),e.model&&(n+="model:{value:"+e.model.value+",callback:"+e.model.callback+",expression:"+e.model.expression+"},"),e.inlineTemplate){var o=Ni(e,t);o&&(n+=o+",")}return n=n.replace(/,$/,"")+"}",e.wrapData&&(n=e.wrapData(n)),e.wrapListeners&&(n=e.wrapListeners(n)),n}function Pi(e,t){var n=e.directives;if(n){var r,i,o,a,s="directives:[",c=!1;for(r=0,i=n.length;r<i;r++){o=n[r],a=!0;var l=t.directives[o.name];l&&(a=!!l(e,o,t.warn)),a&&(c=!0,s+='{name:"'+o.name+'",rawName:"'+o.rawName+'"'+(o.value?",value:("+o.value+"),expression:"+JSON.stringify(o.value):"")+(o.arg?',arg:"'+o.arg+'"':"")+(o.modifiers?",modifiers:"+JSON.stringify(o.modifiers):"")+"},")}return c?s.slice(0,-1)+"]":void 0}}function Ni(e,t){var n=e.children[0];if(1===n.type){var r=Ai(n,t.options);return"inlineTemplate:{render:function(){"+r.render+"},staticRenderFns:["+r.staticRenderFns.map(function(e){return"function(){"+e+"}"}).join(",")+"]}"}}function ji(e,t){return"scopedSlots:_u(["+Object.keys(e).map(function(n){return Li(n,e[n],t)}).join(",")+"])"}function Li(e,t,n){return t.for&&!t.forProcessed?Hi(e,t,n):"{key:"+e+",fn:function("+String(t.slotScope)+"){return "+("template"===t.tag?t.if?t.if+"?"+(Wi(t,n)||"undefined")+":undefined":Wi(t,n)||"undefined":Oi(t,n))+"}}"}function Hi(e,t,n){var r=t.for,i=t.alias,o=t.iterator1?","+t.iterator1:"",a=t.iterator2?","+t.iterator2:"";return t.forProcessed=!0,"_l(("+r+"),function("+i+o+a+"){return "+Li(e,t,n)+"})"}function Wi(e,t,n,r,i){var o=e.children;if(o.length){var a=o[0];if(1===o.length&&a.for&&"template"!==a.tag&&"slot"!==a.tag)return(r||Oi)(a,t);var s=n?Bi(o,t.maybeComponent):0,c=i||Yi;return"["+o.map(function(e){return c(e,t)}).join(",")+"]"+(s?","+s:"")}}function Bi(e,t){for(var n=0,r=0;r<e.length;r++){var i=e[r];if(1===i.type){if(Xi(i)||i.ifConditions&&i.ifConditions.some(function(e){return Xi(e.block)})){n=2;break}(t(i)||i.ifConditions&&i.ifConditions.some(function(e){return t(e.block)}))&&(n=1)}}return n}function Xi(e){return void 0!==e.for||"template"===e.tag||"slot"===e.tag}function Yi(e,t){return 1===e.type?Oi(e,t):3===e.type&&e.isComment?Ui(e):Fi(e)}function Fi(e){return"_v("+(2===e.type?e.expression:qi(JSON.stringify(e.text)))+")"}function Ui(e){return"_e("+JSON.stringify(e.text)+")"}function Gi(e,t){var n=e.slotName||'"default"',r=Wi(e,t),i="_t("+n+(r?","+r:""),o=e.attrs&&"{"+e.attrs.map(function(e){return so(e.name)+":"+e.value}).join(",")+"}",a=e.attrsMap["v-bind"];return!o&&!a||r||(i+=",null"),o&&(i+=","+o),a&&(i+=(o?"":",null")+","+a),i+")"}function Vi(e,t,n){var r=t.inlineTemplate?null:Wi(t,n,!0);return"_c("+e+","+Ri(t,n)+(r?","+r:"")+")"}function Zi(e){for(var t="",n=0;n<e.length;n++){var r=e[n];t+='"'+r.name+'":'+qi(r.value)+","}return t.slice(0,-1)}function qi(e){return e.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function Ji(e,t){try{return new Function(e)}catch(n){return t.push({err:n,code:e}),_}}function Ki(e){var t=Object.create(null);return function(n,r,i){r=x({},r);r.warn;delete r.warn;var o=r.delimiters?String(r.delimiters)+n:n;if(t[o])return t[o];var a=e(n,r),s={},c=[];return s.render=Ji(a.render,c),s.staticRenderFns=a.staticRenderFns.map(function(e){return Ji(e,c)}),t[o]=s}}function Qi(e){return mc=mc||document.createElement("div"),mc.innerHTML=e?'<a href="\n"/>':'<div a="\n"/>',mc.innerHTML.indexOf("&#10;")>0}function eo(e){if(e.outerHTML)return e.outerHTML;var t=document.createElement("div");return t.appendChild(e.cloneNode(!0)),t.innerHTML}/*!
 * Vue.js v2.5.13
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
var to=Object.freeze({}),no=Object.prototype.toString,ro=h("slot,component",!0),io=h("key,ref,slot,slot-scope,is"),oo=Object.prototype.hasOwnProperty,ao=/-(\w)/g,so=m(function(e){return e.replace(ao,function(e,t){return t?t.toUpperCase():""})}),co=m(function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),lo=/\B([A-Z])/g,uo=m(function(e){return e.replace(lo,"-$1").toLowerCase()}),po=function(e,t,n){return!1},fo=function(e){return e},ho="data-server-rendered",vo=["component","directive","filter"],go=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured"],mo={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:po,isReservedAttr:po,isUnknownElement:po,getTagNamespace:_,parsePlatformTagName:fo,mustUseProp:po,_lifecycleHooks:go},yo=/[^\w.$]/,bo="__proto__"in{},xo="undefined"!=typeof window,wo="undefined"!=typeof WXEnvironment&&!!WXEnvironment.platform,_o=wo&&WXEnvironment.platform.toLowerCase(),Co=xo&&window.navigator.userAgent.toLowerCase(),Eo=Co&&/msie|trident/.test(Co),To=Co&&Co.indexOf("msie 9.0")>0,So=Co&&Co.indexOf("edge/")>0,Io=Co&&Co.indexOf("android")>0||"android"===_o,Ao=Co&&/iphone|ipad|ipod|ios/.test(Co)||"ios"===_o,Oo=(Co&&/chrome\/\d+/.test(Co),{}.watch),ko=!1;if(xo)try{var Do={};Object.defineProperty(Do,"passive",{get:function(){ko=!0}}),window.addEventListener("test-passive",null,Do)}catch(e){}var $o,zo,Mo=function(){return void 0===$o&&($o=!xo&&void 0!==t&&"server"===t.process.env.VUE_ENV),$o},Ro=xo&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__,Po="undefined"!=typeof Symbol&&O(Symbol)&&"undefined"!=typeof Reflect&&O(Reflect.ownKeys);zo="undefined"!=typeof Set&&O(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var No=_,jo=0,Lo=function(){this.id=jo++,this.subs=[]};Lo.prototype.addSub=function(e){this.subs.push(e)},Lo.prototype.removeSub=function(e){v(this.subs,e)},Lo.prototype.depend=function(){Lo.target&&Lo.target.addDep(this)},Lo.prototype.notify=function(){for(var e=this.subs.slice(),t=0,n=e.length;t<n;t++)e[t].update()},Lo.target=null;var Ho=[],Wo=function(e,t,n,r,i,o,a,s){this.tag=e,this.data=t,this.children=n,this.text=r,this.elm=i,this.ns=void 0,this.context=o,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},Bo={child:{configurable:!0}};Bo.child.get=function(){return this.componentInstance},Object.defineProperties(Wo.prototype,Bo);var Xo=function(e){void 0===e&&(e="");var t=new Wo;return t.text=e,t.isComment=!0,t},Yo=Array.prototype,Fo=Object.create(Yo);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(e){var t=Yo[e];I(Fo,e,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var i,o=t.apply(this,n),a=this.__ob__;switch(e){case"push":case"unshift":i=n;break;case"splice":i=n.slice(2)}return i&&a.observeArray(i),a.dep.notify(),o})});var Uo=Object.getOwnPropertyNames(Fo),Go={shouldConvert:!0},Vo=function(e){if(this.value=e,this.dep=new Lo,this.vmCount=0,I(e,"__ob__",this),Array.isArray(e)){(bo?R:P)(e,Fo,Uo),this.observeArray(e)}else this.walk(e)};Vo.prototype.walk=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)j(e,t[n],e[t[n]])},Vo.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)N(e[t])};var Zo=mo.optionMergeStrategies;Zo.data=function(e,t,n){return n?X(e,t,n):t&&"function"!=typeof t?e:X(e,t)},go.forEach(function(e){Zo[e]=Y}),vo.forEach(function(e){Zo[e+"s"]=F}),Zo.watch=function(e,t,n,r){if(e===Oo&&(e=void 0),t===Oo&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var i={};x(i,e);for(var o in t){var a=i[o],s=t[o];a&&!Array.isArray(a)&&(a=[a]),i[o]=a?a.concat(s):Array.isArray(s)?s:[s]}return i},Zo.props=Zo.methods=Zo.inject=Zo.computed=function(e,t,n,r){if(!e)return t;var i=Object.create(null);return x(i,e),t&&x(i,t),i},Zo.provide=X;var qo,Jo,Ko=function(e,t){return void 0===t?e:t},Qo=[],ea=!1,ta=!1;if(void 0!==n&&O(n))Jo=function(){n(ie)};else if("undefined"==typeof MessageChannel||!O(MessageChannel)&&"[object MessageChannelConstructor]"!==MessageChannel.toString())Jo=function(){setTimeout(ie,0)};else{var na=new MessageChannel,ra=na.port2;na.port1.onmessage=ie,Jo=function(){ra.postMessage(1)}}if("undefined"!=typeof Promise&&O(Promise)){var ia=Promise.resolve();qo=function(){ia.then(ie),Ao&&setTimeout(_)}}else qo=Jo;var oa,aa=new zo,sa=m(function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var r="!"===e.charAt(0);return e=r?e.slice(1):e,{name:e,once:n,capture:r,passive:t}}),ca=null,la=[],ua=[],da={},pa=!1,fa=!1,ha=0,va=0,ga=function(e,t,n,r,i){this.vm=e,i&&(e._watcher=this),e._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++va,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new zo,this.newDepIds=new zo,this.expression="","function"==typeof t?this.getter=t:(this.getter=A(t),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};ga.prototype.get=function(){k(this);var e,t=this.vm;try{e=this.getter.call(t,t)}catch(e){if(!this.user)throw e;te(e,t,'getter for watcher "'+this.expression+'"')}finally{this.deep&&se(e),D(),this.cleanupDeps()}return e},ga.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},ga.prototype.cleanupDeps=function(){for(var e=this,t=this.deps.length;t--;){var n=e.deps[t];e.newDepIds.has(n.id)||n.removeSub(e)}var r=this.depIds;this.depIds=this.newDepIds,this.newDepIds=r,this.newDepIds.clear(),r=this.deps,this.deps=this.newDeps,this.newDeps=r,this.newDeps.length=0},ga.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Be(this)},ga.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||c(e)||this.deep){var t=this.value;if(this.value=e,this.user)try{this.cb.call(this.vm,e,t)}catch(e){te(e,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,e,t)}}},ga.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},ga.prototype.depend=function(){for(var e=this,t=this.deps.length;t--;)e.deps[t].depend()},ga.prototype.teardown=function(){var e=this;if(this.active){this.vm._isBeingDestroyed||v(this.vm._watchers,this);for(var t=this.deps.length;t--;)e.deps[t].removeSub(e);this.active=!1}};var ma={enumerable:!0,configurable:!0,get:_,set:_},ya={lazy:!0};ft(ht.prototype);var ba={init:function(e,t,n,r){if(!e.componentInstance||e.componentInstance._isDestroyed){(e.componentInstance=yt(e,ca,n,r)).$mount(t?e.elm:void 0,t)}else if(e.data.keepAlive){var i=e;ba.prepatch(i,i)}},prepatch:function(e,t){var n=t.componentOptions;$e(t.componentInstance=e.componentInstance,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,Pe(n,"mounted")),e.data.keepAlive&&(t._isMounted?He(n):Me(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Re(t,!0):t.$destroy())}},xa=Object.keys(ba),wa=1,_a=2,Ca=0;!function(e){e.prototype._init=function(e){var t=this;t._uid=Ca++,t._isVue=!0,e&&e._isComponent?St(t,e):t.$options=Z(It(t.constructor),e||{},t),t._renderProxy=t,t._self=t,ke(t),Ce(t),Tt(t),Pe(t,"beforeCreate"),tt(t),Ye(t),et(t),Pe(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}(kt),function(e){var t={};t.get=function(){return this._data};var n={};n.get=function(){return this._props},Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=L,e.prototype.$delete=H,e.prototype.$watch=function(e,t,n){var r=this;if(l(t))return Qe(r,e,t,n);n=n||{},n.user=!0;var i=new ga(r,e,t,n);return n.immediate&&t.call(r,i.value),function(){i.teardown()}}}(kt),function(e){var t=/^hook:/;e.prototype.$on=function(e,n){var r=this,i=this;if(Array.isArray(e))for(var o=0,a=e.length;o<a;o++)r.$on(e[o],n);else(i._events[e]||(i._events[e]=[])).push(n),t.test(e)&&(i._hasHookEvent=!0);return i},e.prototype.$once=function(e,t){function n(){r.$off(e,n),t.apply(r,arguments)}var r=this;return n.fn=t,r.$on(e,n),r},e.prototype.$off=function(e,t){var n=this,r=this;if(!arguments.length)return r._events=Object.create(null),r;if(Array.isArray(e)){for(var i=0,o=e.length;i<o;i++)n.$off(e[i],t);return r}var a=r._events[e];if(!a)return r;if(!t)return r._events[e]=null,r;if(t)for(var s,c=a.length;c--;)if((s=a[c])===t||s.fn===t){a.splice(c,1);break}return r},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?b(n):n;for(var r=b(arguments,1),i=0,o=n.length;i<o;i++)try{n[i].apply(t,r)}catch(n){te(n,t,'event handler for "'+e+'"')}}return t}}(kt),function(e){e.prototype._update=function(e,t){var n=this;n._isMounted&&Pe(n,"beforeUpdate");var r=n.$el,i=n._vnode,o=ca;ca=n,n._vnode=e,i?n.$el=n.__patch__(i,e):(n.$el=n.__patch__(n.$el,e,t,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),ca=o,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Pe(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||v(t.$children,e),e._watcher&&e._watcher.teardown();for(var n=e._watchers.length;n--;)e._watchers[n].teardown();e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Pe(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}(kt),function(e){ft(e.prototype),e.prototype.$nextTick=function(e){return ae(e,this)},e.prototype._render=function(){var e=this,t=e.$options,n=t.render,r=t._parentVnode;if(e._isMounted)for(var i in e.$slots){var o=e.$slots[i];(o._rendered||o[0]&&o[0].elm)&&(e.$slots[i]=M(o,!0))}e.$scopedSlots=r&&r.data.scopedSlots||to,e.$vnode=r;var a;try{a=n.call(e._renderProxy,e.$createElement)}catch(t){te(t,e,"render"),a=e._vnode}return a instanceof Wo||(a=Xo()),a.parent=r,a}}(kt);var Ea=[String,RegExp,Array],Ta={name:"keep-alive",abstract:!0,props:{include:Ea,exclude:Ea,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){var e=this;for(var t in e.cache)Ht(e.cache,t,e.keys)},watch:{include:function(e){Lt(this,function(t){return jt(e,t)})},exclude:function(e){Lt(this,function(t){return!jt(e,t)})}},render:function(){var e=this.$slots.default,t=_e(e),n=t&&t.componentOptions;if(n){var r=Nt(n),i=this,o=i.include,a=i.exclude;if(o&&(!r||!jt(o,r))||a&&r&&jt(a,r))return t;var s=this,c=s.cache,l=s.keys,u=null==t.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):t.key;c[u]?(t.componentInstance=c[u].componentInstance,v(l,u),l.push(u)):(c[u]=t,l.push(u),this.max&&l.length>parseInt(this.max)&&Ht(c,l[0],l,this._vnode)),t.data.keepAlive=!0}return t||e&&e[0]}},Sa={KeepAlive:Ta};!function(e){var t={};t.get=function(){return mo},Object.defineProperty(e,"config",t),e.util={warn:No,extend:x,mergeOptions:Z,defineReactive:j},e.set=L,e.delete=H,e.nextTick=ae,e.options=Object.create(null),vo.forEach(function(t){e.options[t+"s"]=Object.create(null)}),e.options._base=e,x(e.options.components,Sa),Dt(e),$t(e),zt(e),Pt(e)}(kt),Object.defineProperty(kt.prototype,"$isServer",{get:Mo}),Object.defineProperty(kt.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),kt.version="2.5.13";var Ia,Aa,Oa,ka,Da,$a,za,Ma,Ra,Pa=h("style,class"),Na=h("input,textarea,option,select,progress"),ja=function(e,t,n){return"value"===n&&Na(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},La=h("contenteditable,draggable,spellcheck"),Ha=h("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),Wa="http://www.w3.org/1999/xlink",Ba=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},Xa=function(e){return Ba(e)?e.slice(6,e.length):""},Ya=function(e){return null==e||!1===e},Fa={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Ua=h("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Ga=h("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Va=function(e){return"pre"===e},Za=function(e){return Ua(e)||Ga(e)},qa=Object.create(null),Ja=h("text,number,password,search,email,tel,url"),Ka=Object.freeze({createElement:Jt,createElementNS:Kt,createTextNode:Qt,createComment:en,insertBefore:tn,removeChild:nn,appendChild:rn,parentNode:on,nextSibling:an,tagName:sn,setTextContent:cn,setAttribute:ln}),Qa={create:function(e,t){un(t)},update:function(e,t){e.data.ref!==t.data.ref&&(un(e,!0),un(t))},destroy:function(e){un(e,!0)}},es=new Wo("",{},[]),ts=["create","activate","update","remove","destroy"],ns={create:hn,update:hn,destroy:function(e){hn(e,es)}},rs=Object.create(null),is=[Qa,ns],os={create:bn,update:bn},as={create:wn,update:wn},ss=/[\w).+\-_$\]]/,cs="__r",ls="__c",us={create:qn,update:qn},ds={create:Jn,update:Jn},ps=m(function(e){var t={},n=/;(?![^(]*\))/g,r=/:(.+)/;return e.split(n).forEach(function(e){if(e){var n=e.split(r);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}),fs=/^--/,hs=/\s*!important$/,vs=function(e,t,n){if(fs.test(t))e.style.setProperty(t,n);else if(hs.test(n))e.style.setProperty(t,n.replace(hs,""),"important");else{var r=ms(t);if(Array.isArray(n))for(var i=0,o=n.length;i<o;i++)e.style[r]=n[i];else e.style[r]=n}},gs=["Webkit","Moz","ms"],ms=m(function(e){if(Ra=Ra||document.createElement("div").style,"filter"!==(e=so(e))&&e in Ra)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<gs.length;n++){var r=gs[n]+t;if(r in Ra)return r}}),ys={create:ir,update:ir},bs=m(function(e){return{enterClass:e+"-enter",enterToClass:e+"-enter-to",enterActiveClass:e+"-enter-active",leaveClass:e+"-leave",leaveToClass:e+"-leave-to",leaveActiveClass:e+"-leave-active"}}),xs=xo&&!To,ws="transition",_s="animation",Cs="transition",Es="transitionend",Ts="animation",Ss="animationend";xs&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(Cs="WebkitTransition",Es="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(Ts="WebkitAnimation",Ss="webkitAnimationEnd"));var Is=xo?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()},As=/\b(transform|all)(,|$)/,Os=xo?{create:br,activate:br,remove:function(e,t){!0!==e.data.show?gr(e,t):t()}}:{},ks=[os,as,us,ds,ys,Os],Ds=ks.concat(is),$s=function(e){function t(e){return new Wo(D.tagName(e).toLowerCase(),{},[],void 0,e)}function n(e,t){function n(){0==--n.listeners&&a(e)}return n.listeners=t,n}function a(e){var t=D.parentNode(e);i(t)&&D.removeChild(t,e)}function c(e,t,n,r,a){if(e.isRootInsert=!a,!l(e,t,n,r)){var s=e.data,c=e.children,u=e.tag;i(u)?(e.elm=e.ns?D.createElementNS(e.ns,u):D.createElement(u,e),m(e),f(e,c,t),i(s)&&g(e,t),p(n,e.elm,r)):o(e.isComment)?(e.elm=D.createComment(e.text),p(n,e.elm,r)):(e.elm=D.createTextNode(e.text),p(n,e.elm,r))}}function l(e,t,n,r){var a=e.data;if(i(a)){var s=i(e.componentInstance)&&a.keepAlive;if(i(a=a.hook)&&i(a=a.init)&&a(e,!1,n,r),i(e.componentInstance))return u(e,t),o(s)&&d(e,t,n,r),!0}}function u(e,t){i(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,v(e)?(g(e,t),m(e)):(un(e),t.push(e))}function d(e,t,n,r){for(var o,a=e;a.componentInstance;)if(a=a.componentInstance._vnode,i(o=a.data)&&i(o=o.transition)){for(o=0;o<O.activate.length;++o)O.activate[o](es,a);t.push(a);break}p(n,e.elm,r)}function p(e,t,n){i(e)&&(i(n)?n.parentNode===e&&D.insertBefore(e,t,n):D.appendChild(e,t))}function f(e,t,n){if(Array.isArray(t))for(var r=0;r<t.length;++r)c(t[r],n,e.elm,null,!0);else s(e.text)&&D.appendChild(e.elm,D.createTextNode(String(e.text)))}function v(e){for(;e.componentInstance;)e=e.componentInstance._vnode;return i(e.tag)}function g(e,t){for(var n=0;n<O.create.length;++n)O.create[n](es,e);I=e.data.hook,i(I)&&(i(I.create)&&I.create(es,e),i(I.insert)&&t.push(e))}function m(e){var t;if(i(t=e.fnScopeId))D.setAttribute(e.elm,t,"");else for(var n=e;n;)i(t=n.context)&&i(t=t.$options._scopeId)&&D.setAttribute(e.elm,t,""),n=n.parent;i(t=ca)&&t!==e.context&&t!==e.fnContext&&i(t=t.$options._scopeId)&&D.setAttribute(e.elm,t,"")}function y(e,t,n,r,i,o){for(;r<=i;++r)c(n[r],o,e,t)}function b(e){var t,n,r=e.data;if(i(r))for(i(t=r.hook)&&i(t=t.destroy)&&t(e),t=0;t<O.destroy.length;++t)O.destroy[t](e);if(i(t=e.children))for(n=0;n<e.children.length;++n)b(e.children[n])}function x(e,t,n,r){for(;n<=r;++n){var o=t[n];i(o)&&(i(o.tag)?(w(o),b(o)):a(o.elm))}}function w(e,t){if(i(t)||i(e.data)){var r,o=O.remove.length+1;for(i(t)?t.listeners+=o:t=n(e.elm,o),i(r=e.componentInstance)&&i(r=r._vnode)&&i(r.data)&&w(r,t),r=0;r<O.remove.length;++r)O.remove[r](e,t);i(r=e.data.hook)&&i(r=r.remove)?r(e,t):t()}else a(e.elm)}function _(e,t,n,o,a){for(var s,l,u,d,p=0,f=0,h=t.length-1,v=t[0],g=t[h],m=n.length-1,b=n[0],w=n[m],_=!a;p<=h&&f<=m;)r(v)?v=t[++p]:r(g)?g=t[--h]:dn(v,b)?(E(v,b,o),v=t[++p],b=n[++f]):dn(g,w)?(E(g,w,o),g=t[--h],w=n[--m]):dn(v,w)?(E(v,w,o),_&&D.insertBefore(e,v.elm,D.nextSibling(g.elm)),v=t[++p],w=n[--m]):dn(g,b)?(E(g,b,o),_&&D.insertBefore(e,g.elm,v.elm),g=t[--h],b=n[++f]):(r(s)&&(s=fn(t,p,h)),l=i(b.key)?s[b.key]:C(b,t,p,h),r(l)?c(b,o,e,v.elm):(u=t[l],dn(u,b)?(E(u,b,o),t[l]=void 0,_&&D.insertBefore(e,u.elm,v.elm)):c(b,o,e,v.elm)),b=n[++f]);p>h?(d=r(n[m+1])?null:n[m+1].elm,y(e,d,n,f,m,o)):f>m&&x(e,t,p,h)}function C(e,t,n,r){for(var o=n;o<r;o++){var a=t[o];if(i(a)&&dn(e,a))return o}}function E(e,t,n,a){if(e!==t){var s=t.elm=e.elm;if(o(e.isAsyncPlaceholder))return void(i(t.asyncFactory.resolved)?S(e.elm,t,n):t.isAsyncPlaceholder=!0);if(o(t.isStatic)&&o(e.isStatic)&&t.key===e.key&&(o(t.isCloned)||o(t.isOnce)))return void(t.componentInstance=e.componentInstance);var c,l=t.data;i(l)&&i(c=l.hook)&&i(c=c.prepatch)&&c(e,t);var u=e.children,d=t.children;if(i(l)&&v(t)){for(c=0;c<O.update.length;++c)O.update[c](e,t);i(c=l.hook)&&i(c=c.update)&&c(e,t)}r(t.text)?i(u)&&i(d)?u!==d&&_(s,u,d,n,a):i(d)?(i(e.text)&&D.setTextContent(s,""),y(s,null,d,0,d.length-1,n)):i(u)?x(s,u,0,u.length-1):i(e.text)&&D.setTextContent(s,""):e.text!==t.text&&D.setTextContent(s,t.text),i(l)&&i(c=l.hook)&&i(c=c.postpatch)&&c(e,t)}}function T(e,t,n){if(o(n)&&i(e.parent))e.parent.data.pendingInsert=t;else for(var r=0;r<t.length;++r)t[r].data.hook.insert(t[r])}function S(e,t,n,r){var a,s=t.tag,c=t.data,l=t.children;if(r=r||c&&c.pre,t.elm=e,o(t.isComment)&&i(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(i(c)&&(i(a=c.hook)&&i(a=a.init)&&a(t,!0),i(a=t.componentInstance)))return u(t,n),!0;if(i(s)){if(i(l))if(e.hasChildNodes())if(i(a=c)&&i(a=a.domProps)&&i(a=a.innerHTML)){if(a!==e.innerHTML)return!1}else{for(var d=!0,p=e.firstChild,h=0;h<l.length;h++){if(!p||!S(p,l[h],n,r)){d=!1;break}p=p.nextSibling}if(!d||p)return!1}else f(t,l,n);if(i(c)){var v=!1;for(var m in c)if(!$(m)){v=!0,g(t,n);break}!v&&c.class&&se(c.class)}}else e.data!==t.text&&(e.data=t.text);return!0}var I,A,O={},k=e.modules,D=e.nodeOps;for(I=0;I<ts.length;++I)for(O[ts[I]]=[],A=0;A<k.length;++A)i(k[A][ts[I]])&&O[ts[I]].push(k[A][ts[I]]);var $=h("attrs,class,staticClass,staticStyle,key");return function(e,n,a,s,l,u){if(r(n))return void(i(e)&&b(e));var d=!1,p=[];if(r(e))d=!0,c(n,p,l,u);else{var f=i(e.nodeType);if(!f&&dn(e,n))E(e,n,p,s);else{if(f){if(1===e.nodeType&&e.hasAttribute(ho)&&(e.removeAttribute(ho),a=!0),o(a)&&S(e,n,p))return T(n,p,!0),e;e=t(e)}var h=e.elm,g=D.parentNode(h);if(c(n,p,h._leaveCb?null:g,D.nextSibling(h)),i(n.parent))for(var m=n.parent,y=v(n);m;){for(var w=0;w<O.destroy.length;++w)O.destroy[w](m);if(m.elm=n.elm,y){for(var _=0;_<O.create.length;++_)O.create[_](es,m);var C=m.data.hook.insert;if(C.merged)for(var I=1;I<C.fns.length;I++)C.fns[I]()}else un(m);m=m.parent}i(g)?x(g,[e],0,0):i(e.tag)&&b(e)}}return T(n,p,d),n.elm}}({nodeOps:Ka,modules:Ds});To&&document.addEventListener("selectionchange",function(){var e=document.activeElement;e&&e.vmodel&&Sr(e,"input")});var zs={inserted:function(e,t,n,r){"select"===n.tag?(r.elm&&!r.elm._vOptions?de(n,"postpatch",function(){zs.componentUpdated(e,t,n)}):xr(e,t,n.context),e._vOptions=[].map.call(e.options,Cr)):("textarea"===n.tag||Ja(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("change",Tr),Io||(e.addEventListener("compositionstart",Er),e.addEventListener("compositionend",Tr)),To&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){xr(e,t,n.context);var r=e._vOptions,i=e._vOptions=[].map.call(e.options,Cr);if(i.some(function(e,t){return!C(e,r[t])})){(e.multiple?t.value.some(function(e){return _r(e,i)}):t.value!==t.oldValue&&_r(t.value,i))&&Sr(e,"change")}}}},Ms={bind:function(e,t,n){var r=t.value;n=Ir(n);var i=n.data&&n.data.transition,o=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;r&&i?(n.data.show=!0,vr(n,function(){e.style.display=o})):e.style.display=r?o:"none"},update:function(e,t,n){var r=t.value;r!==t.oldValue&&(n=Ir(n),n.data&&n.data.transition?(n.data.show=!0,r?vr(n,function(){e.style.display=e.__vOriginalDisplay}):gr(n,function(){e.style.display="none"})):e.style.display=r?e.__vOriginalDisplay:"none")},unbind:function(e,t,n,r,i){i||(e.style.display=e.__vOriginalDisplay)}},Rs={model:zs,show:Ms},Ps={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]},Ns={name:"transition",props:Ps,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(function(e){return e.tag||we(e)}),n.length)){var r=this.mode,i=n[0];if(Dr(this.$vnode))return i;var o=Ar(i);if(!o)return i;if(this._leaving)return kr(e,i);var a="__transition-"+this._uid+"-";o.key=null==o.key?o.isComment?a+"comment":a+o.tag:s(o.key)?0===String(o.key).indexOf(a)?o.key:a+o.key:o.key;var c=(o.data||(o.data={})).transition=Or(this),l=this._vnode,u=Ar(l);if(o.data.directives&&o.data.directives.some(function(e){return"show"===e.name})&&(o.data.show=!0),u&&u.data&&!$r(o,u)&&!we(u)&&(!u.componentInstance||!u.componentInstance._vnode.isComment)){var d=u.data.transition=x({},c);if("out-in"===r)return this._leaving=!0,de(d,"afterLeave",function(){t._leaving=!1,t.$forceUpdate()}),kr(e,i);if("in-out"===r){if(we(o))return l;var p,f=function(){p()};de(c,"afterEnter",f),de(c,"enterCancelled",f),de(d,"delayLeave",function(e){p=e})}}return i}}},js=x({tag:String,moveClass:String},Ps);delete js.mode;var Ls={props:js,render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),r=this.prevChildren=this.children,i=this.$slots.default||[],o=this.children=[],a=Or(this),s=0;s<i.length;s++){var c=i[s];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))o.push(c),n[c.key]=c,(c.data||(c.data={})).transition=a;else;}if(r){for(var l=[],u=[],d=0;d<r.length;d++){var p=r[d];p.data.transition=a,p.data.pos=p.elm.getBoundingClientRect(),n[p.key]?l.push(p):u.push(p)}this.kept=e(t,null,l),this.removed=u}return e(t,null,o)},beforeUpdate:function(){this.__patch__(this._vnode,this.kept,!1,!0),this._vnode=this.kept},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(zr),e.forEach(Mr),e.forEach(Rr),this._reflow=document.body.offsetHeight,e.forEach(function(e){if(e.data.moved){var n=e.elm,r=n.style;lr(n,t),r.transform=r.WebkitTransform=r.transitionDuration="",n.addEventListener(Es,n._moveCb=function e(r){r&&!/transform$/.test(r.propertyName)||(n.removeEventListener(Es,e),n._moveCb=null,ur(n,t))})}}))},methods:{hasMove:function(e,t){if(!xs)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach(function(e){ar(n,e)}),or(n,t),n.style.display="none",this.$el.appendChild(n);var r=pr(n);return this.$el.removeChild(n),this._hasMove=r.hasTransform}}},Hs={Transition:Ns,TransitionGroup:Ls};kt.config.mustUseProp=ja,kt.config.isReservedTag=Za,kt.config.isReservedAttr=Pa,kt.config.getTagNamespace=Vt,kt.config.isUnknownElement=Zt,x(kt.options.directives,Rs),x(kt.options.components,Hs),kt.prototype.__patch__=xo?$s:_,kt.prototype.$mount=function(e,t){return e=e&&xo?qt(e):void 0,De(this,e,t)},kt.nextTick(function(){mo.devtools&&Ro&&Ro.emit("init",kt)},0);var Ws,Bs=/\{\{((?:.|\n)+?)\}\}/g,Xs=/[-.*+?^${}()|[\]\/\\]/g,Ys=m(function(e){var t=e[0].replace(Xs,"\\$&"),n=e[1].replace(Xs,"\\$&");return new RegExp(t+"((?:.|\\n)+?)"+n,"g")}),Fs={staticKeys:["staticClass"],transformNode:Nr,genData:jr},Us={staticKeys:["staticStyle"],transformNode:Lr,genData:Hr},Gs={decode:function(e){return Ws=Ws||document.createElement("div"),Ws.innerHTML=e,Ws.textContent}},Vs=h("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"),Zs=h("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"),qs=h("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"),Js=/^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/,Ks="[a-zA-Z_][\\w\\-\\.]*",Qs="((?:"+Ks+"\\:)?"+Ks+")",ec=new RegExp("^<"+Qs),tc=/^\s*(\/?)>/,nc=new RegExp("^<\\/"+Qs+"[^>]*>"),rc=/^<!DOCTYPE [^>]+>/i,ic=/^<!--/,oc=/^<!\[/,ac=!1;"x".replace(/x(.)?/g,function(e,t){ac=""===t});var sc,cc,lc,uc,dc,pc,fc,hc,vc,gc,mc,yc=h("script,style,textarea",!0),bc={},xc={"&lt;":"<","&gt;":">","&quot;":'"',"&amp;":"&","&#10;":"\n","&#9;":"\t"},wc=/&(?:lt|gt|quot|amp);/g,_c=/&(?:lt|gt|quot|amp|#10|#9);/g,Cc=h("pre,textarea",!0),Ec=function(e,t){return e&&Cc(e)&&"\n"===t[0]},Tc=/^@|^v-on:/,Sc=/^v-|^@|^:/,Ic=/(.*?)\s+(?:in|of)\s+(.*)/,Ac=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,Oc=/^\(|\)$/g,kc=/:(.*)$/,Dc=/^:|^v-bind:/,$c=/\.[^.]+/g,zc=m(Gs.decode),Mc=/^xmlns:NS\d+/,Rc=/^NS\d+:/,Pc={preTransformNode:pi},Nc=[Fs,Us,Pc],jc={model:Wn,text:hi,html:vi},Lc={expectHTML:!0,modules:Nc,directives:jc,isPreTag:Va,isUnaryTag:Vs,mustUseProp:ja,canBeLeftOpenTag:Zs,isReservedTag:Za,getTagNamespace:Vt,staticKeys:function(e){return e.reduce(function(e,t){return e.concat(t.staticKeys||[])},[]).join(",")}(Nc)},Hc=m(mi),Wc=/^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,Bc=/^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,Xc={esc:27,tab:9,enter:13,space:32,up:38,left:37,right:39,down:40,delete:[8,46]},Yc=function(e){return"if("+e+")return null;"},Fc={stop:"$event.stopPropagation();",prevent:"$event.preventDefault();",self:Yc("$event.target !== $event.currentTarget"),ctrl:Yc("!$event.ctrlKey"),shift:Yc("!$event.shiftKey"),alt:Yc("!$event.altKey"),meta:Yc("!$event.metaKey"),left:Yc("'button' in $event && $event.button !== 0"),middle:Yc("'button' in $event && $event.button !== 1"),right:Yc("'button' in $event && $event.button !== 2")},Uc={on:Si,bind:Ii,cloak:_},Gc=function(e){this.options=e,this.warn=e.warn||En,this.transforms=Tn(e.modules,"transformCode"),this.dataGenFns=Tn(e.modules,"genData"),this.directives=x(x({},Uc),e.directives);var t=e.isReservedTag||po;this.maybeComponent=function(e){return!t(e.tag)},this.onceId=0,this.staticRenderFns=[]},Vc=(new RegExp("\\b"+"do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b")+"\\b"),new RegExp("\\b"+"delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b")+"\\s*\\([^\\)]*\\)"),function(e){return function(t){function n(n,r){var i=Object.create(t),o=[],a=[];if(i.warn=function(e,t){(t?a:o).push(e)},r){r.modules&&(i.modules=(t.modules||[]).concat(r.modules)),r.directives&&(i.directives=x(Object.create(t.directives||null),r.directives));for(var s in r)"modules"!==s&&"directives"!==s&&(i[s]=r[s])}var c=e(n,i);return c.errors=o,c.tips=a,c}return{compile:n,compileToFunctions:Ki(n)}}}(function(e,t){var n=Yr(e.trim(),t);!1!==t.optimize&&gi(n,t);var r=Ai(n,t);return{ast:n,render:r.render,staticRenderFns:r.staticRenderFns}})),Zc=Vc(Lc),qc=Zc.compileToFunctions,Jc=!!xo&&Qi(!1),Kc=!!xo&&Qi(!0),Qc=m(function(e){var t=qt(e);return t&&t.innerHTML}),el=kt.prototype.$mount;kt.prototype.$mount=function(e,t){if((e=e&&qt(e))===document.body||e===document.documentElement)return this;var n=this.$options;if(!n.render){var r=n.template;if(r)if("string"==typeof r)"#"===r.charAt(0)&&(r=Qc(r));else{if(!r.nodeType)return this;r=r.innerHTML}else e&&(r=eo(e));if(r){var i=qc(r,{shouldDecodeNewlines:Jc,shouldDecodeNewlinesForHref:Kc,delimiters:n.delimiters,comments:n.comments},this),o=i.render,a=i.staticRenderFns;n.render=o,n.staticRenderFns=a}}return el.call(this,e,t)},kt.compile=qc,e.exports=kt}).call(t,n(5),n(22).setImmediate)},function(e,t,n){function r(e,t){this._id=e,this._clearFn=t}var i=Function.prototype.apply;t.setTimeout=function(){return new r(i.call(setTimeout,window,arguments),clearTimeout)},t.setInterval=function(){return new r(i.call(setInterval,window,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(window,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n(23),t.setImmediate=setImmediate,t.clearImmediate=clearImmediate},function(e,t,n){(function(e,t){!function(e,n){"use strict";function r(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return l[c]=r,s(c),c++}function i(e){delete l[e]}function o(e){var t=e.callback,r=e.args;switch(r.length){case 0:t();break;case 1:t(r[0]);break;case 2:t(r[0],r[1]);break;case 3:t(r[0],r[1],r[2]);break;default:t.apply(n,r)}}function a(e){if(u)setTimeout(a,0,e);else{var t=l[e];if(t){u=!0;try{o(t)}finally{i(e),u=!1}}}}if(!e.setImmediate){var s,c=1,l={},u=!1,d=e.document,p=Object.getPrototypeOf&&Object.getPrototypeOf(e);p=p&&p.setTimeout?p:e,"[object process]"==={}.toString.call(e.process)?function(){s=function(e){t.nextTick(function(){a(e)})}}():function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?function(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"==typeof n.data&&0===n.data.indexOf(t)&&a(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),s=function(n){e.postMessage(t+n,"*")}}():e.MessageChannel?function(){var e=new MessageChannel;e.port1.onmessage=function(e){a(e.data)},s=function(t){e.port2.postMessage(t)}}():d&&"onreadystatechange"in d.createElement("script")?function(){var e=d.documentElement;s=function(t){var n=d.createElement("script");n.onreadystatechange=function(){a(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}():function(){s=function(e){setTimeout(a,0,e)}}(),p.setImmediate=r,p.clearImmediate=i}}("undefined"==typeof self?void 0===e?this:e:self)}).call(t,n(5),n(24))},function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function i(e){if(u===setTimeout)return setTimeout(e,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(e,0);try{return u(e,0)}catch(t){try{return u.call(null,e,0)}catch(t){return u.call(this,e,0)}}}function o(e){if(d===clearTimeout)return clearTimeout(e);if((d===r||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function a(){v&&f&&(v=!1,f.length?h=f.concat(h):g=-1,h.length&&s())}function s(){if(!v){var e=i(a);v=!0;for(var t=h.length;t;){for(f=h,h=[];++g<t;)f&&f[g].run();g=-1,t=h.length}f=null,v=!1,o(e)}}function c(e,t){this.fun=e,this.array=t}function l(){}var u,d,p=e.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(e){u=n}try{d="function"==typeof clearTimeout?clearTimeout:r}catch(e){d=r}}();var f,h=[],v=!1,g=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new c(e,t)),1!==h.length||v||i(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=l,p.addListener=l,p.once=l,p.off=l,p.removeListener=l,p.removeAllListeners=l,p.emit=l,p.prependListener=l,p.prependOnceListener=l,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},function(e,t,n){"use strict";e.exports=function(e){function t(e){var t=o(e);return t&&!!t.isDetectable}function n(e){o(e).isDetectable=!0}function r(e){return!!o(e).busy}function i(e,t){o(e).busy=!!t}var o=e.stateHandler.getState;return{isDetectable:t,markAsDetectable:n,isBusy:r,markBusy:i}}},function(e,t,n){"use strict";e.exports=function(e){function t(t){var n=e.get(t);return void 0===n?[]:o[n]||[]}function n(t,n){var r=e.get(t);o[r]||(o[r]=[]),o[r].push(n)}function r(e,n){for(var r=t(e),i=0,o=r.length;i<o;++i)if(r[i]===n){r.splice(i,1);break}}function i(e){var n=t(e);n&&(n.length=0)}var o={};return{get:t,add:n,removeListener:r,removeAllListeners:i}}},function(e,t,n){"use strict";e.exports=function(){function e(){return t++}var t=1;return{generate:e}}},function(e,t,n){"use strict";e.exports=function(e){function t(e){var t=i(e);return t&&void 0!==t.id?t.id:null}function n(e){var t=i(e);if(!t)throw new Error("setId required the element to have a resize detection state.");var n=r.generate();return t.id=n,n}var r=e.idGenerator,i=e.stateHandler.getState;return{get:t,set:n}}},function(e,t,n){"use strict";e.exports=function(e){function t(){}var n={log:t,warn:t,error:t};if(!e&&window.console){var r=function(e,t){e[t]=function(){var e=console[t];if(e.apply)e.apply(console,arguments);else for(var n=0;n<arguments.length;n++)e(arguments[n])}};r(n,"log"),r(n,"warn"),r(n,"error")}return n}},function(e,t,n){"use strict";function r(){function e(e,t){t||(t=e,e=0),e>o?o=e:e<a&&(a=e),r[e]||(r[e]=[]),r[e].push(t),i++}function t(){for(var e=a;e<=o;e++)for(var t=r[e],n=0;n<t.length;n++){var i=t[n];i()}}function n(){return i}var r={},i=0,o=0,a=0;return{add:e,process:t,size:n}}var i=n(31);e.exports=function(e){function t(e,t){!h&&d&&u&&0===f.size()&&a(),f.add(e,t)}function n(){for(h=!0;f.size();){var e=f;f=r(),e.process()}h=!1}function o(e){h||(void 0===e&&(e=u),p&&(s(p),p=null),e?a():n())}function a(){p=c(n)}function s(e){return clearTimeout(e)}function c(e){return function(e){return setTimeout(e,0)}(e)}e=e||{};var l=e.reporter,u=i.getOption(e,"async",!0),d=i.getOption(e,"auto",!0);d&&!u&&(l&&l.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."),u=!0);var p,f=r(),h=!1;return{add:t,force:o}}},function(e,t,n){"use strict";function r(e,t,n){var r=e[t];return void 0!==r&&null!==r||void 0===n?r:n}(e.exports={}).getOption=r},function(e,t,n){"use strict";function r(e){return e[a]={},i(e)}function i(e){return e[a]}function o(e){delete e[a]}var a="_erd";e.exports={initState:r,getState:i,cleanState:o}},function(e,t,n){"use strict";var r=n(8);e.exports=function(e){function t(e,t){function n(){t(e)}if(!i(e))throw new Error("Element is not detectable by this strategy.");if(r.isIE(8))c(e).object={proxy:n},e.attachEvent("onresize",n);else{i(e).contentDocument.defaultView.addEventListener("resize",n)}}function n(e,t,n){n||(n=t,t=e,e=null),e=e||{};e.debug;r.isIE(8)?n(t):function(e,t){function n(){function n(){if("static"===l.position){e.style.position="relative";var t=function(e,t,n,r){var i=n[r];"auto"!==i&&"0"!==function(e){return e.replace(/[^-\d\.]/g,"")}(i)&&(e.warn("An element that is positioned static has style."+r+"="+i+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+r+" will be set to 0. Element: ",t),t.style[r]=0)};t(a,e,l,"top"),t(a,e,l,"right"),t(a,e,l,"bottom"),t(a,e,l,"left")}}function s(){function r(e,t){if(!e.contentDocument)return void setTimeout(function(){r(e,t)},100);t(e.contentDocument)}o||n(),r(this,function(n){t(e)})}""!==l.position&&(n(l),o=!0);var u=document.createElement("object");u.style.cssText=i,u.tabIndex=-1,u.type="text/html",u.onload=s,r.isIE()||(u.data="about:blank"),e.appendChild(u),c(e).object=u,r.isIE()&&(u.data="about:blank")}var i="display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;",o=!1,l=window.getComputedStyle(e),u=e.offsetWidth,d=e.offsetHeight;c(e).startSize={width:u,height:d},s?s.add(n):n()}(t,n)}function i(e){return c(e).object}function o(e){r.isIE(8)?e.detachEvent("onresize",c(e).object.proxy):e.removeChild(i(e)),delete c(e).object}e=e||{};var a=e.reporter,s=e.batchProcessor,c=e.stateHandler.getState;if(!a)throw new Error("Missing required dependency: reporter.");return{makeDetectable:n,addListener:t,uninstall:o}}},function(e,t,n){"use strict";var r=n(7).forEach;e.exports=function(e){function t(e){e.className+=" "+v+"_animation_active"}function n(e,t,n){if(e.addEventListener)e.addEventListener(t,n);else{if(!e.attachEvent)return u.error("[scroll] Don't know how to add event listeners.");e.attachEvent("on"+t,n)}}function i(e,t,n){if(e.removeEventListener)e.removeEventListener(t,n);else{if(!e.detachEvent)return u.error("[scroll] Don't know how to remove event listeners.");e.detachEvent("on"+t,n)}}function o(e){return p(e).container.childNodes[0].childNodes[0].childNodes[0]}function a(e){return p(e).container.childNodes[0].childNodes[0].childNodes[1]}function s(e,t){if(!p(e).listeners.push)throw new Error("Cannot add listener to an element that is not detectable.");p(e).listeners.push(t)}function c(e,i,s){function c(){if(e.debug){var t=Array.prototype.slice.call(arguments);if(t.unshift(f.get(i),"Scroll: "),u.log.apply)u.log.apply(null,t);else for(var n=0;n<t.length;n++)u.log(t[n])}}function l(e){var t=p(e).container.childNodes[0],n=getComputedStyle(t);return!n.width||-1===n.width.indexOf("px")}function g(){var e=getComputedStyle(i),t={};return t.position=e.position,t.width=i.offsetWidth,t.height=i.offsetHeight,t.top=e.top,t.right=e.right,t.bottom=e.bottom,t.left=e.left,t.widthCSS=e.width,t.heightCSS=e.height,t}function m(){var e=g();p(i).startSize={width:e.width,height:e.height},c("Element start size",p(i).startSize)}function y(){p(i).listeners=[]}function b(){if(c("storeStyle invoked."),!p(i))return void c("Aborting because element has been uninstalled");var e=g();p(i).style=e}function x(e,t,n){p(e).lastWidth=t,p(e).lastHeight=n}function w(e){return o(e).childNodes[0]}function _(){return 2*h.width+1}function C(){return 2*h.height+1}function E(e){return e+10+_()}function T(e){return e+10+C()}function S(e){return 2*e+_()}function I(e){return 2*e+C()}function A(e,t,n){var r=o(e),i=a(e),s=E(t),c=T(n),l=S(t),u=I(n);r.scrollLeft=s,r.scrollTop=c,i.scrollLeft=l,i.scrollTop=u}function O(){var e=p(i).container;if(!e){e=document.createElement("div"),e.className=v,e.style.cssText="visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0; padding: 0;",p(i).container=e,t(e),i.appendChild(e);var r=function(){p(i).onRendered&&p(i).onRendered()};n(e,"animationstart",r),p(i).onAnimationStart=r}return e}function k(){function e(){p(i).onExpand&&p(i).onExpand()}function t(){p(i).onShrink&&p(i).onShrink()}if(c("Injecting elements"),!p(i))return void c("Aborting because element has been uninstalled");!function(){var e=p(i).style;if("static"===e.position){i.style.position="relative";var t=function(e,t,n,r){var i=n[r];"auto"!==i&&"0"!==function(e){return e.replace(/[^-\d\.]/g,"")}(i)&&(e.warn("An element that is positioned static has style."+r+"="+i+" which is ignored due to the static positioning. The element will need to be positioned relative, so the style."+r+" will be set to 0. Element: ",t),t.style[r]=0)};t(u,i,e,"top"),t(u,i,e,"right"),t(u,i,e,"bottom"),t(u,i,e,"left")}}();var r=p(i).container;r||(r=O());var o=h.width,a=h.height,s="position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; "+function(e,t,n,r){return e=e?e+"px":"0",t=t?t+"px":"0",n=n?n+"px":"0",r=r?r+"px":"0","left: "+e+"; top: "+t+"; right: "+r+"; bottom: "+n+";"}(-(1+o),-(1+a),-a,-o),l=document.createElement("div"),d=document.createElement("div"),f=document.createElement("div"),g=document.createElement("div"),m=document.createElement("div"),y=document.createElement("div");l.dir="ltr",l.style.cssText="position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;",l.className=v,d.className=v,d.style.cssText=s,f.style.cssText="position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;",g.style.cssText="position: absolute; left: 0; top: 0;",m.style.cssText="position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;",y.style.cssText="position: absolute; width: 200%; height: 200%;",f.appendChild(g),m.appendChild(y),d.appendChild(f),d.appendChild(m),l.appendChild(d),r.appendChild(l),n(f,"scroll",e),n(m,"scroll",t),p(i).onExpandScroll=e,p(i).onShrinkScroll=t}function D(){function t(e,t,n){var r=w(e),i=E(t),o=T(n);r.style.width=i+"px",r.style.height=o+"px"}function n(n){var r=i.offsetWidth,o=i.offsetHeight;c("Storing current size",r,o),x(i,r,o),d.add(0,function(){if(!p(i))return void c("Aborting because element has been uninstalled");if(!s())return void c("Aborting because element container has not been initialized");if(e.debug){var n=i.offsetWidth,a=i.offsetHeight;n===r&&a===o||u.warn(f.get(i),"Scroll: Size changed before updating detector elements.")}t(i,r,o)}),d.add(1,function(){return p(i)?s()?void A(i,r,o):void c("Aborting because element container has not been initialized"):void c("Aborting because element has been uninstalled")}),n&&d.add(2,function(){return p(i)?s()?void n():void c("Aborting because element container has not been initialized"):void c("Aborting because element has been uninstalled")})}function s(){return!!p(i).container}function h(){c("notifyListenersIfNeeded invoked");var e=p(i);return function(){return void 0===p(i).lastNotifiedWidth}()&&e.lastWidth===e.startSize.width&&e.lastHeight===e.startSize.height?c("Not notifying: Size is the same as the start size, and there has been no notification yet."):e.lastWidth===e.lastNotifiedWidth&&e.lastHeight===e.lastNotifiedHeight?c("Not notifying: Size already notified"):(c("Current size not notified, notifying..."),e.lastNotifiedWidth=e.lastWidth,e.lastNotifiedHeight=e.lastHeight,void r(p(i).listeners,function(e){e(i)}))}function v(){if(c("startanimation triggered."),l(i))return void c("Ignoring since element is still unrendered...");c("Element rendered.");var e=o(i),t=a(i);0!==e.scrollLeft&&0!==e.scrollTop&&0!==t.scrollLeft&&0!==t.scrollTop||(c("Scrollbars out of sync. Updating detector elements..."),n(h))}function g(){if(c("Scroll detected."),l(i))return void c("Scroll event fired while unrendered. Ignoring...");var e=i.offsetWidth,t=i.offsetHeight;e!==p(i).lastWidth||t!==p(i).lastHeight?(c("Element size changed."),n(h)):c("Element size has not changed ("+e+"x"+t+").")}if(c("registerListenersAndPositionElements invoked."),!p(i))return void c("Aborting because element has been uninstalled");p(i).onRendered=v,p(i).onExpand=g,p(i).onShrink=g;var m=p(i).style;t(i,m.width,m.height)}function $(){if(c("finalizeDomMutation invoked."),!p(i))return void c("Aborting because element has been uninstalled");var e=p(i).style;x(i,e.width,e.height),A(i,e.width,e.height)}function z(){s(i)}function M(){c("Installing..."),y(),m(),d.add(0,b),d.add(1,k),d.add(2,D),d.add(3,$),d.add(4,z)}s||(s=i,i=e,e=null),e=e||{},c("Making detectable..."),!function(e){return!function(e){return e===e.ownerDocument.body||e.ownerDocument.body.contains(e)}(e)||null===getComputedStyle(e)}(i)?M():(c("Element is detached"),O(),c("Waiting until element is attached..."),p(i).onRendered=function(){c("Element is now attached"),M()})}function l(e){var t=p(e);t&&(t.onExpandScroll&&i(o(e),"scroll",t.onExpandScroll),t.onShrinkScroll&&i(a(e),"scroll",t.onShrinkScroll),t.onAnimationStart&&i(t.container,"animationstart",t.onAnimationStart),t.container&&e.removeChild(t.container))}e=e||{};var u=e.reporter,d=e.batchProcessor,p=e.stateHandler.getState,f=(e.stateHandler.hasState,e.idHandler);if(!d)throw new Error("Missing required dependency: batchProcessor");if(!u)throw new Error("Missing required dependency: reporter.");var h=function(){var e=document.createElement("div");e.style.cssText="position: absolute; width: 1000px; height: 1000px; visibility: hidden; margin: 0; padding: 0;";var t=document.createElement("div");t.style.cssText="position: absolute; width: 500px; height: 500px; overflow: scroll; visibility: none; top: -1500px; left: -1500px; visibility: hidden; margin: 0; padding: 0;",t.appendChild(e),document.body.insertBefore(t,document.body.firstChild);var n=500-t.clientWidth,r=500-t.clientHeight;return document.body.removeChild(t),{width:n,height:r}}(),v="erd_scroll_detection_container";return function(e,t){if(!document.getElementById(e)){var n=t+"_animation",r=t+"_animation_active",i="/* Created by the element-resize-detector library. */\n";i+="."+t+" > div::-webkit-scrollbar { display: none; }\n\n",i+="."+r+" { -webkit-animation-duration: 0.1s; animation-duration: 0.1s; -webkit-animation-name: "+n+"; animation-name: "+n+"; }\n",i+="@-webkit-keyframes "+n+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n",i+="@keyframes "+n+" { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }",function(t,n){n=n||function(e){document.head.appendChild(e)};var r=document.createElement("style");r.innerHTML=t,r.id=e,n(r)}(i)}}("erd_scroll_detection_scrollbar_style",v),{makeDetectable:c,addListener:s,uninstall:l}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"item",staticClass:"vue-grid-layout",style:e.mergedStyle},[e._t("default"),e._v(" "),n("grid-item",{directives:[{name:"show",rawName:"v-show",value:e.isDragging,expression:"isDragging"}],staticClass:"vue-grid-placeholder",attrs:{x:e.placeholder.x,y:e.placeholder.y,w:e.placeholder.w,h:e.placeholder.h,i:e.placeholder.i}})],2)},staticRenderFns:[]}},function(e,t,n){n(37);var r=n(4)(n(39),n(41),null,null);e.exports=r.exports},function(e,t,n){var r=n(38);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(3)("6557a36c",r,!0)},function(e,t,n){t=e.exports=n(2)(),t.push([e.i,".vue-grid-layout{position:relative;transition:height .2s ease}",""])},function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),i=(n(40),n(1)),o=function(e){return e&&e.__esModule?e:{default:e}}(i),a=n(6);t.default={name:"ResponsiveGridLayout",components:{GridItem:o.default},props:{autoSize:{type:Boolean,default:!0},colNum:{type:Number,required:!1,default:0},rowHeight:{type:Number,default:150},maxRows:{type:Number,default:1/0},margin:{type:Array,default:function(){return[10,10]}},isDraggable:{type:Boolean,default:!0},isResizable:{type:Boolean,default:!0},useCssTransforms:{type:Boolean,default:!0},verticalCompact:{type:Boolean,default:!0},layout:[]},data:function(){return{originalCols:null,width:null,mergedStyle:{},lastLayoutLength:0}},beforeDestroy:function(){window.removeEventListener("resize",self.onWindowResize)},mounted:function(){this.$nextTick(function(){(0,r.validateLayout)(this.layout),this.originalCols=this.colNum;var e=this;window.onload=function(){e.onWindowResize(),window.addEventListener("resize",e.onWindowResize),(0,r.compact)(e.layout,e.verticalCompact),e.updateHeight(),e.$nextTick(function(){a({strategy:"scroll"}).listenTo(e.$refs.item,function(t){e.onWindowResize()})})}})},watch:{width:function(){this.width>768?this.colNum=this.originalCols:this.colNum=2,this.$nextTick(function(){var e=this;this.$children.forEach(function(t){t.updateWidth(e.width)}),this.updateHeight(),(0,r.compact)(this.layout,this.verticalCompact)})},layout:function(){if(void 0!==this.layout&&this.layout.length!==this.lastLayoutLength){this.lastLayoutLength=this.layout.length,(0,r.compact)(this.layout,this.verticalCompact);var e=this;this.$children.forEach(function(t){t.updateWidth(e.width)}),this.updateHeight()}}},methods:{onWindowResize:function(){null!==this.$refs&&null!==this.$refs.item&&(this.width=this.$refs.item.offsetWidth)},updateHeight:function(){this.mergedStyle={height:this.containerHeight()}},containerHeight:function(){if(this.autoSize)return(0,r.bottom)(this.layout)*(this.rowHeight+this.margin[1])+this.margin[1]+"px"},dragEvent:function(e,t,n,i){var o=this,a=(0,r.getLayoutItem)(this.layout,t);this.layout=(0,r.moveElement)(this.layout,a,n,i,!0),(0,r.compact)(this.layout,this.verticalCompact),this.$children.forEach(function(e){e.compact(o.layout)}),this.updateHeight()},resizeEvent:function(e,t,n,i){var o=this;(0,r.compact)(this.layout,this.verticalCompact),this.$children.forEach(function(e){e.compact(o.layout)}),this.updateHeight()}}}},function(e,t,n){"use strict";function r(e,t){for(var n=s(e),r=n[0],i=1,o=n.length;i<o;i++){var a=n[i];t>e[a]&&(r=a)}return r}function i(e,t){if(!t[e])throw new Error("ResponsiveGridLayout: `cols` entry for breakpoint "+e+" is missing!");return t[e]}function o(e,t,n,r,i,o){if(e[n])return(0,c.cloneLayout)(e[n]);for(var a=e[r],l=s(t),u=l.slice(l.indexOf(n)),d=0,p=u.length;d<p;d++){var f=u[d];if(e[f]){a=e[f];break}}return a=(0,c.cloneLayout)(a||[]),(0,c.compact)((0,c.correctBounds)(a,{cols:i}),o)}function a(e,t,n,r,i,o){return e=(0,c.cloneLayout)(e||[]),(0,c.compact)((0,c.correctBounds)(e,{cols:i}),o)}function s(e){return Object.keys(e).sort(function(t,n){return e[t]-e[n]})}Object.defineProperty(t,"__esModule",{value:!0}),t.getBreakpointFromWidth=r,t.getColsFromBreakpoint=i,t.findOrGenerateResponsiveLayout=o,t.generateResponsiveLayout=a,t.sortBreakpoints=s;var c=n(0)},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{ref:"item",staticClass:"vue-grid-layout",style:e.mergedStyle},[e._t("default")],2)},staticRenderFns:[]}}])});
//# sourceMappingURL=vue-grid-layout.min.js.map
},{}],"../../../../../../../.config/nvm/14.3.0/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../../../../.config/nvm/14.3.0/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../../../../.config/nvm/14.3.0/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../../../../../node_modules/vue-hot-reload-api/dist/index.js":[function(require,module,exports) {
var Vue // late bind
var version
var map = Object.create(null)
if (typeof window !== 'undefined') {
  window.__VUE_HOT_MAP__ = map
}
var installed = false
var isBrowserify = false
var initHookName = 'beforeCreate'

exports.install = function (vue, browserify) {
  if (installed) { return }
  installed = true

  Vue = vue.__esModule ? vue.default : vue
  version = Vue.version.split('.').map(Number)
  isBrowserify = browserify

  // compat with < 2.0.0-alpha.7
  if (Vue.config._lifecycleHooks.indexOf('init') > -1) {
    initHookName = 'init'
  }

  exports.compatible = version[0] >= 2
  if (!exports.compatible) {
    console.warn(
      '[HMR] You are using a version of vue-hot-reload-api that is ' +
        'only compatible with Vue.js core ^2.0.0.'
    )
    return
  }
}

/**
 * Create a record for a hot module, which keeps track of its constructor
 * and instances
 *
 * @param {String} id
 * @param {Object} options
 */

exports.createRecord = function (id, options) {
  if(map[id]) { return }

  var Ctor = null
  if (typeof options === 'function') {
    Ctor = options
    options = Ctor.options
  }
  makeOptionsHot(id, options)
  map[id] = {
    Ctor: Ctor,
    options: options,
    instances: []
  }
}

/**
 * Check if module is recorded
 *
 * @param {String} id
 */

exports.isRecorded = function (id) {
  return typeof map[id] !== 'undefined'
}

/**
 * Make a Component options object hot.
 *
 * @param {String} id
 * @param {Object} options
 */

function makeOptionsHot(id, options) {
  if (options.functional) {
    var render = options.render
    options.render = function (h, ctx) {
      var instances = map[id].instances
      if (ctx && instances.indexOf(ctx.parent) < 0) {
        instances.push(ctx.parent)
      }
      return render(h, ctx)
    }
  } else {
    injectHook(options, initHookName, function() {
      var record = map[id]
      if (!record.Ctor) {
        record.Ctor = this.constructor
      }
      record.instances.push(this)
    })
    injectHook(options, 'beforeDestroy', function() {
      var instances = map[id].instances
      instances.splice(instances.indexOf(this), 1)
    })
  }
}

/**
 * Inject a hook to a hot reloadable component so that
 * we can keep track of it.
 *
 * @param {Object} options
 * @param {String} name
 * @param {Function} hook
 */

function injectHook(options, name, hook) {
  var existing = options[name]
  options[name] = existing
    ? Array.isArray(existing) ? existing.concat(hook) : [existing, hook]
    : [hook]
}

function tryWrap(fn) {
  return function (id, arg) {
    try {
      fn(id, arg)
    } catch (e) {
      console.error(e)
      console.warn(
        'Something went wrong during Vue component hot-reload. Full reload required.'
      )
    }
  }
}

function updateOptions (oldOptions, newOptions) {
  for (var key in oldOptions) {
    if (!(key in newOptions)) {
      delete oldOptions[key]
    }
  }
  for (var key$1 in newOptions) {
    oldOptions[key$1] = newOptions[key$1]
  }
}

exports.rerender = tryWrap(function (id, options) {
  var record = map[id]
  if (!options) {
    record.instances.slice().forEach(function (instance) {
      instance.$forceUpdate()
    })
    return
  }
  if (typeof options === 'function') {
    options = options.options
  }
  if (record.Ctor) {
    record.Ctor.options.render = options.render
    record.Ctor.options.staticRenderFns = options.staticRenderFns
    record.instances.slice().forEach(function (instance) {
      instance.$options.render = options.render
      instance.$options.staticRenderFns = options.staticRenderFns
      // reset static trees
      // pre 2.5, all static trees are cached together on the instance
      if (instance._staticTrees) {
        instance._staticTrees = []
      }
      // 2.5.0
      if (Array.isArray(record.Ctor.options.cached)) {
        record.Ctor.options.cached = []
      }
      // 2.5.3
      if (Array.isArray(instance.$options.cached)) {
        instance.$options.cached = []
      }

      // post 2.5.4: v-once trees are cached on instance._staticTrees.
      // Pure static trees are cached on the staticRenderFns array
      // (both already reset above)

      // 2.6: temporarily mark rendered scoped slots as unstable so that
      // child components can be forced to update
      var restore = patchScopedSlots(instance)
      instance.$forceUpdate()
      instance.$nextTick(restore)
    })
  } else {
    // functional or no instance created yet
    record.options.render = options.render
    record.options.staticRenderFns = options.staticRenderFns

    // handle functional component re-render
    if (record.options.functional) {
      // rerender with full options
      if (Object.keys(options).length > 2) {
        updateOptions(record.options, options)
      } else {
        // template-only rerender.
        // need to inject the style injection code for CSS modules
        // to work properly.
        var injectStyles = record.options._injectStyles
        if (injectStyles) {
          var render = options.render
          record.options.render = function (h, ctx) {
            injectStyles.call(ctx)
            return render(h, ctx)
          }
        }
      }
      record.options._Ctor = null
      // 2.5.3
      if (Array.isArray(record.options.cached)) {
        record.options.cached = []
      }
      record.instances.slice().forEach(function (instance) {
        instance.$forceUpdate()
      })
    }
  }
})

exports.reload = tryWrap(function (id, options) {
  var record = map[id]
  if (options) {
    if (typeof options === 'function') {
      options = options.options
    }
    makeOptionsHot(id, options)
    if (record.Ctor) {
      if (version[1] < 2) {
        // preserve pre 2.2 behavior for global mixin handling
        record.Ctor.extendOptions = options
      }
      var newCtor = record.Ctor.super.extend(options)
      // prevent record.options._Ctor from being overwritten accidentally
      newCtor.options._Ctor = record.options._Ctor
      record.Ctor.options = newCtor.options
      record.Ctor.cid = newCtor.cid
      record.Ctor.prototype = newCtor.prototype
      if (newCtor.release) {
        // temporary global mixin strategy used in < 2.0.0-alpha.6
        newCtor.release()
      }
    } else {
      updateOptions(record.options, options)
    }
  }
  record.instances.slice().forEach(function (instance) {
    if (instance.$vnode && instance.$vnode.context) {
      instance.$vnode.context.$forceUpdate()
    } else {
      console.warn(
        'Root or manually mounted instance modified. Full reload required.'
      )
    }
  })
})

// 2.6 optimizes template-compiled scoped slots and skips updates if child
// only uses scoped slots. We need to patch the scoped slots resolving helper
// to temporarily mark all scoped slots as unstable in order to force child
// updates.
function patchScopedSlots (instance) {
  if (!instance._u) { return }
  // https://github.com/vuejs/vue/blob/dev/src/core/instance/render-helpers/resolve-scoped-slots.js
  var original = instance._u
  instance._u = function (slots) {
    try {
      // 2.6.4 ~ 2.6.6
      return original(slots, true)
    } catch (e) {
      // 2.5 / >= 2.6.7
      return original(slots, null, true)
    }
  }
  return function () {
    instance._u = original
  }
}

},{}],"../node_modules/vue/dist/vue.runtime.esm.js":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */

/*  */
var emptyObject = Object.freeze({}); // These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.

function isUndef(v) {
  return v === undefined || v === null;
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function isTrue(v) {
  return v === true;
}

function isFalse(v) {
  return v === false;
}
/**
 * Check if value is primitive.
 */


function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number' || // $flow-disable-line
  typeof value === 'symbol' || typeof value === 'boolean';
}
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */


function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}
/**
 * Get the raw type string of a value, e.g., [object Object].
 */


var _toString = Object.prototype.toString;

function toRawType(value) {
  return _toString.call(value).slice(8, -1);
}
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */


function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function isRegExp(v) {
  return _toString.call(v) === '[object RegExp]';
}
/**
 * Check if val is a valid array index.
 */


function isValidArrayIndex(val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

function isPromise(val) {
  return isDef(val) && typeof val.then === 'function' && typeof val.catch === 'function';
}
/**
 * Convert a value to a string that is actually rendered.
 */


function toString(val) {
  return val == null ? '' : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
}
/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */


function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
}
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */


function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}
/**
 * Check if a tag is a built-in tag.
 */


var isBuiltInTag = makeMap('slot,component', true);
/**
 * Check if an attribute is a reserved attribute.
 */

var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
/**
 * Remove an item from an array.
 */

function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);

    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}
/**
 * Check whether an object has the property.
 */


var hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
/**
 * Create a cached version of a pure function.
 */


function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
/**
 * Camelize a hyphen-delimited string.
 */


var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
/**
 * Capitalize a string.
 */

var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * Hyphenate a camelCase string.
 */

var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */

function polyfillBind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }

  boundFn._length = fn.length;
  return boundFn;
}

function nativeBind(fn, ctx) {
  return fn.bind(ctx);
}

var bind = Function.prototype.bind ? nativeBind : polyfillBind;
/**
 * Convert an Array-like object to a real Array.
 */

function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);

  while (i--) {
    ret[i] = list[i + start];
  }

  return ret;
}
/**
 * Mix properties into target object.
 */


function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }

  return to;
}
/**
 * Merge an Array of Objects into a single Object.
 */


function toObject(arr) {
  var res = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }

  return res;
}
/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */


function noop(a, b, c) {}
/**
 * Always return false.
 */


var no = function (a, b, c) {
  return false;
};
/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */


var identity = function (_) {
  return _;
};
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */


function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  var isObjectA = isObject(a);
  var isObjectB = isObject(b);

  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);

      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i]);
        });
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key]);
        });
      } else {
        /* istanbul ignore next */
        return false;
      }
    } catch (e) {
      /* istanbul ignore next */
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}
/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */


function looseIndexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }

  return -1;
}
/**
 * Ensure a function is called only once.
 */


function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

var SSR_ATTR = 'data-server-rendered';
var ASSET_TYPES = ['component', 'directive', 'filter'];
var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured', 'serverPrefetch'];
/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
};
/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */

var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
/**
 * Check if a string starts with $ or _
 */

function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}
/**
 * Define a property.
 */


function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}
/**
 * Parse simple path.
 */


var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");

function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }

  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) {
        return;
      }

      obj = obj[segments[i]];
    }

    return obj;
  };
}
/*  */
// can we use __proto__?


var hasProto = ('__proto__' in {}); // Browser environment sniffing

var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0 || weexPlatform === 'android';
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA) || weexPlatform === 'ios';
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/); // Firefox has a "watch" function on Object.prototype...

var nativeWatch = {}.watch;
var supportsPassive = false;

if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', {
      get: function get() {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    }); // https://github.com/facebook/flow/issues/285

    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
} // this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV


var _isServer;

var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }

  return _isServer;
}; // detect devtools


var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
/* istanbul ignore next */

function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}

var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */
// $flow-disable-line


if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/function () {
    function Set() {
      this.set = Object.create(null);
    }

    Set.prototype.has = function has(key) {
      return this.set[key] === true;
    };

    Set.prototype.add = function add(key) {
      this.set[key] = true;
    };

    Set.prototype.clear = function clear() {
      this.set = Object.create(null);
    };

    return Set;
  }();
}
/*  */


var warn = noop;
var tip = noop;
var generateComponentTrace = noop; // work around flow check

var formatComponentName = noop;

if ("development" !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;

  var classify = function (str) {
    return str.replace(classifyRE, function (c) {
      return c.toUpperCase();
    }).replace(/[-_]/g, '');
  };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && !config.silent) {
      console.error("[Vue warn]: " + msg + trace);
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && !config.silent) {
      console.warn("[Vue tip]: " + msg + (vm ? generateComponentTrace(vm) : ''));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>';
    }

    var options = typeof vm === 'function' && vm.cid != null ? vm.options : vm._isVue ? vm.$options || vm.constructor.options : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;

    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (name ? "<" + classify(name) + ">" : "<Anonymous>") + (file && includeFile !== false ? " at " + file : '');
  };

  var repeat = function (str, n) {
    var res = '';

    while (n) {
      if (n % 2 === 1) {
        res += str;
      }

      if (n > 1) {
        str += str;
      }

      n >>= 1;
    }

    return res;
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;

      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];

          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue;
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }

        tree.push(vm);
        vm = vm.$parent;
      }

      return '\n\nfound in\n\n' + tree.map(function (vm, i) {
        return "" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm) ? formatComponentName(vm[0]) + "... (" + vm[1] + " recursive calls)" : formatComponentName(vm));
      }).join('\n');
    } else {
      return "\n\n(found in " + formatComponentName(vm) + ")";
    }
  };
}
/*  */


var uid = 0;
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */

var Dep = function Dep() {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub(sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub(sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend() {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify() {
  // stabilize the subscriber list first
  var subs = this.subs.slice();

  if ("development" !== 'production' && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) {
      return a.id - b.id;
    });
  }

  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
}; // The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.


Dep.target = null;
var targetStack = [];

function pushTarget(target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget() {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}
/*  */


var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = {
  child: {
    configurable: true
  }
}; // DEPRECATED: alias for componentInstance for backwards compat.

/* istanbul ignore next */

prototypeAccessors.child.get = function () {
  return this.componentInstance;
};

Object.defineProperties(VNode.prototype, prototypeAccessors);

var createEmptyVNode = function (text) {
  if (text === void 0) text = '';
  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node;
};

function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
} // optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.


function cloneVNode(vnode) {
  var cloned = new VNode(vnode.tag, vnode.data, // #7975
  // clone children array to avoid mutating original in case of cloning
  // a child.
  vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned;
}
/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */


var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
/**
 * Intercept mutating methods and emit events
 */

methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;

    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;

      case 'splice':
        inserted = args.slice(2);
        break;
    }

    if (inserted) {
      ob.observeArray(inserted);
    } // notify change


    ob.dep.notify();
    return result;
  });
});
/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */

var shouldObserve = true;

function toggleObserving(value) {
  shouldObserve = value;
}
/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */


var Observer = function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);

  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }

    this.observeArray(value);
  } else {
    this.walk(value);
  }
};
/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */


Observer.prototype.walk = function walk(obj) {
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};
/**
 * Observe a list of Array items.
 */


Observer.prototype.observeArray = function observeArray(items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
}; // helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */


function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}
/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */

/* istanbul ignore next */


function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}
/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */


function observe(value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return;
  }

  var ob;

  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }

  if (asRootData && ob) {
    ob.vmCount++;
  }

  return ob;
}
/**
 * Define a reactive property on an Object.
 */


function defineReactive$$1(obj, key, val, customSetter, shallow) {
  var dep = new Dep();
  var property = Object.getOwnPropertyDescriptor(obj, key);

  if (property && property.configurable === false) {
    return;
  } // cater for pre-defined getter/setters


  var getter = property && property.get;
  var setter = property && property.set;

  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;

      if (Dep.target) {
        dep.depend();

        if (childOb) {
          childOb.dep.depend();

          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }

      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */

      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }
      /* eslint-enable no-self-compare */


      if ("development" !== 'production' && customSetter) {
        customSetter();
      } // #7981: for accessor properties without setter


      if (getter && !setter) {
        return;
      }

      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }

      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}
/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */


function set(target, key, val) {
  if ("development" !== 'production' && (isUndef(target) || isPrimitive(target))) {
    warn("Cannot set reactive property on undefined, null, or primitive value: " + target);
  }

  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }

  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
    "development" !== 'production' && warn('Avoid adding reactive properties to a Vue instance or its root $data ' + 'at runtime - declare it upfront in the data option.');
    return val;
  }

  if (!ob) {
    target[key] = val;
    return val;
  }

  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val;
}
/**
 * Delete a property and trigger change if necessary.
 */


function del(target, key) {
  if ("development" !== 'production' && (isUndef(target) || isPrimitive(target))) {
    warn("Cannot delete reactive property on undefined, null, or primitive value: " + target);
  }

  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
    "development" !== 'production' && warn('Avoid deleting properties on a Vue instance or its root $data ' + '- just set it to null.');
    return;
  }

  if (!hasOwn(target, key)) {
    return;
  }

  delete target[key];

  if (!ob) {
    return;
  }

  ob.dep.notify();
}
/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */


function dependArray(value) {
  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();

    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}
/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */


var strats = config.optionMergeStrategies;
/**
 * Options with restrictions
 */

if ("development" !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn("option \"" + key + "\" can only be used during instance " + 'creation with the `new` keyword.');
    }

    return defaultStrat(parent, child);
  };
}
/**
 * Helper that recursively merges two data objects together.
 */


function mergeData(to, from) {
  if (!from) {
    return to;
  }

  var key, toVal, fromVal;
  var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i]; // in case the object is already observed...

    if (key === '__ob__') {
      continue;
    }

    toVal = to[key];
    fromVal = from[key];

    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }

  return to;
}
/**
 * Data
 */


function mergeDataOrFn(parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }

    if (!parentVal) {
      return childVal;
    } // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.


    return function mergedDataFn() {
      return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
    };
  } else {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;

      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
}

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn('The "data" option should be a function ' + 'that returns a per-instance value in component ' + 'definitions.', vm);
      return parentVal;
    }

    return mergeDataOrFn(parentVal, childVal);
  }

  return mergeDataOrFn(parentVal, childVal, vm);
};
/**
 * Hooks and props are merged as arrays.
 */


function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}

function dedupeHooks(hooks) {
  var res = [];

  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }

  return res;
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});
/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function mergeAssets(parentVal, childVal, vm, key) {
  var res = Object.create(parentVal || null);

  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal);
  } else {
    return res;
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});
/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

strats.watch = function (parentVal, childVal, vm, key) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) {
    parentVal = undefined;
  }

  if (childVal === nativeWatch) {
    childVal = undefined;
  }
  /* istanbul ignore if */


  if (!childVal) {
    return Object.create(parentVal || null);
  }

  if ("development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = {};
  extend(ret, parentVal);

  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];

    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }

    ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
  }

  return ret;
};
/**
 * Other object hashes.
 */


strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = Object.create(null);
  extend(ret, parentVal);

  if (childVal) {
    extend(ret, childVal);
  }

  return ret;
};

strats.provide = mergeDataOrFn;
/**
 * Default strategy.
 */

var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};
/**
 * Validate component names
 */


function checkComponents(options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName(name) {
  if (!new RegExp("^[a-zA-Z][\\-\\.0-9_" + unicodeRegExp.source + "]*$").test(name)) {
    warn('Invalid component name: "' + name + '". Component names ' + 'should conform to valid custom element name in html5 specification.');
  }

  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn('Do not use built-in or reserved HTML elements as component ' + 'id: ' + name);
  }
}
/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */


function normalizeProps(options, vm) {
  var props = options.props;

  if (!props) {
    return;
  }

  var res = {};
  var i, val, name;

  if (Array.isArray(props)) {
    i = props.length;

    while (i--) {
      val = props[i];

      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = {
          type: null
        };
      } else if ("development" !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val) ? val : {
        type: val
      };
    }
  } else if ("development" !== 'production') {
    warn("Invalid value for option \"props\": expected an Array or an Object, " + "but got " + toRawType(props) + ".", vm);
  }

  options.props = res;
}
/**
 * Normalize all injections into Object-based format
 */


function normalizeInject(options, vm) {
  var inject = options.inject;

  if (!inject) {
    return;
  }

  var normalized = options.inject = {};

  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = {
        from: inject[i]
      };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val) ? extend({
        from: key
      }, val) : {
        from: val
      };
    }
  } else if ("development" !== 'production') {
    warn("Invalid value for option \"inject\": expected an Array or an Object, " + "but got " + toRawType(inject) + ".", vm);
  }
}
/**
 * Normalize raw function directives into object format.
 */


function normalizeDirectives(options) {
  var dirs = options.directives;

  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];

      if (typeof def$$1 === 'function') {
        dirs[key] = {
          bind: def$$1,
          update: def$$1
        };
      }
    }
  }
}

function assertObjectType(name, value, vm) {
  if (!isPlainObject(value)) {
    warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".", vm);
  }
}
/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */


function mergeOptions(parent, child, vm) {
  if ("development" !== 'production') {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child); // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.

  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }

    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;

  for (key in parent) {
    mergeField(key);
  }

  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }

  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }

  return options;
}
/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */


function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }

  var assets = options[type]; // check local registration variations first

  if (hasOwn(assets, id)) {
    return assets[id];
  }

  var camelizedId = camelize(id);

  if (hasOwn(assets, camelizedId)) {
    return assets[camelizedId];
  }

  var PascalCaseId = capitalize(camelizedId);

  if (hasOwn(assets, PascalCaseId)) {
    return assets[PascalCaseId];
  } // fallback to prototype chain


  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];

  if ("development" !== 'production' && warnMissing && !res) {
    warn('Failed to resolve ' + type.slice(0, -1) + ': ' + id, options);
  }

  return res;
}
/*  */


function validateProp(key, propOptions, propsData, vm) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key]; // boolean casting

  var booleanIndex = getTypeIndex(Boolean, prop.type);

  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);

      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  } // check default value


  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key); // since the default value is a fresh copy,
    // make sure to observe it.

    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }

  if ("development" !== 'production' && // skip validation for weex recycle-list child component props
  !false) {
    assertProp(prop, key, value, vm, absent);
  }

  return value;
}
/**
 * Get the default value of a prop.
 */


function getPropDefaultValue(vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined;
  }

  var def = prop.default; // warn against non-factory defaults for Object & Array

  if ("development" !== 'production' && isObject(def)) {
    warn('Invalid default value for prop "' + key + '": ' + 'Props with type Object/Array must use a factory function ' + 'to return the default value.', vm);
  } // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger


  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
    return vm._props[key];
  } // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context


  return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
}
/**
 * Assert whether a prop is valid.
 */


function assertProp(prop, name, value, vm, absent) {
  if (prop.required && absent) {
    warn('Missing required prop: "' + name + '"', vm);
    return;
  }

  if (value == null && !prop.required) {
    return;
  }

  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];

  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }

    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(getInvalidTypeMessage(name, value, expectedTypes), vm);
    return;
  }

  var validator = prop.validator;

  if (validator) {
    if (!validator(value)) {
      warn('Invalid prop: custom validator check failed for prop "' + name + '".', vm);
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType(value, type) {
  var valid;
  var expectedType = getType(type);

  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase(); // for primitive wrapper objects

    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }

  return {
    valid: valid,
    expectedType: expectedType
  };
}
/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */


function getType(fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function getTypeIndex(type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }

  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i;
    }
  }

  return -1;
}

function getInvalidTypeMessage(name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." + " Expected " + expectedTypes.map(capitalize).join(', ');
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType); // check if we need to specify expected value

  if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }

  message += ", got " + receivedType + " "; // check if we need to specify received value

  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }

  return message;
}

function styleValue(value, type) {
  if (type === 'String') {
    return "\"" + value + "\"";
  } else if (type === 'Number') {
    return "" + Number(value);
  } else {
    return "" + value;
  }
}

function isExplicable(value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) {
    return value.toLowerCase() === elem;
  });
}

function isBoolean() {
  var args = [],
      len = arguments.length;

  while (len--) args[len] = arguments[len];

  return args.some(function (elem) {
    return elem.toLowerCase() === 'boolean';
  });
}
/*  */


function handleError(err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();

  try {
    if (vm) {
      var cur = vm;

      while (cur = cur.$parent) {
        var hooks = cur.$options.errorCaptured;

        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;

              if (capture) {
                return;
              }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }

    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling(handler, context, args, vm, info) {
  var res;

  try {
    res = args ? handler.apply(context, args) : handler.call(context);

    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) {
        return handleError(e, vm, info + " (Promise/async)");
      }); // issue #9511
      // avoid catch triggering multiple times when nested calls

      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }

  return res;
}

function globalHandleError(err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info);
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }

  logError(err, vm, info);
}

function logError(err, vm, info) {
  if ("development" !== 'production') {
    warn("Error in " + info + ": \"" + err.toString() + "\"", vm);
  }
  /* istanbul ignore else */


  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err;
  }
}
/*  */


var isUsingMicroTask = false;
var callbacks = [];
var pending = false;

function flushCallbacks() {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;

  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
} // Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).


var timerFunc; // The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:

/* istanbul ignore next, $flow-disable-line */

if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();

  timerFunc = function () {
    p.then(flushCallbacks); // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.

    if (isIOS) {
      setTimeout(noop);
    }
  };

  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) || // PhantomJS and iOS 7.x
MutationObserver.toString() === '[object MutationObserverConstructor]')) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });

  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };

  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick(cb, ctx) {
  var _resolve;

  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });

  if (!pending) {
    pending = true;
    timerFunc();
  } // $flow-disable-line


  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    });
  }
}
/*  */

/* not type checking this file because flow doesn't play well with Proxy */


var initProxy;

if ("development" !== 'production') {
  var allowedGlobals = makeMap('Infinity,undefined,NaN,isFinite,isNaN,' + 'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' + 'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' + 'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn("Property or method \"" + key + "\" is not defined on the instance but " + 'referenced during render. Make sure that this property is reactive, ' + 'either in the data option, or for class-based components, by ' + 'initializing the property. ' + 'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.', target);
  };

  var warnReservedPrefix = function (target, key) {
    warn("Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " + 'properties starting with "$" or "_" are not proxied in the Vue instance to ' + 'prevent conflicts with Vue internals. ' + 'See: https://vuejs.org/v2/api/#data', target);
  };

  var hasProxy = typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set(target, key, value) {
        if (isBuiltInModifier(key)) {
          warn("Avoid overwriting built-in modifier in config.keyCodes: ." + key);
          return false;
        } else {
          target[key] = value;
          return true;
        }
      }
    });
  }

  var hasHandler = {
    has: function has(target, key) {
      var has = (key in target);
      var isAllowed = allowedGlobals(key) || typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data);

      if (!has && !isAllowed) {
        if (key in target.$data) {
          warnReservedPrefix(target, key);
        } else {
          warnNonPresent(target, key);
        }
      }

      return has || !isAllowed;
    }
  };
  var getHandler = {
    get: function get(target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) {
          warnReservedPrefix(target, key);
        } else {
          warnNonPresent(target, key);
        }
      }

      return target[key];
    }
  };

  initProxy = function initProxy(vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped ? getHandler : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}
/*  */


var seenObjects = new _Set();
/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */

function traverse(val) {
  _traverse(val, seenObjects);

  seenObjects.clear();
}

function _traverse(val, seen) {
  var i, keys;
  var isA = Array.isArray(val);

  if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
    return;
  }

  if (val.__ob__) {
    var depId = val.__ob__.dep.id;

    if (seen.has(depId)) {
      return;
    }

    seen.add(depId);
  }

  if (isA) {
    i = val.length;

    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = Object.keys(val);
    i = keys.length;

    while (i--) {
      _traverse(val[keys[i]], seen);
    }
  }
}

var mark;
var measure;

if ("development" !== 'production') {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */

  if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
    mark = function (tag) {
      return perf.mark(tag);
    };

    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag); // perf.clearMeasures(name)
    };
  }
}
/*  */


var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first

  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  };
});

function createFnInvoker(fns, vm) {
  function invoker() {
    var arguments$1 = arguments;
    var fns = invoker.fns;

    if (Array.isArray(fns)) {
      var cloned = fns.slice();

      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
    }
  }

  invoker.fns = fns;
  return invoker;
}

function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
  var name, def$$1, cur, old, event;

  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);

    if (isUndef(cur)) {
      "development" !== 'production' && warn("Invalid handler for event \"" + event.name + "\": got " + String(cur), vm);
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }

      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }

      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }

  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}
/*  */


function mergeVNodeHook(def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }

  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook() {
    hook.apply(this, arguments); // important: remove merged hook to ensure it's called only once
    // and prevent memory leak

    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}
/*  */


function extractPropsFromVNodeData(data, Ctor, tag) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;

  if (isUndef(propOptions)) {
    return;
  }

  var res = {};
  var attrs = data.attrs;
  var props = data.props;

  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);

      if ("development" !== 'production') {
        var keyInLowerCase = key.toLowerCase();

        if (key !== keyInLowerCase && attrs && hasOwn(attrs, keyInLowerCase)) {
          tip("Prop \"" + keyInLowerCase + "\" is passed to component " + formatComponentName(tag || Ctor) + ", but the declared prop name is" + " \"" + key + "\". " + "Note that HTML attributes are case-insensitive and camelCased " + "props need to use their kebab-case equivalents when using in-DOM " + "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\".");
        }
      }

      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
    }
  }

  return res;
}

function checkProp(res, hash, key, altKey, preserve) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];

      if (!preserve) {
        delete hash[key];
      }

      return true;
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];

      if (!preserve) {
        delete hash[altKey];
      }

      return true;
    }
  }

  return false;
}
/*  */
// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:
// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.


function simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }

  return children;
} // 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.


function normalizeChildren(children) {
  return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}

function isTextNode(node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment);
}

function normalizeArrayChildren(children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;

  for (i = 0; i < children.length; i++) {
    c = children[i];

    if (isUndef(c) || typeof c === 'boolean') {
      continue;
    }

    lastIndex = res.length - 1;
    last = res[lastIndex]; //  nested

    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i); // merge adjacent text nodes

        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + c[0].text);
          c.shift();
        }

        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }

        res.push(c);
      }
    }
  }

  return res;
}
/*  */


function initProvide(vm) {
  var provide = vm.$options.provide;

  if (provide) {
    vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
  }
}

function initInjections(vm) {
  var result = resolveInject(vm.$options.inject, vm);

  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if ("development" !== 'production') {
        defineReactive$$1(vm, key, result[key], function () {
          warn("Avoid mutating an injected value directly since the changes will be " + "overwritten whenever the provided component re-renders. " + "injection being mutated: \"" + key + "\"", vm);
        });
      } else {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject(inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]; // #6574 in case the inject object is observed...

      if (key === '__ob__') {
        continue;
      }

      var provideKey = inject[key].from;
      var source = vm;

      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break;
        }

        source = source.$parent;
      }

      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
        } else if ("development" !== 'production') {
          warn("Injection \"" + key + "\" not found", vm);
        }
      }
    }

    return result;
  }
}
/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */


function resolveSlots(children, context) {
  if (!children || !children.length) {
    return {};
  }

  var slots = {};

  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data; // remove slot attribute if the node is resolved as a Vue slot node

    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    } // named slots should only be respected if the vnode was rendered in the
    // same context.


    if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
      var name = data.slot;
      var slot = slots[name] || (slots[name] = []);

      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  } // ignore slots that contains only whitespace


  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }

  return slots;
}

function isWhitespace(node) {
  return node.isComment && !node.asyncFactory || node.text === ' ';
}
/*  */


function normalizeScopedSlots(slots, normalSlots, prevSlots) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;

  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized;
  } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots;
  } else {
    res = {};

    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  } // expose normal slots on scopedSlots


  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  } // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error


  if (slots && Object.isExtensible(slots)) {
    slots._normalized = res;
  }

  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res;
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res) ? [res] // single vnode
    : normalizeChildren(res);
    return res && (res.length === 0 || res.length === 1 && res[0].isComment // #9658
    ) ? undefined : res;
  }; // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.


  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }

  return normalized;
}

function proxyNormalSlot(slots, key) {
  return function () {
    return slots[key];
  };
}
/*  */

/**
 * Runtime helper for rendering v-for lists.
 */


function renderList(val, render) {
  var ret, i, l, keys, key;

  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);

    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);

    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();

      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);

      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }

  if (!isDef(ret)) {
    ret = [];
  }

  ret._isVList = true;
  return ret;
}
/*  */

/**
 * Runtime helper for rendering <slot>
 */


function renderSlot(name, fallback, props, bindObject) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;

  if (scopedSlotFn) {
    // scoped slot
    props = props || {};

    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn('slot v-bind without argument expects an Object', this);
      }

      props = extend(extend({}, bindObject), props);
    }

    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;

  if (target) {
    return this.$createElement('template', {
      slot: target
    }, nodes);
  } else {
    return nodes;
  }
}
/*  */

/**
 * Runtime helper for resolving filters
 */


function resolveFilter(id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity;
}
/*  */


function isKeyNotMatch(expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1;
  } else {
    return expect !== actual;
  }
}
/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */


function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;

  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName);
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode);
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key;
  }
}
/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */


function bindObjectProps(data, tag, value, asProp, isSync) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn('v-bind without argument expects an Object or Array value', this);
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }

      var hash;

      var loop = function (key) {
        if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
        }

        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);

        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});

            on["update:" + key] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop(key);
    }
  }

  return data;
}
/*  */

/**
 * Runtime helper for rendering static trees.
 */


function renderStatic(index, isInFor) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index]; // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.

  if (tree && !isInFor) {
    return tree;
  } // otherwise, render a fresh tree.


  tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
  );
  markStatic(tree, "__static__" + index, false);
  return tree;
}
/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */


function markOnce(tree, index, key) {
  markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
  return tree;
}

function markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], key + "_" + i, isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}
/*  */


function bindObjectListeners(data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn('v-on without argument expects an Object value', this);
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};

      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }

  return data;
}
/*  */


function resolveScopedSlots(fns, // see flow/vnode
res, // the following are added in 2.6
hasDynamicKeys, contentHashKey) {
  res = res || {
    $stable: !hasDynamicKeys
  };

  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];

    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }

      res[slot.key] = slot.fn;
    }
  }

  if (contentHashKey) {
    res.$key = contentHashKey;
  }

  return res;
}
/*  */


function bindDynamicKeys(baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];

    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ("development" !== 'production' && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn("Invalid value for dynamic directive argument (expected string or null): " + key, this);
    }
  }

  return baseObj;
} // helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.


function prependModifier(value, symbol) {
  return typeof value === 'string' ? symbol + value : value;
}
/*  */


function installRenderHelpers(target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}
/*  */


function FunctionalRenderContext(data, props, children, parent, Ctor) {
  var this$1 = this;
  var options = Ctor.options; // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check

  var contextVm;

  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent); // $flow-disable-line

    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent; // $flow-disable-line

    parent = parent._original;
  }

  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);

  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(data.scopedSlots, this$1.$slots = resolveSlots(children, parent));
    }

    return this$1.$slots;
  };

  Object.defineProperty(this, 'scopedSlots', {
    enumerable: true,
    get: function get() {
      return normalizeScopedSlots(data.scopedSlots, this.slots());
    }
  }); // support for compiled functional template

  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options; // pre-resolve slots for renderSlot()

    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);

      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }

      return vnode;
    };
  } else {
    this._c = function (a, b, c, d) {
      return createElement(contextVm, a, b, c, d, needNormalization);
    };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;

  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) {
      mergeProps(props, data.attrs);
    }

    if (isDef(data.props)) {
      mergeProps(props, data.props);
    }
  }

  var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext);
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);

    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }

    return res;
  }
}

function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;

  if ("development" !== 'production') {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }

  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }

  return clone;
}

function mergeProps(to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}
/*  */

/*  */

/*  */

/*  */
// inline hooks to be invoked on component VNodes during patch


var componentVNodeHooks = {
  init: function init(vnode, hydrating) {
    if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow

      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },
  prepatch: function prepatch(oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(child, options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
    );
  },
  insert: function insert(vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }

    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  },
  destroy: function destroy(vnode) {
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  }
};
var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent(Ctor, data, context, children, tag) {
  if (isUndef(Ctor)) {
    return;
  }

  var baseCtor = context.$options._base; // plain options object: turn it into a constructor

  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  } // if at this stage it's not a constructor or an async component factory,
  // reject.


  if (typeof Ctor !== 'function') {
    if ("development" !== 'production') {
      warn("Invalid Component definition: " + String(Ctor), context);
    }

    return;
  } // async component


  var asyncFactory;

  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);

    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
    }
  }

  data = data || {}; // resolve constructor options in case global mixins are applied after
  // component constructor creation

  resolveConstructorOptions(Ctor); // transform component v-model data into props & events

  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  } // extract props


  var propsData = extractPropsFromVNodeData(data, Ctor, tag); // functional component

  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children);
  } // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners


  var listeners = data.on; // replace with listeners with .native modifier
  // so it gets processed during parent component patch.

  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot
    // work around flow
    var slot = data.slot;
    data = {};

    if (slot) {
      data.slot = slot;
    }
  } // install component management hooks onto the placeholder node


  installComponentHooks(data); // return a placeholder vnode

  var name = Ctor.options.name || tag;
  var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, {
    Ctor: Ctor,
    propsData: propsData,
    listeners: listeners,
    tag: tag,
    children: children
  }, asyncFactory);
  return vnode;
}

function createComponentInstanceForVnode(vnode, // we know it's MountedComponentVNode but flow doesn't
parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  }; // check inline-template render functions

  var inlineTemplate = vnode.data.inlineTemplate;

  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }

  return new vnode.componentOptions.Ctor(options);
}

function installComponentHooks(data) {
  var hooks = data.hook || (data.hook = {});

  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];

    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1(f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };

  merged._merged = true;
  return merged;
} // transform component v-model info (value and callback) into
// prop and event handler respectively.


function transformModel(options, data) {
  var prop = options.model && options.model.prop || 'value';
  var event = options.model && options.model.event || 'input';
  (data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;

  if (isDef(existing)) {
    if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}
/*  */


var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2; // wrapper function for providing a more flexible interface
// without getting yelled at by flow

function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }

  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }

  return _createElement(context, tag, data, children, normalizationType);
}

function _createElement(context, tag, data, children, normalizationType) {
  if (isDef(data) && isDef(data.__ob__)) {
    "development" !== 'production' && warn("Avoid using observed data object as vnode data: " + JSON.stringify(data) + "\n" + 'Always create fresh vnode data objects in each render!', context);
    return createEmptyVNode();
  } // object syntax in v-bind


  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }

  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode();
  } // warn against non-primitive key


  if ("development" !== 'production' && isDef(data) && isDef(data.key) && !isPrimitive(data.key)) {
    {
      warn('Avoid using non-primitive value as key, ' + 'use string/number value instead.', context);
    }
  } // support single function children as default scoped slot


  if (Array.isArray(children) && typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = {
      default: children[0]
    };
    children.length = 0;
  }

  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }

  var vnode, ns;

  if (typeof tag === 'string') {
    var Ctor;
    ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);

    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ("development" !== 'production' && isDef(data) && isDef(data.nativeOn)) {
        warn("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">.", context);
      }

      vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }

  if (Array.isArray(vnode)) {
    return vnode;
  } else if (isDef(vnode)) {
    if (isDef(ns)) {
      applyNS(vnode, ns);
    }

    if (isDef(data)) {
      registerDeepBindings(data);
    }

    return vnode;
  } else {
    return createEmptyVNode();
  }
}

function applyNS(vnode, ns, force) {
  vnode.ns = ns;

  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }

  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];

      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
        applyNS(child, ns, force);
      }
    }
  }
} // ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes


function registerDeepBindings(data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }

  if (isObject(data.class)) {
    traverse(data.class);
  }
}
/*  */


function initRender(vm) {
  vm._vnode = null; // the root of the child tree

  vm._staticTrees = null; // v-once cached trees

  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree

  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject; // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates

  vm._c = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, false);
  }; // normalization is always applied for the public version, used in
  // user-written render functions.


  vm.$createElement = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, true);
  }; // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated


  var parentData = parentVnode && parentVnode.data;
  /* istanbul ignore else */

  if ("development" !== 'production') {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

var currentRenderingInstance = null;

function renderMixin(Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this);
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
    } // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.


    vm.$vnode = _parentVnode; // render self

    var vnode;

    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render"); // return error render result,
      // or previous vnode to prevent render error causing blank component

      /* istanbul ignore else */

      if ("development" !== 'production' && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    } // if the returned array contains only a single node, allow it


    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    } // return empty vnode in case the render function errored out


    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn('Multiple root nodes returned from render function. Render function ' + 'should return a single root node.', vm);
      }

      vnode = createEmptyVNode();
    } // set parent


    vnode.parent = _parentVnode;
    return vnode;
  };
}
/*  */


function ensureCtor(comp, base) {
  if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
    comp = comp.default;
  }

  return isObject(comp) ? base.extend(comp) : comp;
}

function createAsyncPlaceholder(factory, data, context, children, tag) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = {
    data: data,
    context: context,
    children: children,
    tag: tag
  };
  return node;
}

function resolveAsyncComponent(factory, baseCtor) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp;
  }

  if (isDef(factory.resolved)) {
    return factory.resolved;
  }

  var owner = currentRenderingInstance;

  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp;
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null;
    owner.$on('hook:destroyed', function () {
      return remove(owners, owner);
    });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        owners[i].$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;

        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }

        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor); // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)

      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });
    var reject = once(function (reason) {
      "development" !== 'production' && warn("Failed to resolve async component: " + String(factory) + (reason ? "\nReason: " + reason : ''));

      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });
    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);

          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;

              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;

            if (isUndef(factory.resolved)) {
              reject("development" !== 'production' ? "timeout (" + res.timeout + "ms)" : null);
            }
          }, res.timeout);
        }
      }
    }

    sync = false; // return in case resolved synchronously

    return factory.loading ? factory.loadingComp : factory.resolved;
  }
}
/*  */


function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}
/*  */


function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];

      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c;
      }
    }
  }
}
/*  */

/*  */


function initEvents(vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false; // init parent attached events

  var listeners = vm.$options._parentListeners;

  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add(event, fn) {
  target.$on(event, fn);
}

function remove$1(event, fn) {
  target.$off(event, fn);
}

function createOnceHandler(event, fn) {
  var _target = target;
  return function onceHandler() {
    var res = fn.apply(null, arguments);

    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  };
}

function updateComponentListeners(vm, listeners, oldListeners) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin(Vue) {
  var hookRE = /^hook:/;

  Vue.prototype.$on = function (event, fn) {
    var vm = this;

    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn); // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup

      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }

    return vm;
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;

    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }

    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this; // all

    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm;
    } // array of events


    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }

      return vm;
    } // specific event


    var cbs = vm._events[event];

    if (!cbs) {
      return vm;
    }

    if (!fn) {
      vm._events[event] = null;
      return vm;
    } // specific handler


    var cb;
    var i = cbs.length;

    while (i--) {
      cb = cbs[i];

      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break;
      }
    }

    return vm;
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;

    if ("development" !== 'production') {
      var lowerCaseEvent = event.toLowerCase();

      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip("Event \"" + lowerCaseEvent + "\" is emitted in component " + formatComponentName(vm) + " but the handler is registered for \"" + event + "\". " + "Note that HTML attributes are case-insensitive and you cannot use " + "v-on to listen to camelCase events when using in-DOM templates. " + "You should probably use \"" + hyphenate(event) + "\" instead of \"" + event + "\".");
      }
    }

    var cbs = vm._events[event];

    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";

      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }

    return vm;
  };
}
/*  */


var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  };
}

function initLifecycle(vm) {
  var options = vm.$options; // locate first non-abstract parent

  var parent = options.parent;

  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }

    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;
  vm.$children = [];
  vm.$refs = {};
  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode; // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.

    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false
      /* removeOnly */
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }

    restoreActiveInstance(); // update __vue__ reference

    if (prevEl) {
      prevEl.__vue__ = null;
    }

    if (vm.$el) {
      vm.$el.__vue__ = vm;
    } // if parent is an HOC, update its $el as well


    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    } // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.

  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;

    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;

    if (vm._isBeingDestroyed) {
      return;
    }

    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true; // remove self from parent

    var parent = vm.$parent;

    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    } // teardown watchers


    if (vm._watcher) {
      vm._watcher.teardown();
    }

    var i = vm._watchers.length;

    while (i--) {
      vm._watchers[i].teardown();
    } // remove reference from data ob
    // frozen object may not have observer.


    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    } // call the last hook...


    vm._isDestroyed = true; // invoke destroy hooks on current rendered tree

    vm.__patch__(vm._vnode, null); // fire destroyed hook


    callHook(vm, 'destroyed'); // turn off all instance listeners.

    vm.$off(); // remove __vue__ reference

    if (vm.$el) {
      vm.$el.__vue__ = null;
    } // release circular reference (#6759)


    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent(vm, el, hydrating) {
  vm.$el = el;

  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;

    if ("development" !== 'production') {
      /* istanbul ignore if */
      if (vm.$options.template && vm.$options.template.charAt(0) !== '#' || vm.$options.el || el) {
        warn('You are using the runtime-only build of Vue where the template ' + 'compiler is not available. Either pre-compile the templates into ' + 'render functions, or use the compiler-included build.', vm);
      } else {
        warn('Failed to mount component: template or render function not defined.', vm);
      }
    }
  }

  callHook(vm, 'beforeMount');
  var updateComponent;
  /* istanbul ignore if */

  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;
      mark(startTag);

      var vnode = vm._render();

      mark(endTag);
      measure("vue " + name + " render", startTag, endTag);
      mark(startTag);

      vm._update(vnode, hydrating);

      mark(endTag);
      measure("vue " + name + " patch", startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  } // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined


  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true
  /* isRenderWatcher */
  );
  hydrating = false; // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook

  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }

  return vm;
}

function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  if ("development" !== 'production') {
    isUpdatingChildComponent = true;
  } // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.
  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.


  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key); // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.

  var needsForceUpdate = !!(renderChildren || // has new static slots
  vm.$options._renderChildren || // has old static slots
  hasDynamicScopedSlot);
  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) {
    // update child tree's parent
    vm._vnode.parent = parentVnode;
  }

  vm.$options._renderChildren = renderChildren; // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render

  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject; // update props

  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];

    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?

      props[key] = validateProp(key, propOptions, propsData, vm);
    }

    toggleObserving(true); // keep a copy of raw propsData

    vm.$options.propsData = propsData;
  } // update listeners


  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners); // resolve slots + force update if has children

  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if ("development" !== 'production') {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) {
      return true;
    }
  }

  return false;
}

function activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;

    if (isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }

  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;

    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }

    callHook(vm, 'activated');
  }
}

function deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;

    if (isInInactiveTree(vm)) {
      return;
    }
  }

  if (!vm._inactive) {
    vm._inactive = true;

    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }

    callHook(vm, 'deactivated');
  }
}

function callHook(vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";

  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }

  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }

  popTarget();
}
/*  */


var MAX_UPDATE_COUNT = 100;
var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;
/**
 * Reset the scheduler's state.
 */

function resetSchedulerState() {
  index = queue.length = activatedChildren.length = 0;
  has = {};

  if ("development" !== 'production') {
    circular = {};
  }

  waiting = flushing = false;
} // Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.


var currentFlushTimestamp = 0; // Async edge case fix requires storing an event listener's attach timestamp.

var getNow = Date.now; // Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)

if (inBrowser && !isIE) {
  var performance = window.performance;

  if (performance && typeof performance.now === 'function' && getNow() > document.createEvent('Event').timeStamp) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () {
      return performance.now();
    };
  }
}
/**
 * Flush both queues and run the watchers.
 */


function flushSchedulerQueue() {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id; // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.

  queue.sort(function (a, b) {
    return a.id - b.id;
  }); // do not cache length because more watchers might be pushed
  // as we run existing watchers

  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];

    if (watcher.before) {
      watcher.before();
    }

    id = watcher.id;
    has[id] = null;
    watcher.run(); // in dev build, check and stop circular updates.

    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;

      if (circular[id] > MAX_UPDATE_COUNT) {
        warn('You may have an infinite update loop ' + (watcher.user ? "in watcher with expression \"" + watcher.expression + "\"" : "in a component render function."), watcher.vm);
        break;
      }
    }
  } // keep copies of post queues before resetting state


  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();
  resetSchedulerState(); // call component updated and activated hooks

  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue); // devtool hook

  /* istanbul ignore if */

  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks(queue) {
  var i = queue.length;

  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;

    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}
/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */


function queueActivatedComponent(vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks(queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true
    /* true */
    );
  }
}
/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */


function queueWatcher(watcher) {
  var id = watcher.id;

  if (has[id] == null) {
    has[id] = true;

    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;

      while (i > index && queue[i].id > watcher.id) {
        i--;
      }

      queue.splice(i + 1, 0, watcher);
    } // queue the flush


    if (!waiting) {
      waiting = true;

      if ("development" !== 'production' && !config.async) {
        flushSchedulerQueue();
        return;
      }

      nextTick(flushSchedulerQueue);
    }
  }
}
/*  */


var uid$2 = 0;
/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */

var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
  this.vm = vm;

  if (isRenderWatcher) {
    vm._watcher = this;
  }

  vm._watchers.push(this); // options


  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }

  this.cb = cb;
  this.id = ++uid$2; // uid for batching

  this.active = true;
  this.dirty = this.lazy; // for lazy watchers

  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = "development" !== 'production' ? expOrFn.toString() : ''; // parse expression for getter

  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);

    if (!this.getter) {
      this.getter = noop;
      "development" !== 'production' && warn("Failed watching path: \"" + expOrFn + "\" " + 'Watcher only accepts simple dot-delimited paths. ' + 'For full control, use a function instead.', vm);
    }
  }

  this.value = this.lazy ? undefined : this.get();
};
/**
 * Evaluate the getter, and re-collect dependencies.
 */


Watcher.prototype.get = function get() {
  pushTarget(this);
  var value;
  var vm = this.vm;

  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
    } else {
      throw e;
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }

    popTarget();
    this.cleanupDeps();
  }

  return value;
};
/**
 * Add a dependency to this directive.
 */


Watcher.prototype.addDep = function addDep(dep) {
  var id = dep.id;

  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);

    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};
/**
 * Clean up for dependency collection.
 */


Watcher.prototype.cleanupDeps = function cleanupDeps() {
  var i = this.deps.length;

  while (i--) {
    var dep = this.deps[i];

    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }

  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};
/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */


Watcher.prototype.update = function update() {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};
/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */


Watcher.prototype.run = function run() {
  if (this.active) {
    var value = this.get();

    if (value !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated.
    isObject(value) || this.deep) {
      // set new value
      var oldValue = this.value;
      this.value = value;

      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, "callback for watcher \"" + this.expression + "\"");
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};
/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */


Watcher.prototype.evaluate = function evaluate() {
  this.value = this.get();
  this.dirty = false;
};
/**
 * Depend on all deps collected by this watcher.
 */


Watcher.prototype.depend = function depend() {
  var i = this.deps.length;

  while (i--) {
    this.deps[i].depend();
  }
};
/**
 * Remove self from all dependencies' subscriber list.
 */


Watcher.prototype.teardown = function teardown() {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }

    var i = this.deps.length;

    while (i--) {
      this.deps[i].removeSub(this);
    }

    this.active = false;
  }
};
/*  */


var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };

  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState(vm) {
  vm._watchers = [];
  var opts = vm.$options;

  if (opts.props) {
    initProps(vm, opts.props);
  }

  if (opts.methods) {
    initMethods(vm, opts.methods);
  }

  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true
    /* asRootData */
    );
  }

  if (opts.computed) {
    initComputed(vm, opts.computed);
  }

  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps(vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {}; // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.

  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent; // root instance props should be converted

  if (!isRoot) {
    toggleObserving(false);
  }

  var loop = function (key) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */

    if ("development" !== 'production') {
      var hyphenatedKey = hyphenate(key);

      if (isReservedAttribute(hyphenatedKey) || config.isReservedAttr(hyphenatedKey)) {
        warn("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop.", vm);
      }

      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn("Avoid mutating a prop directly since the value will be " + "overwritten whenever the parent component re-renders. " + "Instead, use a data or computed property based on the prop's " + "value. Prop being mutated: \"" + key + "\"", vm);
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    } // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.


    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop(key);

  toggleObserving(true);
}

function initData(vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};

  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn('data functions should return an object:\n' + 'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function', vm);
  } // proxy data on instance


  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;

  while (i--) {
    var key = keys[i];

    if ("development" !== 'production') {
      if (methods && hasOwn(methods, key)) {
        warn("Method \"" + key + "\" has already been defined as a data property.", vm);
      }
    }

    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn("The data property \"" + key + "\" is already declared as a prop. " + "Use prop default value instead.", vm);
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  } // observe data


  observe(data, true
  /* asRootData */
  );
}

function getData(data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();

  try {
    return data.call(vm, vm);
  } catch (e) {
    handleError(e, vm, "data()");
    return {};
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = {
  lazy: true
};

function initComputed(vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null); // computed properties are just getters during SSR

  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;

    if ("development" !== 'production' && getter == null) {
      warn("Getter is missing for computed property \"" + key + "\".", vm);
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
    } // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.


    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if ("development" !== 'production') {
      if (key in vm.$data) {
        warn("The computed property \"" + key + "\" is already defined in data.", vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn("The computed property \"" + key + "\" is already defined as a prop.", vm);
      }
    }
  }
}

function defineComputed(target, key, userDef) {
  var shouldCache = !isServerRendering();

  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }

  if ("development" !== 'production' && sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn("Computed property \"" + key + "\" was assigned to but it has no setter.", this);
    };
  }

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter(key) {
  return function computedGetter() {
    var watcher = this._computedWatchers && this._computedWatchers[key];

    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }

      if (Dep.target) {
        watcher.depend();
      }

      return watcher.value;
    }
  };
}

function createGetterInvoker(fn) {
  return function computedGetter() {
    return fn.call(this, this);
  };
}

function initMethods(vm, methods) {
  var props = vm.$options.props;

  for (var key in methods) {
    if ("development" !== 'production') {
      if (typeof methods[key] !== 'function') {
        warn("Method \"" + key + "\" has type \"" + typeof methods[key] + "\" in the component definition. " + "Did you reference the function correctly?", vm);
      }

      if (props && hasOwn(props, key)) {
        warn("Method \"" + key + "\" has already been defined as a prop.", vm);
      }

      if (key in vm && isReserved(key)) {
        warn("Method \"" + key + "\" conflicts with an existing Vue instance method. " + "Avoid defining component methods that start with _ or $.");
      }
    }

    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch(vm, watch) {
  for (var key in watch) {
    var handler = watch[key];

    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, expOrFn, handler, options) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }

  if (typeof handler === 'string') {
    handler = vm[handler];
  }

  return vm.$watch(expOrFn, handler, options);
}

function stateMixin(Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};

  dataDef.get = function () {
    return this._data;
  };

  var propsDef = {};

  propsDef.get = function () {
    return this._props;
  };

  if ("development" !== 'production') {
    dataDef.set = function () {
      warn('Avoid replacing instance root $data. ' + 'Use nested data properties instead.', this);
    };

    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }

  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);
  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;

    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options);
    }

    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);

    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, "callback for immediate watcher \"" + watcher.expression + "\"");
      }
    }

    return function unwatchFn() {
      watcher.teardown();
    };
  };
}
/*  */


var uid$3 = 0;

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    var vm = this; // a uid

    vm._uid = uid$3++;
    var startTag, endTag;
    /* istanbul ignore if */

    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + vm._uid;
      endTag = "vue-perf-end:" + vm._uid;
      mark(startTag);
    } // a flag to avoid this being observed


    vm._isVue = true; // merge options

    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
    }
    /* istanbul ignore else */


    if ("development" !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    } // expose real self


    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props

    initState(vm);
    initProvide(vm); // resolve provide after data/props

    callHook(vm, 'created');
    /* istanbul ignore if */

    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure("vue " + vm._name + " init", startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent(vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options); // doing this because it's faster than dynamic enumeration.

  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions(Ctor) {
  var options = Ctor.options;

  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;

    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions; // check if there are any late-modified/attached options (#4976)

      var modifiedOptions = resolveModifiedOptions(Ctor); // update base extend options

      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }

      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);

      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }

  return options;
}

function resolveModifiedOptions(Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;

  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) {
        modified = {};
      }

      modified[key] = latest[key];
    }
  }

  return modified;
}

function Vue(options) {
  if ("development" !== 'production' && !(this instanceof Vue)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }

  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);
/*  */

function initUse(Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = this._installedPlugins || (this._installedPlugins = []);

    if (installedPlugins.indexOf(plugin) > -1) {
      return this;
    } // additional parameters


    var args = toArray(arguments, 1);
    args.unshift(this);

    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }

    installedPlugins.push(plugin);
    return this;
  };
}
/*  */


function initMixin$1(Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this;
  };
}
/*  */


function initExtend(Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;
  /**
   * Class inheritance
   */

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});

    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }

    var name = extendOptions.name || Super.options.name;

    if ("development" !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent(options) {
      this._init(options);
    };

    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super; // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.

    if (Sub.options.props) {
      initProps$1(Sub);
    }

    if (Sub.options.computed) {
      initComputed$1(Sub);
    } // allow further extension/mixin/plugin usage


    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use; // create asset registers, so extended classes
    // can have their private assets too.

    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    }); // enable recursive self-lookup

    if (name) {
      Sub.options.components[name] = Sub;
    } // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.


    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options); // cache constructor

    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}

function initProps$1(Comp) {
  var props = Comp.options.props;

  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1(Comp) {
  var computed = Comp.options.computed;

  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}
/*  */


function initAssetRegisters(Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {
        /* istanbul ignore if */
        if ("development" !== 'production' && type === 'component') {
          validateComponentName(id);
        }

        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }

        if (type === 'directive' && typeof definition === 'function') {
          definition = {
            bind: definition,
            update: definition
          };
        }

        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}
/*  */


function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function matches(pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1;
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1;
  } else if (isRegExp(pattern)) {
    return pattern.test(name);
  }
  /* istanbul ignore next */


  return false;
}

function pruneCache(keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;

  for (var key in cache) {
    var cachedNode = cache[key];

    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);

      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry(cache, key, keys, current) {
  var cached$$1 = cache[key];

  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }

  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];
var KeepAlive = {
  name: 'keep-alive',
  abstract: true,
  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },
  created: function created() {
    this.cache = Object.create(null);
    this.keys = [];
  },
  destroyed: function destroyed() {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },
  mounted: function mounted() {
    var this$1 = this;
    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) {
        return matches(val, name);
      });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) {
        return !matches(val, name);
      });
    });
  },
  render: function render() {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;

    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;

      if ( // not included
      include && (!name || !matches(include, name)) || // excluded
      exclude && name && matches(exclude, name)) {
        return vnode;
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null // same constructor may get registered as different local components
      // so cid alone is not enough (#3269)
      ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;

      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance; // make current key freshest

        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key); // prune oldest entry

        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }

    return vnode || slot && slot[0];
  }
};
var builtInComponents = {
  KeepAlive: KeepAlive
};
/*  */

function initGlobalAPI(Vue) {
  // config
  var configDef = {};

  configDef.get = function () {
    return config;
  };

  if ("development" !== 'production') {
    configDef.set = function () {
      warn('Do not replace the Vue.config object, set individual fields instead.');
    };
  }

  Object.defineProperty(Vue, 'config', configDef); // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.

  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };
  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick; // 2.6 explicit observable API

  Vue.observable = function (obj) {
    observe(obj);
    return obj;
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  }); // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.

  Vue.options._base = Vue;
  extend(Vue.options.components, builtInComponents);
  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get() {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext;
  }
}); // expose FunctionalRenderContext for ssr runtime helper installation

Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});
Vue.version = '2.6.11';
/*  */
// these are reserved for web because they are directly compiled away
// during template compilation

var isReservedAttr = makeMap('style,class'); // attributes that should be using props for binding

var acceptValue = makeMap('input,textarea,option,select,progress');

var mustUseProp = function (tag, type, attr) {
  return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false' ? 'false' // allow arbitrary string value for contenteditable
  : key === 'contenteditable' && isValidContentEditableValue(value) ? value : 'true';
};

var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,translate,' + 'truespeed,typemustmatch,visible');
var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : '';
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false;
};
/*  */


function genClassForVnode(vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;

  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;

    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }

  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }

  return renderClass(data.staticClass, data.class);
}

function mergeClassData(child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class) ? [child.class, parent.class] : parent.class
  };
}

function renderClass(staticClass, dynamicClass) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass));
  }
  /* istanbul ignore next */


  return '';
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function stringifyClass(value) {
  if (Array.isArray(value)) {
    return stringifyArray(value);
  }

  if (isObject(value)) {
    return stringifyObject(value);
  }

  if (typeof value === 'string') {
    return value;
  }
  /* istanbul ignore next */


  return '';
}

function stringifyArray(value) {
  var res = '';
  var stringified;

  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) {
        res += ' ';
      }

      res += stringified;
    }
  }

  return res;
}

function stringifyObject(value) {
  var res = '';

  for (var key in value) {
    if (value[key]) {
      if (res) {
        res += ' ';
      }

      res += key;
    }
  }

  return res;
}
/*  */


var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};
var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot'); // this map is intentionally selective, only covering SVG elements that may
// contain child elements.

var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag);
};

function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return 'svg';
  } // basic support for MathML
  // note it doesn't support other MathML elements being component roots


  if (tag === 'math') {
    return 'math';
  }
}

var unknownElementCache = Object.create(null);

function isUnknownElement(tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true;
  }

  if (isReservedTag(tag)) {
    return false;
  }

  tag = tag.toLowerCase();
  /* istanbul ignore if */

  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag];
  }

  var el = document.createElement(tag);

  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return unknownElementCache[tag] = el.constructor === window.HTMLUnknownElement || el.constructor === window.HTMLElement;
  } else {
    return unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString());
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');
/*  */

/**
 * Query an element selector if it's not an element already.
 */

function query(el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);

    if (!selected) {
      "development" !== 'production' && warn('Cannot find element: ' + el);
      return document.createElement('div');
    }

    return selected;
  } else {
    return el;
  }
}
/*  */


function createElement$1(tagName, vnode) {
  var elm = document.createElement(tagName);

  if (tagName !== 'select') {
    return elm;
  } // false or null will remove the attribute but undefined will not


  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }

  return elm;
}

function createElementNS(namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName);
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function createComment(text) {
  return document.createComment(text);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(node) {
  return node.tagName;
}

function setTextContent(node, text) {
  node.textContent = text;
}

function setStyleScope(node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});
/*  */

var ref = {
  create: function create(_, vnode) {
    registerRef(vnode);
  },
  update: function update(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy(vnode) {
    registerRef(vnode, true);
  }
};

function registerRef(vnode, isRemoval) {
  var key = vnode.data.ref;

  if (!isDef(key)) {
    return;
  }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;

  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}
/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */


var emptyNode = new VNode('', {}, []);
var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode(a, b) {
  return a.key === b.key && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && a.asyncFactory === b.asyncFactory && isUndef(b.asyncFactory.error));
}

function sameInputType(a, b) {
  if (a.tag !== 'input') {
    return true;
  }

  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};

  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;

    if (isDef(key)) {
      map[key] = i;
    }
  }

  return map;
}

function createPatchFunction(backend) {
  var i, j;
  var cbs = {};
  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];

    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt(elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    function remove$$1() {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }

    remove$$1.listeners = listeners;
    return remove$$1;
  }

  function removeNode(el) {
    var parent = nodeOps.parentNode(el); // element may have already been removed due to v-html / v-text

    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1(vnode, inVPre) {
    return !inVPre && !vnode.ns && !(config.ignoredElements.length && config.ignoredElements.some(function (ignore) {
      return isRegExp(ignore) ? ignore.test(vnode.tag) : ignore === vnode.tag;
    })) && config.isUnknownElement(vnode.tag);
  }

  var creatingElmInVPre = 0;

  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check

    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;

    if (isDef(tag)) {
      if ("development" !== 'production') {
        if (data && data.pre) {
          creatingElmInVPre++;
        }

        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn('Unknown custom element: <' + tag + '> - did you ' + 'register the component correctly? For recursive components, ' + 'make sure to provide the "name" option.', vnode.context);
        }
      }

      vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
      setScope(vnode);
      /* istanbul ignore if */

      {
        createChildren(vnode, children, insertedVnodeQueue);

        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }

        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;

    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;

      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false
        /* hydrating */
        );
      } // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.


      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);

        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }

        return true;
      }
    }
  }

  function initComponent(vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }

    vnode.elm = vnode.componentInstance.$el;

    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode); // make sure to invoke the insert hook

      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i; // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.

    var innerNode = vnode;

    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;

      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }

        insertedVnodeQueue.push(innerNode);
        break;
      }
    } // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself


    insert(parentElm, vnode.elm, refElm);
  }

  function insert(parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if ("development" !== 'production') {
        checkDuplicateKeys(children);
      }

      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable(vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }

    return isDef(vnode.tag);
  }

  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }

    i = vnode.data.hook; // Reuse variable

    if (isDef(i)) {
      if (isDef(i.create)) {
        i.create(emptyNode, vnode);
      }

      if (isDef(i.insert)) {
        insertedVnodeQueue.push(vnode);
      }
    }
  } // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.


  function setScope(vnode) {
    var i;

    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;

      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }

        ancestor = ancestor.parent;
      }
    } // for slot content they should also get the scopeId from the host instance.


    if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook(vnode) {
    var i, j;
    var data = vnode.data;

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) {
        i(vnode);
      }

      for (i = 0; i < cbs.destroy.length; ++i) {
        cbs.destroy[i](vnode);
      }
    }

    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes(vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];

      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else {
          // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook(vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;

      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      } // recursively invoke hooks on child component root node


      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }

      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }

      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm; // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions

    var canMove = !removeOnly;

    if ("development" !== 'production') {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }

        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);

        if (isUndef(idxInOld)) {
          // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];

          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }

        newStartVnode = newCh[++newStartIdx];
      }
    }

    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys(children) {
    var seenKeys = {};

    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;

      if (isDef(key)) {
        if (seenKeys[key]) {
          warn("Duplicate keys detected: '" + key + "'. This may cause an update error.", vnode.context);
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld(node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];

      if (isDef(c) && sameVnode(node, c)) {
        return i;
      }
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }

      return;
    } // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.


    if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
      vnode.componentInstance = oldVnode.componentInstance;
      return;
    }

    var i;
    var data = vnode.data;

    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;

    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) {
        cbs.update[i](oldVnode, vnode);
      }

      if (isDef(i = data.hook) && isDef(i = i.update)) {
        i(oldVnode, vnode);
      }
    }

    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) {
          updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
        }
      } else if (isDef(ch)) {
        if ("development" !== 'production') {
          checkDuplicateKeys(ch);
        }

        if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }

        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
        i(oldVnode, vnode);
      }
    }
  }

  function invokeInsertHook(vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false; // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).

  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key'); // Note: this is a browser-only function so we can assume elms are DOM nodes.

  function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || data && data.pre;
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true;
    } // assert node match


    if ("development" !== 'production') {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false;
      }
    }

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) {
        i(vnode, true
        /* hydrating */
        );
      }

      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true;
      }
    }

    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }

              return false;
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;

            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break;
              }

              childNode = childNode.nextSibling;
            } // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.


            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' && typeof console !== 'undefined' && !hydrationBailed) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }

              return false;
            }
          }
        }
      }

      if (isDef(data)) {
        var fullInvoke = false;

        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break;
          }
        }

        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }

    return true;
  }

  function assertNodeMatch(node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || !isUnknownElement$$1(vnode, inVPre) && vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase());
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3);
    }
  }

  return function patch(oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) {
        invokeDestroyHook(oldVnode);
      }

      return;
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);

      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }

          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode;
            } else if ("development" !== 'production') {
              warn('The client-side rendered virtual DOM tree is not matching ' + 'server-rendered content. This is likely caused by incorrect ' + 'HTML markup, for example nesting block-level elements inside ' + '<p>, or missing <tbody>. Bailing hydration and performing ' + 'full client-side render.');
            }
          } // either not server-rendered, or hydration failed.
          // create an empty node and replace it


          oldVnode = emptyNodeAt(oldVnode);
        } // replacing existing element


        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm); // create new node

        createElm(vnode, insertedVnodeQueue, // extremely rare edge case: do not insert if old element is in a
        // leaving transition. Only happens when combining transition +
        // keep-alive + HOCs. (#4590)
        oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm)); // update parent placeholder node element, recursively

        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);

          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }

            ancestor.elm = vnode.elm;

            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              } // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.


              var insert = ancestor.data.hook.insert;

              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }

            ancestor = ancestor.parent;
          }
        } // destroy old node


        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}
/*  */


var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives(vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives(oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update(oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
  var dirsWithInsert = [];
  var dirsWithPostpatch = [];
  var key, oldDir, dir;

  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];

    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);

      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);

      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };

    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1(dirs, vm) {
  var res = Object.create(null);

  if (!dirs) {
    // $flow-disable-line
    return res;
  }

  var i, dir;

  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];

    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }

    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  } // $flow-disable-line


  return res;
}

function getRawDirName(dir) {
  return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
}

function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];

  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
    }
  }
}

var baseModules = [ref, directives];
/*  */

function updateAttrs(oldVnode, vnode) {
  var opts = vnode.componentOptions;

  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return;
  }

  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return;
  }

  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {}; // clone observed objects, as the user probably wants to mutate it

  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];

    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  } // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max

  /* istanbul ignore if */


  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }

  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr(el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr(el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.

    /* istanbul ignore if */
    if (isIE && !isIE9 && el.tagName === 'TEXTAREA' && key === 'placeholder' && value !== '' && !el.__ieph) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };

      el.addEventListener('input', blocker); // $flow-disable-line

      el.__ieph = true;
      /* IE placeholder patched */
    }

    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};
/*  */

function updateClass(oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
    return;
  }

  var cls = genClassForVnode(vnode); // handle transition classes

  var transitionClass = el._transitionClasses;

  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  } // set the class


  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};
/*  */

/*  */

/*  */

/*  */
// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.

var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';
/*  */
// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.

function normalizeEvents(on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  } // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4

  /* istanbul ignore if */


  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1(event, handler, capture) {
  var _target = target$1; // save current target element in closure

  return function onceHandler() {
    var res = handler.apply(null, arguments);

    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  };
} // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.


var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1(name, handler, capture, passive) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;

    handler = original._wrapper = function (e) {
      if ( // no bubbling, should always fire.
      // this is just a safety net in case event.timeStamp is unreliable in
      // certain weird environments...
      e.target === e.currentTarget || // event is fired after handler attachment
      e.timeStamp >= attachedTimestamp || // bail for environments that have buggy event.timeStamp implementations
      // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
      // #9681 QtWebEngine event.timeStamp is negative value
      e.timeStamp <= 0 || // #9448 bail if event is fired in another document in a multi-page
      // electron/nw.js app, since event.timeStamp will be using a different
      // starting reference
      e.target.ownerDocument !== document) {
        return original.apply(this, arguments);
      }
    };
  }

  target$1.addEventListener(name, handler, supportsPassive ? {
    capture: capture,
    passive: passive
  } : capture);
}

function remove$2(name, handler, capture, _target) {
  (_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
}

function updateDOMListeners(oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return;
  }

  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};
/*  */

var svgContainer;

function updateDOMProps(oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return;
  }

  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {}; // clone observed objects, as the user probably wants to mutate it

  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key]; // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)

    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) {
        vnode.children.length = 0;
      }

      if (cur === oldProps[key]) {
        continue;
      } // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property


      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur; // avoid resetting cursor position when value is the same

      var strCur = isUndef(cur) ? '' : String(cur);

      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;

      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }

      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if ( // skip the update if old and new VDOM state is the same.
    // `value` is handled separately because the DOM value may be temporarily
    // out of sync with VDOM state due to focus, composition and modifiers.
    // This  #4521 by skipping the unnecesarry `checked` update.
    cur !== oldProps[key]) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
} // check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue(elm, checkVal) {
  return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
}

function isNotInFocusAndDirty(elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true; // #6157
  // work around IE bug when accessing document.activeElement in an iframe

  try {
    notInFocus = document.activeElement !== elm;
  } catch (e) {}

  return notInFocus && elm.value !== checkVal;
}

function isDirtyWithModifiers(elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime

  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal);
    }

    if (modifiers.trim) {
      return value.trim() !== newVal.trim();
    }
  }

  return value !== newVal;
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};
/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
}); // merge static and dynamic style data on the same vnode

function normalizeStyleData(data) {
  var style = normalizeStyleBinding(data.style); // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it

  return data.staticStyle ? extend(data.staticStyle, style) : style;
} // normalize possible array / string values into Object


function normalizeStyleBinding(bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle);
  }

  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle);
  }

  return bindingStyle;
}
/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */


function getStyle(vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;

    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;

      if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if (styleData = normalizeStyleData(vnode.data)) {
    extend(res, styleData);
  }

  var parentNode = vnode;

  while (parentNode = parentNode.parent) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }

  return res;
}
/*  */


var cssVarRE = /^--/;
var importantRE = /\s*!important$/;

var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);

    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];
var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);

  if (prop !== 'filter' && prop in emptyStyle) {
    return prop;
  }

  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);

  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;

    if (name in emptyStyle) {
      return name;
    }
  }
});

function updateStyle(oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
    return;
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {}; // if static style exists, stylebinding already merged into it when doing normalizeStyleData

  var oldStyle = oldStaticStyle || oldStyleBinding;
  var style = normalizeStyleBinding(vnode.data.style) || {}; // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.

  vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }

  for (name in newStyle) {
    cur = newStyle[name];

    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};
/*  */

var whitespaceRE = /\s+/;
/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */

function addClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  /* istanbul ignore else */


  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";

    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}
/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */


function removeClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  /* istanbul ignore else */


  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }

    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';

    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }

    cur = cur.trim();

    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}
/*  */


function resolveTransition(def$$1) {
  if (!def$$1) {
    return;
  }
  /* istanbul ignore else */


  if (typeof def$$1 === 'object') {
    var res = {};

    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }

    extend(res, def$$1);
    return res;
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1);
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: name + "-enter",
    enterToClass: name + "-enter-to",
    enterActiveClass: name + "-enter-active",
    leaveClass: name + "-leave",
    leaveToClass: name + "-leave-to",
    leaveActiveClass: name + "-leave-active"
  };
});
var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation'; // Transition property/event sniffing

var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';

if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }

  if (window.onanimationend === undefined && window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
} // binding to window is necessary to make hot reload work in IE in strict mode


var raf = inBrowser ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout :
/* istanbul ignore next */
function (fn) {
  return fn();
};

function nextFrame(fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass(el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);

  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass(el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }

  removeClass(el, cls);
}

function whenTransitionEnds(el, expectedType, cb) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;

  if (!type) {
    return cb();
  }

  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;

  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };

  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };

  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */

  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }

  var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  }));
} // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors


function toMs(s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}
/*  */


function enter(vnode, toggleDisplay) {
  var el = vnode.elm; // call leave callback now

  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;

    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (isUndef(data)) {
    return;
  }
  /* istanbul ignore if */


  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration; // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.

  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;

  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return;
  }

  var startClass = isAppear && appearClass ? appearClass : enterClass;
  var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
  var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
  var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
  var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
  var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);
  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }

    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }

      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }

    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];

      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }

      enterHook && enterHook(el, cb);
    });
  } // start enter transition


  beforeEnterHook && beforeEnterHook(el);

  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);

      if (!cb.cancelled) {
        addTransitionClass(el, toClass);

        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave(vnode, rm) {
  var el = vnode.elm; // call enter callback now

  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;

    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (isUndef(data) || el.nodeType !== 1) {
    return rm();
  }
  /* istanbul ignore if */


  if (isDef(el._leaveCb)) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;
  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);
  var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }

    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }

    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }

      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }

    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave() {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return;
    } // record leaving element


    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }

    beforeLeave && beforeLeave(el);

    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);

        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);

          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    leave && leave(el, cb);

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
} // only used in dev mode


function checkDuration(val, name, vnode) {
  if (typeof val !== 'number') {
    warn("<transition> explicit " + name + " duration is not a valid number - " + "got " + JSON.stringify(val) + ".", vnode.context);
  } else if (isNaN(val)) {
    warn("<transition> explicit " + name + " duration is NaN - " + 'the duration expression might be incorrect.', vnode.context);
  }
}

function isValidDuration(val) {
  return typeof val === 'number' && !isNaN(val);
}
/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */


function getHookArgumentsLength(fn) {
  if (isUndef(fn)) {
    return false;
  }

  var invokerFns = fn.fns;

  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
  } else {
    return (fn._length || fn.length) > 1;
  }
}

function _enter(_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1(vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};
var platformModules = [attrs, klass, events, domProps, style, transition];
/*  */
// the directive module should be applied last, after all
// built-in modules have been applied.

var modules = platformModules.concat(baseModules);
var patch = createPatchFunction({
  nodeOps: nodeOps,
  modules: modules
});
/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */

if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;

    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted(el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }

      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;

      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.

        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */

        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated(el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context); // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.

      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);

      if (curOptions.some(function (o, i) {
        return !looseEqual(o, prevOptions[i]);
      })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple ? binding.value.some(function (v) {
          return hasNoMatchingOption(v, curOptions);
        }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);

        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected(el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */

  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected(el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;

  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn("<select multiple v-model=\"" + binding.expression + "\"> " + "expects an Array value for its binding, but got " + Object.prototype.toString.call(value).slice(8, -1), vm);
    return;
  }

  var selected, option;

  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];

    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;

      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }

        return;
      }
    }
  }

  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption(value, options) {
  return options.every(function (o) {
    return !looseEqual(o, value);
  });
}

function getValue(option) {
  return '_value' in option ? option._value : option.value;
}

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) {
    return;
  }

  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}
/*  */
// recursively search for possible transition defined inside the component root


function locateNode(vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
}

var show = {
  bind: function bind(el, ref, vnode) {
    var value = ref.value;
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;

    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },
  update: function update(el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;
    /* istanbul ignore if */

    if (!value === !oldValue) {
      return;
    }

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;

    if (transition$$1) {
      vnode.data.show = true;

      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },
  unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};
var platformDirectives = {
  model: directive,
  show: show
};
/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
}; // in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered

function getRealChild(vnode) {
  var compOptions = vnode && vnode.componentOptions;

  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children));
  } else {
    return vnode;
  }
}

function extractTransitionData(comp) {
  var data = {};
  var options = comp.$options; // props

  for (var key in options.propsData) {
    data[key] = comp[key];
  } // events.
  // extract listeners and pass them directly to the transition methods


  var listeners = options._parentListeners;

  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }

  return data;
}

function placeholder(h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    });
  }
}

function hasParentTransition(vnode) {
  while (vnode = vnode.parent) {
    if (vnode.data.transition) {
      return true;
    }
  }
}

function isSameChild(child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag;
}

var isNotTextNode = function (c) {
  return c.tag || isAsyncPlaceholder(c);
};

var isVShowDirective = function (d) {
  return d.name === 'show';
};

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,
  render: function render(h) {
    var this$1 = this;
    var children = this.$slots.default;

    if (!children) {
      return;
    } // filter out text nodes (possible whitespaces)


    children = children.filter(isNotTextNode);
    /* istanbul ignore if */

    if (!children.length) {
      return;
    } // warn multiple elements


    if ("development" !== 'production' && children.length > 1) {
      warn('<transition> can only be used on a single element. Use ' + '<transition-group> for lists.', this.$parent);
    }

    var mode = this.mode; // warn invalid mode

    if ("development" !== 'production' && mode && mode !== 'in-out' && mode !== 'out-in') {
      warn('invalid <transition> mode: ' + mode, this.$parent);
    }

    var rawChild = children[0]; // if this is a component root node and the component's
    // parent container node also has transition, skip.

    if (hasParentTransition(this.$vnode)) {
      return rawChild;
    } // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive


    var child = getRealChild(rawChild);
    /* istanbul ignore if */

    if (!child) {
      return rawChild;
    }

    if (this._leaving) {
      return placeholder(h, rawChild);
    } // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.


    var id = "__transition-" + this._uid + "-";
    child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild); // mark v-show
    // so that the transition module can hand over the control to the directive

    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && // #6687 component root is a comment node
    !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data); // handle transition mode

      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild);
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild;
        }

        var delayedLeave;

        var performLeave = function () {
          delayedLeave();
        };

        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
          delayedLeave = leave;
        });
      }
    }

    return rawChild;
  }
};
/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);
delete props.mode;
var TransitionGroup = {
  props: props,
  beforeMount: function beforeMount() {
    var this$1 = this;
    var update = this._update;

    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1); // force removing pass

      this$1.__patch__(this$1._vnode, this$1.kept, false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
      );

      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },
  render: function render(h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];

      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c;
          (c.data || (c.data = {})).transition = transitionData;
        } else if ("development" !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? opts.Ctor.options.name || opts.tag || '' : c.tag;
          warn("<transition-group> children must be keyed: <" + name + ">");
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];

      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();

        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }

      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children);
  },
  updated: function updated() {
    var children = this.prevChildren;
    var moveClass = this.moveClass || (this.name || 'v') + '-move';

    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return;
    } // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.


    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation); // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line

    this._reflow = document.body.offsetHeight;
    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
          if (e && e.target !== el) {
            return;
          }

          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },
  methods: {
    hasMove: function hasMove(el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false;
      }
      /* istanbul ignore if */


      if (this._hasMove) {
        return this._hasMove;
      } // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.


      var clone = el.cloneNode();

      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) {
          removeClass(clone, cls);
        });
      }

      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return this._hasMove = info.hasTransform;
    }
  }
};

function callPendingCbs(c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */


  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition(c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation(c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;

  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};
/*  */
// install platform specific utils

Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement; // install platform runtime directives & components

extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents); // install platform patch function

Vue.prototype.__patch__ = inBrowser ? patch : noop; // public mount method

Vue.prototype.$mount = function (el, hydrating) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating);
}; // devtools global hook

/* istanbul ignore next */


if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if ("development" !== 'production' && "development" !== 'test') {
        console[console.info ? 'info' : 'log']('Download the Vue Devtools extension for a better development experience:\n' + 'https://github.com/vuejs/vue-devtools');
      }
    }

    if ("development" !== 'production' && "development" !== 'test' && config.productionTip !== false && typeof console !== 'undefined') {
      console[console.info ? 'info' : 'log']("You are running Vue in development mode.\n" + "Make sure to turn on production mode when deploying for production.\n" + "See more tips at https://vuejs.org/guide/deployment.html");
    }
  }, 0);
}
/*  */


var _default = Vue;
exports.default = _default;
},{}],"components/Grid.vue":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vueGridLayout = _interopRequireDefault(require("vue-grid-layout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import Basic from "./basic.vue";
String.prototype.hashCode = function () {
  var hash = 0;
  if (this.length == 0) return hash;

  for (i = 0; i < this.length; i++) {
    char = this.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }

  return hash;
};

var _default = {
  components: {
    GridLayout: _vueGridLayout.default.GridLayout,
    GridItem: _vueGridLayout.default.GridItem
  },
  data: function data() {
    return {};
  },
  props: {
    gap: Number,
    cols: Number,
    layout: Array,
    allThis: Object,
    baseLayout: {
      type: Object,
      default: function _default() {
        return [{
          x: 0,
          y: 0,
          w: 2,
          h: 2,
          i: "0"
        } // { x: 2, y: 0, w: 2, h: 4, i: "1" },
        ];
      }
    }
  },
  computed: {},
  methods: {
    layoutUpdatedEvent: function layoutUpdatedEvent(newLayout) {
      console.log("Updated layout: ", newLayout);
      this.$emit("input", newLayout);
    },
    onInput: function onInput(event) {
      this.$emit("input", event.target.value);
    }
  },
  mounted: function mounted() {
    console.log('we are mounted!');
    console.log(this.layout);
  }
};
exports.default = _default;
        var $d216b9 = exports.default || module.exports;
      
      if (typeof $d216b9 === 'function') {
        $d216b9 = $d216b9.options;
      }
    
        /* template */
        Object.assign($d216b9, (function () {
          var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("k-header", [_vm._v("Grid width: " + _vm._s(_vm.cols))]),
      _vm._v(" "),
      _c(
        "div",
        [
          _c(
            "grid-layout",
            {
              attrs: {
                layout: _vm.layout,
                "col-num": _vm.cols,
                "row-height": 30,
                "is-draggable": true,
                "is-resizable": true,
                "is-mirrored": false,
                "vertical-compact": false,
                margin: [_vm.gap, _vm.gap],
                "use-css-transforms": true
              },
              on: {
                "update:layout": function($event) {
                  _vm.layout = $event
                },
                "layout-updated": _vm.layoutUpdatedEvent
              }
            },
            _vm._l(_vm.layout, function(item) {
              return _c(
                "grid-item",
                {
                  key: item.i,
                  attrs: {
                    x: item.x,
                    y: item.y,
                    w: item.w,
                    h: item.h,
                    i: item.i
                  }
                },
                [_vm._v(_vm._s(item.i))]
              )
            }),
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
    /* hot reload */
    (function () {
      if (module.hot) {
        var api = require('vue-hot-reload-api');
        api.install(require('vue'));
        if (api.compatible) {
          module.hot.accept();
          if (!module.hot.data) {
            api.createRecord('$d216b9', $d216b9);
          } else {
            api.reload('$d216b9', $d216b9);
          }
        }

        
        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
      }
    })();
},{"vue-grid-layout":"../node_modules/vue-grid-layout/dist/vue-grid-layout.min.js","_css_loader":"../../../../../../../.config/nvm/14.3.0/lib/node_modules/parcel-bundler/src/builtins/css-loader.js","vue-hot-reload-api":"../../../../../node_modules/vue-hot-reload-api/dist/index.js","vue":"../node_modules/vue/dist/vue.runtime.esm.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _Grid = _interopRequireDefault(require("./components/Grid.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

panel.plugin("floriankarsten/grid-builder", {
  fields: {
    gridbuilder: _Grid.default
  }
});
},{"./components/Grid.vue":"components/Grid.vue"}],"../../../../../../../.config/nvm/14.3.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "65410" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../.config/nvm/14.3.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)