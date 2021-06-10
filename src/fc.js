import React, { useContext } from "react";
import { MyContext } from "./tc";

const Square = ({ value }) => {
  const cntx = useContext(MyContext);
  return (
    <div>
      <button className="square" onClick={() => cntx.handleClick(value)}>
        {cntx.board[value]}
      </button>
    </div>
  );
};

export default Square;
