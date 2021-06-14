gsap.from(".my-nav", {
    duration: 2,
    y: "-100%",
    opacity: 0,
    ease: "bounce",
    onComplete: function() {
        document.querySelector(".my-nav").setAttribute('style', 'transition:0.5s');
    },
});