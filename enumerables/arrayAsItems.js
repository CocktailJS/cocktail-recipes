'use strict';

var cocktail = require('cocktail');

cocktail.mix({
    '@exports': module,
    '@as': 'class',

    getItems: function () {
        return this;
    }
});