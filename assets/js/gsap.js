gsap.from(".my-nav", { duration: 2, y: "-100%", opacity: 0, ease: "bounce" });
// fix bug gsap for my nav
setTimeout(() => {
  document.querySelector(".my-nav").removeAttribute("style");
}, 3000);
