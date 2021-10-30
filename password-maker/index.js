const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = "AZERTYUIOPQSDFGHJKLMWXCVBN";
const dataNumbers = "0123456789";
const dataSymbols = "$^*!:;,&\"'(-_)";
const rangeValue = document.getElementById("password-length");
const passwordOutput = document.getElementById("password-output");

function generatePassord() {
  let data = [];
  let password = "";

  // le if classique
  if (lowercase.checked) {
    data.push(...dataLowercase);
  }
  // if sur une ligne
  if (uppercase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  //if ternaire
  symbols.checked ? data.push(...dataSymbols) : null;

  if (data.length === 0) {
    alert("Veuillez Cochez des cases");
    return;
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  passwordOutput.value = password;
  passwordOutput.style.color = "yellow";
  passwordOutput.style.fontWeight = "bold";
  passwordOutput.style.fontSize = "45px";

  generateButton.textContent = " Votre mot de passe a été crée !";

  setTimeout(() => {
    generateButton.textContent = "Générer un mot de passe";
  }, 1500);
}
// Pour les boutons & checkbox, si on leur met un id on ne les declares pas elles sont connu par js
generateButton.addEventListener("click", generatePassord);
