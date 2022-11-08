const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (err, buffer) => {
	console.log(buffer.split('\n').length - 1);
});
