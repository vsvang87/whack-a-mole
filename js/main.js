const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;

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

function popUpMole() {
  const time = randomTime(20, 1000);
  const hole = randomHole(holes);
}
console.log(randomHole(holes));
