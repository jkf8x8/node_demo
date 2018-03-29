'use strict';
var http = require('http');
var url = require('url');
var querystring = require('querystring');

function start(router,routeArr){
    http.createServer(function(request,response){
        response.writeHead(200,{'content-type':'text/html'});
        var path = url.parse(request.url).pathname; // /page?key=work
        // var query = url.parse(request.url,true).query; // /page?key=work
        // console.log(query)
        var requestData = '';
        request.on('data',function(chunk){
            // console.log(chunk);
            requestData+=chunk;           
        }).on('end',function(){
            
            var query = querystring.parse(requestData);
            // console.log(requestData);
            console.log(query);

        })           
        router(path,routeArr,response);
        // response.end('welcome');
    }).listen(8080);

}

module.exports = start;