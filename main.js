const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".nested-navigation-wrapper");

menuToggle.addEventListener("click", (e) => {
  e.preventDefault();
  menuToggle.classList.toggle("is-active");
  menu.classList.toggle("is-active");
});
