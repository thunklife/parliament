/*This module implements mathematical operators such as +, -, &&, ||
 * @module operators
 */
var curry = require('./lambda').curry;

/**
 * @function and
 * @param {bool} a
 * @param {bool} b
 * @returns {bool} Returns true if a and b are true. Equivilant to &&.
 */
//and :: Bool →  Bool →  Bool
var and = curry(function and(a,b){
  return a && b;
});

/**
 * @function or
 * @param {bool} a
 * @param {bool} b
 * @returns {bool} Returns true if a or b is true. Equivilan to ||
 */
// or :: Bool →  Bool →  Bool
var or = curry(function or(a, b){
  return a || b;
});

