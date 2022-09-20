<?php
namespace Luis\Project\components;
use Luis\Project\controllers\Menubar;

class Header{
    private string $header;
    public function __construct()
    {
        $this->header="
        <header>
        <ul>
            <a href='#'><li><img src='src/views/assets/img/menuBar/apple.ico' ></li></a>
            <div class='menu' id='menu'>
                ".Menubar::index()."
            </div>
        </ul>
        <ul>
            <a href='#'><li><img src='src/views/assets/img/menuBar/wifi.ico' ></li></a>
            <a href='#'><li><img src='src/views/assets/img/menuBar/search.ico' ></li></a>
            <a href='#'><li><img src='src/views/assets/img/menuBar/control-center.ico' ></li></a>
            <a href='#'><li><img src='src/views/assets/img/menuBar/siri.ico' ></li></a>
            <a href='#'><li onclick='myFunction()' id='reloj'>00 : 00 : 00 </li></a>
        </ul>
        </header>";
    }
    public function index(){
        return $this->header;
    }

    public function menu(string $var){
        $this->menu=$var;
        return $this->menu;
    }
}