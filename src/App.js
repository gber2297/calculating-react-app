import "./App.css";
import logoCalculadora from "./images/calculadora.png";
import Button from "./components/Button";
import Input from "./components/Input";
import Clearbutton from "./components/Clearbutton";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("0");

  const addInput = (val) => {
    setInput(input + val);
  };

  const inputResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor iniciar cálculos con un dato numerico");
    }
  };

  return (
    <div className="App">
      <div className="logo-calculadora-contenedor">
        <img src={logoCalculadora} className="logo-calculadora" alt="logo" />
      </div>

      <div className="contenedor-principal">
        <Input input={input} />
        <div className="row">
          <Button doClic={addInput}>1</Button>
          <Button doClic={addInput}>2</Button>
          <Button doClic={addInput}>3</Button>
          <Button doClic={addInput}>+</Button>
        </div>
        <div className="row">
          <Button doClic={addInput}>4</Button>
          <Button doClic={addInput}>5</Button>
          <Button doClic={addInput}>6</Button>
          <Button doClic={addInput}>-</Button>
        </div>
        <div className="row">
          <Button doClic={addInput}>7</Button>
          <Button doClic={addInput}>8</Button>
          <Button doClic={addInput}>9</Button>
          <Button doClic={addInput}>*</Button>
        </div>
        <div className="row">
          <Button doClic={inputResult}>=</Button>
          <Button doClic={addInput}>0</Button>
          <Button doClic={addInput}>.</Button>
          <Button doClic={addInput}>/</Button>
        </div>
        <div className="row">
          <Clearbutton doClear={() => setInput("")}>Clear</Clearbutton>
        </div>
      </div>
    </div>
  );
}

export default App;
