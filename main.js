//salvare le variabili delle classi
const hamburger = document.querySelector(".hamburger-menu")

const openMenu = document.querySelector(".header-right > a")

const closeMenu = document.querySelector(".hamburger-menu .close")

//rendere visibile la lista
openMenu.addEventListener("click", function(){
    hamburger.classList.add("active")
})

