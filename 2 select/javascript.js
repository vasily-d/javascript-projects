var select = document.getElementById('mySelect');
select.onchange = function(){
	var sel = select.selectedIndex;
	var options = select.options;
	
	console.log('Selected index: ' + sel);
	console.log('Selected option: ' + options[sel].text);
};

var p = document.getElementById("one");
var i1 = document.getElementById("i1");
var d = document.getElementById("d");

var r = document.getElementById('range');
r.oninput = function(){
	p.innerHTML = r.value;
	i1.value = r.value;
	d.style.width = r.value + "px";
	d.style.height = r.value + "px";
};