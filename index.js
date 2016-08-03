'use strict';
const isDOM = require('is-dom');
const isFunction = require('is-function');
let prevScrollTop = 0;

module.exports = (element,cb) => {
  
  if (!(isDOM(element))) {
    throw new Error('Expected a DOM element.');
  }

  if (!(isFunction(cb))) {
    throw new Error('Expected a callback.');
  }

  element.addEventListener('scroll',() => { 
    let currentScrollTop = element.scrollTop;
    let dir = currentScrollTop > prevScrollTop ? 0 : 1;
    prevScrollTop = currentScrollTop;
    return cb(dir);
  }, false);
};
