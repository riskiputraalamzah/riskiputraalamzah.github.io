const toggleMenu = JS(".hamburger-menu");
const menu = JS(".my-menu");
const backdrop = JS(".my-backdrop");
const navMenu = JS(".my-menu .list-menu .link-menu");

toggleMenu.addEventListener("click", function () {
  toggleMenu.classList.toggle("show-menu");
  menu.classList.toggle("show-menu");
  backdrop.classList.toggle("show-menu");
});

//! typed introduction
var typed = new Typed(".text-typed", {
  // Waits 1000ms after typing "First"
  strings: ["Full Stack Developer", "Junior Web Developer"],
  loop: true,
  typeSpeed: 100,
  backDelay: 1000,
  backSpeed: 100,
  startDelay: 1000,
});

//scrollspy

//! owl carousel
$(document).ready(function () {
  sliderAbout();
});
$(window).on("resize", function () {
  sliderAbout();
});

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

function sliderAbout() {
  if ($(window).width() < 768) {
    $("section#about .tab-content .section-about").addClass("tab-pane fade");
  } else {
    $("section#about .tab-content .section-about").removeClass("tab-pane fade");
  }
}

// check section
// give background violet for odd section
const sections = JS("section");
sections.forEach((section, i) => {
  if ((i + 1) % 2 == 1) {
    section.classList.add("violet");
  }
});

// section about
const sliderAbouts = document.querySelectorAll("section#about  .section-about");

sliderAbouts.forEach((slider, index) => {
  let rowAbout = slider.children[0];

  if ((index + 1) % 2 == 1) {
    // kasih class 'left-image' untuk slider ganjil
    rowAbout.classList.add("right-image");
  } else {
    rowAbout.classList.add("left-image");
  }
});

//event click on scroll menu

let allMenu = Array.from(JS(".link-menu"));
const logo = JS(".my-nav .logo");
allMenu.push(logo);

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

// console.log(JS("svg")[0]);
let lastScroll = 0;
window.onscroll = function () {
  st = window.scrollY;
  // for shadow navbar
  st > 50
    ? JS(".my-nav").classList.add("box-shadow")
    : JS(".my-nav").classList.remove("box-shadow");

  // for to top button
  if (st > 150 && st < lastScroll) {
    JS(".to-top").classList.add("show");
  } else {
    JS(".to-top").classList.remove("show");
  }

  lastScroll = st;

  myScrollspy(st);
};

JS(".to-top").addEventListener("click", function () {
  window.scrollTo(0, 0);
});

// submit contact me
const scriptURL =
  "https://script.google.com/macros/s/AKfycbwbztdn-jt-TuaIzJXj9_RBUy7ajkRSyxBoYPn3i2fDQhJM6VpEICDfomUWVVFGitLl/exec";
const form = document.forms["contact-me"];
const button = JS("form#contact-me button");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  button.innerHTML = textSending();
  button.setAttribute("disabled", true);
  let callbackPost = (obj) => {
    result(obj);
  };

  postInput(scriptURL, form, callbackPost);

  let result = (obj) => {
    document.querySelector(".place-alert").innerHTML = alertContactMe(obj);
    button.removeAttribute("disabled");
    button.innerHTML = "Send";
    form.reset();
    const section = JS(`section#contact`);
    window.scrollTo(0, section.offsetTop - 85);
  };

  //
});

function alertContactMe(obj) {
  return `<div
              class="alert ${obj.alertColor} alert-dismissible fade show"
              role="alert"
            >
              <strong>${obj.title}  !!!</strong> <span>${obj.msg}</span>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
              ></button>
            </div>`;
}
function postInput(token, forms, callback) {
  fetch(token, { method: "post" }, new FormData(forms))
    .then((response) => {
      console.log(response);
      callback({
        alertColor: "alert-success",
        title: "Success",
        msg: "Your message has been send successfully",
      });
    })
    .catch((error) => {
      console.log(error.message);
      return callback({
        alertColor: "alert-danger",
        title: "Failed",
        msg: "Server is busy, Please try again",
      });
    });
}
function textSending() {
  return ` <div class="spinner-border spinner-border-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                  Sending`;
}
window.onload = function () {
  document.querySelector(".loader").classList.add("close");
};

function myScrollspy(scroller) {
  navMenu.forEach((nav) => {
    let section = document.querySelector(`section${nav.getAttribute("href")}`);
    nav.classList.remove("active");
    let offTop = section.offsetTop;
    let height = offTop + section.clientHeight + 50;
    if (scroller > offTop - 200 && scroller < height) {
      nav.classList.add("active");
    }
  });
}
