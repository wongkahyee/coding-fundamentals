const navBar = document.querySelector(".nav-bar");
const navSensor = document.querySelector(".nav-sensor");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", function () {
  if (lastScrollY < window.scrollY) {
    navBar.classList.add("slide_up");
    navBar.classList.remove("slide_down")
  } else {
    navBar.classList.add("slide_down");
    navBar.classList.remove("slide_up")
  }
  lastScrollY = window.scrollY;
});

navSensor.addEventListener("mousemove", () => {
    navBar.classList.add("slide_down");
    navBar.classList.remove("slide_up");
});

navSensor.addEventListener("mouseleave", () => {
  setTimeout(addDelay);
});

function addDelay() {
  navBar.classList.remove("slide_down");
  navBar.classList.add("slide_up");
}
