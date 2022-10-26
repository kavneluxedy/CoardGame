import React from "react";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  highlight?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, disabled, onClick }) => {
  return (
    <button
      type="button"
      className={`${disabled ? "d-none" : "button"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
