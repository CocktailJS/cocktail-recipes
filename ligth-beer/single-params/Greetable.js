/*
 *
 * Copyright (c) 2013 Maximiliano Fierro
 * Licensed under the MIT license.
 */
'use strict';

var Cocktail = require('Cocktail');

Cocktail.mix({
    '@requires' : ['getGreeting'],
    '@exports'  : module,

    sayHi : function() {
        var greeting = this.getGreeting();

        console.log(greeting + '!');
    }

});
