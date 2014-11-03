'use strict';

var cocktail    = require('cocktail'),
    enumerable  = require('./enumerable');

cocktail.mix({
    '@exports': module,
    '@as': 'class',

    '@traits': [enumerable],

    '@properties': {
        items: undefined
    },

    '@static': {

        create: function (options) {
            var List = this;
            return new List(options);
        },

        withArray: function(array) {
            return this.create({items: array});
        }
    },

    constructor: function (options) {
        this.items = options.items || [];
    }
});
