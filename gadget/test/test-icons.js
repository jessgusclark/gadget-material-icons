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
	var stubData = JSON.parse('{"icons":[{"id":"ic_3d_rotation","name":"3d rotation","group_id":"action","keywords":["action","3d","rotation"],"ligature":"3d_rotation","codepoint":"E84D","is_new":false},{"id":"ic_account_balance_wallet","name":"account balance wallet","group_id":"action","keywords":["action","account","balance","wallet"],"ligature":"account_balance_wallet","codepoint":"E850","is_new":false}]}');
	icons.getIcons = sinon.stub().returns(stubData);

	// call the function once:
	var iconArray = 
		icons.getIcons("../../dist/settings/sizes.json");

	//test it!
	it('should return 2 icons', function(){

		assert.equal(2, iconArray.icons.length);

	});

	it('should return accessibility for the first icon', function(){

		assert.equal("3d rotation", iconArray.icons[0].name);

	});

});