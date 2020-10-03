/*為了方便底下的運算
  主角機體的原始座標就設定在這裏*/

window.onload=function Start(){
   Main.style.top=215;
   Main.style.left=295;
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