'use strict';

var MyClass = require('./MyClass');

var a = new MyClass();

a.after('initialize', function() { console.log('inline fn after'); });

a.before('initialize', 'log');

a.initialize({});

// this should print:

// log
// initializing with options {}
// inline fn after