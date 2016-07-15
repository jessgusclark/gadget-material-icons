var icons = (function(){

	// public functions:
	return {

		getIcons : function(url){

			// create a custom promise():
			var deferred = new $.Deferred();

			var items = []; 
		
			$.getJSON(url, function( data ) {
			  
			  //console.log("getJSON Successs");

			  $.each(data.icons, function( key, val ) {
			  	items.push( {name:val.name, class:val.class, group:val.group} );
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
	module.exports.icons = icons();
}catch(err){}
