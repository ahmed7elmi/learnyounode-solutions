const fs = require('fs');


let content = fs.readFileSync(process.argv[2]);

let parts = content.toString().split('\n');

console.log(parts.length - 1);
