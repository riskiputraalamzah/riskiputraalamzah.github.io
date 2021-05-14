const toggleMenu = document.querySelector(".hamburger-menu");
const menu = document.querySelector(".my-menu");
const backdrop = document.querySelector(".my-backdrop");
toggleMenu.addEventListener("click", function () {
  toggleMenu.classList.toggle("show-menu");
  menu.classList.toggle("show-menu");
  backdrop.classList.toggle("show-menu");
});

// typed introduction
var typed = new Typed(".text-typed", {
  // Waits 1000ms after typing "First"
  strings: ["Web Developer.", "Freelancer.", "Blogger."],
  loop: true,
  typeSpeed: 100,
  delaySpeed: 200,
  backSpeed: 100,
  startDelay: 500,
});
