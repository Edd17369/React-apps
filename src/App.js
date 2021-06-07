import logo from "./logo.svg";
import "./App.css";
import Component from "./tc";

// my-components --> App --> index.js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Component />
      </header>
    </div>
  );
}

export default App;
