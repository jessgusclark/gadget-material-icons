var icons = (function(){

	// public functions:
	return {

		getIcons : function(url){

			// create a custom promise():
			var deferred = new $.Deferred();

			var items = []; 
		
			$.getJSON(url, function( data ) {
			  
			  var iconpath = data.icons

			  $.each(data.icons, function( key, val ) {
			  	items.push( {name:val.name, class:val.ligature} );
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
