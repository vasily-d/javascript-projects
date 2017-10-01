btn = document.getElementById('start');
btn2 = document.getElementById('stop');

/* event click to start */
btn.onclick = function()
{
	//проверка что был только один клик по start
	if(clickStart == 0)
	{		
		//кликнули на start
		clickStart = 1;
		
		var main = document.getElementById("main");
		
		/* включить таймер на end of game на 2 мин */
		idTimer = setTimeout(endOfGame, 60000*2, main);
		
		/* генерация random mass */
		mass = generateArray(16);
		
		/* открыть картинки на 5 секунд и закрыть */
		setAndShowImages(main);
		setTimeout(hideImagesAndAddListener, 5000, main);	//5000

		//добавить показ таймера до окончания в перспективе


		
	}
}

/* event click to stop */
btn2.onclick = function()
{
	console.log('stopping the game...');
	var main = document.getElementById("main");
	resetOfGame(main);
}