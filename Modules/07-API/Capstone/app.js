window.addEventListener("load", fetchData());

function generateCard(image, name, bio, href) {
  return `
      <section id="card">
          <img src="${image}">
          <h3>${name}</h3>
          <div class = "bio-card">
            <p>${bio}</p>
          </div>
          <button id="button">
              <a href="${href}" target="_blank">Profile</a>
          </button>
      </section>
    `;
}

async function fetchData() {
  const response = await fetch("https://api.thecatapi.com/v1/breeds");
  const data = await response.json();

  for (let i = 0; i < data.length; i++) {
    const image = data[i].image.url;
    const name = data[i].name;
    const bio = data[i].description;
    const href = data[i].cfa_url;

    document.querySelector("main").innerHTML += generateCard(
      image,
      name,
      bio,
      href
    );
  }
}
