'use strict';

var server = require('./server');
var router = require('./router');
var handle = require('./handle');


var routeArr = {
    '/home':handle.home,
    '/page':handle.page,
    '/view':handle.view
}

server(router,routeArr);