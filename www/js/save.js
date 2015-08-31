

function get(name){
    var inputs =  window.localStorage;
    for (var key in inputs) {
  	if (inputs.hasOwnProperty(key)) {
  		if(key != "debug"){
    		$('ul').append('<li class="lestsave">'+ eval('(' + inputs[key] + ')')['value'] + '</li>');
    		$('input').append();
    	}
	  }
	}
}

$(document).ready(function(){
	get();
	
});