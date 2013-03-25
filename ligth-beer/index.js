/*
 *
 * Copyright (c) 2013 Maximiliano Fierro
 * Licensed under the MIT license.
 */
'use strict';

var Cocktail = require('Cocktail'),
    Traversable = require('./lib/Traversable'),
    subject, properties, MyClass;

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
console.log("Yes, I mean if I want to ask the subject about @talents property it would say: " + subject['@talents']);

//The idea is to avoid adding non-semantic properties to your classes. 
//A good example is the property `properties`, in this case the subject has a getProperties() 
//and a properties instance variable but they have nothing to do with the annotation @properties
properties = subject.getProperties();
console.log('My subject properties is an object: ' + properties + ' with height: ' + properties.height + ' and color: ' + properties.color);


//Now we are going to do the same but this time apply Traversable to a class

MyClass = function(){};

Cocktail.mix(MyClass, {
    '@talents': [Traversable],
   
    '@properties': {
        name: 'subject',
        coolEnough: false,
        properties : {
            height : 10,
            color  : 'black'
        }
    },

    nickname: 'daClass',

    whatsYourValueOn: function(property){
        var value = this.down(property);
        return "Hi! My " + property + (value ?  " value is " + value : " is not defined here, sorry") + ", thanks for asking.";
    }


});


//and now let's use MyClass to create a new subject:
subject = new MyClass();

//get the name using the getter
console.log('name: ' + subject.getName());
//ask about the nickname
console.log(subject.whatsYourValueOn('nickname'));
//and about properties.height
console.log(subject.whatsYourValueOn('properties.height'));
//let's set new protperties
subject.setProperties({
    height: 1000,
    color : 'orange'
});
//and get the new ones
properties = subject.getProperties();
console.log('My subject properties is an object: ' + properties + ' with height: ' + properties.height + ' and color: ' + properties.color);


