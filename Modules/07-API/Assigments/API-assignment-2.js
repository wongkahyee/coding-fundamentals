const button = document.querySelector("#button");
button.addEventListener("click", showGithubUserProfile);

async function showGithubUserProfile() {
  let username = document.querySelector(".user-id").value;
  const URL = "https://api.github.com/users/" + username;

  const response = await fetch(URL);
  const data = await response.json();

  if (!data.login) {
    alert("User Not Found!");
  } else {
    document.querySelector("#user-image").src = data.avatar_url;
    document.querySelector(".github-link").href = data.html_url;
    document.querySelector(".username").textContent = data.login;
    document.querySelector(".bio").textContent = data.bio;

    let dateJoined = data.created_at;
    let joinedAt = dateJoined.slice(0, 10);
    document.querySelector(".date-joined").textContent =
      "Joined at : " + joinedAt;
  }
}
