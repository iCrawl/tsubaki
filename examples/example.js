/* eslint no-console: 0 */
const { promisifyAll } = require('../index');
const fs = promisifyAll(require('fs'));

fs.writeFileAsync('test.txt', '123321', 'utf-8')
	.then(() => fs.readFileAsync('test.txt', 'utf-8'))
	.then(content => console.log(content));
