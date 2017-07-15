# Tsubaki
> Promisify with native promises

<div align="center">
	<p>
		<a href="https://www.npmjs.com/package/tsubaki"><img src="https://img.shields.io/npm/v/tsubaki.svg?maxAge=3600" alt="NPM version" /></a>
		<a href="https://www.npmjs.com/package/tsubaki"><img src="https://img.shields.io/npm/dt/tsubaki.svg?maxAge=3600" alt="NPM downloads" /></a>
		<a href="https://david-dm.org/iCrawl/tsubaki"><img src="https://david-dm.org/iCrawl/tsubaki/status.svg?maxAge=3600" alt="Dependencies" /></a>
	</p>
	<p>
		<a href="https://nodei.co/npm/tsubaki/"><img src="https://nodei.co/npm/tsubaki.png?downloads=true&stars=true" alt="NPM info" /></a>
	</p>
</div>

## Features
- Actually maintained
- Uses node 8's util.promisify when running on node 8 to promisify functions

## Install

```bash
npm install --save tsubaki
```

## Useage

```js
const tsubaki = require('tsubaki'); // Normal require
const promisifyAll = require('tsubaki').promisifyAll; // Dot notation
const { promisifyAll } = require('tsubaki'); // With destructuring

const fs = tsubaki.promisifyAll(require('fs')); // Normal require
const fs = promisifyAll(require('fs')); // With dot notation or destructuring

fs.writeFileAsync('test.txt', '123456', 'utf-8')
	.then(() => fs.readFileAsync('test.txt', 'utf-8'))
	.then(content => console.log(content));
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**Tsubaki** © [iCrawl](https://github.com/iCrawl), Released under the [MIT](https://github.com/iCrawl/Tsubaki/blob/master/LICENSE) License.<br>
Authored and maintained by iCrawl.

> GitHub [@iCrawl](https://github.com/iCrawl) · Twitter [@iCrawlToGo](https://twitter.com/iCrawlToGo)
