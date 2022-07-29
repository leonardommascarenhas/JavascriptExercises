const Gameboard = (() => {
  let gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  for (let i = 0; i < gameBoard.length; i++) {
    let container = document.querySelector(".display-array");
    let div = document.createElement("div");
    div.classList.add("box");
    div.innerHTML = gameBoard[i];
    container.appendChild(div);
  }
  return { gameBoard };
})();

const player = (name, marker) => {
  return {
    name,
    marker,
  };
};

const Game = (() => {
  let playerName1 = document.querySelector("#player1");
  let playerName2 = document.querySelector("#player2");
  let startButton = document.getElementById("start-game");
  let boxes = document.querySelectorAll(".box");

  let currentPlayer = "";

  let switchPlayer = (player1, player2) => {
    currentPlayer == "" ? (currentPlayer = player1) : (currentPlayer = player2);
  };

  startButton.addEventListener("click", (e) => {
    e.preventDefault();
    let startWindow = document.querySelector(".first-window");
    let mainWindow = document.querySelector(".main-container");
    startWindow.style.display = "none";
    mainWindow.style.display = "block";
    const player1 = player(playerName1.value, "X");
    const player2 = player(playerName2.value, "O");
    switchPlayer(player1, player2);
  });

  const move = (index) => {
    if (Gameboard.gameBoard[index] === " ") {
      Gameboard.gameBoard[index] = currentPlayer.marker;
      boxes[index].innerHTML = currentPlayer.marker;
      console.log(Gameboard.gameBoard);
    }
  };
  boxes.forEach((box, index) => {
    box.addEventListener("click", (e) => move(index));
  });
})();
