//navbar
const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

//auto-typing
var typed = new Typed(".auto-type",{
  strings: ["Abbas Ibragimov.","Web Developer.","Designer."],
  typeSpeed: 90,
  backSpeed: 70,
  loop: true
})
