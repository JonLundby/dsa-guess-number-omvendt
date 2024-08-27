"use strict"

window.addEventListener("load", startApp);

function startApp() {
    console.log("app kører!")
    hideGameElements();
    document.querySelector("#start-btn").addEventListener("click", startGame);
}

function hideGameElements() {
    document.querySelector("#reply-btns").classList.add("hidden")
    document.querySelector("#guesses").classList.add("hidden")
}

function showGameElements() {
    document.querySelector("#reply-btns").classList.remove("hidden");
    document.querySelector("#guesses").classList.remove("hidden");
}

function startGame() {
    document.querySelector("#start-paragraph").classList.add("hidden");
    showGameElements();
}