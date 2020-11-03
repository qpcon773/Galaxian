var GameMode
var Voice

var BGM=document.createElement('audio');
BGM.src="BGM/Start.mp3";
BGM.loop=true;

var BGM02=document.createElement('audio');
BGM02.src='BGM/GameOver.mp3';


/*為了方便底下的運算
  主角機體的原始座標就設定在這裏*/

  window.onload=function Start(){
    Main.style.top=215;
    Main.style.left=295;
    
    
setInterval(function Damege(){
    if (GameMode==1){}
    else{
    var MainJS=document.getElementById('Main');
    var MainX=MainJS.getBoundingClientRect().left;
    var MainY=MainJS.getBoundingClientRect().top;
    
    Move();
    Shooting();
    KillTeki();
    }

},100)

};


document.onkeydown=function(key){

/*這邊先用事件抓按鍵
  然後用switch的指令去針對不同的按鍵會跳到"function Set" 指定的內容中*/

if (GameMode==1){}
else{
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

    case 32:
        Shooting(32);
    break;
                }
}
}

function Set(KeyNumber){
    if (Voice==1){}
    else{
        BGMSwitch(1);
        Voice=1;
    }
    
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

function Move(){
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
            BGMSwitch(2);
            BGMSwitch(3);

           document.body.innerHTML="<img src='Pic/GameOver.png' class='Background' onclick='Reset();'></img>"
            
            
        }
                
        GameMode=1;
        GameOver++;
                },300)

}

