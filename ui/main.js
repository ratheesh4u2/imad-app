console.log('This is main.js');
// changing the inner value of main text inside index.html
var element =document.getElementById("main-text");
element.innerHTML="Main text is changed by main.js";
var img =document.getElementById("madi");
img.onClick=function()
{
    img.style.marginLeft = '200px';
};
    
