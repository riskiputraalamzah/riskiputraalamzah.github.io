const toggleMenu = JS(".hamburger-menu");
const menu = JS(".my-menu");
const backdrop = JS(".my-backdrop");

toggleMenu.addEventListener("click", function () {
  toggleMenu.classList.toggle("show-menu");
  menu.classList.toggle("show-menu");
  backdrop.classList.toggle("show-menu");
});

//! typed introduction
var typed = new Typed(".text-typed", {
  // Waits 1000ms after typing "First"
  strings: ["Full Stack Developer", "Web Developer", "Freelancer"],
  loop: true,
  typeSpeed: 100,
  backDelay: 1000,
  backSpeed: 100,
  startDelay: 1000,
});

//! owl carousel

$("section#experience .owl-carousel").owlCarousel({
  loop: true,
  autoplay: false,
  dots: true,
  margin: 20,
  responsive: {
    0: {
      items: 1,
    },
    569: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
  },
});
$("section#about .owl-carousel").owlCarousel({
  loop: true,
  autoplay: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
  },
});

// check section
// give background violet for odd section
const sections = JS("section");
sections.forEach((section, i) => {
  if ((i + 1) % 2 == 0) {
    section.classList.add("violet");
  }
});

// give active menu if clicked
// const containerMenu = document.querySelector(".my-menu");
// const listMenu = document.querySelectorAll(".nav-link");

// containerMenu.addEventListener("click", function (e) {
// alert("ok");
// console.log(e.target);
// if (e.target.className == "nav-link") {
//   listMenu.forEach((menu) => {
//     menu.className = "nav-link";
//   });
//   e.target.classList.add("active");
// }

// });

// section about
const sliderAbouts = JS("section#about  .section-about");

sliderAbouts.forEach((slider, index) => {
  let rowAbout = slider.childNodes[3];

  if ((index + 1) % 2 == 1) {
    // kasih class 'left-image' untuk slider ganjil
    rowAbout.classList.add("right-image");
  } else {
    rowAbout.classList.add("left-image");
  }
});

//event click on scroll menu
const allMenu = JS(".link-menu");
allMenu.forEach((m) => {
  m.addEventListener("click", function (e) {
    toggleMenu.classList.toggle("show-menu");
    menu.classList.toggle("show-menu");
    backdrop.classList.toggle("show-menu");
    const idSection = e.target.getAttribute("href");
    const section = JS(`section${idSection}`);
    window.scrollTo(0, section.offsetTop - 85);

    e.preventDefault();
  });
});

// give active language when clicked
const dropdown = JS(".dropdown.bahasa ul");
const listLanguage = JS(".dropdown.bahasa ul li a.dropdown-item");

// dropdown.addEventListener("click", function (e) {
//   if (e.target.className == "dropdown-item") {
//     listLanguage.forEach((menu) => {
//       menu.className = "dropdown-item";
//     });
//     e.target.classList.add("active");
//   }
// });

// console.log(JS("svg")[0]);
let lastScroll = 0;
window.onscroll = function () {
  st = window.scrollY;
  if (st > 150 && st < lastScroll) {
    JS(".to-top").classList.add("show");
  } else {
    JS(".to-top").classList.remove("show");
  }

  lastScroll = st;
};

JS(".to-top").addEventListener("click", function () {
  window.scrollTo(0, 0);
});
