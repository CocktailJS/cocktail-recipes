'use strict';

var Cocktail  = require('Cocktail'),
    Eventable = require('./trait/Eventable'),
    Emitter   = require('events').EventEmitter;

Cocktail.mix({
    '@exports'  : module,
    '@as'       : 'class',

    '@traits'   : [Eventable],

    '@properties': {
        name   : undefined,
        steps  : [],
        emitter: new Emitter()
    },

    constructor: function(options) {

        if(options && options.name) {
            this.setName(options.name);
        }

    },

    addSteps: function(steps) {
        var me = this;
        steps.forEach(function(step){
            me.addStep(step);
        });
    },

    addStep: function(step) {
        var me = this;

        me.emit('beforestepadded', me, step);

        me.getSteps().push(step);

        me.emit('stepadded', me, step);

    },

    run: function() {
        var me = this,
            steps = me.getSteps();

        steps.forEach(function(step){
            step.execute();
        });
    }
});
