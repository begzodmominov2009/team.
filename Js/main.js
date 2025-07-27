const MenuToggle = document.getElementById("toggle");
const NavRes = document.getElementById("nav_res");
const close = document.getElementById("close");
const header = document.getElementById("header");
MenuToggle.addEventListener("click", () => {
    NavRes.classList.add("show");
})

close.addEventListener("click", () => {
    NavRes.classList.remove("show");
})

window.addEventListener("scroll" , () => {
    if(scrollY > 110){
        header.classList.add("shrink");
    }else{
        header.classList.remove("shrink");
    }
})
