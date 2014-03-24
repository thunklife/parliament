/**
 * This module implements functions that can be applied to lists (arrays) of things
 * @module list
*/

var curry = require('./lambda').curry;
/**
 * @function concat
 * @param {array} xs1
 * @param {array} xs2
 * @returns {array} Returns the result of appending xs2 to xs1.
 * 
 * concat :: [a] →  [a] →  [a]
 */

var concat = curry(function(xs1, xs2){
  return Array.prototype.concat(xs1, xs2);
});

module.exports = {
  concat: concat
};
