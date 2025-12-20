/**
 * @fileoverview Handles mobile menu toggle and header scroll behavior
 */

/** 
 * @type {HTMLButtonElement | null} 
 * @description Button that opens the mobile menu when clicked
 */
const hamburgerBtn = document.getElementById("hamburgerBtn")

/** 
 * @type {HTMLElement | null} 
 * @description The mobile menu element that slides in/out on small screens
 */
const mobileMenu = document.getElementById("mobileMenu")

/** 
 * @type {HTMLButtonElement | null} 
 * @description Button that closes the mobile menu when clicked
 */
const closeMenuBtn = document.getElementById("closeMenuBtn")

/** 
 * @type {HTMLElement | null} 
 * @description The header element of the page
 */
const header = document.querySelector('header')

/** 
 * @type {HTMLElement | null} 
 * @description Container inside the header that may have style changes on scroll
 */
const headerContainer = document.querySelector('.header-container')

/* Mobile menu functionality */

/**
 * Opens the mobile menu by adding the "open" class
 */
hamburgerBtn.addEventListener("click", () => {
    mobileMenu.classList.add("open")
})

/**
 * Closes the mobile menu by removing the "open" class
 */
closeMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("open")
})

/**
 * Closes the mobile menu when any link inside it is clicked
 */
document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("open")
    })
})

/* Header scroll behavior */

/**
 * Toggles the "scrolled" class on the header when the page is scrolled more than 50px
 */
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { 
    header.classList.add('scrolled')
  } else {
    header.classList.remove('scrolled')
  }
})

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { 
    header.classList.add('scrolled')
    headerContainer.classList.add('no-border')
  } else {
    header.classList.remove('scrolled')
    headerContainer.classList.remove('no-border')
  }
})
