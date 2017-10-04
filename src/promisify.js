const nodeVersion = process.versions.node.split('.')[0];

/**
 * Promisifies a function
 * @param {Function} fn The function to promisify
 * @returns {Function} Promise based version of the original function
 */
function promisify(fn) {
	let name = fn.name; // eslint-disable-line prefer-destructuring
	name = (name || '').replace(/\s|bound(?!$)/g, '');
	function newFunction(...args) {
		const arg = [];
		for (const key of Object.keys(args)) arg.push(args[key]);
		return new Promise((resolve, reject) =>
			fn.apply(this, [...args, (err, res) => { // eslint-disable-line no-invalid-this
				if (err) return reject(err);
				else return resolve(res);
			}])
		);
	}
	Object.defineProperty(newFunction, 'name', { value: name });
	return newFunction;
}

module.exports = fn => nodeVersion === '8' ? require('util').promisify(fn) : promisify(fn);
