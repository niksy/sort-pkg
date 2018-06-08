'use strict';

const sortKeys = require('sort-keys');
const insert = require('array-insert');
const uniq = require('lodash.uniq');
const difference = require('lodash.difference');
const flatten = require('lodash.flatten');

const SORT_ORDER = [
	'name',
	'version',
	'description',
	'private',
	'main',
	'module',
	'browser',
	'author',
	'contributors',
	'license',
	'files',
	'style',
	'bin',
	'sideEffects',
	'typings',
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
 * @return {String[]}
 */
function prepareSortOrder ( pkg ) {
	const index = SORT_ORDER.indexOf('repository');
	const unknownKeys = difference(Object.keys(pkg), SORT_ORDER).sort();
	return flatten(insert(SORT_ORDER, index, unknownKeys));
}

/**
 * @param  {Object} pkg
 *
 * @return {Object}
 */
module.exports = ( pkg ) => {

	const sortOrder = prepareSortOrder(pkg).reverse();
	const newPkg = sortKeys(pkg, {
		compare: ( a, b ) => {
			return sortOrder.indexOf(a) > sortOrder.indexOf(b) ? -1 : 1;
		}
	});

	['dependencies', 'devDependencies', 'scripts'].forEach(( prop ) => {
		if ( prop in newPkg ) {
			newPkg[prop] = sortKeys(newPkg[prop]);
		}
	});

	['keywords'].forEach(( prop ) => {
		if ( prop in newPkg ) {
			newPkg[prop] = uniq(newPkg[prop].sort());
		}
	});

	return newPkg;

};
