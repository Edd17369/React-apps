import React, { useState } from "react";
import Board from "./sc";

const Game = (props) => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [step, setStep] = useState(1);
  const [player, setPlayer] = useState("X");

  const handleClick = (i) => {
    const current = history[history.length - 1];
    const newarr = [...current];
    if (checkWinner(newarr) || newarr[i]) {
      return;
    }
    newarr[i] = player;
    const newhistory = [...history.slice(0, step + 1), newarr];
    setPlayer(player === "X" ? "O" : "X");
    setHistory(newhistory);
    setStep(newhistory.length);
    /* cuando el estado de la componente Board cambia, los componentes Square se re-renderiza automáticamente. */
  };

  const handleHistory = (index) => {
    setStep(index + 1);
    setPlayer((index + 1) % 2 === 0 ? "O" : "X");
    setHistory(history.slice(0, index + 1));
  };

  const ListItem = (props) => {
    return (
      <li>
        <button onClick={() => handleHistory(props.value)}>
          {props.value !== 0 ? `Go to move: ${props.value}` : `Go to start `}
        </button>
      </li>
    );
  };

  let board = history[step - 1];
  let status;
  let winner = checkWinner(board);
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next turn: " + player;
  }

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
