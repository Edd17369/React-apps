import Square from "./fc";

const Booardo = (props) => {
  return (
    <div>
      <div className="status">{props.status}</div>
      <div className="board-row">
        {/* En el onClick hay que pasar () => y por que si no handleClick provoca un infinite loop for render*/}
        {/* A different callback is created each time the Square component render */}
        {/* The () function creates a new bound function, which is an exotic function object that wraps the original function 
        object. Calling the bound function generally results in the execution of its wrapped function. */}
        <Square value={props.board[0]} onClick={() => props.handleClick(0)} />
        <Square value={props.board[1]} onClick={() => props.handleClick(1)} />
        <Square value={props.board[2]} onClick={() => props.handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={props.board[3]} onClick={() => props.handleClick(3)} />
        <Square value={props.board[4]} onClick={() => props.handleClick(4)} />
        <Square value={props.board[5]} onClick={() => props.handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={props.board[6]} onClick={() => props.handleClick(6)} />
        <Square value={props.board[7]} onClick={() => props.handleClick(7)} />
        <Square value={props.board[8]} onClick={() => props.handleClick(8)} />
      </div>
    </div>
  );
};

export default Booardo;
