window.addEventListener("scroll", function() {
    let header = document.getElementById("header");
    header.classList.toggle("scrol", window.scrollY > 0);
});

let button = document.querySelector(".mob_button");
let menu = document.querySelector(".mobile_menu");

button.addEventListener("click", function() {
    button.classList.toggle("show");
    menu.classList.toggle("show");
});

