'use strict';
var fs=require('fs');
function home(response){
    // console.log('home');
    var stream = fs.createReadStream('./index.html','utf8');
    var _res = response;
    stream.on('data',function(chunk){
        _res.write(chunk);
    });

    stream.on('end',function(){
        response.end();
    });

}

function page(response){
    var stream = fs.createReadStream('./page.html','utf8');
    var _res = response;
    stream.on('data',function(chunk){
        _res.write(chunk);
    });

    stream.on('end',function(){
        _res.end();
    });
}

function view(response){
    var stream = fs.createReadStream('./view.html','utf8');
    var _res = response;
    stream.on('data',function(chunk){
        _res.write(chunk);
    });

    stream.on('end',function(){
        _res.end();
    });
}

module.exports = {home,page,view};