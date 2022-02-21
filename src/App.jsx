import "./App.css";

var counter = 0;

function App() {
  function handleReset() {
    alert("Reset CLICKED");
  }

  function handleDecrement() {
    alert("Decrement CLICKED");
  }

  function handleIncrement() {
    counter += 1;
    console.log(counter);
  }

  return (
    <div className="container">
      <h2 className="value">{counter}</h2>

      <div className="btns">
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
    </div>
  );
}

export default App;
