import React, { useState } from "react";
import Board from "./sc";

const Game = (props) => {
  const [history, setHistory] = useState([]);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");

  const addToHistory = (array) => {
    const newEntry = [...history];
    newEntry.push(array);
    setHistory(newEntry);
  };

  const checkWinner = (array) => {
    const items = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let j = 0; j < items.length; j++) {
      const [x, y, z] = items[j];
      if (array[x] && array[x] === array[y] && array[x] === array[z]) {
        return array[x];
      }
    }
    return null;
    /* If you want a component to hide itself even though it was rendered by another component. To do this return null 
    instead of its render output */
  };

  const handleClick = (i) => {
    const newarr = [...board];
    if (checkWinner(newarr) || newarr[i]) {
      return;
    }
    newarr[i] = turn;
    setTurn(turn === "X" ? "O" : "X");
    setBoard(newarr);
    addToHistory(board);
    /* cuando el estado de Board cambia, los componentes Square se re-renderiza automáticamente. */
  };

  let status;
  let winner = checkWinner(board);
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next turn: " + turn;
  }

  const ListItem = (props) => {
    return (
      <li>
        <button onClick={() => setBoard(props.board)}>
          Go to move: {props.value}
        </button>
      </li>
    );
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board handleClick={handleClick} board={board} status={status} />
      </div>
      <div className="game-info">
        <ul>
          {history.map((move, index) => (
            /* elements inside the map() call need keys. */
            <ListItem key={index} value={index} board={move} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Game;
