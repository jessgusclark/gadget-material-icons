var sizes = (function(){

	// public functions:
	return {

		getSizes : function(url){
			console.log("getting sizes");
			// create a custom promise():
			var deferred = new $.Deferred();

			var items = []; 
		
			$.getJSON(url, function( data ) {
			  
			  //console.log("getJSON Successs");

			  $.each(data.size, function( key, val ) {
			  	items.push( {name:val.name, class:val.class} );
			  });

			  // attach items array to promise:
			  deferred.resolve(items);

			});

			// return the custom promise:
			return deferred.promise();

		}

	}

});

// for testing:
try{
	module.exports.sizes = sizes();
}catch(err){}
