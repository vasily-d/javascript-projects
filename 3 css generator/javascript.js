window.onload = function() {
	function foo() {
		var rtl = rtl2.value;
		var rtr = rtr2.value;
		var rbl = rbl2.value;
		var rbr = rbr2.value;
		
		//console.log(rtl + " " + rtr + " " + rbl + " " + rbr);
		
		ttl.value = rtl;
		ttr.value = rtr;
		tbr.value = rbr;
		tbl.value = rbl;
		
		block.style.borderRadius = rtl+'px '+rtr+'px '+rbr+'px '+rbl+'px ';
	}
	
	//for range
	var rtl2 = document.getElementById('rtl');
	var rtr2 = document.getElementById('rtr');
	var rbl2 = document.getElementById('rbl');
	var rbr2 = document.getElementById('rbr');
	
	rtl2.oninput = foo;
	rtr2.oninput = foo;
	rbl2.oninput = foo;
	rbr2.oninput = foo;
	
	//for input text
	var ttl = document.getElementById('ttl');
	var ttr = document.getElementById('ttr');
	var tbl = document.getElementById('tbl');
	var tbr = document.getElementById('tbr');
	
	var block = document.getElementById('block');	
};