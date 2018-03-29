'use strict';

var http=require('http');
var fs = require('fs');

http.createServer(function(request,response){
    // response.writeHead(200,{'content-type':'text/plain'});
    response.writeHead(200,{'content-type':'text/html'});
    var path = request.url;
    // response.write('<h2>hello node</h2>');
    // response.write(path);
    var _res = response;

    if(path == '/home' || path == '/'){
        // response.write('/home');

        // var html = '<!DOCTYPE html>';
        // html += '<html lang="en">';
        // html += '<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">'
        // html +=  '<meta http-equiv="X-UA-Compatible" content="ie=edge"><title>home</title></head>'
        // html +=  '<body>            <h2>home</h2>        </body>        </html>'
        var readstream = fs.createReadStream('./index.html','utf8');
        
        readstream.on('data',function(chunk){
            _res.write(chunk);
        }).on('end',function(){
            _res.end();
        })
       

    }else if(path=='/page'){
        // response.write('/page');
        // response.write('<h2>welcom page</h2>');

        // var html = '<!DOCTYPE html>';
        // html += '<html lang="en">';
        // html += '<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">'
        // html +=  '<meta http-equiv="X-UA-Compatible" content="ie=edge"><title>home</title></head>'
        // html +=  '<body>            <h2>page</h2>        </body>        </html>'

        // response.write(html);
        var stream = fs.createReadStream('./page.html','utf8');
        stream.on('data',function(chunk){
            _res.write(chunk);
        }).on('end',function(){
            _res.end();
        })

    }else if(path=='/view'){
        // response.write('/view')
        // response.write('<h2>welcom view</h2>');
        var stream = fs.createReadStream('./view.html','utf8');
        stream.on('data',function(chunk){
            _res.write(chunk);
        }).on('end',function(){
            _res.end();
        })
        
    }else{
        var stream = fs.createReadStream('./404.html','utf8');
        stream.on('data',function(chunk){
            _res.write(chunk);
        }).on('end',function(){
            _res.end();
        })
    }
    // response.end();
    
}).listen(8080);

