'use strict';

var cocktail  = require('cocktail'),
    Eventable = require('../trait/Eventable'),
    Emitter   = require('events').EventEmitter;

cocktail.mix({
    '@annotation': 'eventable',
    '@exports'   : module,
    '@as'        : 'class',

    '@properties': {
        parameter: undefined
    },

    priority: cocktail.SEQUENCE.PRE_EXPORTS,

    process: function(subject){
        var emitter = this.getParameter();

        if(emitter && emitter === true) {
            emitter = new Emitter();
        }

        cocktail.mix(subject, {
            '@traits': [Eventable],

            '@properties' : {
                emitter: emitter
            }
        });
    }


});