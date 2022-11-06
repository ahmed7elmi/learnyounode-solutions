const http = require('http');

http.get(process.argv[2], responseHandler)
    .on('error', console.error);

dataBuffer = '';

function responseHandler(response) {
    response.setEncoding('utf-8');
    response.on('data', collect);
    response.on('error', console.error);
    response.on('end', finalize);
}

function collect(data) {
    dataBuffer = dataBuffer + data;
}

function finalize() {
    console.log(dataBuffer.length);
    console.log(dataBuffer);
}