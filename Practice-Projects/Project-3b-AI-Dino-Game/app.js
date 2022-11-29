const rootElem = document.querySelector(":root");
const gameElem = document.querySelector("#game");
const dinoElem = gameElem.querySelector(".dino");
const scoreElem = gameElem.querySelector(".score");
const groundElem = gameElem.querySelector(".ground");
const cactusElem = groundElem.querySelector(".cactus");

let gameSpeed = 4000;
let jumpSpeed = (gameSpeed / 10) * 2;
const maxJump = 250;
const speedScale = 10;

let score = 0;
let gameStarted = false;
let gameOver = false;

let jumping = false;
let selfPlayMode = false;

// RooElem, "--game-speed", gameSpeed
function setCustomProperty(elem, prop, value) {
  elem.style.setProperty(prop, value);
}

function handleJump(e) {
  if (e.code !== "Space") return;
  let audio = document.querySelector(".audio-jump");
  audio.play();
  jumping = true;
  dinoElem.classList.add("jump");
  dinoElem.addEventListener("animationend", function () {
    jumping = false;
    dinoElem.classList.remove("jump");
  });
}

function shouldJump() {
  const minGap = 250;
  let cactusXPos = cactusElem.getBoundingClientRect().x;

  if (cactusXPos <= 0 || jumping) return false;
  if (cactusXPos < minGap) {
    return true;
  } else return false;
}

let gameID;
function startGame() {
  gameStarted = true;
  gameElem.classList.add("game-started");
  document.addEventListener("keydown", handleJump);
  gameID = setInterval(() => {
    updateGame();
  }, 100);
}

function endGame() {
  let audio = document.querySelector(".audio-die");
  audio.play();
  gameOver = true;
  gameElem.classList.add("game-over");
  document.removeEventListener("keydown", handleJump);
  clearInterval(gameID);
}

// As long as the game is running, this function is called
function updateGame() {
  setCustomProperty(rootElem, "--game-speed", gameSpeed);
  setCustomProperty(rootElem, "--jump-speed", jumpSpeed);
  setCustomProperty(rootElem, "--max-jump", maxJump);
  setCustomProperty(rootElem, "--speed-scale", speedScale);
  if (selfPlayMode) {
    if (shouldJump()) {
      handleJump({ code: "Space" });
    }
  }

  // Update the score
  updateScore();
  // Update the cactus
  updateCactus();
  // Check if game over
  if (checkGameOver()) {
    endGame();
    return;
  }
}

function isCollision(dinoRect, cactusRect) {
  // AABB - Axis-aligned bounding box
  return (
    dinoRect.x < cactusRect.x + cactusRect.width &&
    dinoRect.x + dinoRect.width > cactusRect.x &&
    dinoRect.y < cactusRect.y + cactusRect.height &&
    dinoRect.y + dinoRect.height > cactusRect.y
  );
}

function checkGameOver() {
  if (gameOver) return true;
  const dinoRect = dinoElem.getBoundingClientRect();
  const cactusRect = cactusElem.getBoundingClientRect();
  if (isCollision(dinoRect, cactusRect)) {
    return true;
  } else return false;
}

function updateScore() {
  score += 1;
  if (score % 100 === 0) {
    let audio = document.querySelector(".audio-point");
    audio.play();
    gameSpeed -= speedScale;
    jumpSpeed = (gameSpeed / 10) * 2;
  }

  let currentScoreElem = scoreElem.querySelector(".current-score");
  currentScoreElem.innerText = score.toString().padStart(5, "0");
}

function updateCactus() {
  let cactusXPos = cactusElem.getBoundingClientRect().x;
  const isOffScreen = cactusXPos > window.innerWidth;
  if (isOffScreen === false) return;

  const cacti = ["cactus-small-1", "cactus-small-2", "cactus-small-3"];
  const randomNum = Math.floor(Math.random() * cacti.length);
  const cactus = cacti[randomNum];
  cactusElem.classList.remove(
    "cactus-small-1",
    "cactus-small-2",
    "cactus-small-3"
  );
  cactusElem.classList.add(cactus);
}

function fitScreen() {
  const width = window.innerWidth;
  const height = window.innerHeight / 2;
  gameElem.style.width = width + "px";
  gameElem.style.height = height + "px";
  gameElem.style.zoom = 1.5;
}

window.addEventListener("load", function () {
  fitScreen();
  window.addEventListener("resize", fitScreen);

  const selfPlayElem = document.querySelector("#selfplay");
  selfPlayElem.addEventListener("change", function () {
    selfPlayMode = selfPlayElem.checked;
  });
  document.addEventListener("keydown", startGame, { once: true });
});
