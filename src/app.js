const hamburgerMenu = document.querySelector(".hamburger-menu");
const bar = document.querySelectorAll(".bar");
const menu = document.querySelector(".menu");
const description = document.querySelector(".desc");
const toggleBtn = document.querySelector(".toggle");

hamburgerMenu.addEventListener("click", () => {
  bar.forEach((bar) => bar.classList.toggle("change"));
  menu.classList.toggle("change");
  if (menu.classList.contains("change")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
});

toggleBtn.addEventListener("click", (e) => {
  if (e.target.src !== "http://127.0.0.1:5500/src/images/up.svg") {
    description.classList.add("active");
    e.target.src = "../src/images/up.svg";
    console.log(e.target);
  } else {
    description.classList.remove("active");
    console.log(e.target);
    e.target.src = "../src/images/down.svg";
  }

  console.log(e.target.src);
});
