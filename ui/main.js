console.log('Loaded!');

//change html

var element=document.getElementById('my-id');

element.innerHTML='This is my new value';

//move image

var img= document.getElementById('img-id');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    img.stye.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    
    var interval=setInterval(moveRight,50)
    ;
};
