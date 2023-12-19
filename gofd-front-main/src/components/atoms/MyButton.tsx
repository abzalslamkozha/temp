"use client";
import { ButtonHTMLAttributes, FC } from "react";

export const MyButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
	children,
	...props
}) => {
	return (
		<button
			{...props}
			className={`rounded-[5px] font-tilda text-blue_text justify-center items-center font-semibold px-5 py-[10px] flex gap-[10px] text-sm leading-[130%] whitespace-nowrap ${props?.className}`}
		>
			{children}
		</button>
	);
};
