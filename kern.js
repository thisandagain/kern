;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Framework-less kerning support for browsers.
 *
 * @package kern
 * @author Andrew Winterman <andywinterman@gmail.com>
 *         Andrew Sliwinski <andrew@diy.org>
 */

/**
 * Export
 *
 * @param {object} DOM element to apply kerning to
 * @param {array} An array of adjustment values for each character
 */
window.kern = function (element, table) {
    var text = element.innerHTML;
    var split = text.split('');

    // Build up sub elements
    var elements = '';
    for (var i = 0; i < split.length; i++) {
        elements += ('<div>' + split[i] + '</div>');
    }

    // Replace element contents
    element.innerHTML = elements;

    // Apply styles
    var children = element.children;
    for (var c = 0; c < children.length; c++) {
        children[c].style.display = 'inline-block';
        children[c].style.marginLeft = table[c] + 'px';
    }
};
},{}]},{},[1])
;