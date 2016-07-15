var module = [];


$(document).ready(function () {
	
	console.log("Document Ready");

	/*var apihost;
	var token;
	var site;
	var tagArray = [];*/

	gadget.ready().then(gadget.fetch).then(function () {

		console.log("Gadget Material Icons Start");

		// generic OO javascript testing:
		var hello = outest();
		console.log(hello.sayHi("Jesse!"));


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
		
		var sizeArray = size.getSizes("settings/size.json").then(function(data){
			for (i = 0; i < data.length; i++) {
    			$('#size').append( new Option( data[i].name, data[i].class ) );
			}
		});

	});

});