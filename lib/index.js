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