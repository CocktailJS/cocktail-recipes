'use strict';

var app = require('./src/app');

function start() {
    var body = document.body,
        myApp = app.create(body);

    body.style.fontSize = '50px';

    myApp.sayHello();
};

document.addEventListener('DOMContentLoaded', start, false);