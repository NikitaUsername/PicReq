imgs = new Array();

//createField();



var 
	canvas = document.createElement('canvas'),
	body = document.getElementById('body'),
	div = document.createElement('div'),
	save = document.createElement('button');
for (var i = 0; i < 4; i++){
    imgs[i] = new Image();
    imgs[i].crossOrigin="anonymous";
 }

var
 countLoadImgs = 0,
 countDrawImgs;
console.log(countLoadImgs);

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
//getPic();
get();
draw();

// getPic
function getPic(){
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.codetabs.com/v1/proxy?' + 'quest=https://api.unsplash.com/photos/random?' + 'client_id=93d496ca0d56955281ca9a8ec2b1a87610bdc2ff60d2edbbe38982ffc123ac2d&count=4', false);
xhr.send();
var json = JSON.parse(xhr.responseText);
//alert(json.urls.small);
for (var i = 0; i < 4; i++) {
imgs[i] = json[i].urls.small;
//alert(imgs[i]);

}
}

function get(){
  $.ajax({
    url: "https://api.codetabs.com/v1/proxy",
    data: {
      quest : 'https://api.unsplash.com/photos/random?client_id=1bf5ac4b983dada224863bfb469103d7b2d8577fc38908b5fe2813c835a66d6c&count=4&orentation=squarish&w=300&h=300'
    }
  })
  .done(
    function(data) {
      for (var i = 0; i < 4; i++) {
        imgs[i].src = data[i].urls.custom;
        imgs[i].onload = function(){
        countLoadImgs++;
        //alert(countLoadImgs);
        };
      };
   })
}



function draw(){
if (countLoadImgs == 4) {
 var ctx = canvas.getContext('2d');


 ctx.drawImage(imgs[0],0,0,300,300,0,0,75,35.5);
 ctx.drawImage(imgs[1],0,0,300,300,150,0,300,150);
 ctx.drawImage(imgs[2],0,0,300,300,0,75,300,150);
 ctx.drawImage(imgs[3],0,0,300,300,150,75,300,150);
 ctx.fillStyle = "rgba(0,0,0,0.35)";
 ctx.fillRect(0,0,600,600);


  countDrawImgs++;
   } else {
        setTimeout(draw, 1);
    }
  
}







div.appendChild(canvas);
div.appendChild(save);
body.appendChild(div);

