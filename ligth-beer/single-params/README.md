#Single Class Defitinion Example

This example is very simple and it is intended to showcase the new features in Cocktail v0.2

We have defined a very simple model as described below:

###Greetable
**Trait**

- **defines:** sayHi
- **requires:** getGreeting

This is the _trait_ that contains the logic for greeting someone with the _sayHi()_ method.
As a trait it requires some state to be defined in the implementing class. In this case _Greetable_ requires a
method called _getGreetable_.

###Person
**Class**

A _Person_ class is _Greetable_ meaning that every person knows how to sayHi. It has a _property_ called **greeting**, with a default *'Hello'* value.

###Pirate
**Class**

A _Pirate_ is a more specific kind of _Person_. In this case, our Pirates have a different way to sayHi, they usually use the word 'Ahoy' to greet someone else, so we just override the _greeting_ property with a default value of *'Ahoy'*.

Finally, we instantiate our classes in the _index.js_ file and create a _people_ array containing a Pirate (named Jack) and a Person (named John) so we can loop the array and ask everyone to sayHi.

##Execute the example

````
npm install
node index.js

- Jack: Ahoy!
- John: Hello!
````


