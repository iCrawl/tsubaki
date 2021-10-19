import promisify from './promisify';

/**
 * Promisifies an object with functions
 * @param {Object} obj The object to promisify
 * @param {string} [suffix='Async'] Suffix to append to the promisified function
 * @returns {Object} The updated object with promisified functions
 */
const promisifyAll = (obj: any, suffix = 'Async') => {
	// Appearently some people like to promisify class instances
	const newObj = Object.getPrototypeOf(obj);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	for (const key of Object.keys(obj).concat(Object.keys(newObj))) {
		if (typeof obj[key] !== 'function') continue;
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
		obj[`${key}${suffix}`] = promisify(obj[key]);
	}
	return obj;
};

export { promisifyAll };
export default promisifyAll;
