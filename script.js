let sideMenu = document.querySelector(".hamburger-menu");

sideMenu.addEventListener("click", function(){
    document.querySelector(".side-bar").classList.toggle("show-menu")
    document.querySelector(".hamburger-menu").classList.toggle("hamburger-transition")
})