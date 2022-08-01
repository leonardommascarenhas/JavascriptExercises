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
  let name1 = "";
  let name2 = "";

  startButton.addEventListener("click", (e) => {
    e.preventDefault();
    let startWindow = document.querySelector(".first-window");
    let mainWindow = document.querySelector(".main-container");
    startWindow.style.display = "none";
    mainWindow.style.display = "block";
    name1 = playerName1.value;
    name2 = playerName2.value;
  });

  const player1 = player(name1, "X");
  const player2 = player(name2, "O");
  let currentPlayer = player1;

  const switchPlayer = () => {
    currentPlayer == player1
      ? (currentPlayer = player2)
      : (currentPlayer = player1);
  };

  const checkWin = (player) => {
    //diagonais
    if (
      Gameboard.gameBoard[0] == player.marker &&
      Gameboard.gameBoard[4] == player.marker &&
      Gameboard.gameBoard[8] == player.marker
    ) {
      console.log("ACERTOU");
    }
    if (
      Gameboard.gameBoard[2] == player.marker &&
      Gameboard.gameBoard[4] == player.marker &&
      Gameboard.gameBoard[6] == player.marker
    ) {
      console.log("acertou");
    }
    //horizontais
    if (
      Gameboard.gameBoard[0] == player.marker &&
      Gameboard.gameBoard[1] == player.marker &&
      Gameboard.gameBoard[2] == player.marker
    ) {
      console.log("acertou");
    }
    if (
      Gameboard.gameBoard[3] == player.marker &&
      Gameboard.gameBoard[4] == player.marker &&
      Gameboard.gameBoard[5] == player.marker
    ) {
      console.log("acertou");
    }
    if (
      Gameboard.gameBoard[8] == player.marker &&
      Gameboard.gameBoard[7] == player.marker &&
      Gameboard.gameBoard[6] == player.marker
    ) {
      console.log("acertou");
    }
    //verticais
    if (
      Gameboard.gameBoard[8] == player.marker &&
      Gameboard.gameBoard[5] == player.marker &&
      Gameboard.gameBoard[2] == player.marker
    ) {
      console.log("acertou");
    }
    if (
      Gameboard.gameBoard[0] == player.marker &&
      Gameboard.gameBoard[3] == player.marker &&
      Gameboard.gameBoard[6] == player.marker
    ) {
      console.log("acertou");
    }
    if (
      Gameboard.gameBoard[7] == player.marker &&
      Gameboard.gameBoard[4] == player.marker &&
      Gameboard.gameBoard[1] == player.marker
    ) {
      console.log("acertou");
    }
  };

  const move = (index) => {
    if (Gameboard.gameBoard[index] === " ") {
      console.log(currentPlayer);
      Gameboard.gameBoard[index] = currentPlayer.marker;
      boxes[index].innerHTML = currentPlayer.marker;
      checkWin(currentPlayer);
      switchPlayer();
    }
  };
  boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
      move(index);
      console.log(currentPlayer);
    });
  });
})();
