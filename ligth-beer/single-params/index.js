/*
 *
 * Copyright (c) 2013 Maximiliano Fierro
 * Licensed under the MIT license.
 */
'use strict';

var Person = require('./Person'),
    Pirate = require('./Pirate'),
    people = [],
    person,
    i;

people.push(new Pirate({ name: 'Jack' }));
people.push(new Person({ name: 'John' }));

for (i = 0; i < people.length; i++) {
    person = people[i];
    console.log('- '+person.getName()+': '+person.sayHi());
}
