'use strict';

function router(pathname,routeArr,response){
       
    // if(pathname == '/home'){
    //     handle.home();
    // }else if(pathname =='/page'){
    //     handle.page();
    // }else if(pathname =='/view'){
    //     handle.view();
    // }else{
    //     console.log('not found 404');
    // }
    
    
    // routeArr[pathname]();
    if(typeof routeArr[pathname] =='function'){
        routeArr[pathname](response);
    }else{
        response.end('not found 404');
    }

    
}

module.exports= router;