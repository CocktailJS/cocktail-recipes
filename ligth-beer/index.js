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
        coolEnough: false,
        properties : {
            height : 10,
            color  : 'black'
        }
    },

    whatsYourValueOn: function(property){
        return "Hi! My " + property + " value is " + this.down(property) + ", thanks for asking.";
    }
});

console.log('name: ' + subject.getName());
console.log('is it cool enough: ' + (subject.isCoolEnough() ? "YES" : "NO, not yet"));

console.log(subject.whatsYourValueOn('nickname'));
console.log(subject.whatsYourValueOn('name'));
console.log(subject.whatsYourValueOn('properties.height'));
console.log(subject.whatsYourValueOn('properties.color'));

