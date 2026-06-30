// ///dark mode
let btn = document.getElementById("theme_btn")
btn.addEventListener("click",()=>{
  document.body.classList.toggle("dark_mode")

})
// -------------------
let secretnum;
let lives;
let timer;
let  timeIntervel;
let maxRange;
let score = 0
let attempt = 0


let mode = document.querySelector(".mode")
let mode2 = document.querySelector(".game-panel-2")
let mode3 = document.querySelector(".game-panel-3")
let selection_panel = document.querySelector(".game-card")

let easy = document.querySelector(".easy")
let medium = document.querySelector(".medium")
let hard = document.querySelector(".hard")

const timerDisplay = document.querySelector("#timer");
const livesDisplay = document.querySelector("#lives");
const scoreDisplay = document.querySelector("#score");
const attemptsDisplay = document.querySelector("#attempts");
const modeText = document.querySelector("#modeText");
const guessInput = document.querySelector("#guessInput");
const guessBtn = document.querySelector("#guessBtn");
const resetBtn = document.querySelector("#resetBtn");
const message = document.querySelector("#message");

mode.style.display = "none"

// easy k onclick pr kam
easy.addEventListener("click",function () {
 selection_panel.style.display= "none"
 mode.style.display = "block"
 maxRange = 50
 lives = 7
 timer = 60
 attempt= 0

 secretnum = Math.floor(Math.random() * maxRange) + 1
 console.log("Easy Secret Number: " + secretNumber);
})
// medium k click pr kam
medium.addEventListener("click",function () {
 selection_panel.style.display= "none"
 mode2.style.display = "block"
 maxRange = 100
 lives = 5
 timer = 45
 attempt= 0

 secretnum = Math.floor(Math.random() * maxRange) + 1
 console.log("medium Secret Number: " + secretNumber);
})
// hard k click par kam
hard.addEventListener("click",function () {
 selection_panel.style.display= "none"
 mode3.style.display = "block"
 maxRange = 500
 lives = 3
 timer = 30
 attempt= 0

 secretnum = Math.floor(Math.random() * maxRange) + 1
 console.log("hard Secret Number: " + secretNumber);
})
// guess button 
guessBtn.addEventListener("click", function(){

  let user_input = parseInt(guessInput.value)
  
})