'use strict';

var cocktail  = require('cocktail'),
    Eventable = require('./trait/Eventable'),
    Emitter   = require('events').EventEmitter;

cocktail.mix({
    '@exports'  : module,
    '@as'       : 'class',

    '@traits'   : [Eventable],

    '@properties': {
        name   : undefined,
        steps  : undefined,
        emitter: undefined
    },

    constructor: function(options) {

        if(options && options.name) {
            this.setName(options.name);
        }

        this.setEmitter(new Emitter());
        this.setSteps([]);
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
