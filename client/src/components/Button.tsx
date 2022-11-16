import React, { FC } from "react";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  className?: string;
}

const Button: FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      type="button"
      className={(className) ? className : "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
