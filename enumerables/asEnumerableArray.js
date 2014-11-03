'use strict';

var cocktail     = require('cocktail'),
    enumerable   = require('./enumerable'),
    arrayAsItems = require('./arrayAsItems');

cocktail.mix({
    '@exports': module,
    '@as': 'class',

    '@traits': [enumerable, arrayAsItems]
});