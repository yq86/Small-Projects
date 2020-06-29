    let burger = document.querySelector(".burger");
    let menu = document.querySelector(".menu");

    burger.addEventListener("click", function(){
        menu.classList.toggle("active");
    })