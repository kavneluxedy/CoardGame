import React from "react";
import IInputProps from "../../../utils/interfaces/IInputProps";

const Input = ({
	type,
	id,
	defaultValue,
	className,
	onChange,
	required,
}: IInputProps): JSX.Element => {
	return (
		<>
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
			/>
		</>
	);
};

export default Input;
