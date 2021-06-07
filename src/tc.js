import React, { useState } from "react";
import Board from "./sc";

const Game = (props) => {
  const [history, setHistory] = useState([]);

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
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board winner={checkWinner} addToHistory={addToHistory} />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        {history.map((move) => {
          let movement = history.indexOf(move);
          return (
            <ol>
              <button onClick={() => console.log(history[movement])}>
                Go to move: {movement}
              </button>
            </ol>
          );
        })}
      </div>
    </div>
  );
};

export default Game;
