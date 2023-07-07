const GITHUB_URL = "https://api.github.com/users/KumaCatz";

// fetching the info from the website:
fetch(GITHUB_URL)
  //storing the info to be used:
  .then(function(response) {
    return response.json();
  })
  //declaring variables and assigning the data received:
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
    const profileName = document.getElementById("profile-name");
    profileName.innerHTML = data.login;
  });

