fetch("https://xkcd.now.sh/?comic=latest")
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
    console.log(data);
    document.querySelector(
      "body"
    ).innerHTML = `<img src="${data.img}" alt="">`;
  })
  .catch((error) => console.log(`${error}`));
