var colors = (function(){

	// public functions:
	return {

		getColors : function(url){

			// create a custom promise():
			var deferred = new $.Deferred();

			var items = []; 
		
			$.getJSON(url, function( data ) {
			  
			  //console.log("getJSON Successs");

			  $.each(data.colors, function( key, val ) {
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
	module.exports.colors = colors();
}catch(err){}
