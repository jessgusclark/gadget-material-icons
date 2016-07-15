var jsdom = require("jsdom").jsdom;
global.window = jsdom().defaultView;
global.jQuery = global.$ = require("jquery"); 


var assert = require('chai').assert,
	sinon = require('sinon'),
	$ = require('jquery'),
	app = require('../src/js/icons.js');

describe('test', function() {
	var icons = app.icons;

	// JS testing does not do well with AJAX calls. So Stub in the data:
	var stubData = JSON.parse('{"icons":[{"name":"accessibility","class":"accessibility","group":"Everyone"},{"name":"accessible","class":"accessible"},{"name":"account balance","class":"account_balance","group":"Everyone"},{"name":"account balance wallet","class":"account_balance_wallet","group":"Everyone"}]}');
	icons.getIcons = sinon.stub().returns(stubData);

	// call the function once:
	var iconArray = 
		icons.getIcons("../../dist/settings/sizes.json");

	//test it!
	it('should return 4 sizes', function(){

		assert.equal(4, iconArray.icons.length);

	});

	it('should return accessibility for the first icon', function(){

		assert.equal("accessibility", iconArray.icons[0].name);
		assert.equal("Everyone", iconArray.icons[0].group);

	});

});