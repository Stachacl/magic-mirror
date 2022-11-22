import "./App.css";
import Clock from "./components/Clock";
import Day from "./components/Day";
import Weather from "./components/Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Hello, Stacha</p>
        <div> 
          <Day />
          <Clock />
        </div>
        <div>
          <Weather /> 
        </div>
      </header>
    </div>
  );
}

export default App;
