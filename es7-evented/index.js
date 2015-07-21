'use strict';

import { traits } from 'traits-decorator';
import { property, getter } from  'properties-decorator';

import eventable from 'cocktail-trait-eventable';
import EventEmitter from 'events';


function evented (target) {
    traits(eventable)(target);
}


@evented
class EventedClass {

    @getter() // this will add a getEmitter **required** by eventable trait
    _emitter = new EventEmitter

    @property({getter: 'has'}) // getter: hasValue, setter: setValue
    _value = true

    constructor (name) {
        this._name = name;
    }


    foo() {
       this.emit('foo', `${this._name}`);
    }
}

let obj = new EventedClass();

obj.on('foo', () => console.log('event handled -> foo') );

obj.foo();

let named = new EventedClass('wiiii');

named.on('foo', (name) => console.log(`event handled -> foo name: ${name}`));
named.foo();


console.log(obj.hasValue()); // beacuse @property({getter: 'has'})
