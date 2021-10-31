const counterDisplay = document.querySelector("h3");
let counter = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 100 + 100 + "px";

  bubble.style.width = size;
  bubble.style.height = size;

  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.top = Math.random() * 100 + 50 + "%";

  // ici une ternaire, un if sur une ligne, test de condition ? valeur si vrai : valeur si faux
  const plusMinus = Math.random() > 0.5 ? 1 : -1;

  bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");
  // console.log(plusMinus);

  setTimeout(() => {
    bubble.remove();
  }, 8000);

  bubble.addEventListener("click", () => {
    bubble.remove();
    counter++;
    counterDisplay.textContent = counter;
  });
};

setInterval(bubbleMaker, 100);
