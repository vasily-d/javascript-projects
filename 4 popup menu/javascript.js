window.onload = function() {
	
	function closeMenu() {
		//var menu = document.getElementById('nav');
		
		var subm = document.getElementsByClassName('submenu');
		
		var i = 0;
		for(i = 0; i < subm.length; i++) {
			subm[i].style.display = "none";
		}		
	}
	
	document.onmouseover = function(event) {
		var target = event.target;
		console.log(event.target);
		if (target.className != 'menu-item' && target.className != 'submenu') {
			closeMenu();	//очистка подменю - submenu когда курсор вне их поля
		}
	};
	
	document.getElementById('nav').onmouseover = function(event) {
		var target = event.target;
		console.log(event.target);
		if (target.className == 'menu-item') {
			var s = target.getElementsByClassName('submenu');
			closeMenu();	//закрываем все подменю
			s[0].style.display = 'block';	//открываем только одно
		}
	};
};