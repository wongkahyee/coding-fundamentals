const quote = document.querySelector("#quote");
const button = document.querySelector("#button");
const author = document.querySelector(".author")

const URL = "https://api.quotable.io/random";


window.addEventListener("load", async function getQuote() {
    const response = await fetch(URL);
    const data = await response.json();
  
    quote.textContent = data.content
    author.textContent = data.author
  })

button.addEventListener("click", async function getQuote() {
    const response = await fetch(URL);
    const data = await response.json();
  
    quote.textContent = data.content
    author.textContent = data.author
  }
)



