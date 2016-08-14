var assert = require('assert');
var fn = require('../');

it('should properly sort unsorted array', function () {

	var expected = require('./fixtures/expected.json');
	var actual = fn({
		main: 'index.js',
		version: '1.0.0',
		name: 'foo',
		scripts: {
			test: 'node test.js'
		},
		keywords: [
			'grault',
			'plugh',
			'grault',
			'fred',
			'thud',
			'xyzzy',
			'thud',
			'xyzzy'
		],
		foo: 'bar',
		devDependencies: {
			qux: '~0.5.0',
			bar: '^1.0.0',
			corge: '0.1.0'
		},
		description: 'foo description.',
		dependencies: {
			qux: '~0.5.0',
			bar: '^1.0.0',
			corge: '0.1.0'
		}
	});

	assert.equal(JSON.stringify(actual), JSON.stringify(expected));

});
