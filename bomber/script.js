//---------------public data zone-----------
let gameZone = document.querySelector(".game-zone");
let player = document.querySelector(".player");
let bomb = document.querySelector("#bomb");

/*  -----need these codes without forEach function------
let enemy1 = document.querySelector(".enemy1");
let enemy2 = document.querySelector(".enemy2");
let enemy3 = document.querySelector(".enemy3");
let enemy4 = document.querySelector(".enemy4");
let enemy5 = document.querySelector(".enemy5");
*/

let pTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
let pLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));

/*  -----need these codes without forEach function------
let e1Top = parseInt(window.getComputedStyle(enemy1).top);
let e1Left = parseInt(window.getComputedStyle(enemy1).left);
let e2Top = parseInt(window.getComputedStyle(enemy2).top);
let e2Left = parseInt(window.getComputedStyle(enemy2).left);
let e3Top = parseInt(window.getComputedStyle(enemy3).top);
let e3Left = parseInt(window.getComputedStyle(enemy3).left);
let e4Top = parseInt(window.getComputedStyle(enemy4).top);
let e4Left = parseInt(window.getComputedStyle(enemy4).left);
let e5Top = parseInt(window.getComputedStyle(enemy5).top);
let e5Left = parseInt(window.getComputedStyle(enemy5).left);
*/
let playerPH = 10;

let enemies = document.querySelectorAll(".enemy");

function getStyle(element, property){
    return (parseInt(window.getComputedStyle(element).getPropertyValue(property)));
};

//--------------player moves -------------------
document.onkeydown = function(e){
    if (e.keyCode == '38') { // up
        if (pTop > 0){
            pTop -= 20;
            player.style.top = pTop + "px";
        }
    } else if (e.keyCode == '40') { // down
        if (pTop < 620){
            pTop += 20;
            player.style.top = pTop + "px";
        }       
    } else if (e.keyCode == '37') { // left
        if (pLeft > 0) {
            pLeft -= 20;
            player.style.left = pLeft + "px";
        }  
    } else if (e.keyCode == '39') { // right
        if (pLeft < 620) {
            pLeft += 20;
            player.style.left = pLeft + "px";
        }
//-------------- bomb appears------------       
    } else if (e.keyCode == '32') {                
        bomb.classList.add("bang");
        var bLeft = bomb.style.left = pLeft+"px";
        var bTop = bomb.style.top = pTop+"px";
        bLeft = parseInt(bLeft);
        bTop = parseInt(bTop);   
//-------------- bomb size doubles in 2 seconds--------------
        window.setTimeout(function(){
            bomb.style.width = 100+"px";
            bomb.style.height= 100+ "px"; 
        }, 2000);
        window.setTimeout(function(){
//------------ kill enemies here (bomb size actually didnt double when it kills, need to enlarge the condition zone to kill easily)------
            enemies.forEach(function(enemy) {
                if (bLeft+110 > getStyle(enemy, "left") && getStyle(enemy, "left") > bLeft-50 && bTop+110 > getStyle(enemy, "top") && getStyle(enemy, "top") > bTop-50) {
                    gameZone.removeChild(enemy); 
                };
            });
            /*  -----need these codes without forEach function------
            if ((bLeft+110) > e1Left && e1Left > (bLeft-50) && (bTop+110) > e1Top && e1Top > (bTop-50)) {
                gameZone.removeChild(enemy1);
            } else if ((bLeft+110) > e2Left && e2Left > (bLeft-50) && (bTop+110) > e2Top && e2Top > (bTop-50)) {
                gameZone.removeChild(enemy2);
            } else if ((bLeft+110) > e3Left && e3Left > (bLeft-50) && (bTop+110) > e3Top && e3Top > (bTop-50)) {
                gameZone.removeChild(enemy3);
            } else if ((bLeft+110) > e4Left && e4Left > (bLeft-50) && (bTop+110) > e4Top && e4Top > (bTop-50)) {
                gameZone.removeChild(enemy4);
            } else if ((bLeft+110) > e5Left && e5Left > (bLeft-50) && (bTop+110) > e5Top && e5Top > (bTop-50)) {
                gameZone.removeChild(enemy5);  
            */
//----------player lose ph if exploded by bomb--------------------                                  
                       
            if ((bLeft+110) > pLeft && pLeft > (bLeft-50) && (bTop+110) > pTop && pTop > (bTop-50)) {
                player.innerText = playerPH--;                                
            };         
//----------------- bomb explodes--------------------
            bomb.classList.remove("bang");          
//----------------- if I dont do the following, the next time I throw a bomb the size stays double------------------
            bomb.style.width = 50+"px";
            bomb.style.height= 50+ "px";          
        }, 3000); // end of setTimeOut
    } // end of else if e.keyCode == '32'
};   // end of document.onkeydown-----------

