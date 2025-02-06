import React from "react";
import "./InputBox.css";

function InputBox() {
  return (
    <div className="input-box">
      <div className="input-box-side">
        <h1 className="input-icon">R$</h1>
      </div>
      <form className="form-box">
        <input
          type="number"
          className="input-form"
          placeholder="Digite o valor inical"
        />
      </form>
    </div>
  );
}

export default InputBox;
