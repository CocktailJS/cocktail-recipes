"use strict";

var Cocktail = require('Cocktail'),
    Injected = function(){},
    meld = require('meld'),
    INJECT_MAP_KEYS = [],
    INJECT_MAP_DESC = [];


Injected.getDescriptorFor = function(classKey){
    var idx = INJECT_MAP_KEYS.indexOf(classKey);
    return INJECT_MAP_DESC[idx];
};

Injected.addDescriptorFor = function(classKey, desc){
    var idx = INJECT_MAP_KEYS.push(classKey);
    INJECT_MAP_DESC[idx-1] = desc;
};

Cocktail.mix(Injected, {
    '@exports'   : module,
    
    '@annotation': 'injected',
    
    '@properties':{
        'parameter': undefined
    },

    priority: 110,

    process: function(subject /*, proto*/){
        var me = this,
            injectedKeys = me._splitKeys(me.getParameter());

        Injected.addDescriptorFor(subject,injectedKeys);

        me._createGetterInterceptors(subject, injectedKeys);
    },

    _splitKeys: function(keys){
        var l = keys.length,
            i, o = {};

        for(i = 0; i < l; i++){
            o[keys[i]] = undefined;
        }

        return o;
    },


    _createGetterInterceptors: function(subject, injected){
        var me = this,
            key, getter;

        for(key in injected){
            if(injected.hasOwnProperty(key)){
                getter = me._getterFor(subject, key);

                if(getter){
                    meld.before(subject.prototype, getter, (function(classKey){
                        return function(){
                            me._interceptor(classKey, this);
                        };
                    })(subject));
                }
            }
        }
    },

    _getterFor: function(subject, key){
        var name = key.charAt(0).toUpperCase() + key.slice(1),
            sp = subject.prototype, getter;

        getter = 'get'+name;

        if (!sp[getter]){
            getter = 'is'+name;
        }

        return getter;
    },

    _interceptor : function(classKey, instance){
        var desc = Injected.getDescriptorFor(classKey),
            key, value;

        for(key in desc){
            if(desc.hasOwnProperty(key)){
                value = desc[key];
                if(value !== undefined){
                    instance[key] = value;    
                }
                
            }
        } 
    }

});

