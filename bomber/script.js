let gameZone = document.querySelector(".game-zone");
let player = document.querySelector(".player");
let bomb = document.querySelector("#bomb");
let enemy1 = document.querySelector(".enemy1");
let enemy2 = document.querySelector(".enemy2");
let enemy3 = document.querySelector(".enemy3");
let enemy4 = document.querySelector(".enemy4");
let enemy5 = document.querySelector(".enemy5");


let gWidth = parseInt(window.getComputedStyle(gameZone).getPropertyValue("width"));
let gHeight = parseInt(window.getComputedStyle(gameZone).getPropertyValue("height"));
let pTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
let pLeft = parseInt(window.getComputedStyle(player).getPropertyValue("left"));


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


//---------start of player move--------------
document.onkeydown = function(e){
    if (e.keyCode == '38') { // up
        if (pTop > 0){
            pTop -= 20;
            player.style.top = pTop + "px";
        }
    } else if (e.keyCode == '40') { // down
        if (pTop < (gHeight-40)){
            pTop += 20;
            player.style.top = pTop + "px";
        }       
    } else if (e.keyCode == '37') { // left
        if (pLeft > 0) {
            pLeft -= 20;
            player.style.left = pLeft + "px";
        }  
    } else if (e.keyCode == '39') { // right
        if (pLeft < (gWidth-40)) {
            pLeft += 20;
            player.style.left = pLeft + "px";
        }
//----------end of player move-------------------        
    } else if (e.keyCode == '32') {         
    // bomb appears        
        bomb.classList.add("bang");
        var bLeft = bomb.style.left = pLeft+"px";
        var bTop = bomb.style.top = pTop+"px";
        
        bLeft = parseInt(bLeft);
        bTop = parseInt(bTop);
     
    // bomb size doubling in 2 seconds
        window.setTimeout(function(){
            bomb.style.width = 100+"px";
            bomb.style.height= 100+ "px"; 
        }, 2000);
        window.setTimeout(function(){
    // kill enemies down here (bomb size actually didnt double when it kills)
            if ((bLeft+110) > e1Left && e1Left > (bLeft-50) && (bTop+110) > e1Top && e1Top > (bTop-50)) {
                enemy1.classList.remove("enemy1");
            } else if ((bLeft+110) > e2Left && e2Left > (bLeft-50) && (bTop+110) > e2Top && e2Top > (bTop-50)) {
                enemy2.classList.remove("enemy2");
            } else if ((bLeft+110) > e3Left && e3Left > (bLeft-50) && (bTop+110) > e3Top && e3Top > (bTop-50)) {
                enemy3.classList.remove("enemy3");
            } else if ((bLeft+110) > e4Left && e4Left > (bLeft-50) && (bTop+110) > e4Top && e4Top > (bTop-50)) {
                enemy4.classList.remove("enemy4");
            } else if ((bLeft+110) > e5Left && e5Left > (bLeft-50) && (bTop+110) > e5Top && e5Top > (bTop-50)) {
                enemy5.classList.remove("enemy5");
            }             
    // bomb explode in 3 seconds 
            bomb.classList.remove("bang");
// if I dont do the following, the next time I throw a bomb the size stays double
            bomb.style.width = 50+"px";
            bomb.style.height= 50+ "px";
            
        }, 3000);
    } // end of else if e.keyCode == '32'
};   //---------------------end of document.onkeydown-----------



//----------------start of enemy move----------------------
window.setInterval(function(){
    let i = Math.floor(Math.random() * 4);
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
        };
        
},500);
//-----------end of enemy move----------------------


