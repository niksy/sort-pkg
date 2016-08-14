# sort-pkg

[![Build Status][ci-img]][ci]

Sort package.json file fields.

In addition to sorting keys, it also sorts:

* `dependendencies`, `devDependencies`, `scripts`
* `keywords`, creating duplicate-free array and sorting alphabetically

## Install

```sh
npm install sort-pkg --save
```

## Usage

```js
var sortPkg = require('sort-pkg');

var sortedPkg = sortPkg({
	main: 'index.js',
	version: '1.0.0',
	name: 'foo',
	scripts: {
		test: 'node test.js'
	}
});

console.log(sortedPkg);
/* {
	name: 'foo',
	version: '1.0.0',
	main: 'index.js',
	scripts: {
		test: 'node test.js'
	}
} */
```

## API

### sortPkg(pkgData)

Returns: `Object`

Sorts package.json file fields.

#### pkgData

Type: `Object`  
**Required**

package.json data to sort.

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

[ci]: https://travis-ci.org/niksy/sort-pkg
[ci-img]: https://img.shields.io/travis/niksy/sort-pkg.svg
