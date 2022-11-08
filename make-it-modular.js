const mymodule = require('./mymodule.js');

mymodule(process.argv[2], process.argv[3], (err, data) => {
	if (err) {
		return console.error(err);
	}

	for (const item of data) {
		console.log(item);
	}
});
