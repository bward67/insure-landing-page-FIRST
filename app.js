const menuToggle = document.querySelector(".nav-mobile-toggle-menu");
const hamburgerIcon = document.querySelector(".hamburger-icon");
const closeIcon = document.querySelector(".close-icon");

hamburgerIcon.addEventListener("click", () => {
  menuToggle.classList.add("show");
  closeIcon.classList.add("show");
});

closeIcon.addEventListener("click", () => {
  menuToggle.classList.remove("show");
  closeIcon.classList.remove("show");
  hamburgerIcon.classList.add("show");
});
