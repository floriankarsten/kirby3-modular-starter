<?php
$rootPage = page($data->root());


$classes = 'my-16';

if($data->fullHeight()->bool()) {
	$classes = 'h-screen items-center';
}

?>
<section class="flex justify-center text-xl text-center <?= $classes ?>">

	<div class="w-5/6">
		<?php foreach($rootPage->children()->listed() as $child): ?>
			<a class="block" href="<?= $child->url() ?>"><?= $child->title() ?></a>
		<?php endforeach; ?>
	</div>
</section>