/*
//-----start of bomb kill enemy--------------
document.addEventListener("keydown", function(e){
    if (e.keyCode == '32') {         
// bomb appears        
        bomb.classList.add("bang");
        var bLeft = bomb.style.left = pLeft+"px";
        var bTop = bomb.style.top = pTop+"px";
        
        bLeft = parseInt(bLeft);
        bTop = parseInt(bTop);
 
// bomb size doubling in 2 seconds
        window.setTimeout(function(){
            bomb.style.width = 80+"px";
            bomb.style.height= 80+ "px"; 
        }, 2000);
        window.setTimeout(function(){
// kill enemies here (bomb size actually didnt double when it kills)
            if ((bLeft+40) > e1Left && e1Left > (bLeft-40) && (bTop+40) > e1Top && e1Top > (bTop-40)) {
                enemy1.classList.remove("enemy1");
            } else if ((bLeft+40) > e2Left && e2Left > (bLeft-40) && (bTop+40) > e2Top && e2Top > (bTop-40)) {
                enemy2.classList.remove("enemy2");
            } else if ((bLeft+40) > e3Left && e3Left > (bLeft-40) && (bTop+40) > e3Top && e3Top > (bTop-40)) {
                enemy3.classList.remove("enemy3");
            } else if ((bLeft+40) > e4Left && e4Left > (bLeft-40) && (bTop+40) > e4Top && e4Top > (bTop-40)) {
                enemy4.classList.remove("enemy4");
            } else if ((bLeft+40) > e5Left && e5Left > (bLeft-40) && (bTop+40) > e5Top && e5Top > (bTop-40)) {
                enemy5.classList.remove("enemy5");
            } 

            
            console.log(bLeft+40); 240
            console.log(e1Left); 
            console.log(bLeft-40);
            console.log(bTop+40);
            console.log(e1Top);
            console.log(bTop-40)
            
        
         
// bomb explode in 3 seconds 
            bomb.classList.remove("bang");
// if I dont do the following, the next time I throw a bomb the size stays double
            bomb.style.width = 40+"px";
            bomb.style.height= 40+ "px";
            
        }, 3000);
    }
})
//----------end of bomb kill enemy-------------------
*/










/*  thoughts of player ph-- and enemy being killed

if (eLeft+40 > pLeft > eLeft-40 && eTop+40 > pTop > eTop-40) {
    player ph--;
}

if (bLeft+40 > eLeft > bLeft-40 && bTop+40 > eTop > bTop-40) {
    remove enemy class;
}

-----------------------------------

------------------------------------
// to kill enemies
IF bomb size doubled when it disappears, 

THEN
if (bLeft+80 > eLeft > bLeft-40 && bTop+80 > eTop > bTop-40) {
    remove enemy class;
}

THEN
if (bLeft+80 > e1Left > bLeft-40 && bTop+80 > e1Top > bTop-40) {
    enemy1.classList.remove("enemy1");
} else if (bLeft+80 > e2Left > bLeft-40 && bTop+80 > e2Top > bTop-40) {
    enemy2.classList.remove("enemy2");
} else if (bLeft+80 > e3Left > bLeft-40 && bTop+80 > e3Top > bTop-40) {
    enemy3.classList.remove("enemy3");
}  else if (bLeft+80 > e4Left > bLeft-40 && bTop+80 > e4Top > bTop-40) {
    enemy4.classList.remove("enemy4");
} else if (bLeft+80 > e5Left > bLeft-40 && bTop+80 > e5Top > bTop-40) {
    enemy5.classList.remove("enemy5");
}           
----------------------------------------
// to kill enemies
IF bomb size didnt double when it disappears

THEN
if (bLeft+40 > eLeft > bLeft-40 && bTop+40 > eTop > bTop-40) {
    enemy.classList.remove("enemy");
}

THEN
if (bLeft+40 > e1Left > bLeft-40 && bTop+40 > e1Top > bTop-40) {
    enemy1.classList.remove("enemy1");
    } else if (bLeft+40 > e2Left > bLeft-40 && bTop+40 > e2Top > bTop-40){
        enemy2.classList.remove("enemy2");
    } else if (bLeft+40 > e3Left > bLeft-40 && bTop+40 > e3Top > bTop-40){
        enemy3.classList.remove("enemy3");
    } else if (bLeft+40 > e4Left > bLeft-40 && bTop+40 > e4Top > bTop-40){
        enemy4.classList.remove("enemy4");
    } else if (bLeft+40 > e5Left > bLeft-40 && bTop+40 > e5Top > bTop-40){
        enemy5.classList.remove("enemy5");
    }    
-------------------------------------             
*/