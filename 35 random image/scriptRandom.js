var btn = document.getElementById('start');
btn.onclick = function(){
	function getRandomInt(min, max)
	{
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	//random mass - ok
	var massImages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
	var n1,n2,v1,v2;
	for(var i = 0; i < 70; i++)
	{
		n1 = getRandomInt(0,15);
		n2 = getRandomInt(0,15);
		v1 = massImages[n1];
		v2 = massImages[n2];
		
		//swap
		if(n1 != n2){
			massImages[n1] = v2;
			massImages[n2] = v1;
		}
	}
	
	//show mass in images - ok
	var imgs = document.getElementsByClassName('main')[0].children;
	console.log(imgs.length);
	for(var i = 0; i < imgs.length; i++)
	{
		imgs[i].style = "background-image: url('img/"+massImages[i]+".jpg');";
		
		//for img tag
		//imgs.src = "img/"+massImages[i]+".jpg";
	}	
}