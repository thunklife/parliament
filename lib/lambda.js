/**
 * This module provides implementations of some of the λ calculus as well as some combinators I use often.
 * @module lambda
 */

var slice = Array.prototype.slice;
var concat = Array.prototype.concat;

/**
 * @function curry
 * @param {function} f The function to curry
 * @param {number} x [x = f.length] The number of arguments to curry
 * @returns {function} Returns a function until all arguments for 'f' are supplied, then returns the result of applying 'f'.
 */
var curry = function curry(f){
  var x = arguments[1] || fn.length;
  return function __curry__(){
    var args = slice.call(arguments);
    return arg.length === x ? fn.apply(null, args) : function(){
       var newArgs = slice.call(arguments);
       return __curry__.apply(null, concat.apply(args, newArgs));
    };
  };
};

/**
 * This is the traditional implementation of compose. It composes two unary functions, passing the result of the first as the argument of the second.
 * @function compose
 * @param {function} f1 The first function to call
 * @param {function} f2 The second function to call, with the result of f1
 * @returns {function} Returns the composition of f1 and f2. Functions are applied from right to left
 *
 * compose :: (b →  c) →  (a →  b) →  a →  c
 */
var compose = curry(function compose(f2, f1){
  return function composed(x){
    return f2(f1(x));
  };
});

/**
 * This is a more robust implementation of compose, allowing for a variadic number of functions to be composed.
 * @function composeMany
 * @param {...function}
 * @returns {function} The composition of all supplied functions, from right to left.
 */
var composeMany = function composeMany(){
  var args = slice.call(arguments);
  if(args.length === 1) return args[0];
  if(args.length === 2) return compose(args[0], args[1]);

  return compose(args.shift, composeMany(args));
};

/**
 * @function before
 * @param {function} d The decorator function
 * @param {function} f The destination function
 * @returns {function} Returns a function (λ) that, when applied, applies function 'd' then function 'f'. Both are called with all arguments passed to λ.
 * @see {link https://leanpub.com/javascript-allonge/read#before} 
 */
var before = curry(function before(d, f){
  return function __before__(){
    var args = slice.call(arguments);
    d.apply(null, args);
    f.apply(null, args);
  };
});

module.exports = {
  curry: curry,
  before: before,
  compose: compose,
  composeMany: composeMany
};
