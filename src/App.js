import "./App.css";
import Clock from "./components/Clock";
import Day from "./components/Day";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello, Stacha</p>
        <Day />
        <Clock />
      </header>
    </div>
  );
}

export default App;
