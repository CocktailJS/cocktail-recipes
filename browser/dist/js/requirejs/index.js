requirejs(['./js/requirejs/app'],
function(app){


    window.onload = function() {
        var body = document.body,
            myApp = app.create(body);

        body.style.fontSize = '50px';

        myApp.sayHello();
    };
});