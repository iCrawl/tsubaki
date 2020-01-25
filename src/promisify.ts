const nodeVersion = parseInt(process.versions.node.split('.')[0], 10);

/**
 * Promisifies a function
 * @param {Function} fn The function to promisify
 * @returns {Function} Promise based version of the original function
 */
export function promisify(fn: (...args: any[]) => any) {
	return (...args: any[]): Promise<any> =>
		new Promise((resolve, rej) => {
			fn(...args, (err: Error, res: any) => {
				if (err) return rej(err);
				return resolve(res);
			});
		});
}

// eslint-disable-next-line @typescript-eslint/no-require-imports
export default (fn: (...args: any[]) => any) => (nodeVersion >= 8 ? require('util').promisify(fn) : promisify(fn));
