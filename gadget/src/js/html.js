var htmlBuilder = (function(){

	return {

		buildHtml : function(icon, size, color){

			return '<i class="material-icons">' + icon + '</i>';

		},

		buildTransformation : function(icon, size, color){

			return '<img src="https://jessgusclark.github.io/gadget-material-icons/gadget/dist/img/placeholder.svg" class="material-icons ' + size + ' ' + color + '" alt="' + icon + '" />';

		}

	}

});

try{
module.exports.htmlBuilder = htmlBuilder();
}catch(err){}