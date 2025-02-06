import React from "react";
import "./InputBox.css";

function InputBox({ icon, placeholder, value, onChange }) {
  return (
    <div className="input-box">
      <div className="input-box-side">
        <h1 className="input-icon">{icon}</h1>
      </div>
      <form className="form-box">
        <input
          type="number"
          className="input-form"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </form>
    </div>
  );
}

export default InputBox;
