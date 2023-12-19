import { FC } from "react";
import { privacyPolicyText } from "./texts";

export const PrivacyPolicy: FC = () => {
	return (
		<div className="relative w-full h-full p-10 bg-white rounded-[5px]">
			<div className="relative flex flex-col z-10 gap-10 font-tilda">
				<h2 className="text-4xl font-semibold leading-[110%] text-black">
					Публичный договор-оферта и политика конфиденциальность
				</h2>

				<h2 className="text-sm leading-[150%] text-black">
					{privacyPolicyText}
				</h2>
			</div>
		</div>
	);
};
