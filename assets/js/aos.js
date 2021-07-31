const skills = document.querySelectorAll(".column-skill");
const progress = document.querySelectorAll(".progress-bar");
const cards = document.querySelectorAll("#experience .card");
// const forms = document.querySelectorAll("#contact form .mb-3");
// const sosmed = document.querySelectorAll("section.footer .sosial-media .cover");
let times = {
  CARDS: {
    time: 100,
    oriTime: 100,
    max: 300,
  },
  SKILLS: {
    time: 100,
    oriTime: 100,
    max: 400,
  },
  PROGRESS: {
    time: 200,
    max: 500,
    oriTime: 200,
  },
};
skills.forEach((skill) => {
  skill.dataset.aos = "fade-right";

  skill.dataset.aosDelay = times.SKILLS.time;

  times.SKILLS.time += 100;

  if (Number(skill.getAttribute("data-aos-delay")) >= times.SKILLS.max) {
    times.SKILLS.time = times.SKILLS.oriTime;
  }
});
progress.forEach((p) => {
  p.dataset.aos = "fade-left";

  p.dataset.aosDelay = times.PROGRESS.time;

  times.PROGRESS.time += 100;

  if (Number(p.getAttribute("data-aos-delay")) >= times.PROGRESS.max) {
    times.PROGRESS.time = times.PROGRESS.oriTime;
  }
});

cards.forEach((card) => {
  card.dataset.aos = "fade-up";
  card.dataset.aosDelay = times.CARDS.time;

  times.CARDS.time += 100;

  if (Number(card.getAttribute("data-aos-delay")) >= times.CARDS.max) {
    times.CARDS.time = times.CARDS.oriTime;
  }
});

//   forms.forEach((form, i) => {
//     form.dataset.aos = (i + 1) % 2 == 1 ? "fade-right" : "fade-left";

//     form.dataset.aosDelay = i + 1 != forms.length ? (i + 1) * 100 : 100;
//   });

// sosmed.forEach((s, i) => {
//   s.dataset.aos = "fade-down";
//   s.dataset.aosDelay = (i + 1) * 150;
//   s.dataset.aosDuration = 1500;
// });
AOS.init({
  once: true,
});
