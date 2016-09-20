var assert = require('assert');
var fn = require('../');

it('should properly sort unsorted array', function () {

	var expected = require('./fixtures/expected.json');
	var actual = fn({
		main: 'index.js',
		version: '1.0.0',
		name: 'boomer',
		scripts: {
			test: 'node test.js'
		},
		penny: 'hannah',
		repository: {
			type: 'git',
			url: 'git://github.com/roxie/izzy.git'
		},
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
		misty: 'marley',
		devDependencies: {
			moose: '~0.5.0',
			dixie: '^1.0.0',
			loki: '0.1.0'
		},
		homepage: 'https://github.com/roxie/izzy',
		description: 'boomer description.',
		dependencies: {
			moose: '~0.5.0',
			dixie: '^1.0.0',
			loki: '0.1.0'
		},
		callie: 'luna'
	});

	assert.equal(JSON.stringify(actual), JSON.stringify(expected));

});
