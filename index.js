// ///dark mode
let btn = document.getElementById("theme_btn");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode");
});
// -------------------
let secretnum;
let lives;
let timer;
let timeIntervel;
let maxRange;
let score = 0;
let attempt = 0;

let mode = document.querySelector(".mode");
let mode2 = document.querySelector(".game-panel-2");
let mode3 = document.querySelector(".game-panel-3");
let selection_panel = document.querySelector(".game-card");

let easy = document.querySelector(".easy");
let medium = document.querySelector(".medium");
let hard = document.querySelector(".hard");

const timerDisplay = document.querySelector("#timer");
const livesDisplay = document.querySelector("#lives");
const scoreDisplay = document.querySelector("#score");
const attemptsDisplay = document.querySelector("#attempts");
const modeText = document.querySelector("#modeText");
const guessInput = document.querySelector("#guessInput");
const guessBtn = document.querySelector("#guessBtn");
const resetBtn = document.querySelector("#resetBtn");
const message = document.querySelector("#message");

mode.style.display = "none";

// easy k onclick pr kam
easy.addEventListener("click", function () {
  selection_panel.style.display = "none";
  mode.style.display = "block";
  maxRange = 50;
  lives = 7;
  timer = 60;
  attempt = 0;

  secretnum = Math.floor(Math.random() * maxRange) + 1;
  console.log("Easy Secret Number: " + secretNumber);
  strt_timer();
});
// medium k click pr kam
medium.addEventListener("click", function () {
  selection_panel.style.display = "none";
  mode2.style.display = "block";
  maxRange = 100;
  lives = 5;
  timer = 45;
  attempt = 0;

  secretnum = Math.floor(Math.random() * maxRange) + 1;
  console.log("medium Secret Number: " + secretNumber);
  strt_timer();
});
// hard k click par kam
hard.addEventListener("click", function () {
  selection_panel.style.display = "none";
  mode3.style.display = "block";
  maxRange = 500;
  lives = 3;
  timer = 30;
  attempt = 0;

  secretnum = Math.floor(Math.random() * maxRange) + 1;
  console.log("hard Secret Number: " + secretNumber);
  strt_timer();
});
// guess button
guessBtn.addEventListener("click", function () {
  let user_input = parseInt(guessInput.value);
  if (isNaN(user_input) || user_input < 1 || user_input > maxRange) {
    message.textContent = `⚠️ Please enter a valid number between 1 and ${maxRange}!`;
    message.style.color = "#9c1616";
    return;
  }
  attempt++;
  attemptsDisplay.textContent = attempts;

  if (user_input === secretnum) {
    message.textContent = `🎉🎉 Mubarak ho! Sahi guess kiya! Target number ${secretNumber} hi tha.`;
    message.style.color = "#24a148";
    score = lives * 100;
    scoreDisplay.textContent = score;
    guessInput.disabled = true;
    guessBtn.disabled = true;
    clearInterval(timeIntervel)
  } else if (user_input > secretnum) {
    message.textContent = "📈 Too High! Thoda chota number try karein.";
    message.style.color = "#854d0e";
    livesDisplay.textContent = lives;
  } else {
    message.textContent = "📉 Too Low! Thoda bara number try karein.";
    message.style.color = "#854d0e";
    lives--;
    livesDisplay.textContent = lives;
  }
  if (lives === 0) {
    message.textContent = `💥 Game Over! Aap ki saari lives khatam ho gayin. Sahi number ${secretNumber} tha.`;
    message.style.color = "#9c1616";

    guessInput.disabled = true;
    guessBtn.disabled = true;
  }
  guessInput.value = "";
});
// timer
function strt_timer() {
  clearInterval(timeIntervel);
  timeIntervel = setInterval(function () {
    timer--;
    timerDisplay.textContent = timer + "s";
    if (timer === 0) {
      clearInterval(timerInterval); // Timer ko rok do
      message.textContent = `⏰ Time Out! Waqt khatam ho gaya. Sahi number ${secretNumber} tha.`;
      message.style.color = "#9c1616";
      guessInput.disabled = true;
      guessBtn.disabled = true;
    }
  }, 1000);
}
resetBtn.addEventListener("click", function () {
  clearInterval(timeIntervel);
  mode.style.display = "none";
  mode2.style.display = "none";
  mode3.style.display = "none";
  selection_panel.style.display = "block";
  guessInput.disabled = false;
  guessBtn.disabled = false;
  guessInput.value = "";
  message.textContent = "";
});
