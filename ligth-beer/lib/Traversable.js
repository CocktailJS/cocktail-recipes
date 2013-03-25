/*
 *
 * Copyright (c) 2013 Maximiliano Fierro
 * Licensed under the MIT license.
 */
'use strict';

var Traversable = function(){};
// Cocktail = require('Cocktail'),


/**
 * @trait Traversable
 * This is a simple example of a Trait/Talent.
 * In its simplest expression a Trait is a Class with behavior but not state.
 * In this example we demonstrate how a simple Class definiton can be used as a Trait with Cocktail.
 */


/**
 * @method down
 */
Traversable.prototype.down = function(pattern){
    var keys = pattern.split('.'),
        value = this,
        i, ln;

    for(i = 0, ln = keys.length; i < ln; i++ ){
        value = value[keys[i]];
    }

    return value;
};



//export this class
module.exports = Traversable;