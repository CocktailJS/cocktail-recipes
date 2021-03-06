'use strict';

var cocktail  = require('cocktail'),
    Eventable = require('./annotation/Eventable');

cocktail.use(Eventable);

cocktail.mix({
    '@exports': module,
    '@as'    : 'class',
    
    '@eventable': true,

    '@properties': {
        name: undefined
    },

    constructor: function(options){
        if (options && options.name) {
            this.setName(options.name);
        }
    },

    execute: function() {
        this.emit('execute', this);
    }
});