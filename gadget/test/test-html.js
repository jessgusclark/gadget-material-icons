var jsdom = require("jsdom").jsdom;
global.window = jsdom().defaultView;
global.jQuery = global.$ = require("jquery"); 


var assert = require('chai').assert
	apphtml = require('../src/js/html.js');

describe('build html', function() {
	var html = apphtml.htmlBuilder;

	var icon = 'bridge';
	var size = 'sm';
	var color = 'black';

	it('should return formatted html', function(){		

		var expected = '<i class="material-icons">bridge</i>';

		assert.equal(expected, html.buildHtml(icon, size, color));
	});

	it ('should return image transformation', function(){

		var expected = '<img src="https://jessgusclark.github.io/gadget-material-icons/gadget/dist/img/placeholder.svg" class="material-icons sm black" alt="bridge" />';

		assert.equal(expected,
						 html.buildTransformation(icon, size, color));

	});

});