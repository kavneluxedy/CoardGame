import React from "react";
import IInputFileProps from "../../../utils/interfaces/IInputFileProps";

const InputFile = ({
	id,
	className,
	onChange,
}: IInputFileProps): JSX.Element => {
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
