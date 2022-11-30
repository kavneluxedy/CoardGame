import React, { useState } from "react";

type Props = {
	type: string;
	id: string;
	defaultValue?: string | string[] | number;
	className?: string;
};

const Input = ({
	type,
	id,
	defaultValue,
	className,
}: Props): JSX.Element => {

	const [value, setValue] = useState<Props["defaultValue"]>(defaultValue)

	return (
		<>
			{type === "submit" ? "" : <label htmlFor={id}>{id}</label>}
			<input
				type={type}
				id={id}
				name={id}
				value={value}
				className={className}
				onChange={(e) => setValue(e.target.value)}
				accept="image/*"
				required
			/>
		</>
	);
};

export default Input;
