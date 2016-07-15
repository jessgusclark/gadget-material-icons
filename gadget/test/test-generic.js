var jsdom = require("jsdom").jsdom;
global.window = jsdom().defaultView;
global.jQuery = global.$ = require("jquery"); 

var assert = require('chai').assert,
	$ = require('jquery')
	app = require("../src/js/test.js");

describe('test', function() {

	it('should execute the test', function(){
		
		assert.equal(1, 1);

	});

	it('should say Hello', function(){

		//console.log(app);

		assert.equal("Hello Jesse", app.outest.sayHi("Jesse"));
		
		var hello = app.outest;
		assert.equal("Hello Gus", hello.sayHi("Gus"));

	});

});