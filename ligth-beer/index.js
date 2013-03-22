var Cocktail = require('Cocktail'),
    Traversable = require('./lib/Traversable'),
    subject;


subject = {
    nickname: 'daSubject'
};

Cocktail.mix(subject, {
    '@talents': [Traversable],
    '@properties': {
        name: 'subject',
        properties : {
            height : 10,
            color  : 'black'
        }
    },

    whatsYourValueOn: function(property){
        return "Hi! My " + property + " value is " + this.down(property) + ", thanks for asking.";
    }
});

console.log(subject.whatsYourValueOn('nickname'));
console.log(subject.whatsYourValueOn('name'));
console.log(subject.whatsYourValueOn('properties.height'));
console.log(subject.whatsYourValueOn('properties.color'));

