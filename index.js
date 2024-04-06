var burger = document.getElementsByClassName("head-burger")[0];
var menu = document.getElementsByClassName("menu")[0];

clickCounter = 0;

burger.addEventListener('click', function(){
    burger.classList.add("active")
    menu.classList.add("active")
    
    clickCounter++;
        if (clickCounter == 2) {
            burger.classList.remove("active")
    menu.classList.remove("active")
    clickCounter = 0;
    
        }
    
})