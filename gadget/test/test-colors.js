var jsdom = require("jsdom").jsdom;
global.window = jsdom().defaultView;
global.jQuery = global.$ = require("jquery"); 


var assert = require('chai').assert,
	sinon = require('sinon'),
	$ = require('jquery'),
	app = require('../src/js/color.js');

describe('test', function() {
	var colors = app.colors;

	// JS testing does not do well with AJAX calls. So Stub in the data:
	var stubData = JSON.parse('[{"name":"blue","class":"blueish"},{"name":"gold","class":"goldish"},{"name":"gray","class":"grayish"}]');
	colors.getColors = sinon.stub().returns(stubData);

	// call the function once:
	var colorArray = 
		colors.getColors("../../dist/settings/colors.json");

	//test it!
	it('should return 3 colors', function(){

		assert.equal(3, colorArray.length);

	});

	it('should return blue for the first color', function(){

		assert.equal("blue", colorArray[0].name);
		assert.equal("blueish", colorArray[0].class);

	});

});