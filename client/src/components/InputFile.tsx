import React from "react";
import ICard from "../utils/interfaces/ICard";

type Props = {
	id: string;
	className?: string;
	onChange: any;
};

const InputFile = ({
	id,
	className,
	onChange,
}: Props): JSX.Element => {
	return (
		<>
			<label htmlFor={id}>{id}</label>
			<input
				type="file"
				id={id}
				name={id}
				className={className}
				onChange={onChange}
				accept="image/*"
			/>
		</>
	);
};

export default InputFile;
