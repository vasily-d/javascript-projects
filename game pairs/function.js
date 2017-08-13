/* variable ------------------------------------------------------*/
clickStart = 0;
mass = [];
countClick = 0;
oneImg = 0;
twoImg = 0;
countOfPairs = 0;
idTimer  = 0;
massPairs = [];

/* main function ------------------------------------------------------*/
function clickToImg()
{
	//основной игровой процесс
	var number = this.getAttribute('myId');
	this.style.backgroundImage = "url(img/"+mass[number]+".jpg)";

	//проверка что картинка уже не была ранее открыта
	if(!isCliked(number))
	{
		//проверка на каждом втором клике на совпадение
		countClick++;
		if(countClick == 2)
		{
			//второй клик по картинке
			countClick = 0;
			twoImg = number;
			
			//проверка что есть пара
			if(Math.abs(mass[oneImg] - mass[twoImg]) == 8)
			{
				countOfPairs++;
			
				//оставить пару открытой - занести в массив открытых пар
				massPairs.push(oneImg);	//0-15
				massPairs.push(twoImg);	//0-15
				console.log(massPairs);
				
				//проверка что все 8 пар уже открыли до таймера
				if(countOfPairs >= 8)
				{
					countOfPairs = 0;
					
					alert("Victory!");
					var main = document.getElementById("main");
					resetOfGame(main);
				}			
			}
			else
			{
				//нет пары
				//закрытие текущей пары
				var main = document.getElementById("main");
				
				//временный блок клика на изображения
				removeListener(main);
				
				setTimeout(t, 1000);
			
				function t(){
					//console.log(mass[oneImg]);
					//console.log(mass[twoImg]);
				
					var t1 = oneImg;
					var t2 = twoImg;
					
					main.children[t1].style.backgroundImage = "url(img/none.jpg)";
					main.children[t1].setAttribute('myId', t1);
					
					main.children[t2].style.backgroundImage = "url(img/none.jpg)";
					main.children[t2].setAttribute('myId', t2);
					
					//восстановление клика на изображения
					addListener(main);
				}
			}		
		}
		else
		{
			//первый клик по картинке
			oneImg = number;	
		}
	}
}

/* function ------------------------------------------------------*/
function isCliked(number)
{
	for(var i = 0; i < massPairs.length; i++)
		if(massPairs[i] == number) return true;
	
	return false;
}

function getRandomInt(min, max)
{
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
	
function generateArray(sizeOfArray)
{
	for(var i = 1; i <= sizeOfArray; i++)
		mass.push(i);
	
	//swap mass
	var n1, n2, v1, v2;
	for(var i = 0; i < 100; i++)
	{
		n1 = getRandomInt(0, sizeOfArray-1);
		n2 = getRandomInt(0, sizeOfArray-1);
		
		v1 = mass[n1];
		v2 = mass[n2];
		
		mass[n2] = v1;
		mass[n1] = v2;
	}
	
	return mass;
}

function setAndShowImages(main)
{	
	for(var i = 0; i < main.children.length; i++)
	{
		//var a = '#'+i+i+i;
		main.children[i].style.backgroundImage = "url(img/"+mass[i]+".jpg)";
		main.children[i].style.backgroundSize = "cover";	
	}
}

function hideImagesAndAddListener(main)
{
	for(var i = 0; i < main.children.length; i++)
	{
		main.children[i].style.backgroundImage = "url(img/none.jpg)";
		main.children[i].setAttribute('myId', i);
	}
	
	/* подключить сообщения клика по картинкам и передать ей основной игровой процесс */
	addListener(main);
}

function addListener(main)
{
	for(var i = 0; i < main.children.length; i++)
		main.children[i].addEventListener("click", clickToImg);
}

function removeListener(main)
{
	for(var i = 0; i < main.children.length; i++)
		main.children[i].removeEventListener("click", clickToImg);
}

function endOfGame(main)
{
	alert("time is out!");
	resetOfGame(main);
}

function resetOfGame(main)
{	
	//включить start и удалить таймер
	clickStart = 0;
	clearTimeout(idTimer);
	console.clear();
	massPairs = [];
	mass = [];
	
	//убрать события с картинок и hideImages
	for(var i = 0; i < main.children.length; i++)
	{
		main.children[i].removeEventListener("click", clickToImg);
		main.children[i].style.backgroundImage = "url(img/none.jpg)";
	}
}


/*
function showImages(main)
{
	for(var i = 0; i < main.children.length; i++)
	{
		if(main.children[i].style.display != "block"){
			main.children[i].style.display = "block";		
		}
	}
}
*/