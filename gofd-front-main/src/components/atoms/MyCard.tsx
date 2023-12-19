import { CSSProperties, FC, ReactNode } from "react";
interface MyCardProps {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
	onClick?: () => void;
}

export const MyCard: FC<MyCardProps> = ({
	children,
	className,
	style,
	...props
}) => {
	return (
		<div
			{...props}
			className={`bg-blue_bg rounded-[5px] p-5 text-white backdrop-blur-[10px] ${className}`}
			style={style}
		>
			{children}
		</div>
	);
};
