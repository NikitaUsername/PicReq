var 
	canvas = document.createElement('canvas');
	body = document.getElementById('body');
	div = document.createElement('div');
	save = document.createElement('button');

canvas.id = 'canvas';
save.id = 'save';

div.style.width = '600px';
canvas.style.width = '600px';
canvas.style.height = '600px';
div.style.margin = '0 auto 0 auto';


save.style.width = '100px';
save.style.height = '20px';
save.style.backgroundColor = 'black';
save.style.color = 'white';
save.innerHTML = 'SAVE';
save.style.margin = '20px 250px 0 250px';
//save.onclick = 
//	function(){
//		var
//			c = document.getElementById('canvas')
//			URL = c.toDataURL("");
			//ДОДЕЛАТЬ ФУНКЦИЮ
//	}

// getPic
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.unsplash.com/photos/random', false, '93d496ca0d56955281ca9a8ec2b1a87610bdc2ff60d2edbbe38982ffc123ac2d');
xhr.send();
alert(xhr.responseText);


div.appendChild(canvas);
div.appendChild(save);
body.appendChild(div);

