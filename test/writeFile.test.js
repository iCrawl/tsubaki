const { promisifyAll } = require('../index');
const fs = promisifyAll(require('fs'));

/* global test, expect */
test('Write and read file with promises', () => {
	fs.writeFileAsync('test.txt', '123456', 'utf-8')
		.then(() => fs.readFileAsync('test.txt', 'utf-8'))
		.then(content => expect(content).toBe('123456'));
});
