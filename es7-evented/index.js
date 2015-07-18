'use strict'

import { traits } from 'traits-decorator'
import eventable from 'cocktail-trait-eventable'
import EventEmitter from 'events'


function evented (target) {
    traits(eventable)(target);
}


function capitalize(name) {
    let prop = name.replace(/^_/,'')
    return prop[0].toUpperCase() + prop.substr(1);
}

function propertyName(prefix, name) {    
    return prefix + capitalize(name)
}

function property ({getter = 'get', setter = 'set'} = {})  {

    return function property(target, name, descriptor) {
        
        if (getter) {
            Object.defineProperty(
                target,
                propertyName(getter, name),{
                    value: function getter() { return this[name] }    
                }
                
            )
        }

        if (setter) {
            Object.defineProperty(
                target,
                propertyName(setter, name),{
                    value: function setter(value) { this[name] = value }
                }
            )
        }

    }
}

function getter (prefix = 'get') {
    return function (...args) {
        property({getter: prefix, setter: false})(...args)       
    }
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
       this.emit('foo', `${this._name}`)
    }
}

let obj = new EventedClass();

obj.on('foo', () => console.log('event handled -> foo') )

obj.foo()

let named = new EventedClass('wiiii')

named.on('foo', (name) => console.log(`event handled -> foo name: ${name}`))
named.foo()


console.log(obj.hasValue()) // beacuse @property({getter: 'has'})