function Shooting(KeyNumber){
    var Wating   
    if (Wating==1){}else if (Wating==2){}
    /*設下一個變數 代表射擊動作的階段
    無→第一次開火
    0→前面事件都跑完了 可以再一次開火了
    1→開火跑完動畫後 停止循環事件
    2→開火後開始跑動畫 這時無法再次開火
    */
    else{
    if (KeyNumber==32){
        Wating=2
        document.getElementById('Bullet').style.backgroundImage="url('Pic/Bullet.png')";
        var MainJS=document.getElementById('Main');
        var BulletX=MainJS.getBoundingClientRect().left;
        var BulletY=MainJS.getBoundingClientRect().top;
        BulletY-=28;
        BulletX+=11;
        /*這邊的話是把子彈的圖片調整到主角機體的砲火前面*/
        document.getElementById('Bullet').style.top=BulletY;
        document.getElementById('Bullet').style.left=BulletX;
        document.getElementById('Bullet').style.animationPlayState='running';
        /*子彈跑的動畫原本是暫停的 這裏設計是按下開火的按鍵之後 動畫重新啟動 定位的話就是前面再調整的*/
    

        var AnimationTime=setInterval(
            function BulletTime(){
                if (Wating==1){
                    wating=0
                }

                else if (Wating==2){
                document.getElementById('Bullet').style.animationPlayState='paused';
                document.getElementById('Bullet').style.backgroundImage="";
                Wating=1;}},2000)
                
        }
            }
    }

    function KillTeki(){
        var Point
        var TekiAlive
        var Teki2Alive
        var Teki3Alive
        var Teki4Alive
        var Teki5Alive
        var Teki6Alive
        var Teki7Alive
        var Teki8Alive
        var Teki9Alive
        var Teki10Alive
        var Teki11Alive
        var Teki12Alive
        var Teki13Alive
        var Teki14Alive
        
        var Bullet=document.getElementById('Bullet');
        var BulletX=Bullet.getBoundingClientRect().left;
        var BulletY=Bullet.getBoundingClientRect().top;
        
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
    
        var BulletDamegiY=Math.abs(BulletY-TekiY);
        var BulletDamegiX=Math.abs(BulletX-TekiX);
       
        var BulletDamegi2Y=Math.abs(BulletY-Teki2Y);
        var BulletDamegi2X=Math.abs(BulletX-Teki2X);
        
        var BulletDamegi3Y=Math.abs(BulletY-Teki3Y);
        var BulletDamegi3X=Math.abs(BulletX-Teki3X);
        
        var BulletDamegi4Y=Math.abs(BulletY-Teki4Y);
        var BulletDamegi4X=Math.abs(BulletX-Teki4X);
       
        var BulletDamegi5Y=Math.abs(BulletY-Teki5Y);
        var BulletDamegi5X=Math.abs(BulletX-Teki5X);
        
        var BulletDamegi6Y=Math.abs(BulletY-Teki6Y);
        var BulletDamegi6X=Math.abs(BulletX-Teki6X);
        
        var BulletDamegi7Y=Math.abs(BulletY-Teki7Y);
        var BulletDamegi7X=Math.abs(BulletX-Teki7X);
       
        var BulletDamegi8Y=Math.abs(BulletY-Teki8Y);
        var BulletDamegi8X=Math.abs(BulletX-Teki8X);
        
        var BulletDamegi9Y=Math.abs(BulletY-Teki9Y);
        var BulletDamegi9X=Math.abs(BulletX-Teki9X);
        
        var BulletDamegi10Y=Math.abs(BulletY-Teki10Y);
        var BulletDamegi10X=Math.abs(BulletX-Teki10X);
        
        var BulletDamegi11Y=Math.abs(BulletY-Teki11Y);
        var BulletDamegi11X=Math.abs(BulletX-Teki11X);
        
        var BulletDamegi12Y=Math.abs(BulletY-Teki12Y);
        var BulletDamegi12X=Math.abs(BulletX-Teki12X);
        
        var BulletDamegi13Y=Math.abs(BulletY-Teki13Y);
        var BulletDamegi13X=Math.abs(BulletX-Teki13X);
        
        var BulletDamegi14Y=Math.abs(BulletY-Teki14Y);
        var BulletDamegi14X=Math.abs(BulletX-Teki14X);
    
    
    if (TekiAlive<=1)   
    {
        if(BulletDamegiY>=0){
        if(BulletDamegiY<=30){
            if(BulletDamegiX>=0){
                if(BulletDamegiX<=30){
                    Point+10000000;
                    TekiAlive++;
                    TekiDead(1);

                }
            }
        }
    }}
    }

    function TekiDead(TekiNumber){
        if (TekiNumber==1){
            document.getElementById('Teki').src='Pic/Explosion.gif';
            var TekiDeadGif=0
            setInterval(function TekiExplosion(){
                if (TekiDead>=1){
                    
                }
                document.getElementById('Teki').src='Pic/Non.png';
        
                TekiDeadGif++;
                        },600)
        }

        if (TekiNumber==2){
            document.getElementById('Teki2').src='Pic/Explosion.gif';
            var TekiDead=0
            setInterval(function TekiExplosion(){
                if (TekiDead==1){
                    
                }
                document.getElementById('Teki2').src='Pic/Non.png';
        
                TekiDead++;
                        },600)
        }

        if (TekiNumber==3){
            document.getElementById('Teki3').src='Pic/Explosion.gif';
            var TekiDead=0
            setInterval(function TekiExplosion(){
                if (TekiDead==1){
                    
                }
                document.getElementById('Teki3').src='Pic/Non.png';
        
                TekiDead++;
                        },600)
        }

        if (TekiNumber==4){
            document.getElementById('Teki4').src='Pic/Explosion.gif';
            var TekiDead=0
            setInterval(function TekiExplosion(){
                if (TekiDead==1){
                    
                }
                document.getElementById('Teki4').src='Pic/Non.png';
        
                TekiDead++;
                        },600)
        }

        if (TekiNumber==5){
            document.getElementById('Teki5').src='Pic/Explosion.gif';
            var TekiDead=0
            setInterval(function TekiExplosion(){
                if (TekiDead==1){
                    
                }
                document.getElementById('Teki5').src='Pic/Non.png';
        
                TekiDead++;
                        },600)
        }

        if (TekiNumber==6){
            document.getElementById('Teki6').src='Pic/Explosion.gif';
            var TekiDead=0
            setInterval(function TekiExplosion(){
                if (TekiDead==1){
                    
                }
                document.getElementById('Teki6').src='Pic/Non.png';
        
                TekiDead++;
                        },600)
        }

        if (TekiNumber==7){
            document.getElementById('Teki7').src='Pic/Explosion.gif';
            var TekiDead=0
            setInterval(function TekiExplosion(){
                if (TekiDead==1){
                    
                }
                document.getElementById('Teki7').src='Pic/Non.png';
        
                TekiDead++;
                        },600)
        }

        if (TekiNumber==8){
            document.getElementById('Teki8').src='Pic/Explosion.gif';
            var TekiDead=0
            setInterval(function TekiExplosion(){
                if (TekiDead==1){
                    
                }
                document.getElementById('Teki8').src='Pic/Non.png';
        
                TekiDead++;
                        },600)
        }

        if (TekiNumber==9){
            document.getElementById('Teki9').src='Pic/Explosion.gif';
            var TekiDead=0
            setInterval(function TekiExplosion(){
                if (TekiDead==1){
                    
                }
                document.getElementById('Teki9').src='Pic/Non.png';
        
                TekiDead++;
                        },600)
        }

        if (TekiNumber==10){
            document.getElementById('Teki10').src='Pic/Explosion.gif';
            var TekiDead=0
            setInterval(function TekiExplosion(){
                if (TekiDead==1){
                    
                }
                document.getElementById('Teki10').src='Pic/Non.png';
        
                TekiDead++;
                        },600)
        }

        if (TekiNumber==11){
            document.getElementById('Teki11').src='Pic/Explosion.gif';
            var TekiDead=0
            setInterval(function TekiExplosion(){
                if (TekiDead==1){
                    
                }
                document.getElementById('Teki11').src='Pic/Non.png';
        
                TekiDead++;
                        },600)
        }

        if (TekiNumber==12){
            document.getElementById('Teki12').src='Pic/Explosion.gif';
            var TekiDead=0
            setInterval(function TekiExplosion(){
                if (TekiDead==1){
                    
                }
                document.getElementById('Teki12').src='Pic/Non.png';
        
                TekiDead++;
                        },600)
        }

        if (TekiNumber==13){
            document.getElementById('Teki13').src='Pic/Explosion.gif';
            var TekiDead=0
            setInterval(function TekiExplosion(){
                if (TekiDead==1){
                    
                }
                document.getElementById('Teki13').src='Pic/Non.png';
        
                TekiDead++;
                        },600)
        }

        if (TekiNumber==14){
            document.getElementById('Teki14').src='Pic/Explosion.gif';
            var TekiDead=0
            setInterval(function TekiExplosion(){
                if (TekiDead==1){
                    
                }
                document.getElementById('Teki14').src='Pic/Non.png';
        
                TekiDead++;
                        },600)
        }

    }

    

function BGMSwitch(MusicNumber){
    if (MusicNumber==1){BGM.play();};
    if (MusicNumber==2){BGM.pause();};
    if (MusicNumber==3){BGM02.play();};
            
}

function Reset(){
    window.location.reload('');
}