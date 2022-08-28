const hamburgerMenu = document.querySelector(".hamburger-menu");
const bar = document.querySelectorAll(".bar");
const menu = document.querySelector(".menu");

hamburgerMenu.addEventListener("click", () => {
  bar.forEach((bar) => bar.classList.toggle("change"));
  menu.classList.toggle("change");
  if (menu.classList.contains("change")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});
