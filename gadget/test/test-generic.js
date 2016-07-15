var jsdom = require("jsdom").jsdom;
global.window = jsdom().defaultView;
global.document = jsdom().defaultView;
global.jQuery = global.$ = require("jquery"); 

var assert = require('chai').assert,
	$ = require('jquery');

describe('test', function() {

	it('should execute the test', function(){
		
		assert.equal(1, 1);

	});

});