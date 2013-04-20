<?php
/*
Plugin Name: Simple Cookie Law
Description: Simple Cookie Law in Romanian language
Author: Andrei Luca
Version: 1.0
*/

add_action('wp_print_scripts', 'simple_cookie_law');

if(!function_exists('simple_cookie_law')){
	function simple_cookie_law(){
		if(is_admin() || is_feed()){ return; }
		wp_enqueue_script('simple-cookie-law', plugin_dir_url(__FILE__).'js/cookie.law.min.js',  false, false, true);
	}
}