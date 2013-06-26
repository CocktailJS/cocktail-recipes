/*
 *
 * Copyright (c) 2013 Maximiliano Fierro
 * Licensed under the MIT license.
 */
'use strict';

var Cocktail = require('Cocktail'),
    Person   = require('./Person');

Cocktail.mix({
    '@exports' : module,
    '@extends' : Person,

    greeting: 'Ahoy'
});
