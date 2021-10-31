const buttons = document.querySelectorAll(".btn");
const result = document.getElementById("result");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    result.textContent += e.target.id;
  });
});

equal.addEventListener("click", () => {
  result.textContent = eval(result.textContent);
});

clear.addEventListener("click", () => {
  result.textContent = "";
});

// document.body.onclick = () => {
//     console.log('ca marche! ');
// }

// document.body.onclick = () => {
//     console.log('c\'est chaud ');
// }

document.body.addEventListener("click", () => {
  console.log("click 1");
});
