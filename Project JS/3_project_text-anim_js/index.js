const target = document.getElementById("target");
let array = ["développeur", "horloger", "manager"];
let wordIndex = 0; 
let letterIndex = 0;


const createLetter = () => {
    const letter = document.createElement('span');
    target.appendChild(letter);
    // letter.style.color = "red";
    if(wordIndex === 0){
        letter.style.color = "red";
    }
    else if (wordIndex === 1){
        letter.style.color = "pink";
    }
    else {
        letter.style.color = "gray";
    }



    letter.textContent = array[wordIndex][letterIndex];
    
    setTimeout(() => {
        letter.remove();
    }, 2000)
};



const loop = () => {
    setTimeout(() => {
       if (letterIndex < array[wordIndex].length) {
           createLetter();
           letterIndex++;
           loop();
       }
       else {
           wordIndex++;
           
           if(wordIndex < array.length){
               letterIndex = 0;
               setTimeout(() => {
                   loop();
               }, 2000)
           }

           else {
               wordIndex = 0;
               letterIndex = 0;
               setTimeout(() => {
                   loop();
               }, 2000)
           }          
       }
    }, 60)
};
loop();
