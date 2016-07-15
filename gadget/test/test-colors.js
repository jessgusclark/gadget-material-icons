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
	var stubData = JSON.parse('{"colors":[{"name":"Blue","class":"blue"},{"name":"Gold","class":"gold"},{"name":"Gray","class":"gray"},{"name":"Black","class":"black"}]}');
	colors.getColors = sinon.stub().returns(stubData);

	// call the function once:
	var colorArray = 
		colors.getColors("../../dist/settings/colors.json");

	//test it!
	it('should return 4 colors', function(){

		assert.equal(4, colorArray.colors.length);

	});

	it('should return blue for the first color', function(){

		assert.equal("Blue", colorArray.colors[0].name);
		assert.equal("blue", colorArray.colors[0].class);

	});

});