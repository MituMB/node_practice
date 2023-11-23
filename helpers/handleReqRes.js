//dependencies
const url = require('url');
const {StringDecoder} = require('string_decoder');

//module scaffolding
const handler = {}

//handle request response
handler.handleReqRes = (req,res) => {
    //handle request
    //get the url and parse it
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimPath = path.replace(/^\/+|\/+$/g, '');
    const queryStringObject = parsedUrl.query;
    const headerObject = req.headers;
    const method = req.method.toLowerCase();
    console.log(headerObject);

    const decoder = new StringDecoder('utf-8')
    let realData = "";
    req.on('data', (buffer) => {
        realData += decoder.write(buffer)
        console.log(realData);
    })
    req.on('end', () => {
        realData += decoder.end()
    })

    //response handle
    res.end('hello ritu')
}

module.export = handler