var html = (function(){

	return {

		buildHtml : function(icon, size, color){

			return '<i class="material-icons ' + size + 
				' ' + color + '">' + icon + '</i>';

		}

	}

});

try{
module.exports.html = html();
}catch(err){}