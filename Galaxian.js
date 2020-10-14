/*為了方便底下的運算
  主角機體的原始座標就設定在這裏*/
window.onload=function Start(){
    Main.style.top=215;
    Main.style.left=295;
    
    setInterval(function Damege(){
    var MainJS=document.getElementById('Main');
    var MainX=MainJS.getBoundingClientRect().left;
    var MainY=MainJS.getBoundingClientRect().top;
    Move(1);

},100)

};

document.onkeydown=function(key){

/*這邊先用事件抓按鍵
  然後用switch的指令去針對不同的按鍵會跳到"function Set" 指定的內容中*/

switch(key.which){
        
    case 38:
        Set(38);
    break;
    
    case 40:
        Set(40);
    break;
    
    case 37:
        Set(37);
    break;
    
    case 39:
        Set(39);
    break;
                }
}

function Set(KeyNumber){
    var speed=20;
    var MainJS = document.getElementById('Main');
    var MainX=MainJS.getBoundingClientRect().left;
    var MainY=MainJS.getBoundingClientRect().top;

    /*首先先設定移動速度幫之後的移動事件做準備
      再來利用 "getBoundingClienRect()" 抓出主角機體的XY值*/

    if (KeyNumber==38){
        if (MainY<=20){
            Main.style.top=0;
        }else{
            Main.style.top=parseInt(Main.style.top)-speed+"px";
             };
    };

    if (KeyNumber==40){
        if (MainY>=410){
            Main.style.top=430;
        }else{
            Main.style.top=parseInt(Main.style.top)+speed+"px";
             };
    };

    if (KeyNumber==37){
        if (MainX<=20){
            Main.style.left=0;
        }else{
            Main.style.left=parseInt(Main.style.left)-speed+"px";
             };
    };

    if (KeyNumber==39){
        if (MainX>=570){
            Main.style.left=590;
        }else{
            Main.style.left=parseInt(Main.style.left)+speed+"px";
             };
    };
 
/*  "38" →按鍵 "上"  
    "40" →按鍵 "下"
    "37" →按鍵 "左"
    "39" →按鍵 "右"

    第一個判定是按鍵
    第二個則是移動前先預判主角機體會不會撞到牆壁
    
    會的話就強制貼牆
    反之的話就利用 "parseInt()" 取出純數值的top或left值 ± 速度 + "px" 
    以完成機體移動的事件*/

};

function Move(No){
    var MainJS=document.getElementById('Main');
    var MainX=MainJS.getBoundingClientRect().left;
    var MainY=MainJS.getBoundingClientRect().top;
    
    var Teki=document.getElementById('Teki');
    var TekiX=Teki.getBoundingClientRect().left;
    var TekiY=Teki.getBoundingClientRect().top;

    var Teki2=document.getElementById('Teki2');
    var Teki2X=Teki2.getBoundingClientRect().left;
    var Teki2Y=Teki2.getBoundingClientRect().top;

    var Teki3=document.getElementById('Teki3');
    var Teki3X=Teki3.getBoundingClientRect().left;
    var Teki3Y=Teki3.getBoundingClientRect().top;

    var Teki4=document.getElementById('Teki4');
    var Teki4X=Teki4.getBoundingClientRect().left;
    var Teki4Y=Teki4.getBoundingClientRect().top;

    var Teki5=document.getElementById('Teki5');
    var Teki5X=Teki5.getBoundingClientRect().left;
    var Teki5Y=Teki5.getBoundingClientRect().top;

    var Teki6=document.getElementById('Teki6');
    var Teki6X=Teki6.getBoundingClientRect().left;
    var Teki6Y=Teki6.getBoundingClientRect().top;

    var Teki7=document.getElementById('Teki7');
    var Teki7X=Teki7.getBoundingClientRect().left;
    var Teki7Y=Teki7.getBoundingClientRect().top;

    var Teki8=document.getElementById('Teki8');
    var Teki8X=Teki8.getBoundingClientRect().left;
    var Teki8Y=Teki8.getBoundingClientRect().top;

    var Teki9=document.getElementById('Teki9');
    var Teki9X=Teki9.getBoundingClientRect().left;
    var Teki9Y=Teki9.getBoundingClientRect().top;

    var Teki10=document.getElementById('Teki10');
    var Teki2X=Teki10.getBoundingClientRect().left;
    var Teki2Y=Teki10.getBoundingClientRect().top;

    var Teki11=document.getElementById('Teki11');
    var Teki2X=Teki11.getBoundingClientRect().left;
    var Teki2Y=Teki11.getBoundingClientRect().top;

    var Teki12=document.getElementById('Teki12');
    var Teki2X=Teki12.getBoundingClientRect().left;
    var Teki2Y=Teki12.getBoundingClientRect().top;

    var Teki13=document.getElementById('Teki13');
    var Teki13X=Teki13.getBoundingClientRect().left;
    var Teki13Y=Teki13.getBoundingClientRect().top;

    var Teki14=document.getElementById('Teki14');
    var Teki14X=Teki14.getBoundingClientRect().left;
    var Teki14Y=Teki14.getBoundingClientRect().top;

    console.log(MainX);
    console.log(MainY);
    console.log(TekiY);
    console.log(TekiX);
    
    var DamegiPointY=TekiY+50;
    var DamegiPointX=TekiX+50;

    if (TekiY<=MainY){
        if(DamegiPointY>=MainY){
            if(TekiX<=MainX){
                if(DamegiPointX>=MainX){
                    alert('We have maaaaaaaaap');
                }
            }
        }
    }

};