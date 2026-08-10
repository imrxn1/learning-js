"use strict";

const secretNumberFunc = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = secretNumberFunc();
let score = 20;
let highScore = 0;

console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const displayScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const displayNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //when there is no input
  if (!guess) {
    displayMessage("⛔ No Number!");

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage("🥳 Correct Number!");

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    displayNumber(secretNumber);

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      displayScore(score);
    } else {
      displayMessage("😔 You lost the game!");
      displayScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = secretNumberFunc();
  score = 20;

  displayMessage("Start guessing...");

  displayScore(score);
  displayNumber("?");
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";

  console.log("reset", secretNumber);
});
