document.getElementById("button").addEventListener("click", function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        throw new Error(
          `something went wrong: ${response.status} ${response.statusText}`
        );
      }
    })
    .then((data) => {
      document.getElementById(
        "ul"
      ).innerHTML = `<li><img src="${data.message}" alt=""></li>`;
    })
    .catch((error) => console.log(error));
});
