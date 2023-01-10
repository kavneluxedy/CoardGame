import { ReactNode } from "react";

export default interface IInputProps {
	children: string | ReactNode;
	type: string;
	id: string;
	defaultValue?: string | string[] | number;
	className?: string;
	onChange?: any;
	required?: boolean;
	min?: number;
	max?: number;
}