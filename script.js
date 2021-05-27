// AOS Inintialitation
const skills = document.querySelectorAll(".column-skill");
const progress = document.querySelectorAll(".progress-bar");
const cards = document.querySelectorAll("#experience .card");
const forms = document.querySelectorAll("#contact form .mb-3");
skills.forEach((skill) => {
  skill.dataset.aos = "fade-right";

  skill.dataset.aosDelay = 100;
});
progress.forEach((p) => {
  p.dataset.aos = "fade-left";

  p.dataset.aosDelay = 200;
});

cards.forEach((card, i) => {
  card.dataset.aos = "flip-left";

  card.dataset.aosDelay = (i + 1) * 100;
});

forms.forEach((form, i) => {
  form.dataset.aos = (i + 1) % 2 == 1 ? "fade-right" : "fade-left";

  form.dataset.aosDelay = i + 1 != forms.length ? (i + 1) * 100 : 100;
});
AOS.init({
  once: true,
});

// end
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
  if ((i + 1) % 2 == 0) {
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

// section about
const sliderAbouts = document.querySelectorAll("section#about  .carousel-item");

sliderAbouts.forEach((slider, index) => {
  let rowAbout = slider.childNodes[3];

  if ((index + 1) % 2 == 1) {
    // kasih class 'left-image' untuk slider ganjil
    rowAbout.classList.add("right-image");
  } else {
    rowAbout.classList.add("left-image");
  }
});
