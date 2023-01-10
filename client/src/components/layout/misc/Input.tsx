import React from "react";
import IInputProps from "../../../utils/interfaces/IInputProps";

const Input = ({
	children,
	type,
	id,
	defaultValue,
	className,
	onChange,
	required,
	min,
	max
}: IInputProps): JSX.Element => {
	return (
		<>
			{children}
			{type === "submit" ? "" : <label htmlFor={id}>{id}</label>}
			<input
				type={type}
				id={id}
				name={id}
				placeholder={id}
				value={defaultValue}
				className={className}
				onChange={onChange}
				accept="image/*"
				required={required}
				min={min}
				max={max}
			/>
		</>
	);
};

export default Input;
