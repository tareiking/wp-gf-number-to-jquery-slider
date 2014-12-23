<?php
/*
Plugin Name: Gravity Forms Number Field to JQuery UI slider
Description: Convert a number field with min, max and default values to a jquery UI slider
Plugin URI: http://github.com/tareiking/wp-gf-number-to-jquery-slider
Version: 1.0.0
Author: tareiking
Author URI: http://tarei.me
*/

$plugindir = dirname( __FILE__ );
define( 'MYPLUGINNAME_PATH', plugin_dir_url(__FILE__) );  

function new_theme_styles() {
  wp_register_style( 'jquery-ui', MYPLUGINNAME_PATH . 'styles/jquery-ui/jquery-ui.css', 'all' );
  wp_enqueue_style( 'jquery-ui' );
}
add_action('wp_print_styles', 'new_theme_styles');

function wpgfn_enqueue_scripts() {
	//wp_register_script( 'jQuery-UI', 'http://code.jquery.com/ui/1.10.3/jquery-ui.js', array('jquery'),NULL,false);
	//wp_enqueue_script( 'jQuery-UI' );
	wp_register_script( 'jquery-ui-touch-punch', MYPLUGINNAME_PATH.'scripts/jquery-ui-touch-punch.js',array('jquery-ui-slider'),NULL,false);
	wp_enqueue_script( 'jquery-ui-touch-punch' );
	//wp_register_script( 'jquery-fastClick', MYPLUGINNAME_PATH.'scripts/jQuery-fastClick.js',array('jquery'),NULL,false);
	//wp_enqueue_script( 'jquery-fastClick' );
	wp_register_script( 'functions.js', plugin_dir_url(__FILE__).'scripts/functions.js',array('jquery-ui-slider'),NULL,true);
	wp_enqueue_script( 'functions.js' );
}
add_action('wp_enqueue_scripts', 'wpgfn_enqueue_scripts');

?>