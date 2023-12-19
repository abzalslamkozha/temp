import Image from "next/image";
import { FC } from "react";
import { paymentText } from "./texts";

export const Payment: FC = () => {
	return (
		<div className="relative w-full h-full p-10 bg-white rounded-[5px]">
			<div className="relative flex flex-col z-10 gap-10 font-tilda">
				<h2 className="text-4xl font-semibold leading-[110%] text-black">
					Информация о платежах
				</h2>
				<Image
					src="/icons/payments.svg"
					alt="payments"
					width={429}
					height={33}
				/>
				<h2 className="text-sm leading-[150%] text-black">
					{paymentText}
				</h2>
			</div>
		</div>
	);
};
