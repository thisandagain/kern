/**
 * Framework-less kerning support for browsers.
 *
 * @package microkern
 * @author Andrew Sliwinski <andrew@diy.org>
 *         Andrew Winterman <andywinterman@gmail.com>
 */

(function () {
    /**
     * Replaces the specified element's innerHtml with individual divs & applies
     * kerning (margin-left) to each element using the provided kerning table.
     *
     * @param {object} DOM element to apply kerning to
     * @param {array} An array of adjustment values for each character
     */
    var kern = function (element, table) {
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

    /**
     * Exports
     */
    if (typeof define !== 'undefined' && define.amd) {
        // AMD / RequireJS
        define([], function () {
            return kern;
        });
    } else if (typeof module !== 'undefined' && module.exports) {
        // Node.js
        module.exports = kern;
    } else {
        // Included directly via <script> tag
        window.kern = kern;
    }
}());