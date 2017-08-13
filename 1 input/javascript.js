var checkbox;
checkbox = document.getElementById("one");

checkbox.onchange = function(){
	if(checkbox.checked) {
		alert("selected");
	}
	else {
		alert("not selected");
	}		
};

function radioFunct() {
	var rad = document.getElementsByName("r1");	//mass
	var i;
	for(i = 0; i< rad.length; i++)
	{
		if(rad[i].checked) {
			alert("selected " + (i+1) + " element");
			break;
		}
	}
}

var btn = document.getElementsByTagName('button')[0];
btn.onclick = function() {
	radioFunct();
}
