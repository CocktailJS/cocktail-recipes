#Enumerable example

This recipe showcases the usage for **traits** and **talents** and how to compose them.

> enumerable.js

Trait to implement `first` and `last` methods to retrieve the corresponding elements of a given array retrieved by a **required** `getItems` method.

> list.js

Is a class with two factory methods: `create` and `withArray`. Uses the `enumerable` trait.


> arrayAsItems.js

Is a Trait/Talent to implement the `getItems` method required by `enumerable` to return the array instance (this). Intend to be applicable to an array.

> asEnumerableArray.js

Trait/Talent that is a composition of `enumerable` and `arrayAsItems`
