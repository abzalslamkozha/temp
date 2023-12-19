import Image from "next/image";
import { FC } from "react";

export const FAQ: FC = () => {
	return (
		<div className="relative w-full h-full">
			<Image src="/images/back-blur.png" alt="blur" fill />
			<div className="relative flex flex-col items-center py-10 z-10 gap-10 font-tilda text-center">
				<h2 className="text-4xl font-medium leading-[110%]">
					Остались вопросы?
				</h2>

				<div className="flex items-center flex-col gap-[10px] max-w-[518px]">
					<h2 className="text-xl font-medium leading-[110%]">
						Когда будет проходить турнир?
					</h2>
					<h2 className="text-sm leading-[150%]">
						Ежедневный турнир будет проходить 3 дня подряд
					</h2>
				</div>
				<div className="flex items-center flex-col gap-[10px] max-w-[518px]">
					<h2 className="text-xl font-medium leading-[110%]">
						Сколько стоит взнос?
					</h2>
					<h2 className="text-sm leading-[150%]">
						Взнос на участие в одном разделе турнира стоит
					</h2>
				</div>
				<div className="flex items-center flex-col gap-[10px] max-w-[518px]">
					<h2 className="text-xl font-medium leading-[110%]">
						Это виртуальные гонки?
					</h2>
					<h2 className="text-sm leading-[150%]">
						Нет, игроки будут подсоединяться онлайн и играть через
						платформу, управляя реальными машинками на специальной
						трассе в г.Алматы
					</h2>
				</div>
				<div className="flex items-center flex-col gap-[10px] max-w-[518px]">
					<h2 className="text-xl font-medium leading-[110%]">
						Какие возрастные ограничения?
					</h2>
					<h2 className="text-sm leading-[150%]">
						Участвовать в Game of Drones можно с 12 лет
					</h2>
				</div>
			</div>
		</div>
	);
};
