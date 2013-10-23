'use strict';

var cocktail = require('cocktail');


cocktail.mix({
    '@exports' : module,
    '@requires': ['getEmitter'],

    addListener: function() {
        this.getEmitter().addListener.apply(this, arguments);
    },

    on: function() {
        this.getEmitter().on.apply(this, arguments);
    },

    emit: function() {
        this.getEmitter().emit.apply(this, arguments);
    }
    
});