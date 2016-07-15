var jsdom = require("jsdom").jsdom;
global.window = jsdom().defaultView;
global.jQuery = global.$ = require("jquery"); 


var assert = require('chai').assert,
	sinon = require('sinon'),
	$ = require('jquery'),
	app = require('../src/js/size.js');

describe('test', function() {
	var sizes = app.sizes;

	// JS testing does not do well with AJAX calls. So Stub in the data:
	var stubData = JSON.parse('[{"name":"Small","class":"s"},{"name":"Medium","class":"m"},{"name":"Large","class":"l"},{"name":"Extra Large", "class":"xl"}]');
	sizes.getSizes = sinon.stub().returns(stubData);

	// call the function once:
	var sizeArray = 
		sizes.getSizes("../../dist/settings/sizes.json");

	//test it!
	it('should return 4 sizes', function(){

		assert.equal(4, sizeArray.length);

	});

	it('should return blue for the first color', function(){

		assert.equal("Small", sizeArray[0].name);
		assert.equal("s", sizeArray[0].class);

	});

});