const http = require('http');

let urls = [];
let buffers = [];
let done = [];

for (let i = 2; i < process.argv.length; i++) {
    urls.push(process.argv[i]);
    buffers.push('');
    done.push(false);
}

function startRequest(url, id) {
    http.get(url, (response) => {
        // setting encoding to utf-8
        response.setEncoding('utf-8');

        // set the data event
        response.on('data', (data) => {
            buffers[id] = buffers[id] + data;
        });

        // set the error event
        response.on('error', console.error);
        
        // set the end event
        response.on('end', () => {
            done[id] = true;

            let notDone = done.filter(status => status === false)

            // is all done?
            if (notDone.length === 0) {
                for(let idx = 0; idx < buffers.length; idx++) {
                    console.log(buffers[idx]);
                }
            }
        });
    })
    .on('error', console.error);
}

for (let i = 0; i < urls.length; i++) {
    startRequest(urls[i], i);
}