//----------------enemies move----------------------
window.setInterval(function(){
    enemies.forEach(function(enemy){
        let i = Math.floor(Math.random() * 4);
        if (i==0) { // up
            if (getStyle(enemy,"top") > 0 ) {
                enemy.style.top = getStyle(enemy,"top")-20 + "px"; 
            }                     
        } else if (i==1) { // down
            if ( getStyle(enemy,"top") < 620 ) {
                enemy.style.top = getStyle(enemy,"top")+20 + "px";  
            }           
        } else if (i==2) { // left
            if (getStyle(enemy,"left") > 0 ) {
                enemy.style.left = getStyle(enemy,"left")-20 + "px";
            } 
                        
        } else if (i==3) { // right
            if (getStyle(enemy,"left") < 620){
            enemy.style.left = getStyle(enemy,"left")+20 + "px";   
            }                 
        }; 
    })

/* -----need these codes without forEach function------
        if (i==0) {
            enemy1.style.top = (e1Top-20) + "px";               
        } else if (i==1) {
            enemy1.style.top = (e1Top+20) + "px";               
        } else if (i==2) {
            enemy1.style.left = (e1Left-20) + "px";                
        } else if (i==3) {
            enemy1.style.left = (e1Left+20) + "px";             
        }; 
        i = Math.floor(Math.random() * 4);
        if (i==0) {              
            enemy2.style.top = (e2Top-20) + "px";              
        } else if (i==1) {               
            enemy2.style.top = (e2Top+20) + "px";               
        } else if (i==2) {               
            enemy2.style.left = (e2Left-20) + "px";                
        } else if (i==3) {               
            enemy2.style.left = (e2Left+20) + "px";                
        };
        i = Math.floor(Math.random() * 4);
        if (i==0) {
            enemy3.style.top = (e3Top-20) + "px";
        } else if (i==1) {              
            enemy3.style.top = (e3Top+20) + "px";               
        } else if (i==2) {              
            enemy3.style.left = (e3Left-20) + "px";               
        } else if (i==3) {                
            enemy3.style.left = (e3Left+20) + "px";               
        };
        i = Math.floor(Math.random() * 4);
        if (i==0) {             
            enemy4.style.top = (e4Top-20) + "px";              
        } else if (i==1) {              
            enemy4.style.top = (e4Top+20) + "px";               
        } else if (i==2) {               
            enemy4.style.left = (e4Left-20) + "px";               
        } else if (i==3) {               
            enemy4.style.left = (e4Left+20) + "px";              
        };
        i = Math.floor(Math.random() * 4);
        if (i==0) {              
            enemy5.style.top = (e5Top-20) + "px";
        } else if (i==1) {              
            enemy5.style.top = (e5Top+20) + "px";
        } else if (i==2) {
            enemy5.style.left = (e5Left-20) + "px";
        } else if (i==3) {
            enemy5.style.left = (e5Left+20) + "px";            
        }     
*/
},500);

//-------- player lose PH touched by enemy -----------
window.setInterval(function(){
    enemies.forEach(function(enemy){
        if (getStyle(enemy, "left")+40 > pLeft && pLeft > getStyle(enemy, "left")-40 && getStyle(enemy, "top")+40 > pTop && pTop > getStyle(enemy, "top")-40){
            player.innerText = playerPH--;
        }
    })
}, 500);

//-------------player dead--------------------
window.setInterval(function(){
    if (playerPH == -1) {
        gameZone.removeChild(player);
        let div = document.createElement("div");
        let text = document.createTextNode("player dead");
        div.appendChild(text);
        gameZone.appendChild(div);
    } 
},1)

/*  how to check if enemies are all gone
window.onload = function(){
    
    if (document.body.className.match("hello") == false ) {
        let div = document.createElement("div");
        let text = document.createTextNode("player win");
        div.appendChild(text);
        gameZone.appendChild(div);
        console.log("hi");
    }
}
*/
//----------------fin du jeu------------------------

// document.body.classList.contains('my-class-name')






/*  thoughts of player ph-- and enemy being killed

if (eLeft+40 > pLeft > eLeft-40 && eTop+40 > pTop > eTop-40) {
    player ph--;
}

if (bLeft+40 > eLeft > bLeft-40 && bTop+40 > eTop > bTop-40) {
    remove enemy class;
}

*/
