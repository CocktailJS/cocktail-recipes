'use strict';

var Cocktail  = require('Cocktail'),
    Eventable = require('../trait/Eventable'),
    Emitter   = require('events').EventEmitter;

Cocktail.mix({
    '@annotation': 'eventable',
    '@exports'   : module,
    '@as'        : 'class',

    '@properties': {
        parameter: undefined
    },

    priority: Cocktail.SEQUENCE.PRE_EXPORTS,

    process: function(subject){
        var emitter = this.getParameter();

        if(emitter && emitter === true) {
            emitter = new Emitter();
        }

        Cocktail.mix(subject, {
            '@traits': [Eventable],

            '@properties' : {
                emitter: emitter
            }
        });
    }


});