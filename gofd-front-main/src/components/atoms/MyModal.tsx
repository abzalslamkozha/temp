import Image from "next/image";
import { FC, ReactNode, useEffect } from "react";
interface MyModalProps {
	children: ReactNode;
	closeAction: () => void;
	className?: string;
	bgColor?: string;
}
export const MyModal: FC<MyModalProps> = ({
	children,
	closeAction,
	className,
	bgColor,
}) => {
	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);
	return (
		<div
			className="fixed inset-0 w-screen h-screen flex items-center justify-center bg-[rgba(15,15,21,0.95)] z-50 "
			style={{ backdropFilter: "blur(2px)" }}
			// onClick={closeAction}
		>
			<div className="pr-5 overflow-y-scroll rounded-[5px]">
				<div
					className={`${className}  bg-white w-[54.875rem] rounded-[5px] max-h-[509px] min-h-[509px] ${
						bgColor || ""
					}`}
					onClick={(e) => {
						e.stopPropagation();
					}}
				>
					{children}
					<div className="absolute top-0 right-0 pt-10 pr-10 ">
						<Image
							className={`cursor-pointer min-h-[18px] min-w-[18px] w-[18px] h-[18px]`}
							src={`/icons/close.svg`}
							onClick={closeAction}
							alt="close"
							width={18}
							height={18}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
