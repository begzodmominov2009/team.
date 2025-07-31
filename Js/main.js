const MenuToggle = document.getElementById("toggle");
const NavRes = document.getElementById("nav_res");
const close = document.getElementById("close");
const header = document.getElementById("header");
const loading = document.getElementById("loading");
const Confidential = document.getElementById("Confidential");
const password_head = document.getElementById("password__head");
const open = document.getElementById("open");
const privacy__content = document.getElementById("privacy__content");
const privacy__head = document.getElementById("privacy__head");
const data = document.getElementById("Data");
const data__head = document.getElementById("data__head");
const privacy__close = document.getElementById("privacy__close")
const data__close = document.getElementById("data__close")




data__close.addEventListener("click" , () => {
    password_head.classList.remove("password_none")
}) 
data__close.addEventListener("click" , () => {
    data.classList.add("data__hide")
})

data__head.addEventListener("click" , () => {
    data.classList.remove("data__hide")
})
data__head.addEventListener("click" , () => {
    password_head.classList.add("password_none")    
})

MenuToggle.addEventListener("click" , () => {
    data.classList.add("data__hide")
})

privacy__close.addEventListener("click", () => {
    privacy__content.classList.add("hide")
})
privacy__close.addEventListener("click", () => {
    password_head.classList.remove("password_none")
})

privacy__head.addEventListener("click", () => {
    password_head.classList.add("password_none");
})
privacy__head.addEventListener("click", () => {
    privacy__content.classList.remove("hide");
})
Confidential.addEventListener("click", () => {
    privacy__content.classList.add("hide");
})
MenuToggle.addEventListener("click", () => {
    privacy__content.classList.add("hide");
})

open.addEventListener("click", () => {
    password_head.classList.add("password_none");
    NavRes.classList.remove("change")
})

MenuToggle.addEventListener("click", () => {
    password_head.classList.add("password_none");
})
Confidential.addEventListener("click", () => {
    password_head.classList.remove("password_none");
})

Confidential.addEventListener("click", () => {
    NavRes.classList.add("change");
})

close.addEventListener("click", () => {
    password_head
})

window.addEventListener("load", () => {
    setTimeout(() => {
        loading.classList.add("stop-load")

    }, 3000)
})

MenuToggle.addEventListener("click", () => {
    NavRes.classList.add("show");
})

close.addEventListener("click", () => {
    NavRes.classList.remove("show");
})

window.addEventListener("scroll", () => {
    if (scrollY > 50) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
})

window.addEventListener("scroll", () => {
    NavRes.classList.remove("show")
})

window.addEventListener("scroll", () => {
    NavRes.classList.remove("change")
})

$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeour: 50,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})


