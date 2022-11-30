import React, { FC } from "react";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
	className?: string;
	disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ children, onClick, className, disabled = false }) => {

	return (
		<button
			type="button"
			className={(className) ? className : "button"}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

export default Button;
