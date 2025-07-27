const MenuToggle = document.getElementById("toggle");
const NavRes = document.getElementById("nav_res");
const close = document.getElementById("close");

MenuToggle.addEventListener("click", () => {
    NavRes.classList.add("show");
})

close.addEventListener("click", () => {
    NavRes.classList.remove("show");
})