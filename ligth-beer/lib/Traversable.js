/*
 *
 * Copyright (c) 2013 Maximiliano Fierro
 * Licensed under the MIT license.
 */
'use strict';

var Cocktail = require('Cocktail'),
    Traversable = function(){};

/**
 * @trait Traversable
 * 
 */
Cocktail.mix(Traversable, {

    down : function(pattern){
        var keys = pattern.split('.'),
            value = this,
            i, ln;

        for(i = 0, ln = keys.length; i < ln; i++ ){
            value = value[keys[i]];
        }

        return value;
    }

});

module.exports = Traversable;