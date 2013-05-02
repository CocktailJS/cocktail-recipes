"use strict";

//import the custom annotation definition
require('../lib/Injected');


var Cocktail = require('Cocktail'),
    util = require('util'),
    Logger = function(){};


Cocktail.mix(Logger, {
    '@injected': ['format'],

    '@properties': {
        'format' : undefined
    },

    _log: function(type, message){
        console.log(util.format(this.getFormat(), type ,message));
    },

    info: function(message){
        this._log("INFO", message);
    },

    debug: function(message){
      this._log("DEBUG", message);
    }
});

module.exports = Logger;