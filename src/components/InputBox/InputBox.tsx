import React from "react";
import "./InputBox.css";

interface InputBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon: string;
  invalid?: boolean;
}
//component for input box from capture users values
function InputBox({ icon, invalid, ...inputProps }: InputBoxProps) {
  return (
    <div className={invalid ? "input-box input-box--invalid" : "input-box"}>
      <span className="input-box-side" aria-hidden="true">
        {icon}
      </span>
      <input
        className="input-form"
        aria-invalid={invalid || undefined}
        {...inputProps}
      />
    </div>
  );
}

export default InputBox;
