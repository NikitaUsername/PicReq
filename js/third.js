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
 quote = null;
 countDrawImgs = 0;
console.log(countLoadImgs);

canvas.id = 'canvas';
save.id = 'save';

div.style.width = '720px';
div.style.height = '720px';
div.style.display = 'flex';
div.style.flexDirection = 'column';
div.style.alignItems = 'center';
canvas.width = '600';
canvas.height = '600';
div.style.margin = '0 auto 0 auto';


save.style.width = '100px';
save.style.height = '20px';
save.style.backgroundColor = 'black';
save.style.color = 'white';
save.innerHTML = 'SAVE';
save.style.margin = '20px 250px 0 250px';
save.onclick = 
	function(){
		var
			c = document.getElementById('canvas')
			URL = c.toDataURL("image/jpg");
			link = document.createElement("a");
			
 link.href = URL;
 link.download = "stupid_pic.jpg";
 link.click();
}
//getPic();
get();
draw();
getQuote();
//setTimeout(write(),10000);
write();


// getPic
function getPic(){
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.codetabs.com/v1/proxy?' + 'quest=https://api.unsplash.com/photos/random?' + 'client_id=1bf5ac4b983dada224863bfb469103d7b2d8577fc38908b5fe2813c835a66d6c&count=4', false);
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
      quest : 'https://api.unsplash.com/photos/random?client_id=a5099bdbc8229dd88f38cc82f5f6e24e1ab658f8ca7870ee5ec70b46644a08fd&count=4&orentation=squarish&w=300&h=300'
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


 ctx.drawImage(imgs[0],0,0,300,300,0,0,300,300);
 ctx.drawImage(imgs[1],0,0,300,300,300,0,300,300);
 ctx.drawImage(imgs[2],0,0,300,300,0,300,300,300);
 ctx.drawImage(imgs[3],0,0,300,300,300,300,300,300);
 ctx.fillStyle = "rgba(0,0,0,0.3)";
 ctx.fillRect(0,0,600,600);
 countDrawImgs = 1;
   } else {
        setTimeout(draw, 1);
    }
  
}

function getQuote(){
  $.ajax({
    url: "https://api.forismatic.com/api/1.0/",
    jsonp: "jsonp",
    dataType: "jsonp",
    data: {
      method: "getQuote",
      lang: "ru",
      format: "jsonp"
    }
  })
  .done(
    function(data) {
      quote = data.quoteText;
     
   })
}

function rewrite(context, text, x, y, maxWidth, lineHeight){
      var 
          words = text.split(" "),
          countWords = words.length,
          line = "",
          countRaws = Math.floor(context.measureText(text).width / 550);
          
      y -= (countRaws / 2) * lineHeight;
      for (var n = 0; n < countWords; n++) {
          var 
              testLine = line + words[n] + " ",
              testWidth = context.measureText(testLine).width;

          if (testWidth > maxWidth) {
              context.fillText(line, x, y);
              line = words[n] + " ";
              y += lineHeight;
          }
          else {
              line = testLine;
          }
      }
      context.fillText(line, x, y);
}

function write(){ 

  if (quote != null && countDrawImgs == 1){
    var context = canvas.getContext('2d');

    context.fillStyle = 'white';
    context.font = "italic 22pt Arial";
    context.textAlign = "center";
    rewrite(context, quote, canvas.width/2, canvas.height/2, 550, 40);
  }
  else{
     setTimeout(write, 1);  
  }
}





div.appendChild(canvas);
div.appendChild(save);
body.appendChild(div);

