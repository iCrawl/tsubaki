function promisify(fn) {
	function newFunction(...args) {
		const arg = [];
		for (const key of Object.keys(args)) arg.push(args[key]);
		return new Promise((resolve, reject) =>
			fn(...args, (err, val) => {
				if (err) return reject(new Error(err));
				else return resolve(val);
			})
		);
	}
	return newFunction;
}

function promisifyAll(obj) {
	const newObj = obj;
	for (const key of Object.keys(obj)) {
		const val = obj[key];
		if (typeof val !== 'function') continue;
		newObj[`${key}Async`] = promisify(val);
	}
	return newObj;
}

module.exports = {
	promisify,
	promisifyAll
};
