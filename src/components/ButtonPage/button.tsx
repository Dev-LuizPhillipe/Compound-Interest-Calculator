import React from "react";
import "./button.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

//component to render the button
function Button({ children, type = "button", className, ...props }: ButtonProps) {
  return (
    <button
      className={className ? `btn ${className}` : "btn"}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
