const button = document.querySelector("#button");

const ENDPOINT =
  "https://api.github.com/gists/6cc756ee8accdff80c194eda2c2ecb43";

async function getData() {
  const response = await fetch(ENDPOINT);
  const data = await response.json();

  return JSON.parse(data.files["me.json"].content);
}

function displayData({ name, age, hobbies }) {
  document.querySelector(".info").innerHTML = `
    <h3>Name: ${name}</h3>
    <p>Age: ${age}</p>
    <p>My hobbies: </p>
    <ul class="hobbies"></ul>
    `;
  hobbies.forEach((hobby) => {
    document.querySelector(".hobbies").innerHTML += `
        <li>${hobby}</li>
        `;
  });
}

button.addEventListener("click", async () => {
  const data = await getData();
  displayData(data);
});
