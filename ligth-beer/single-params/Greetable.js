/*
 *
 * Copyright (c) 2013 Maximiliano Fierro
 * Licensed under the MIT license.
 */
'use strict';

var cocktail = require('cocktail');

cocktail.mix({
    '@requires' : ['getGreeting'],
    
    '@exports'  : module,

    sayHi : function() {
        var greeting = this.getGreeting();

        return greeting + '!';
    }

});
