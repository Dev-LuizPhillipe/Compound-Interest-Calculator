import React from "react";
import "./button.css";

//component to render the button
function Button({ color, backgroundColor, onClick }) {
  return (
    <button
      className="btn"
      style={{ color: color, backgroundColor: backgroundColor }}
      onClick={onClick}
      type="submit"
    >
      CALCULAR
    </button>
  );
}
export default Button;
