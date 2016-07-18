var module = [];


$(document).ready(function () {
	
	console.log("Document Ready");

	var apihost;
	var token;

	gadget.ready().then(gadget.fetch).then(function () {

		//console.log("Gadget Material Icons Start");

		// Set global variables:
		apihost = gadget.get('apihost');
        token = gadget.get('token');


		// Create color object and call getColors with 
		// the url to the colors json file.
		var color = colors();

		var colorArray = color.getColors("settings/colors.json").then(function(data){
	
			for (i = 0; i < data.length; i++) {
				//console.log(data[i].name, data[i].class);
    			$('#color').append( new Option( data[i].name, data[i].class ) );

			}

		});

		// Create size object and call getSizes with
		// the URL to the sizes:
		var size = sizes();
		
		var sizeArray = size.getSizes("settings/sizes.json").then(function(data){
			for (i = 0; i < data.length; i++) {
    			$('#size').append( new Option( data[i].name, data[i].class ) );
			}
		});

		// Create icon object and call getIcons with
		// the URL to the icons:
		var icon = icons();
		var iconCode = htmlBuilder();		// also used in the eventListener

		var iconArray = icon.getIcons("settings/icons.json").then(function(data){
			for (i = 0; i < data.length; i++) {
    			$('#icon').append( new Option( data[i].name, data[i].class ) );
			}

			// display the first icon:
			$("#icon-example").html(
				iconCode.buildHtml($("#icon option:selected").val(), "black", "xs")
			);

		});




		// event listener:
		$("#insert").click(function(){

			// create html object:
			var iconCode = htmlBuilder();

			// insert icon into page:
			gadget.oucInsertAtCursor(
				iconCode.buildTransformation(
						$("#icon option:selected").val(),
						$("#size option:selected").val(),
						$("#color option:selected").val()
					)
				);

		});

		$('#icon').on('change', function() {
			$("#icon-example").html(
				iconCode.buildHtml($("#icon option:selected").val(), "black", "xs")
			);
		});

	});




});
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

var htmlBuilder = (function(){

	return {

		buildHtml : function(icon, size, color){

			return '<i class="material-icons">' + icon + '</i>';

		},

		buildTransformation : function(icon, size, color){

			// hard coded needs to be refactored
			var px;

			switch(size){
				case 'sm':
					px = 24;
				break;
				case 'md':
					px = 50;
				break;
				case 'lg':
					px = 100;
				break;
				case 'xl':
					px = 200;
				break;

				default:
					px = 24;
			}

			return '<img src="https://jessgusclark.github.io/gadget-material-icons/gadget/dist/img/placeholder.svg" class="material-icons ' + size + ' ' + color + '" width="' + px +'" height="' + px + '" alt="' + icon + '" />';

		}

	}

});

try{
module.exports.htmlBuilder = htmlBuilder();
}catch(err){}
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

var sizes = (function(){

	// public functions:
	return {

		getSizes : function(url){

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
