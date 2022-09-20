<?php
namespace Luis\Project\controllers;

class Menubar{
    private static string $menu="
        <a href='#'><li>Archivo</li></a>
        <a href='#'><li>Editar</li></a>
        <a href='#'><li>Ver</li></a>
        <a href='#'><li>Historia</li></a>
        <a href='#'><li>Marcadores</li></a>
        <a href='#'><li>Perfiles</li></a>
        <a href='#'><li>Pestaña</li></a>
        <a href='#'><li>Ventana</li></a>
        <a href='#'><li>Ayuda</li></a>
    ";

    
    public static function index(){
        return self::$menu;
    }
}