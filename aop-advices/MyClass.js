'use strict';

var cocktail  = require('cocktail'),
	advisable = require('cocktail-trait-advisable');

cocktail.mix({
	'@exports' : module,
	'@as' : 'class',

	'@traits': [advisable],

	initialize: function (options) {
		console.log('initialzing with options', options);
	},


	log: function () {
		console.log('log');
	}
})