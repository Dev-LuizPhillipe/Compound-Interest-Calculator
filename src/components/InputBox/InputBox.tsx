import React from "react";
import "./InputBox.css";

interface InputBoxProps {
  icon: string;
  placeholder: string;
  value?: any;
  onChange?: any;
  onclick?: any;
  type?: string;
  name?: string;
}
//component for input box from capture users values
function InputBox({
  icon,
  placeholder,
  value,
  onChange,
  onclick,
  type,
  name,
}: InputBoxProps) {
  return (
    <div className="input-box">
      <div className="input-box-side">
        <h1 className="input-icon">{icon}</h1>
      </div>
      <form className="form-box">
        <input
          type={type}
          className="input-form"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onClick={onclick}
          name={name}
        />
      </form>
    </div>
  );
}

export default InputBox;
