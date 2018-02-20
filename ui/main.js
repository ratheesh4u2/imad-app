console.log('This is main.js');
// changing the inner value of main text inside index.html
var element =document.getElementById("main-text");
element.innerHTML="Main text is changed by main.js";
var img =document.getElementById("madi");

var marginleft = '100px';
function moveRight()
{
    marginleft    = marginleft+ 10 ;
    
    img.style.marginLeft = marginleft+ 'px';

}

img.onclick=function()
{
    var interval = setInterval(moveRight, 100);
   
};
    
