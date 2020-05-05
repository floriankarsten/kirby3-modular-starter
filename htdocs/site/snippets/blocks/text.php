<?php
$classes = 'my-16';

if($data->fullHeight()->bool()) {
	$classes = 'h-screen items-center';
}
?>
<section class="flex justify-center text-xl text-center <?= $classes ?>">
	<div class="w-5/6">
		<?= $data->text()->kt() ?>
	</div>
</section>