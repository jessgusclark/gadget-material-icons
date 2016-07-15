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
	var stubData = JSON.parse('{"size":[{"name":"Small","class":"sm"},{"name":"Medium","class":"md"},{"name":"Large","class":"lg"},{"name":"Extra Large","class":"xl"}]}');
	sizes.getSizes = sinon.stub().returns(stubData);

	// call the function once:
	var sizeArray = 
		sizes.getSizes("../../dist/settings/sizes.json");

	//test it!
	it('should return 4 sizes', function(){

		assert.equal(4, sizeArray.size.length);

	});

	it('should return small for the first size', function(){

		assert.equal("Small", sizeArray.size[0].name);
		assert.equal("sm", sizeArray.size[0].class);

	});

});