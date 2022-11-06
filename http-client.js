const http = require('http');

http.get(process.argv[2], responseHandler)
    .on('error', console.error);

function responseHandler(response) {
    response.setEncoding('utf-8');
    response.on('data', console.log);
    response.on('error', console.error);
}