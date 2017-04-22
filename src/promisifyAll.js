const promisify = require('./promisify');

/**
 * Promisifies an object with functions
 * @param {Object} obj The object to promisify
 * @param {string} [suffix='Async'] Suffix to append to the promisified function
 * @returns {Object} The updated object with promisified functions
 */
module.exports = (obj, suffix = 'Async') => {
	// Appearently some people like to promisify class instances
	const newObj = Object.getPrototypeOf(obj);
	for (const key of Object.keys(obj).concat(Object.keys(newObj))) {
		if (typeof obj[key] !== 'function') continue;
		obj[`${key}${suffix}`] = promisify(obj[key]);
	}
	return obj;
};
