let gameZone = document.querySelector(".game-zone");
let player = document.querySelector(".player");
let enemy1 = document.querySelector(".enemy1");
let enemy2 = document.querySelector(".enemy2");
let enemy3 = document.querySelector(".enemy3");
let enemy4 = document.querySelector(".enemy4");
let enemy5 = document.querySelector(".enemy5");
//let bomb = document.querySelector("#bomb");


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


// player move
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
    } else if (e.keyCode == '32') {  
        let bomb = document.querySelector("#bomb");
        bomb.classList.add("bang");
        bomb.style.left = pLeft+"px";
        bomb.style.top = pTop+"px";
        console.log(bomb.style.top);
        console.log(bomb.style.left);
    }
};   


// enemy move

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

/*
window.onkeydown = function (e){
    console.log(e.keyCode);
}
*/