
const gameBoard={
 board : [9].fill(null),
 currentPlayer: "x",
 winGame : false
};

const  currentPlayer={
  x,
   y
   
};

const winGame=[
     [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical
  [0, 4, 8], [2, 4, 6]    
];
function checkWinner() {
  for (let combination of  winGame) {
    const [a, b, c] = combination;
    
    // Check if the first slot is filled and matches the next two
    if (gameBoard.board[a] && 
        gameBoard.board[a] === gameBoard.board[b] && 
        gameBoard.board[a] === gameBoard.board[c]) {
      return gameBoard.board[a]; // Returns 'X' or 'Y'
    }
  }
   if (!gameBoard.board.includes(null)) {
    return 'Draw';
  }

  return null;
}
function resetGame() {
  console.log("Resetting board...");
  gameBoard.board = Array(9).fill(null);
  gameBoard.currentPlayer = 'x';
  gameBoard.isGameOver = false;
}

function playGame(position){
 currentPlayer.player1=x
 currentPlayer.player2=y
if (gameBoard.board[position]!==undefined || gameBoard.winGame === false)
    return gameBoard.board[position]=gameBoard.currentPlayer;
    const winner= checkWinner();

if (gameBoard.winGame=true ){
    console.log(`${winner} has won`) 
}
if (winner === "Draw"){
   console.log("Game is a draw ")
}
if(gameBoard.board[position]!== undefined ){
    console.log("position taken")
}
   else {
    gameBoard.currentPlayer = (gameBoard.currentPlayer === 'x') ? 'y' : 'x';
  }
}
playGame()
