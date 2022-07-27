const Gamebord = (() => {
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

  startButton.addEventListener("click", (e) => {
    e.preventDefault();
    let startWindow = document.querySelector(".first-window");
    let mainWindow = document.querySelector(".main-container");
    startWindow.style.display = "none";
    mainWindow.style.display = "block";
    const player1 = player(playerName1.value, "x");
    const player2 = player(playerName2.value, "o");
    console.log(player1, player2);
  });
})();
