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

		

		var expected = '<i class="material-icons icon-sm black">bridge</i>';

		assert.equal(expected, html.buildHtml(icon, size, color));
	});

	it ('should return image transformation', function(){

		var expected = '<img src="https://www.unco.edu/omni/gadgets/icons/img/placeholder.svg" class="material-icons sm black" width="24" height="24" alt="bridge" />';

		assert.equal(expected,
						 html.buildTransformation(icon, size, color));

	});

});