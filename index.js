//dependencies
const http = require('http');
const url = require('url');

//app object- module scaffolding
const app = {}

//configuration 
app.config = {
    port : 5000
}

//create server 
app.createServer = () => {
    const server = http.createServer(app.handleRequest)
    server.listen(app.config.port, () =>{
        console.log(`listening port ${app.config.port}`);
    })
}

//handle request response
app.handleRequest = (req,res) => {
    //handle request
    //get the url and parse it
    const parsedUrl = url.parse(req.url, true);

    //response handle
    res.end('hello ritu')
}

//start the server
app.createServer()