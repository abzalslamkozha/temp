import { MyCard } from "@/components/atoms/MyCard";
import { MyCardBottom } from "@/components/atoms/MyCardBottom";
import { MyIcon } from "@/components/atoms/MyIcon";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
const event = {
    track: "1 трасса",
    start_time: "12.10.2023",
    description: (
        <span>
            Один из разделов турнира — спринт. Если вы любите скорость и азарт,
            то это то, что вам нужно. 
            <br />
            <br />
            Этот захватывающий этап испытает вас на скорость, реакцию и
            маневренность. Проезжайте трассу от старта до финиша быстрее всех,
            уклоняясь от препятствий и обгоняя соперников. 
            <br />
            <br />
            Выбирайте трассу, где дорога скрывает свои сюрпризы: крутые
            повороты, впечатляющие прыжки, тайные туннели и ловушки. Участвуйте
            в одиночку или соберите команду. 
            <br />
            <br />
            Зарегистрируйтесь на сайте, проверьте интернет 
            <br />
            <br />
            Покажите свое мастерство и смелость в гонках на машинах онлайн.
            Желаем удачи и приятной игры!
        </span>
    ),
    payment: 15000,
};

export const TournamentsDetail: FC = ({}) => {
    return (
        <div className="flex w-full gap-5 justify-center ">
            <div className="flex w-1/2  max-w-[653px] min-h-[440px] backdrop-blur-2xl">
                <Image
                    src="/images/fon.png"
                    alt="union"
                    className="rounded-[5px]"
                    width={653}
                    height={440}
                    style={{
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                />
                <div className="absolute top-0 left-0 p-5 flex flex-col h-full justify-between">
                    <div className="flex flex-col gap-5">
                        <div className="flex justify-between items-center gap-5">
                            <h2 className="font-gilroy_bold text-4xl1">
                                {event.track}
                            </h2>
                            <div>
                                <h2 className="font-tilda text-sm1">
                                    Начало турнира &nbsp;&nbsp;{" "}
                                    {event.start_time}
                                </h2>
                            </div>
                        </div>

                        <h2 className="font-tilda text-white text-sm">
                            {event.description}
                        </h2>
                    </div>
                    <div className="flex gap-5">
                        <div className="flex flex-col justify-end">
                            <h2 className="font-gilroy_bold text-base1">
                                Взнос участника
                            </h2>
                        </div>
                        <h2 className="font-gilroy_bold text-4xl1">
                            {event.payment} тг.
                        </h2>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-1/2 max-h-[440px] max-w-[653px]">
                <MyCard className="flex flex-col gap-[50px] min-h-[329px] rounded-none rounded-t-[5px]">
                    <h2 className="font-gilroy_bold text-xl1">
                        Круговая трасса
                    </h2>
                    <div className="flex justify-center">
                        <Image
                            src="/icons/union.svg"
                            alt="union"
                            width={510}
                            height={189}
                        />
                    </div>
                </MyCard>
                {/* <MyCardButtom
					text="участвовать в турнире"
					className="bg-orange text-white"
					iconSrc={<MyIcon src={"start"} width={52} height={41} />}
				/> */}
                <Link href="/home/tournaments/1/participate">
                    <MyCardBottom
                        text="На страницу турнира"
                        className="bg-white !text-blue_text"
                        icon={
                            <MyIcon src={"play-blue"} width={49} height={52} />
                        }
                    />
                </Link>
            </div>
        </div>
    );
};
