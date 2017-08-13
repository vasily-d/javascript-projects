window.onload = function(){
	var next = document.getElementById('next');
	var prev = document.getElementById('prev');
	var clickimg = document.getElementsByTagName('img')[0];
	
	var i = 1;
	var t;
	var is_start = false;
	var temp = document.getElementsByClassName('wrapper')[0];
	var temp1 = temp.getElementsByTagName('img')[0];
	
	
	
	next.onclick = function(){
		if(i < 3)
		{
			i++;
			temp1.src = 'img/'+i+'.jpg';
		}
		else
		{
			i = 1;
			temp1.src = 'img/'+i+'.jpg';
		}
	}
	
	prev.onclick = function(){
		if(i > 1)
		{
			i--;
			temp1.src = 'img/'+i+'.jpg';
		}
		else
		{
			i = 3;
			temp1.src = 'img/'+i+'.jpg';
		}
	}
	
	
	clickimg.onclick = function(){
		function temp(){
			next.onclick();
		}
		
		if(!is_start)
		{
			is_start = true;
			t = setInterval(temp, 1000);
		}
		else
		{
			is_start = false;
			clearInterval(t);
		}
	}	
}