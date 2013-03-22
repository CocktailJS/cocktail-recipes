'use strict';

var Cocktail = require('Cocktail'),
    Traversable = function(){};

Cocktail.mix(Traversable, {

    down : function(pattern){
        var keys = pattern.split('.'),
            value = this,
            i, ln;

        for(i = 0, ln = keys.length; i < ln; i++ ){
            value = value[keys[i]];
        }

        return value;
    },

    query : function(query){

    }

});

module.exports = Traversable;