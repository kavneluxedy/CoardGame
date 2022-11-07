import React from "react";

type Props = {
	type: string;
	id: string;
	defaultValue?: string | string[] | number;
	className?: string;
	onChange?: any;
};

const Input = ({
	type,
	id,
	defaultValue,
	className,
	onChange,
}: Props): JSX.Element => {
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
				required
			/>
		</>
	);
};

export default Input;
