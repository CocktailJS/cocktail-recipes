'use strict';

var cocktail = require('cocktail');

cocktail.mix({
    '@exports': module,
    '@as': 'class',

    '@requires': ['getItems'],

    first: function() {
        var items = this.getItems();
        return items[0];
    },

    last: function() {
        var items = this.getItems(),
            l = items.length;
        return items[l-1];
    }
});
