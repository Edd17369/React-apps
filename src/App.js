import logo from "./logo.svg";
import "./App.css";
import Component from "./tic-tac-toe/game";
import ErrorBoundary from "./errores/errores";

// my-components --> App --> index.js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ErrorBoundary>
          <Component />
        </ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
