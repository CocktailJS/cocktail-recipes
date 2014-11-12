requirejs.config({
    baseUrl: './js/requirejs/'
    // uncomment the following if generated cocktail package with r.js
    // packages: [{
    //     name: 'cocktail',
    //     location: 'cocktail',
    //     main: 'lib/cocktail.js'
    // }]
});

requirejs(['app'],
    function(app){

        window.onload = function() {
            var body = document.body,
                myApp = app.create(body);

            body.style.fontSize = '50px';

            myApp.sayHello();
        };
    }
);