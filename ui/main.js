console.log('Loaded!');

//change html

var element=document.getElementById('my-id');

element.innerHTML='This is my new value';

//move image

var img= document.getElementById('img-id');
img.onclick=function(){
    img.style.marginLeft='200px';
};
