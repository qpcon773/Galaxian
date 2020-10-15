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
    var Teki10X=Teki10.getBoundingClientRect().left;
    var Teki10Y=Teki10.getBoundingClientRect().top;

    var Teki11=document.getElementById('Teki11');
    var Teki11X=Teki11.getBoundingClientRect().left;
    var Teki11Y=Teki11.getBoundingClientRect().top;

    var Teki12=document.getElementById('Teki12');
    var Teki12X=Teki12.getBoundingClientRect().left;
    var Teki12Y=Teki12.getBoundingClientRect().top;

    var Teki13=document.getElementById('Teki13');
    var Teki13X=Teki13.getBoundingClientRect().left;
    var Teki13Y=Teki13.getBoundingClientRect().top;

    var Teki14=document.getElementById('Teki14');
    var Teki14X=Teki14.getBoundingClientRect().left;
    var Teki14Y=Teki14.getBoundingClientRect().top;

    var DamegiY=Math.abs(MainY-TekiY);
    var DamegiX=Math.abs(MainX-TekiX);
   
    var Damegi2Y=Math.abs(MainY-Teki2Y);
    var Damegi2X=Math.abs(MainX-Teki2X);
    
    var Damegi3Y=Math.abs(MainY-Teki3Y);
    var Damegi3X=Math.abs(MainX-Teki3X);
    
    var Damegi4Y=Math.abs(MainY-Teki4Y);
    var Damegi4X=Math.abs(MainX-Teki4X);
   
    var Damegi5Y=Math.abs(MainY-Teki5Y);
    var Damegi5X=Math.abs(MainX-Teki5X);
    
    var Damegi6Y=Math.abs(MainY-Teki6Y);
    var Damegi6X=Math.abs(MainX-Teki6X);
    
    var Damegi7Y=Math.abs(MainY-Teki7Y);
    var Damegi7X=Math.abs(MainX-Teki7X);
   
    var Damegi8Y=Math.abs(MainY-Teki8Y);
    var Damegi8X=Math.abs(MainX-Teki8X);
    
    var Damegi9Y=Math.abs(MainY-Teki9Y);
    var Damegi9X=Math.abs(MainX-Teki9X);
    
    var Damegi10Y=Math.abs(MainY-Teki10Y);
    var Damegi10X=Math.abs(MainX-Teki10X);
    
    var Damegi11Y=Math.abs(MainY-Teki11Y);
    var Damegi11X=Math.abs(MainX-Teki11X);
    
    var Damegi12Y=Math.abs(MainY-Teki12Y);
    var Damegi12X=Math.abs(MainX-Teki12X);
    
    var Damegi13Y=Math.abs(MainY-Teki13Y);
    var Damegi13X=Math.abs(MainX-Teki13X);
    
    var Damegi14Y=Math.abs(MainY-Teki14Y);
    var Damegi14X=Math.abs(MainX-Teki14X);


    if(DamegiY>=0){
        if(DamegiY<=45){
            if(DamegiX>=0){
                if(DamegiX<=25){
                    GameOver();
                }
            }
        }
    }
    
    if(Damegi2Y>=0){
        if(Damegi2Y<=45){
            if(Damegi2X>=0){
                if(Damegi2X<=25){
                    GameOver();
                }
            }
        }
    }
    
    if(Damegi3Y>=0){
        if(Damegi3Y<=45){
            if(Damegi3X>=0){
                if(Damegi3X<=25){
                    GameOver();
                }
            }
        }
    }    
    
    if(Damegi4Y>=0){
        if(Damegi4Y<=45){
            if(Damegi4X>=0){
                if(Damegi4X<=25){
                    GameOver();
                }
            }
        }
    }    
    
    if(Damegi5Y>=0){
        if(Damegi5Y<=45){
            if(Damegi5X>=0){
                if(Damegi5X<=25){
                    GameOver();
                }
            }
        }
    }    
    
    if(Damegi6Y>=0){
        if(Damegi6Y<=45){
            if(Damegi6X>=0){
                if(Damegi6X<=25){
                    GameOver();
                }
            }
        }
    }    

    if(Damegi7Y>=0){
        if(Damegi7Y<=45){
            if(Damegi7X>=0){
                if(Damegi7X<=25){
                    GameOver();
                }
            }
        }
    }
    
    if(Damegi8Y>=0){
        if(Damegi8Y<=45){
            if(Damegi8X>=0){
                if(Damegi8X<=25){
                    GameOver();
                }
            }
        }
    }  
    
    if(Damegi9Y>=0){
        if(Damegi9Y<=45){
            if(Damegi9X>=0){
                if(Damegi9X<=25){
                    GameOver();
                }
            }
        }
    }

    if(Damegi10Y>=0){
        if(Damegi10Y<=45){
            if(Damegi10X>=0){
                if(Damegi10X<=25){
                    GameOver();
                }
            }
        }
    }

    if(Damegi11Y>=0){
        if(Damegi11Y<=45){
            if(Damegi11X>=0){
                if(Damegi11X<=25){
                    GameOver();
                }
            }
        }
    }
    
    if(Damegi12Y>=0){
        if(Damegi12Y<=45){
            if(Damegi12X>=0){
                if(Damegi12X<=25){
                    GameOver();
                }
            }
        }
    }
    
    if(Damegi13Y>=0){
        if(Damegi13Y<=45){
            if(Damegi13X>=0){
                if(Damegi13X<=25){
                    GameOver();
                }
            }
        }
    }
    
    if(Damegi14Y>=0){
        if(Damegi14Y<=45){
            if(Damegi14X>=0){
                if(Damegi14X<=25){
                    GameOver();
                }
            }
        }
    }    
/* 傷害判定的式子 先抓出主角和怪物的座標 然後利用加法求正數的方法算出距離加以判定 */
}

function GameOver(){
    document.getElementById('Main').style.backgroundImage="url('Pic/Explosion.gif')";
    var GameOver=0
    var ExplosionGif=setInterval(function Explosion(){
        if (GameOver==1){
            document.body.innerHTML="<img src='Pic/GameOver.png'></img>"
            ClearInterval(ExplosionGif);
            
        }
        document.getElementById('Main').style.backgroundImage="url('Pic/Non.png')";

        GameOver++;
                },600)

}
