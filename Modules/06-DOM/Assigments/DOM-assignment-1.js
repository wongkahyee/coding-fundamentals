const addButton = document.querySelector(".add__button");
addButton.addEventListener("click", showNotification);

function showNotification() {
  const appear = document.querySelector(".notification");
  appear.classList.add("show");
}

const closeButton = document.querySelector(".cta__button");
closeButton.addEventListener("click", closeNotification);

function closeNotification() {
  const disappear = document.querySelector(".notification");
  disappear.classList.remove("show");
}
