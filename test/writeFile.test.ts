/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */

const nodeVersion = parseInt(process.versions.node.split('.')[0], 10);

import { join } from 'path';
import { promisify, promisifyAll } from '../src';
const fs = promisifyAll(require('fs'));
const writeFile = promisify(require('fs').writeFile);
const readFile = promisify(require('fs').readFile);

test('Write and read file with promises', () => {
	fs.writeFileAsync(join(__dirname, '..', 'test.txt'), '123456', 'utf-8')
		.then(() => fs.readFileAsync(join(__dirname, '..', 'test.txt'), 'utf-8'))
		.then((content: string) => expect(content).toBe('123456'));
});

if (nodeVersion >= 8) {
	test('Write and read file with util.promise on node >= 8', () => {
		void writeFile(join(__dirname, '..', 'test.txt'), '123456', 'utf-8')
			.then(() => readFile(join(__dirname, '..', 'test.txt'), 'utf-8'))
			.then((content: string) => expect(content).toBe('123456'));
	});
}
