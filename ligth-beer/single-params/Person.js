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
        name     : undefined,
        greeting : 'Hello'
    },

    constructor: function (options) {
        var name     = options && options.name,
            greeting = options && options.greeting;

        if(name) {
            this.setName(name);
        }

        if (greeting) {
            this.setGreeting(greeting);
        }
    }

});
