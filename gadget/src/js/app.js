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
		
		var sizeArray = size.getSizes("settings/size.json").then(function(data){
			for (i = 0; i < data.length; i++) {
    			$('#size').append( new Option( data[i].name, data[i].class ) );
			}
		});

		// Create icon object and call getIcons with
		// the URL to the icons:
		var icon = icons();
		
		var iconArray = icon.getIcons("settings/icons.json").then(function(data){
			for (i = 0; i < data.length; i++) {
    			$('#icon').append( new Option( data[i].name, data[i].class ) );
			}
		});


		// event listener:
		$("#insert").click(function(){

			// create html object:
			var iconCode = htmlBuilder();

			// insert icon into page:
			gadget.oucInsertAtCursor(
				iconCode.buildHtml(
						$("#icon option:selected").val(),
						$("#size option:selected").val(),
						$("#color option:selected").val()
					)
				);

		});

	});




});