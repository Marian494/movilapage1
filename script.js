/* 
    Guess the number:Steps.
    1-Generate a random number between 1 and 100.
    2-Number of tries
    3-Give the player a hint for number
    4-Retine numarul, salveazal ca sa poti vedea ce numere ai incercat
    5-Ceck if the number is corect
    6-If it's correct:
            I-Show a message of congratulations.
            II-Don't allow the player to introduce more numbers.
            III-Show a restart button.
    7-If it's incorrect and the player still tries:
            I-Mesaje ca ai pierdut.
            II-let the player tot try again
            III-creste numarul de incercari cu 1.
    8-If the player fails and doesn't have more tries
            I-tell the player:Game finished
            II-if you finish you can't write more
    9-Once the game restart make sure the logic of the game and User Interface is complete reseted and go back to step number 1;

*/
/*Generate the aleatorio number*/
let randomNumber = Math.floor(Math.random()*100)+1;
/*Elementele necesare */
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

/*Variabilele necesare sunt */
let guessCount = 1;
let ressetButton;


/*Functie pentru a vedea daca numarul este corect */
function checkGuess(){
    
    const userGuess = Number(guessField.value);

    if(guessCount === 1){
        guesses.textContent = "Previos";
    }
    guesses.textContent += userGuess +"";
    if( userGuess===randomNumber){
        lastResult.textContent= "Bravo bossule";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = " ";
        setGameOver();
    }else if(guessCount === 10){
        lastResult.textContent = "Nasol";
        setGameOver();
    }else{
        lastResult.textContent = "Nu e bene";
        lastResult.style.backgroundColor = "red";
        /* */
        if(userGuess <randomNumber){
                lowOrHi.textContent="The number is lower";
        }else if(userGuess > randomNumber){
                lowOrHi.textContent = "The number is very high";
        }
        guessCount++;
        guessField.value = "";
        guessField.focus();
    }

}
guessSubmit.addEventListener('click', checkGuess);
function setGameOver(){
        guessField.disabled = true;
        guessSubmit.disabled = true;
        ressetButton = document.createElement("button");
        ressetButton.textContent = "Start again";
        document.body.appendChild(ressetButton);
        ressetButton.addEventListener('click', resetGame);

}
function resetGame(){
        guessCount = 1;

        const resetParas = document.querySelectorAll(".resulParas p");
        for(const resetPara of resetParas){
                resetPara.textContent = " ";
        }

        ressetButton.parentNode.removeChild(ressetButton);
        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = " ";
        guessField.focus();

                lastResult.style.backgroundColor = "white";
                randomNumber = Math.floor(Math.random()*100)+1;




}
