"use strict"

window.addEventListener("load", startApp);

let minValue;
let maxValue;
let guess;
let guessCount;

function startApp() {
    hideGameBtns();
    hideGuessHistory();
    document.querySelector("#start-btn").addEventListener("click", startGame);
}

function hideGameBtns() {
    document.querySelector("#reply-btns").classList.add("hidden");
}

function showGameElements() {
    document.querySelector("#reply-btns").classList.remove("hidden");
    document.querySelector("#guesses").classList.remove("hidden");
}

function hideGuessHistory() {
    document.querySelector("#guesses").classList.add("hidden");
}

function startGame() {
    minValue = 0;
    maxValue = 100;
    guessCount = 0;

    document.querySelector("#start-paragraph").classList.add("hidden");
    document.querySelector("#btn-too-high").addEventListener("click", guessLower)
    document.querySelector("#btn-too-low").addEventListener("click", guessHigher)
    document.querySelector("#btn-correct").addEventListener("click", correctGuess)

    document.querySelector("#guesses").innerHTML = "";

    showGameElements();
    guessNumber();
}

function guessNumber() {
    if (maxValue == minValue) { // hvis maxValue og minValue er det samme så har "tænkeren" enten glemt sit tal eller snyder
        cheaterMsg();
        console.log("Du har forsøgt at snyde men... computer says no!")
        return; // exit guessNumber() tidligt hvis "if" statement er true
    }
    guess = Math.floor((maxValue + minValue) / 2);
    guessCount++;
    console.log(`minVal: ${minValue} \nmaxVal: ${maxValue} \nguess(mid): ${guess}`)
    const html = `
                <li>Jeg gætter på ${guess}</li>
                `;
    
    document.querySelector("#guesses").insertAdjacentHTML("afterbegin", html);
}

function guessHigher() {
    minValue = guess + 1; // +1 fordi computeren allerede har gættet på det tal som minValue sættes til
    guessNumber();
}

function guessLower() {
    maxValue = guess;
    guessNumber();
}

function correctGuess() {
    let correctComment = getCorrectGuessComment(guessCount);
    const html = `
                <li>Hah, gotcha!! Det var ${guess}, ${correctComment} :)</li>
                `;

    document.querySelector("#guesses").insertAdjacentHTML("afterbegin", html);
    hideGameBtns();
    document.querySelector("#start-paragraph").classList.remove("hidden");
}

function getCorrectGuessComment(guessCount) {
    if (guessCount <= 3) {
        return "fantastisk"
    } else if (guessCount <= 5) {
        return "meget godt"
    } else {
        return "ok... "
    }
}

function cheaterMsg() {
    const html = `
    <li>Du må ikke ombestemme dig undervejs i spillet! Det tal du tænkte på burde være ${guess}?</li>
    `;
    
    document.querySelector("#guesses").insertAdjacentHTML("afterbegin", html);
    hideGameBtns();
    document.querySelector("#start-paragraph").classList.remove("hidden");
}