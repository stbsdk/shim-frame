/**
 * @license The MIT License (MIT)
 * @copyright Stanislav Kalashnik <darkpark.main@gmail.com>
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

