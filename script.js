"use strict"

window.addEventListener("load", startApp);

let guess;

function startApp() {
    hideGameElements();
    document.querySelector("#start-btn").addEventListener("click", startGame);
    document.querySelector("#guesses").classList.add("hidden");
}

function hideGameElements() {
    document.querySelector("#reply-btns").classList.add("hidden");
}

function showGameElements() {
    document.querySelector("#reply-btns").classList.remove("hidden");
    document.querySelector("#guesses").classList.remove("hidden");
}

function startGame() {
    document.querySelector("#start-paragraph").classList.add("hidden");
    document.querySelector("#btn-too-high").addEventListener("click", guessNumber)
    document.querySelector("#btn-too-low").addEventListener("click", guessNumber)
    document.querySelector("#btn-correct").addEventListener("click", correctGuess)

    document.querySelector("#guesses").innerHTML = "";

    showGameElements();
    guessNumber();
}

function guessNumber() {
    guess = Math.ceil(Math.random() * 100);
    const html = `
                <li>Jeg gætter på ${guess}</li>
                `;
    
    document.querySelector("#guesses").insertAdjacentHTML("afterbegin", html);
}

function correctGuess() {
    const html = `
                <li>Hah, gotcha!! It was ${guess} :)</li>
                `;

    document.querySelector("#guesses").insertAdjacentHTML("afterbegin", html);
    hideGameElements();
    document.querySelector("#start-paragraph").classList.remove("hidden");
}