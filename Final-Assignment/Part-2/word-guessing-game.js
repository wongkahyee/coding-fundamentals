const inputs = document.querySelector(".inputs");
const resetButton = document.querySelector(".reset-button");
const hint = document.querySelector(".hint span");
const typingInput = document.querySelector(".typing-input");
const wrongLetter = document.querySelector(".wrong-letter span");
const guessLeft = document.querySelector(".guess-left span");
let word,
  maxGuesses,
  incorrects = [],
  corrects = [];

function randomWord() {
  let randomObject = wordList[Math.floor(Math.random() * wordList.length)];
  word = randomObject.word;
  maxGuesses = 8;
  incorrects = [];
  corrects = [];
  console.log(word);

  hint.innerText = randomObject.hint;
  guessLeft.innerText = maxGuesses;
  wrongLetter.innerText = incorrects;

  let html = "";
  for (let i = 0; i < word.length; i++) {
    html += `<input type="text" disabled>`;
  }
  inputs.innerHTML = html;
}
randomWord();

function initGame(e) {
  let key = e.target.value;
  if (
    key.match(/^[A-Za-z]+$/) &&
    !incorrects.includes(` ${key}`) &&
    !corrects.includes(key)
  ) {
    if (word.includes(key)) {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === key) {
          document.querySelector(".correct-letter").play();
          corrects.push(key);
          inputs.querySelectorAll("input")[i].value = key;
        }
      }
    } else {
      maxGuesses--;
      incorrects.push(` ${key}`);
    }
    wrongLetter.innerText = incorrects;
    guessLeft.innerText = maxGuesses;
  }
  typingInput.value = "";

  setTimeout(function () {
    if (corrects.length === word.length) {
      document.querySelector(".correct-word").play();
      alert(`Congrats! You found the word ${word.toUpperCase()}`);
      randomWord(); //allows the game to reset
    } else if (maxGuesses < 1) {
      document.querySelector(".game-over").play();
      alert("Game Over! No more remaining guessess");
      for (let i = 0; i < word.length; i++) {
        inputs.querySelectorAll("input")[i].value = word[i];
      }
    }
  });
}

resetButton.addEventListener("click", randomWord);
document.addEventListener("keydown", function () {
  typingInput.focus();
});
typingInput.addEventListener("input", initGame);