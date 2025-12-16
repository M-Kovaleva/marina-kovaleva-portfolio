const hamburgerBtn = document.getElementById("hamburgerBtn")
const mobileMenu = document.getElementById("mobileMenu")
const closeMenuBtn = document.getElementById("closeMenuBtn")

hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.add("open")
})

closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("open")
})

document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("open")
    })
})
