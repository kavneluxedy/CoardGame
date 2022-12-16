export default interface IInputProps {
	type: string;
	id: string;
	defaultValue?: string | string[] | number;
	className?: string;
	onChange?: any;
	required?: boolean;
	min?: number;
	max?: number;
}