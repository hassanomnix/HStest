

function get(name){
    var inputs =  window.localStorage;
    for (var key in inputs) {
  	if (inputs.hasOwnProperty(key)) {
  		if(key != "debug"){
    		$('input').append('<input' + eval('(' + inputs[key] + ')')['value'] + '/>');
    	}
	  }
	}
}

$(document).ready(function(){
	get();
	
});