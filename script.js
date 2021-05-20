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
  strings: ["Full Stack Developer", "Web Developer", "Freelancer"],
  loop: true,
  typeSpeed: 100,
  delaySpeed: 200,
  backSpeed: 100,
  startDelay: 500,
});

// check section
// give background violet for odd section
const sections = document.querySelectorAll("section");
sections.forEach((section, i) => {
  if ((i + 1) % 2 == 1) {
    section.classList.add("violet");
  }
});

// give active menu if clicked
const containerMenu = document.querySelector(".my-menu");
const listMenu = document.querySelectorAll(".link-menu");

containerMenu.addEventListener("click", function (e) {
  // alert("ok");
  console.log(e.target);
  if (e.target.className == "link-menu") {
    listMenu.forEach((menu) => {
      menu.className = "link-menu";
    });
    e.target.classList.add("active");
  }
});
