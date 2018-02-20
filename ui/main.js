console.log('This is main.js');
// changing the inner value of main text inside index.html
var element =document.getElementById("main-text");
element.innerHTML="Main text is changed by main.js";
var img =document.getElementById("madi");


function moveRight()
{
    var marginleft    = marginleft+ '10px';
    
    img.style.marginLeft = marginleft+ 'px';

}

img.onclick=function()
{
    var interval = setInterval(moveRight, 100);
   
};
    
