const navMenu = document.querySelector(".nav_bar");

document.querySelector(".nav_hamburger").addEventListener('click', () => {
  navMenu.classList.toggle("nav_bar__mobile");
})

document.querySelector(".nav_bar, li").addEventListener('click', () => {
  navMenu.classList.remove("nav_bar__mobile");
})