import React, { useState } from "react";

function TicTacToc() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);


  const checkWinner = (board) => {
    const winningPatterns = [
      [0,1,2], [3,4,5], [6,7,8], 
      [0,3,6], [1,4,7], [2,5,8], 
      [0,4,8], [2,4,6]           
    ];

    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;

      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }

    return null;
  };

  const winner = checkWinner(board);

  const handleClick = (index) => {
    if (board[index] !== "" || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXTurn ? "X" : "O";

    setBoard(newBoard);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setBoard(Array(9).fill(""));
    setIsXTurn(true);
  };

  const renderSquare = (index) => {
    return (
      <button
        onClick={() => handleClick(index)}
        className="w-24 h-24 bg-white border-2 border-gray-300 text-3xl font-bold flex items-center justify-center rounded-lg shadow-sm hover:bg-gray-100 transition"
      >
        {board[index]}
      </button>
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-500 to-blue-600">
      
      <h1 className="text-4xl font-bold text-white mb-6">
        🎮 Tic Tac Toe
      </h1>

      <div className="bg-white/20 backdrop-blur-md p-5 rounded-2xl shadow-xl">
        <div className="grid grid-cols-3 gap-4">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>

      <div className="mt-6 text-white text-xl font-semibold">
        {winner
          ? `🏆 Winner: ${winner}`
          : board.includes("")
          ? isXTurn
            ? "Player X Turn"
            : "Player O Turn"
          : "It's a Draw 🤝"}
      </div>

      <button
        onClick={handleReset}
        className="mt-4 px-6 py-2 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
      >
        Reset Game
      </button>
  <p className="text-center text-xs text-white pt-8 w-full">
        © 2026 Hiren Siyodia. All rights reserved.
      </p>
    </div>
  );
}

export default TicTacToc;
