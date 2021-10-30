const form = document.querySelector('form');
const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
const progressBar = document.getElementById('progress-bar');
let pseudo;
let email;
let password;
let confirmPass;

const errorDisplay = (tag, message, valid) => {
    const container = document.querySelector("." + tag +"-container");
    const span = document.querySelector("." + tag + "-container > span");

    if(!valid) {
        container.classList.add('error');
        span.textContent = message;
    } else {
        container.classList.remove('error');
        span.textContent = message;
    }
}
// Contôle du pseudo
const pseudoChecker = (value) => {
    if (value.length > 0 && (value.length < 3 || value.length > 20)) {
        errorDisplay("pseudo", "Le pseudo doit contenir entre 3 et 20 caractères");
        pseudo = null;

    } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
        errorDisplay("pseudo", "Le pseudo ne doit pas contenir de caractères spéciaux");
        pseudo = null;
    }else {
        errorDisplay("pseudo", "", true);
        pseudo = value;
    }
};
// Contôle de l'email
const emailChecker = (value) => {
    if(!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)){
        errorDisplay("email", "Veuillez entrer un email valide");
        email = null;
    } else {
        errorDisplay("email", "", true);
        email = value;
    }
};
// Contôle du mot de passe
const passwordChecker = (value) => {
    progressBar.classList="";
    if(!value.match(/^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/)) {
        errorDisplay("password", "Le mot de passe doit contenir au moins 8 caractères, une maj, un chiffre, un cara spécial");
        password = null;
        progressBar.classList.add('progressRed');

    } else if (value.length < 12) {
        progressBar.classList.add('progressBlue');
        errorDisplay("password", "", true)
        password = value;

    } else {
        progressBar.classList.add('progressGreen');
        password = value;
    }
    // SI jamais confirmPass n'est pas vide (donc a true) joue moi confirmChecker pour que les mdp soit tjr les mêmes
    if(confirmPass) confirmChecker(confirmPass)  
};
// Contôle du confirme mot de passe
const confirmChecker = (value) => {
    if(value !== password){
        errorDisplay("confirm", "Les mots de passe doivent être identique");
        confirmPass = false; 
    }
    else {
        errorDisplay("confirm", "", true);
        confirmPass = true; 
    }
};

inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
        // console.log(input.id);
        switch(input.id) {
            case "pseudo" :
               pseudoChecker(e.target.value);
               
               break; 
            case "email" :
                emailChecker(e.target.value);
                break;
            case "password" :
                passwordChecker(e.target.value); 
                break;
            case "confirm" :
                confirmChecker(e.target.value);
                break;
                default :
                null;
        }
    });
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(pseudo  && email  && password  && confirmPass) {

        // En dessous on a la forme "factoriser" de cette expression
        // pseudo: pseudo,
        // email: email,
        // password: password,
        const data = {
            pseudo,
            email,
            password,
        };
        alert("Votre inscription est validée !")
        inputs.forEach((input) => input.value = "");
        progressBar.classList.remove('progressGreen', 'progressBlue');
        pseudo = null;
        email = null;
        password = null;
        confirmPass = null;
    } else {
        alert("Veuillez remplir tous les champs correctement");
    }
})