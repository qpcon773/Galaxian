window.onload=function start(){
    Main.style.top='974px';
    Main.style.left='615px'};


document.onkeydown=function(key){
var speed=10;
switch(key.which){
        case 38:
        
        Main.style.top=parseInt(Main.style.top)-speed+"px";
        break;
    
        case 40:
        Main.style.top=parseInt(Main.style.top)+speed+"px";
        break;
    
        case 37:
        Main.style.left=parseInt(Main.style.left)-speed+"px";
        break;
    
        case 39:
        Main.style.left=parseInt(Main.style.left)+speed+"px";
        break;
}
    
}