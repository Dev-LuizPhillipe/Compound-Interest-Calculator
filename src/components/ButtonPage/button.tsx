import React from "react";
import "./button.css";
function Button({ color, backgroundColor, onClick }) {
  return (
    <button
      className="btn"
      style={{ color: color, backgroundColor: backgroundColor }}
      onClick={onClick}
    >
      CALCULAR
    </button>
  );
}
export default Button;
