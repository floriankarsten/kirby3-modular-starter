<?php snippet('head') ?>
<H1>what is this</H1>
<?php
foreach($page->merkur()->toBuilderBlocks() as $block):
  snippet('blocks/' . $block->_key(), array('data' => $block));
endforeach;
?>

<?php snippet('foot') ?>