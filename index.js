const boxes = document.querySelectorAll(".box");
const winnerPlayer = document.querySelector(".winnerPlayer");
const container = document.querySelector(".container");
const gamePart = document.querySelector(".gamePart");
const start = document.getElementById("start");
const reset = document.getElementById("reset");
let current = "X";
let winners = null;
let counter = 0;
const print = document.getElementById("print");

const winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function startGame() {
  gamePart.style.display = "inline-block";
  start.style.display = "none";
  reset.style.display = "inline-block";
  winnerPlayer.innerHTML = "X's turn";

  function winning() {
    for (let i = 0; i < winningCondition.length; i++) {
      const [a, b, c] = winningCondition[i];
      if (
        boxes[a].innerHTML !== "" &&
        boxes[a].innerHTML === boxes[b].innerHTML &&
        boxes[a].innerHTML === boxes[c].innerHTML
      ) {
        winnerPlayer.innerHTML = `${boxes[a].innerHTML} is Winner`;
        boxes[a].style.backgroundColor = "#9CA986";
        boxes[b].style.backgroundColor = "#9CA986";
        boxes[c].style.backgroundColor = "#9CA986";
        return (winners = `${boxes[a].innerHTML}`);
      }
    }
    return (winners = null);
  }

  for (let i = 0; i < boxes.length; i++) {
    function definedValues() {
      if (winners === null) {
        if (boxes[i].innerHTML === "") {
          boxes[i].innerHTML = current;
          boxes[i].innerHTML === "X" ? (current = "0") : (current = "X");
          winnerPlayer.innerHTML === "X's turn"
            ? (winnerPlayer.innerHTML = "0's turn")
            : (winnerPlayer.innerHTML = "X's turn");
          winning();
          counter++;
          if (counter === 9 && winners === null) {
            winnerPlayer.innerHTML = "Draw";
          }
          return;
        }
      }
    }

    boxes[i].addEventListener("click", definedValues);
  }
}

start.addEventListener("click", startGame);

reset.addEventListener("click", () => {
  window.location.reload();
});
