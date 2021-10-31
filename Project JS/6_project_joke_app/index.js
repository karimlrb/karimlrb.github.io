const header = document.getElementById("header");
const content = document.getElementById("content");
const containerJoke = document.querySelector(".app");

function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((response) => response.json())
    .then((data) => {
      const joke = data.data.content;
      console.log(joke);

      header.textContent = joke.text_head;
      content.textContent = joke.text !== "" ? joke.text : joke.text_hidden;
    });
}

getJoke();

containerJoke.addEventListener("click", getJoke);
