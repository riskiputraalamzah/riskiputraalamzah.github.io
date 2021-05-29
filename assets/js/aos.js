const skills = document.querySelectorAll(".column-skill");
const progress = document.querySelectorAll(".progress-bar");
const cards = document.querySelectorAll("#experience .card");
const forms = document.querySelectorAll("#contact form .mb-3");
const sosmed = document.querySelectorAll("section.footer .sosial-media .cover");

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
sosmed.forEach((s, i) => {
  s.dataset.aos = "fade-down";

  s.dataset.aosDelay = (i + 1) * 100;
});
AOS.init({
  once: true,
});
