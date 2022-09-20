<?php
namespace Luis\Project\views;
use Luis\Project\controllers\Controller;
use Luis\Project\views\layouts\Head;
use Luis\Project\views\layouts\Foot;

use Luis\Project\components\Header;
use Luis\Project\components\Dock;

$head = new Head;
echo $head->index();

    $header =  new Header;
    echo $header->index();

    $dock = new Dock;
    echo $dock->index();

    $index = new Controller;
    echo $index->renderBodys("inicio");

$foot = new Foot;
echo $foot->index();