/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

/* eslint-disable */

'use strict';


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

