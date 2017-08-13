window.onload = function(){
	var t = document.getElementById("inputdol");
	
	t.oninput = function(){
		document.getElementById("outputrub").innerHTML = this.value*60;	
	}
	
		
	t.onchange = function(){
		document.getElementById("outputrub").innerHTML = this.value*60;	
	}
}




/*
function moneyConverter(valNum){
	document.getElementById("outputrub").innerHTML = valNum*60;
}*/