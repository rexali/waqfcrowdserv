const { escape, unescape } = require("html-escaper");
/**
 * Escape html or form input
 * @param {string} value - a string of value
 * @returns a string
 */
function escapeHTML(value) {
    return escape(value);
}

/**
 * Unscape html or form input
 * @param {string} value - a string of value
 * @returns a string
 */
function unscapeHTML(value) {
    return unescape(value)
}

module.exports={
   escapeHTML,
   unscapeHTML
}