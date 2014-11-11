// define(['./cocktail/lib/cocktail'], function(cocktail){
define(function (require, exports, module) {
    var cocktail = require('./cocktail/lib/cocktail');
    
    cocktail.mix({
        '@exports': module,
        '@as': 'class',

        '@static': {
            create: function(el){
                var App = this,
                    app = new App();

                app.setEl(el);

                return app;
            }
        },

        '@properties': {
            el: undefined
        },


        sayHello: function(){
            console.log('Ya sayHello');

            var el = this.getEl();
            el.innerHTML = 'HELLO FROM APP!';


        }

    });
});