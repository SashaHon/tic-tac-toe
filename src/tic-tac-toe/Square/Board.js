import React from "react";
import { useState, useCallback, useMemo } from "react";
import "./Board.css";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export function Board({ xIsNext, squares, onPlay }) {
  const handleClick = (index) => () => {
    const nextSquares = [...squares];
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    nextSquares[index] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  };

  const winner = calculateWinner(squares);
  let status = winner
    ? "Winner: " + winner
    : xIsNext
    ? "Next player: X"
    : "Next player: O";

  // const [number, setNumber] = useState(0)
  // const func = useCallback(num => { return num + number }, [number])
  // func(3) //4 => (3,7)
  // func(4) //4 => (4,8)
  // const a = useMemo(() => b + c / d, [b,c,d])

  return (
    <>
      <h1>Tic-Tac-Toe</h1>
      <div className="board">
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={handleClick(0)} />
          <Square value={squares[1]} onSquareClick={handleClick(1)} />
          <Square value={squares[2]} onSquareClick={handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={handleClick(3)} />
          <Square value={squares[4]} onSquareClick={handleClick(4)} />
          <Square value={squares[5]} onSquareClick={handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={handleClick(6)} />
          <Square value={squares[7]} onSquareClick={handleClick(7)} />
          <Square value={squares[8]} onSquareClick={handleClick(8)} />
        </div>
      </div>
    </>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    console.log(squares);
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
