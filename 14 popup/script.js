window.onload = function(){
	
	var temp = document.getElementsByClassName("popup")[0];
	
	temp.onclick = function myFunction(){
		var popup = document.getElementById("myPopup");
		popup.classList.toggle("show");
	}
	
};