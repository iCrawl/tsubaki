import promisify from './promisify';

/**
 * Promisifies an object with functions
 * @param {Object} obj The object to promisify
 * @param {string} [suffix='Async'] Suffix to append to the promisified function
 * @returns {Object} The updated object with promisified functions
 */
const promisifyAll = (obj: any, suffix = 'Async') => {
	// Appearently some people like to promisify class instances
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	const newObj = Object.getPrototypeOf(obj);
	// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
	for (const key of Object.keys(obj).concat(Object.keys(newObj))) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		if (typeof obj[key] !== 'function') continue;
		// eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
		obj[`${key}${suffix}`] = promisify(obj[key]);
	}
	// eslint-disable-next-line @typescript-eslint/no-unsafe-return
	return obj;
};

export { promisifyAll };
export default promisifyAll;
