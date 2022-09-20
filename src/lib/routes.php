<?php
namespace Luis\Project\lib;
use Luis\Project\controllers\Controller;

$router = new \Bramus\Router\Router();
session_start();

$router->get('/', function() { 
    $home = new Controller;
    $home->render("index");
});

$router->get('/index.php', function() { 
    $home = new Controller;
    $home->render("inicio");
});

$router->get('/prueba.php', function() { 
    require_once 'src/views/prueba.php';
});

$router->run();