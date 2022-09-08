const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((request, res)=>{

    //loadash
    const num = _.random(0, 20)

    // set header content
    res.setHeader('Content-Type', 'text/html');
    
    //hander URL for pages & set status
    let path = './views';

    switch(request.url){
        case '/':
            path += '/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += '/about.html';
            res.statusCode = 200;
            break;
        //redirect
        case '/about-me':
            res.statusCode = 301;//301 resources redirected
            res.setHeader('Location', '/about');//redirect to route /about
            break;
        default:
            path +='/404.html';
            res.statusCode = 404;
    }

    //send an html file
    fs.readFile(path, (err,data)=>{
        if(err){
            console.log(err);
            //end the response
            res.end();
        }else{
            // res.write(data);
            // end the response end send
            res.end(data);
        }
    })

});  


server.listen(3000, 'localhost', ()=>{
    console.log('listening for request on port 3000');
});