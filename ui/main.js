console.log('This is main.js');
// changing the inner value of main text inside index.html
/*var element =document.getElementById("main-text");
element.innerHTML="Main text is changed by main.js";
var img =document.getElementById("madi");

var marginleft = 0 ;
function moveRight()
{
    marginleft    = marginleft+ 20 ;
    img.style.marginLeft = marginleft+ 'px';
if (marginleft > screen.width/2)
    marginleft=0;
}

img.onclick=function()
{
    var interval = setInterval(moveRight, 100);
   
};*/


var button=document.getElementById('counter');
var counter=0;
button.onclick=function()
{
    //make a request to the counter endpoint
    
    
    
    //store the response in a variable
    
    
    //render the variable in the correct span
    counter=counter+1;
    var span=getElementById("count");
    span.innerHTML=counter.toString();
    
}