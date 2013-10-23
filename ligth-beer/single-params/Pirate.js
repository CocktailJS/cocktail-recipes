/*
 *
 * Copyright (c) 2013 Maximiliano Fierro
 * Licensed under the MIT license.
 */
'use strict';

var cocktail = require('cocktail'),
    Person   = require('./Person');

cocktail.mix({
    '@exports' : module,
    '@extends' : Person,

    greeting: 'Ahoy'
});
