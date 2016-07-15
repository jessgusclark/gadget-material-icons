var jsdom = require("jsdom").jsdom;
global.window = jsdom().defaultView;
global.jQuery = global.$ = require("jquery"); 


var assert = require('chai').assert
	apphtml = require('../src/js/html.js');

describe('build html', function() {
	var html = apphtml.html;

	it('should return formatted html', function(){

		var icon = 'bridge';
		var size = 'icon-sm';
		var color = 'black';

		var expected = '<i class="material-icons icon-sm black">bridge</i>';

		assert.equal(expected, html.buildHtml(icon, size, color));
	});

});