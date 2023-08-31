const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
const startBtn = document.querySelector(".start-btn");
const message = document.querySelector(".message");
let countDown = document.querySelector(".count-down");
let lastHole;
let timeUp = false;
let score = 0;
let timer = 10;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function randomHole(holes) {
  const randMole = Math.floor(Math.random() * holes.length);
  const hole = holes[randMole];

  //alert if same hole appeared as last hole
  if (hole === lastHole) {
    console.log("same as last");
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

//mole pop up
function popUpMole() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add("up");

  setTimeout(() => {
    hole.classList.remove("up");

    if (!timeUp) popUpMole();
  }, time);
}
//start game button
startBtn.addEventListener("click", startGame);

//count down seconds
function timerSecond() {
  setInterval(timerSecond, 1000);
  countDown.innerHTML = timer--;
}

//start game
function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  popUpMole();
  //game stop after 10s
  setTimeout(() => (timeUp = true), 10000);
}

function hitOnHead(e) {
  if (!e.isTrusted) return;
  score++;
  scoreBoard.innerHTML = score;
}
moles.forEach((mole) => mole.addEventListener("click", hitOnHead));
