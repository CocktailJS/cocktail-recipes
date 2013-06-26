/*
 *
 * Copyright (c) 2013 Maximiliano Fierro
 * Licensed under the MIT license.
 */
'use strict';

var Cocktail  = require('Cocktail'),
    Greetable = require('./Greetable');

Cocktail.mix({
    '@exports' : module,

    '@traits'  : [Greetable],
    
    '@properties' : {
        greeting : 'Hello'
    },

    constructor: function (greeting) {
        if (greeting) {
            this.setGreeting(greeting);
        }
    }

});
