import React, { useState } from "react";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  function handleClick(index) {
    if (board[index] || checkWinner(board)) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  }

  function checkWinner(board) {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6],
    ];

    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  }

  const winner = checkWinner(board);
  const isDraw = board.every(cell => cell !== null) && !winner;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Tic Tac Toe</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 100px)",
        gap: "5px",
        justifyContent: "center"
      }}>
        {board.map((cell, index) => (
          <button
            key={index}
            onClick={() => handleClick(index)}
            style={{
              width: "100px",
              height: "100px",
              fontSize: "2rem",
              cursor: "pointer"
            }}
          >
            {cell}
          </button>
        ))}
      </div>
      <h2>{winner ? `Winner: ${winner}` : isDraw ? "It's a Draw!" : `Next Turn: ${isXNext ? "X" : "O"}`}</h2>
      <button onClick={resetGame} style={{ padding: "10px 20px", fontSize: "1rem", cursor: "pointer" }}>Reset Game</button>
    </div>
  );
}

export default App;
