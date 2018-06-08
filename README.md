# sort-pkg

[![Build Status][ci-img]][ci]

Sort package.json file fields.

In addition to sorting keys, it also sorts:

* `dependendencies`, `devDependencies`, `scripts`
* `keywords`, creating duplicate-free array and sorting alphabetically
* unknown package.json fields, placing them above `repository` field and sorting them alphabetically

## Install

```sh
npm install sort-pkg --save
```

## Usage

```js
var sortPkg = require('sort-pkg');

var sortedPkg = sortPkg({
	main: 'index.js',
	misty: 'marley',
	version: '1.0.0',
	name: 'foo',
	keywords: [
		'joey',
		'kobe',
		'joey',
		'gunner',
		'coco',
		'buddy',
		'coco',
		'buddy'
	],
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
	},
	keywords: [
		'buddy',
		'coco',
		'gunner',
		'joey',
		'kobe'
	],
	misty: 'marley'
} */
```

## API

### sortPkg(pkgData)

Returns: `Object`

Sorts package.json file fields.

#### pkgData

Type: `Object`

package.json data to sort.

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

[ci]: https://travis-ci.org/niksy/sort-pkg
[ci-img]: https://travis-ci.org/niksy/sort-pkg.svg?branch=master
