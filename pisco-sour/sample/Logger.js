"use strict";

//import the custom annotation definition
require('../lib/Injected');


var Cocktail = require('Cocktail'),
    util = require('util');


Cocktail.mix({
    '@exports'  : module,
    '@injected' : ['format'],

    '@properties': {
        'format' : undefined
    },

    constructor: function(){
        //DO NOTHING
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
