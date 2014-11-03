'use strict';

var cocktail            = require('cocktail'),
    enumerable          = require('./enumerable'),
    arrayAsItems        = require('./arrayAsItems'),
    list                = require('./list'),
    asEnumerableArray   = require('./asEnumerableArray');
    
var myList, myOtherList, myArr, myOtherArr, enumArr;

myArr = ['one', 'two', 'three'];
myOtherArr = ['four', 'five', 'six'];

// List
console.log('-- list:');

// using factory method create()
myList = list.create({items: myArr});

console.log(myList.first()); // one
console.log(myList.last());  // three

//using factory method withArray()
myOtherList = list.withArray(myOtherArr);

console.log(myOtherList.first()); // four
console.log(myOtherList.last());  // six


//Arrays
console.log('-- arrays:');

// Array with enumerable
cocktail.mix(myArr, {
    '@talents': [enumerable],

    getItems: function () {
        return this;
    }
});

console.log(myArr.first()); // one
console.log(myArr.last());  // three

// Array with enumnerable and arrayAsItems

cocktail.mix(myOtherArr, {'@talents': [enumerable, arrayAsItems]});

console.log(myOtherArr.first()); // four
console.log(myOtherArr.last());  // six


// Array with asEnumerableArray
enumArr = ['seven', 'eight', 'nine'];

cocktail.mix(enumArr, {'@talents': [asEnumerableArray]});

console.log(enumArr.first()); // seven
console.log(enumArr.last());  // nine

