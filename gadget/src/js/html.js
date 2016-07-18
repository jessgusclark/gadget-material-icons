var htmlBuilder = (function(){

	return {

		buildHtml : function(icon, size, color){

			return '<i class="material-icons ' + size + 
				' ' + color + '">' + icon + '</i>';

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
					px = 30;
			}

			return '<img src="https://www.unco.edu/omni/gadgets/icons/img/placeholder.svg" width="' + px +'" height="' + px + '" />';

		}

	}

});

try{
module.exports.htmlBuilder = htmlBuilder();
}catch(err){}