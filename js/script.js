const button = document.querySelector(".header_burger");
const menu = document.querySelector(".header_nav");
const body = document.querySelector("body");
button.addEventListener("click", function(e) {
    button.classList.toggle("_active");
    menu.classList.toggle("_active");
    body.classList.toggle("_lock");
});
new Swiper (".swiper-container",{
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoHeight: true,
});