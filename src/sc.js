import React, { useContext } from "react";
import Square from "./fc";
import { MyContext } from "./tc";

const Booardo = (props) => {
  const cntx = useContext(MyContext);
  return (
    <div>
      <div className="status">{cntx.status}</div>
      <div className="board-row">
        {/* En el onClick hay que pasar () => y por que si no handleClick provoca un infinite loop for render*/}
        {/* A different callback is created each time the Square component render */}
        {/* The () function creates a new bound function, which is an exotic function object that wraps the original function 
        object. Calling the bound function generally results in the execution of its wrapped function. */}
        <Square value={0} />
        <Square value={1} />
        <Square value={2} />
      </div>
      <div className="board-row">
        <Square value={3} />
        <Square value={4} />
        <Square value={5} />
      </div>
      <div className="board-row">
        <Square value={6} />
        <Square value={7} />
        <Square value={8} />
      </div>
    </div>
  );
};

export default Booardo;
