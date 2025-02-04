import React from "react";
import "./button.css";
function Button({ color, backgroundColor }) {
  return (
    <button
      className="btn"
      style={{ color: color, backgroundColor: backgroundColor }}
    >
      CALCULAR
    </button>
  );
}
export default Button;
