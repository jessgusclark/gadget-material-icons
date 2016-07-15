var outest = (function(){

	return {

		sayHi : function(name){
			return "Hello " + name;
		}

	}

});

// for testing:
try{
	module.exports.outest = outest();
}catch(err){}
