import Image from "next/image";
import { FC } from "react";
import { rulesText } from "./texts";

export const Rules: FC = () => {
	return (
		<div className="relative w-full h-full p-10">
			<Image src="/images/back-blur.png" alt="blur" fill />
			<div className="relative flex flex-col z-10 gap-10 font-tilda">
				<h2 className="text-4xl font-semibold leading-[110%]">
					Правила участия
				</h2>
				<h2 className="text-sm leading-[150%]">{rulesText}</h2>
			</div>
		</div>
	);
};
