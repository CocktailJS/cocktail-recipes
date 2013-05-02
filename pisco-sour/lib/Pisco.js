"use strict";

var Cocktail = require('Cocktail'),
    Injected = require('./Injected'),
    path = require('path'),
    Pisco = {};


Cocktail.mix(Pisco, {

    resolve: function(opts, rootDir){
        var me = this;

        Cocktail.mix(me, opts);

        me._resolveInjection(rootDir);
    },


    _resolveInjection: function(rootDir){
        //classes
        var classes = this.classes || {},
            key, subject, config, desc, fpath;

        for(key in classes){
            if(classes.hasOwnProperty(key)){
                config = classes[key];
                fpath = path.resolve(rootDir, key);
                subject = require(fpath);
                desc = Injected.getDescriptorFor(subject);
                this._applyParamsToDescriptor(desc, config.params);
            }
        }
    },

    _applyParamsToDescriptor: function(descriptor, params){
        var key;
        for(key in descriptor){
            if(descriptor.hasOwnProperty(key)){
                descriptor[key] = params[key];
            }
        }
    }

});

Pisco.Injected = Injected;

module.exports = Pisco;  