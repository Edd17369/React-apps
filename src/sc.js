import React, { useState } from "react";
import Square from "./fc";

const Booardo = (props) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState("X");

  const handleClick = (i) => {
    const newarr = [...board];
    if (props.winner(newarr) || newarr[i]) {
      return;
    }
    newarr[i] = turn;
    setTurn(turn === "X" ? "O" : "X");
    setBoard(newarr);
    props.addToHistory(board);
    /* cuando el estado de Board cambia, los componentes Square se re-renderiza automáticamente. */
  };

  let status;
  let winner = props.winner(board);
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next turn: " + turn;
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {/* En el onClick hay que pasar () => y por que si no handleClick provoca un infinite loop for render*/}
        <Square value={board[0]} onClick={() => handleClick(0)} />
        <Square value={board[1]} onClick={() => handleClick(1)} />
        <Square value={board[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={board[3]} onClick={() => handleClick(3)} />
        <Square value={board[4]} onClick={() => handleClick(4)} />
        <Square value={board[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={board[6]} onClick={() => handleClick(6)} />
        <Square value={board[7]} onClick={() => handleClick(7)} />
        <Square value={board[8]} onClick={() => handleClick(8)} />
      </div>
    </div>
  );
};

export default Booardo;
