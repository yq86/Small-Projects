// const dialog= document.getElementById("dialog");
// const container= document.getElementById("container");
// function openCon(){
//     dialog.style.display="block";
//     container.style.display="block";
// }
// function closeCon(){
//     dialog.style.display= "none";
// }



var i=0;		
var images = [ "img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"];	

window.onload=changeImg;
function changeImg(){
	window.setTimeout("changeImg()", 2000);
    document.slide.src = images[i]; 
        if(i < images.length - 1) {    
            i++;
        } else {
            i=0;
        }
    }



    function fd(){
        box=document.getElementById("box");
        styles=window.getComputedStyle(box);
        size=styles.getPropertyValue("width");
        size=parseInt(size);
        dh=window.setInterval(function(){
            if(size>=250){
                window.clearInterval(dh);
            }
            size++;
            box.style.width=size+"px";       
        },20);
    }   