const wrapper = document.querySelector(".wrapper");
const palette = document.querySelector(".palette");

document.addEventListener("keydown", function (event) {
  console.log("keydown", event);

  if (event.ctrlKey && event.key === "k") {
    event.preventDefault();
    wrapper.style.display = "block";
    palette.classList.remove("fade-out")
    palette.classList.add("fade-in");
  } 
});
