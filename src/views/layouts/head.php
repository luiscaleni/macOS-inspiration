<?php
namespace Luis\Project\views\layouts;

use Luis\Project\controllers\View;

class Head{
    private string $head;
    private string $add="";
    public function __construct()
    {
        $this->head ='
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="src/views/css/style.css" type="text/css">
            <link rel="icon" type="image/x-icon" href="src/views/assets/img/apple_logo.ico"/>
            <title>macOS</title>
            '.$this->add.'
        </head>
        <body>
        <div class="load" id="load">
            <img src="src/views/assets/img/apple_logo.ico" id="load-img"/>
            <p id="load-p">macOS</p>
            <div class="loader" id="loader">
            <span></span>
            </div>
        </div>
        <div class="ios">
        ';
    }
    public function index(){
        return $this->head;
    }
    public function add(string $add){
        $this->add=$add;
        return $this->add;
    }
}