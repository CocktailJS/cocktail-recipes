/*
 *
 * Copyright (c) 2013 Maximiliano Fierro
 * Licensed under the MIT license.
 */
'use strict';

var Cocktail = require('Cocktail'),
    Traversable = require('./lib/Traversable'),
    subject;

//create an object with some property
subject = {
    nickname: 'daSubject'
};

//mix it with a Traversable talent and add some properties
Cocktail.mix(subject, {
    '@talents': [Traversable],
    '@properties': {
        name: 'subject',
        coolEnough: false,
        properties : {
            height : 10,
            color  : 'black'
        }
    },

    whatsYourValueOn: function(property){
        var value = this.down(property);
        return "Hi! My " + property + (value ?  " value is " + value : " is not defined here, sorry") + ", thanks for asking.";
    }
});


//By using @properties we get getters and setter for each property
console.log('name: ' + subject.getName());
//When you define a boolean property then an isXXX method is available instead of the getter
console.log('is it cool enough: ' + (subject.isCoolEnough() ? "YES" : "NO, not yet"));

//the whatsYourValueOn method defined in the mix uses a method obtained by a Traversable talent
console.log(subject.whatsYourValueOn('nickname'));
console.log(subject.whatsYourValueOn('name'));
console.log(subject.whatsYourValueOn('properties.height'));
console.log(subject.whatsYourValueOn('properties.color'));

//Annotations are simple meta-data used to perform some operations over the Class/Object
//So they are not part of the mixed result
console.log(subject.whatsYourValueOn('@talents'));
console.log("Yes, I mean if I want to ask the subject about @talents property it would say: " + subject['@talent']);

