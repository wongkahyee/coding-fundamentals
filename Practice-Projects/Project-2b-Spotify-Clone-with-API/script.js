let TOKEN = "";
const client_id = "4c0e2f0851cd4e3f888f1b9ee9205660";
const redirect_url = window.location.origin;
const scope = "user-read-private user-read-email user-top-read";

function authorize() {
  let url = "https://accounts.spotify.com/authorize";
  url += "?response_type=token";
  url += "&client_id=" + encodeURIComponent(client_id);
  url += "&scope=" + encodeURIComponent(scope);
  url += "&redirect_uri=" + encodeURIComponent(redirect_url);
  window.open(url, "_self");
}

function extractTokenFromURI() {
  const hash = window.location.hash;
  if (hash && hash.includes("access_token")) {
    const url = hash.replace("#access_token=", "");
    const chunks = url.split("&");
    const token = chunks[0];
    return token;
  }
  return null;
}

function generateCard(image, title, subtitle, href) {
  return `
      <a class="card" href="${href}" target="_blank">
          <img
              src="${image}"
              alt="peaceful piano"
              srcset=""
          />
          <span class="mdi mdi-play mdi-36px"></span>
          <div class="title">${title}</div>
          <div class="subtitle">${subtitle}</div>
      </a>
      `;
}

async function fetchUserTopItems() {
  try {
    const endpoint = "https://api.spotify.com/v1/me/top/tracks";
    const response = await fetch(endpoint + "?limit=6", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + TOKEN,
      },
    });
    const data = await response.json();
    console.log("User top items", data);
    displayUserTopItems(data);
  } catch (error) {
    alert("Something went wrong.");
    console.log(error);
  }
}

async function fetchNewReleases() {
  try {
    const endpoint = "https://api.spotify.com/v1/browse/new-releases";
    const response = await fetch(endpoint + "?limit=6", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + TOKEN,
      },
    });
    const data = await response.json();
    console.log("New Releases", data);
    displayNewReleases(data);
  } catch (error) {
    alert("Something went wrong.");
    console.log(error);
  }
}

async function fetchFeaturedaPlaylists() {
  try {
    const endpoint = "https://api.spotify.com/v1/browse/featured-playlists";
    const response = await fetch(endpoint + "?limit=6", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + TOKEN,
      },
    });
    const data = await response.json();
    console.log("Featured playlists", data);
    displayFeaturedPlaylists(data);
  } catch (error) {
    alert("Something went wrong.");
    console.log(error);
  }
}

function displayUserTopItems(data) {
  const section = document.querySelector("#your-top-items");
  const sectionTitle = section.querySelector(".title");
  const sectionSubtitle = section.querySelector(".subtitle");
  const sectionWrapper = section.querySelector(".card-wrapper");
  sectionTitle.textContent = "Your Top Items";
  sectionSubtitle.textContent = "Based on your recent listening";
  for (let i = 0; i < data.items.length; i++) {
    const track = data.items[i];
    const image = track.album.images[1].url;
    const title = track.name;
    const subtitle = track.album.artists[0].name;
    const href = track.album.external_urls.spotify;

    sectionWrapper.innerHTML += generateCard(image, title, subtitle, href);
  }
}

function displayNewReleases(data) {
  const section = document.querySelector("#new-releases");
  const sectionTitle = section.querySelector(".title");
  const sectionSubtitle = section.querySelector(".subtitle");
  const sectionWrapper = section.querySelector(".card-wrapper");
  sectionTitle.textContent = "New Releases";
  sectionSubtitle.textContent = "New releases from Spotify";
  for (let i = 0; i < data.albums.items.length; i++) {
    const track = data.albums.items[i];
    const image = track.images[1].url;
    const title = track.name;
    const subtitle = track.artists[0].name;
    const href = track.external_urls.spotify;

    sectionWrapper.innerHTML += generateCard(image, title, subtitle, href);
  }
}

function displayFeaturedPlaylists(data) {
  const section = document.querySelector("#featured-playlists");
  const sectionTitle = section.querySelector(".title");
  const sectionSubtitle = section.querySelector(".subtitle");
  const sectionWrapper = section.querySelector(".card-wrapper");
  sectionTitle.textContent = "Featured Playlists";
  sectionSubtitle.textContent = "Featured playlists from Spotify";
  for (let i = 0; i < data.playlists.items.length; i++) {
    const track = data.playlists.items[i];
    const image = track.images[0].url;
    const title = track.name;
    const subtitle = track.description;
    const href = track.external_urls.spotify;

    sectionWrapper.innerHTML += generateCard(image, title, subtitle, href);
  }
}

window.addEventListener("load", function () {
  TOKEN = extractTokenFromURI();
  if (TOKEN) {
    console.log("Token", TOKEN);
    fetchUserTopItems();
    fetchNewReleases();
    fetchFeaturedaPlaylists();
  } else {
    authorize();
  }
});
