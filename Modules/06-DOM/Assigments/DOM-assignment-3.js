const wrapper = document.querySelector(".wrapper");
const slideOverContainer = document.querySelector(".slide-over-container")
const registerButton = document.querySelector("#register__button");
const closeButton = document.querySelector(".close-button");

registerButton.addEventListener("click", function showSlideOver() {
  wrapper.style.display = "block";
  slideOverContainer.classList.add("slide-in");
});

closeButton.addEventListener("click", function hideSlideOver() {
  wrapper.style.display = "none";
});
