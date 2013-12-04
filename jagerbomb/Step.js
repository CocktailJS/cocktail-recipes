'use strict';

var cocktail     = require('cocktail'),
    Evented      = require('cocktail-annotation-evented'),
    Configurable = require('cocktail-trait-configurable');

cocktail.use(Evented);

cocktail.mix({
    '@exports': module,
    '@as'     : 'class',
    
    '@traits' : [Configurable], 

    '@evented': true,

    '@properties': {
        name: undefined
    },

    constructor: function(options){
        this.configure(options);
    },

    execute: function() {
        this.emit('execute', this);
    }
});