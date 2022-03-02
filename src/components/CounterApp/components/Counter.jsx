import React, { useState } from "react";
import Buttons from "./Buttons";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const handleResetClick = () => {
    setCounter(0);
  };

  const handleIncrementClick = () => {
    setCounter(counter + 1);
  };

  const handleDecrementClick = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  const valueToShow = counter < 10 ? "0" + counter : counter;

  return (
    <div className="container">
      <h2 className="value">{valueToShow}</h2>
      <div className="btns">
        <Buttons
          handleDecrementClick={handleDecrementClick}
          handleIncrementClick={handleIncrementClick}
          handleResetClick={handleResetClick}
        />
      </div>
    </div>
  );
}
