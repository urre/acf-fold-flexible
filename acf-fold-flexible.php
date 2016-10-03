<?php
/*
Plugin Name: ACF Fold Flexible Content
Plugin URI: https://github.com/urre/acf-fold-flexible
Description: A simple plugin for enhancing the Advanced Custom Fields Flexible Content Field. Shows collapsed panels initially, and representing icons for each field type.
Version: 1.4.1
Author: Urban Sanden
Author URI: http://urre.me
Author Email: hej@urre.me
Donate link: https://www.paypal.me/urbansanden
Tags: acf, folding, flexible, content, fields, field
License: GPL2
*/

/**  Copyright 2016 Urban Sanden (email: hej@urre.me)

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License, version 2, as
published by the Free Software Foundation.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 */

/**
 * Class ACFFoldFlexible
 */
class ACFFoldFlexible {

	/**
	 * Constructor
	 */
	function __construct() {

		// Register admin css and scripts.
		add_action( 'admin_print_styles', array( $this, 'register_admin_styles' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'register_admin_scripts' ) );
	}

	/**
	 * Register admin css
	 */
	public function register_admin_styles() {
		if ( is_admin() ) {
			wp_enqueue_style( 'acffoldflexible-plugin-styles', plugins_url( 'acf-fold-flexible-content/css/acf-fold-flexible.admin.css' ) );
		}
	}

	/**
	 * Register admin scripts
	 */
	public function register_admin_scripts() {

		if ( is_plugin_active( 'advanced-custom-fields-pro/acf.php' ) ) {
			wp_enqueue_script( 'acffoldflexible-adminpro-script', plugins_url( 'acf-fold-flexible-content/js/acf-fold-flexible.admin.pro.js' ), array( 'jquery' ) );
		} else {
			wp_enqueue_script( 'acffoldflexible-admin-script', plugins_url( 'acf-fold-flexible-content/js/acf-fold-flexible.admin.js' ), array( 'jquery' ) );
		}
		wp_enqueue_script( 'acffoldflexible-tooltip', plugins_url( 'acf-fold-flexible-content/js/acf-fold-flexible.tooltip.js' ), array( 'jquery' ) );

	}
}

$afc = new ACFFoldFlexible();
