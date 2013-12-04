'use strict';

var cocktail     = require('cocktail'),
    Evented      = require('cocktail-annotation-evented'),
    Configurable = require('cocktail-trait-configurable');

cocktail.use(Evented);

cocktail.mix({
    '@exports'  : module,
    '@as'       : 'class',

    '@traits'   : [Configurable],

    '@evented' : true,

    '@properties': {
        name   : undefined,
        steps  : [],
    },

    constructor: function(options) {
        this.configure(options);
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
