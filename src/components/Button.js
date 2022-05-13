import React from "react";
import "../styles/button.css";

function Button(props) {
  const itsOp = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
  };
  return (
    <div
      className={`container-button ${
        itsOp(props.children) ? "operator" : ""
      }`.trimEnd()}
      onClick={() => props.doClic(props.children)}
    >
      {props.children}
    </div>
  );
}

export default Button;
