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
button.onclick=function()
{
    //create a request to the counter endpoint
    var request=new XMLHttpRequest();
    //store the response in a variable
    request.onreadystatechange=function()
    {
        if (request.readyState==XMLHttpRequest.DONE){
            if (request.status==200){
                
                var counter=request.responseText;
                var span=document.getElementById("count");
                span.innerHTML=counter.toString();
                
            }
            
        }
        
    };
    
    /*render the variable in the correct span
    counter=counter+1;
    var span=document.getElementById("count");
    span.innerHTML=counter.toString();
    */
    
    request.open('GET', 'http://ratheesh4u2.imad.hasura-app.io/counter',true);
    request.send(null);
}