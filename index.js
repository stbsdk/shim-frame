/**
 * @module stb-shim-bind
 *
 * @author Stanislav Kalashnik <sk@infomir.eu>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';


/* eslint-disable */

if ( !window.requestAnimationFrame ) {
	// shim layer with setTimeout fallback
	window.requestAnimationFrame =
		window.mozRequestAnimationFrame ||
		window.webkitRequestAnimationFrame ||
		window.msRequestAnimationFrame ||
		function ( callback ) {
			window.setTimeout(callback, 1000 / 60);
		};
}

