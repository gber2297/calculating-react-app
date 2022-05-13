import React from "react";
import "../styles/Clearbutton.css";

const Clearbutton = (props) => (
  <div className="clear-button" onClick={props.doClear}>
    {props.children}
  </div>
);

export default Clearbutton;
