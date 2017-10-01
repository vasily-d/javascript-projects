$(document).ready(function(){
	// var inp = document.querySelector("input");
	// var res = document.getElementsByTagName("div")[0];

	var inp = $("input");
	var res = $("div");
	// console.log(inp.length);
	// console.log(res.length);

	inp.on("blur", function(){		
		$.get("php.php", {name: inp.val()}, function(data){
			res.text(data);
		});
	});
	
});