const nodeVersion = parseInt(process.versions.node.split('.'), 10);
const { promisify, promisifyAll } = require('../index');
const fs = promisifyAll(require('fs'));
const writeFile = promisify(require('fs').writeFile);
const readFile = promisify(require('fs').readFile);

/* global test, expect */
test('Write and read file with promises', () => {
	fs.writeFileAsync('test.txt', '123456', 'utf-8')
		.then(() => fs.readFileAsync('test.txt', 'utf-8'))
		.then(content => expect(content).toBe('123456'));
});

if (nodeVersion >= 8) {
	test('Write and read file with util.promise on node >= 8', () => {
		writeFile('test.txt', '123456', 'utf-8')
			.then(() => readFile('test.txt', 'utf-8'))
			.then(content => expect(content).toBe('123456'));
	});
}
