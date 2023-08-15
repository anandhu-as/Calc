import React, { useState } from "react";
import "../Styles/Button.css";

const Button = () => {
  const [displayValue, setDisplayValue] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      try {
        const calculatedResult = eval(displayValue);
        setResult(calculatedResult);
        setDisplayValue(calculatedResult.toString());
      } catch (error) {
        setResult("Error");
        setDisplayValue("");
      }
    } else if (value === "AC") {
      setDisplayValue("");
      setResult("");
    } else if (value === "clear") {
      setDisplayValue(displayValue.slice(0, -1));
    } else {
      setDisplayValue((prevValue) => prevValue + value);
    }
  };

  return (
    <div className="calculator">
      <div className="screen">{result !== "" ? result : displayValue}</div>
      <div className="rows">
        <button onClick={() => handleButtonClick("AC")}>AC</button>
        <button onClick={() => handleButtonClick("clear")}>clear</button>
        <button onClick={() => handleButtonClick("%")}>%</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
        <button onClick={() => handleButtonClick("*")}>X</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("=")}>=</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
      </div>
    </div>
  );
};

export default Button;
