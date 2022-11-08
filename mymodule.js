const fs = require('fs');
const path = require('path');

function foo(directory, filter, callback) {
	let result = [];
	const extension = '.' + filter;
	fs.readdir(directory, (err, list) => {
		if (err) {
			return callback(err);
		}

		for (const file of list) {
			if (path.extname(file) === extension) {
				result.push(file);
			}
		}

		// everything looks good, return results.
		callback(null, result);

	});
}



module.exports = foo;
