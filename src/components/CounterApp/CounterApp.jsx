import "./counter-app-styles.css";
import Counter from "./components/Counter";

function CounterApp() {
  document.title = "Counter App";

  return (
    <div className="counter-app">
      <Counter />
    </div>
  );
}

export default CounterApp;
