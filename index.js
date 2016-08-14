var sortKeys = require('sort-keys');
var uniq = require('array-uniq');

var DEFAULT_SORT_ORDER = [
	'name',
	'version',
	'description',
	'private',
	'main',
	'browser',
	'author',
	'contributors',
	'license',
	'files',
	'style',
	'bin',
	'preferGlobal',
	'directories',
	'scripts',
	'dependencies',
	'devDependencies',
	'peerDependencies',
	'bundledDependencies',
	'optionalDependencies',
	'engines',
	'engineStrict',
	'os',
	'cpu',
	'publishConfig',
	'keywords',
	'repository',
	'bugs',
	'homepage',
	'man',
	'config'
];

/**
 * @param  {Object} pkg
 *
 * @return {Object}
 */
module.exports = function ( pkg ) {

	var arr = DEFAULT_SORT_ORDER.reverse();
	var newPkg;

	newPkg = sortKeys(pkg, {
		compare: function ( a, b ) {
			return arr.indexOf(a) > arr.indexOf(b) ? -1 : 1;
		}
	});

	['dependencies', 'devDependencies', 'scripts'].forEach(function ( prop ) {
		if ( prop in newPkg ) {
			newPkg[prop] = sortKeys(newPkg[prop]);
		}
	});

	['keywords'].forEach(function ( prop ) {
		if ( prop in newPkg ) {
			newPkg[prop] = uniq(newPkg[prop].sort());
		}
	});

	return newPkg;

};
