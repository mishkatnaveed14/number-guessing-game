let btn = document.getElementById("theme_btn");
btn.addEventListener("click", () => {
  document.body.classList.toggle("dark_mode");
});
let secretnum;
let lives;
let timer;
let timeIntervel;
let maxRange;
let score = 0;
let attempt = 0;

let mode = document.querySelector(".game-panel");
let mode2 = document.querySelector(".game-panel-2");
let mode3 = document.querySelector(".game-panel-3");
let selection_panel = document.querySelector(".game-card");

let easy = document.querySelector(".easy");
let medium = document.querySelector(".medium");
let hard = document.querySelector(".hard");

mode.style.display = "none";
mode2.style.display = "none";
mode3.style.display = "none";

easy.addEventListener("click", function () {
  selection_panel.style.display = "none";
  mode.style.display = "block";
  maxRange = 50;
  lives = 7;
  timer = 60;
  attempt = 0;
  score = 0;
  document.querySelector(".game-panel #timer").textContent = timer + "s";
  document.querySelector(".game-panel #lives").textContent = lives;
  document.querySelector(".game-panel #score").textContent = score;
  document.querySelector(".game-panel #attempts").textContent = attempt;
  document.querySelector(".game-panel #message").textContent = "";
  document.querySelector(".game-panel #guessInput").disabled = false;
  document.querySelector(".game-panel #guessBtn").disabled = false;
  document.querySelector(".game-panel #guessInput").value = "";
  secretnum = Math.floor(Math.random() * maxRange) + 1;
  console.log("Easy Secret Number: " + secretnum);
  strt_timer();
});
medium.addEventListener("click", function () {
  selection_panel.style.display = "none";
  mode2.style.display = "block";
  maxRange = 100;
  lives = 5;
  timer = 45;
  attempt = 0;
  score = 0;
  document.querySelector(".game-panel-2 #timer").textContent = timer + "s";
  document.querySelector(".game-panel-2 #lives").textContent = lives;
  document.querySelector(".game-panel-2 #score").textContent = score;
  document.querySelector(".game-panel-2 #attempts").textContent = attempt;
  document.querySelector(".game-panel-2 #message").textContent = "";
  document.querySelector(".game-panel-2 #guessInput").disabled = false;
  document.querySelector(".game-panel-2 #guessBtn").disabled = false;
  document.querySelector(".game-panel-2 #guessInput").value = "";
  secretnum = Math.floor(Math.random() * maxRange) + 1;
  console.log("Medium Secret Number: " + secretnum);
  strt_timer();
});
hard.addEventListener("click", function () {
  selection_panel.style.display = "none";
  mode3.style.display = "block";
  maxRange = 500;
  lives = 3;
  timer = 30;
  attempt = 0;
  score = 0;
  document.querySelector(".game-panel-3 #timer").textContent = timer + "s";
  document.querySelector(".game-panel-3 #lives").textContent = lives;
  document.querySelector(".game-panel-3 #score").textContent = score;
  document.querySelector(".game-panel-3 #attempts").textContent = attempt;
  document.querySelector(".game-panel-3 #message").textContent = "";
  document.querySelector(".game-panel-3 #guessInput").disabled = false;
  document.querySelector(".game-panel-3 #guessBtn").disabled = false;
  document.querySelector(".game-panel-3 #guessInput").value = "";
  secretnum = Math.floor(Math.random() * maxRange) + 1;
  console.log("Hard Secret Number: " + secretnum);
  strt_timer();
});
function getPanel() {
  if (mode2.style.display === "block") return ".game-panel-2";
  if (mode3.style.display === "block") return ".game-panel-3";
  return ".game-panel";
}
document.addEventListener("click", function (e) {
  if (!e.target.closest("#guessBtn")) return;
  let panel = getPanel();
  let guessInput = document.querySelector(panel + " #guessInput");
  let message = document.querySelector(panel + " #message");
  let livesDisplay = document.querySelector(panel + " #lives");
  let scoreDisplay = document.querySelector(panel + " #score");
  let attemptsDisplay = document.querySelector(panel + " #attempts");
  let user_input = parseInt(guessInput.value);
  if (isNaN(user_input) || user_input < 1 || user_input > maxRange) {
    message.textContent = `⚠️ Please enter a valid number between 1 and ${maxRange}!`;
    message.style.color = "#9c1616";
    return;
  }
  attempt++;
  attemptsDisplay.textContent = attempt; 
  if (user_input === secretnum) {
    message.textContent = `🎉🎉 Mubarak ho! Sahi guess kiya! Target number ${secretnum} hi tha.`;
    message.style.color = "#24a148";
    score = lives * 100;
    scoreDisplay.textContent = score;
    guessInput.disabled = true;
    e.target.closest("#guessBtn").disabled = true;
    clearInterval(timeIntervel);
  } else if (user_input > secretnum) {
    lives--; 
    message.textContent = "📈 Too High! Thoda chota number try karein.";
    message.style.color = "#854d0e";
    livesDisplay.textContent = lives;
  } else {
    lives--;
    message.textContent = "📉 Too Low! Thoda bara number try karein.";
    message.style.color = "#854d0e";
    livesDisplay.textContent = lives;
  }
  if (lives === 0) {
    message.textContent = `💥 Game Over! Aap ki saari lives khatam ho gayin. Sahi number ${secretnum} tha.`;
    message.style.color = "#9c1616";
    guessInput.disabled = true;
    e.target.closest("#guessBtn").disabled = true;
    clearInterval(timeIntervel);
  }
  guessInput.value = "";
});
function strt_timer() {
  clearInterval(timeIntervel);
  timeIntervel = setInterval(function () {
    let panel = getPanel();
    let timerDisplay = document.querySelector(panel + " #timer");
    let message = document.querySelector(panel + " #message");
    let guessInput = document.querySelector(panel + " #guessInput");
    let guessBtn = document.querySelector(panel + " #guessBtn");
    timer--;
    timerDisplay.textContent = timer + "s";
    if (timer === 0) {
      clearInterval(timeIntervel); 
      message.textContent = `⏰ Time Out! Waqt khatam ho gaya. Sahi number ${secretnum} tha.`;
      message.style.color = "#9c1616";
      guessInput.disabled = true;
      guessBtn.disabled = true;
    }
  }, 1000);
}
document.addEventListener("click", function (e) {
  if (!e.target.closest("#resetBtn")) return;
  clearInterval(timeIntervel);
  mode.style.display = "none";
  mode2.style.display = "none";
  mode3.style.display = "none";
  selection_panel.style.display = "block";
  document.querySelectorAll("#guessInput").forEach(i => { i.disabled = false; i.value = ""; });
  document.querySelectorAll("#guessBtn").forEach(b => b.disabled = false);
  document.querySelectorAll("#message").forEach(m => m.textContent = "");
});