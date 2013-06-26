/*
 *
 * Copyright (c) 2013 Maximiliano Fierro
 * Licensed under the MIT license.
 */
'use strict';

var Person = require('./Person'),
    Pirate = require('./Pirate'),
    people = [],
    i;

people.push(new Pirate());
people.push(new Person());

for (i = 0; i < people.length; i++) {
    people[i].sayHi();
}

