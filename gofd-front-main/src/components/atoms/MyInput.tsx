import { FC, InputHTMLAttributes, ReactNode } from "react";
interface IInputs extends InputHTMLAttributes<HTMLInputElement> {
	children?: ReactNode;
	className?: string;
	isPassword?: boolean;
}

export const MyInput: FC<IInputs> = ({ children, isPassword, ...props }) => {
	return (
		<input
			{...props}
			className={`font-tilda font-semibold rounded-[5px] bg-white border-white border-[3px] px-5 py-[10px] text-black leading-[130%] focus:border-orange focus:outline-none ${props?.className}`}
			name={props?.name}
			type={props.type}
			value={props.value}
			placeholder={props?.placeholder}
		>
			{children}
		</input>
	);
};
