import { Slot, SlotDay } from "@/lib/types/tourner";
import { MyButton } from "@/components/atoms/MyButton";
import { MyCard } from "@/components/atoms/MyCard";
import { MyCardBottom } from "@/components/atoms/MyCardBottom";
import { MyIcon } from "@/components/atoms/MyIcon";
import { TimeSlot } from "@/components/atoms/TimeSlot";
import clsx from "clsx";
import { FC, useState } from "react";
import { TournamentData } from "@/lib/types/tourner";
import { formatDate } from "@/lib/utils/date.utils";
import { itemOrDash } from "@/lib/utils/general.utils";
import Image from "next/image";
import Link from "next/link";

interface TournamentEnrollProps extends TournamentData {
    isActive?: boolean;
}
export const TournamentEnrollCard: FC<TournamentEnrollProps> = ({
    tourner,
    date,
    isActive,
}) => {
    return (
        <div className="rounded-[5px] overflow-hidden flex flex-col relative w-[390px] h-full font-tilda_semibold">
            <Image alt="" fill src="/images/green-car.png" className="-z-10" />
            <div className="incoming-tourner-bg absolute h-full w-full top-0 left-0 -z-10"></div>
            <div className="flex items-center justify-center flex-col gap-5 flex-grow">
                <h2 className="text-base1">Ближайший турнир</h2>
                <h2
                    className={clsx("text-4xl1 uppercase font-gilroy_bold", {
                        italic: !tourner,
                    })}
                >
                    {itemOrDash(tourner)}
                </h2>
                <h2 className="text-base1">Начало через</h2>
                <h2
                    className={clsx("text-4xl1 uppercase font-gilroy_bold", {
                        italic: !date,
                    })}
                >
                    00:05:13
                    {/* {itemOrDash(formatDate(date))} */}
                </h2>
            </div>
            <Link href={"/animate"}>
                <MyCard
                    className={clsx(
                        "h-[110px] flex items-center justify-between rounded-t-none",
                        {
                            "bg-orange": isActive,
                        },
                        { "bg-[#0C0E4A]": !isActive }
                    )}
                >
                    <h2
                        className={clsx("font-gilroy_bold text-4xl1", {
                            "text-[#161853]": !isActive,
                        })}
                    >
                        ВПЕРЕД!
                    </h2>
                    {isActive ? (
                        <div className="flex">
                            <MyIcon
                                src={"double-arrow"}
                                width={50}
                                height={50}
                            />
                            <MyIcon
                                src={"double-arrow"}
                                width={50}
                                height={50}
                            />
                        </div>
                    ) : (
                        <div className="flex">
                            <MyIcon
                                src={"double-arrow-disabled"}
                                width={50}
                                height={50}
                            />
                            <MyIcon
                                src={"double-arrow-disabled"}
                                width={50}
                                height={50}
                            />
                        </div>
                    )}
                </MyCard>
            </Link>
        </div>
    );
};

export const TournamentRegisterCard: React.FC = ({}) => {
    const [active, setActive] = useState<Slot>(slotDays[0].slots[0]);
    return (
        <MyCard className="w-[390px] min-w-[390px] min-h-[440px] flex flex-col justify-between gap-5">
            <div className="space-y-5">
                <h2 className="text-4xl1 font-gilroy_bold">1 трасса</h2>
                <p className="text-base1 font-tilda_semibold">
                    Выберите время участия в турнире
                </p>
                <div className="flex gap-5">
                    <div>Начало турнира</div>
                    <div>12.10.2023</div>
                </div>
                <div className="flex gap-[10px] flex-wrap">
                    {slotDays[0].slots.map((slot, key) => (
                        <TimeSlot
                            date={slot.time}
                            isActive={
                                active?.time.getTime() == slot.time.getTime()
                            }
                            onClick={() => {
                                setActive(slot);
                            }}
                            places={slot.places}
                            key={key}
                        />
                    ))}
                </div>
            </div>
            <div className="space-y-5">
                <p className="text-sm leading-normal">
                    Внимание! После подтверждения выбора вы не сможете сменить
                    время.
                </p>
                <MyButton className="w-full bg-orange text-white !text-base1">
                    Подтвердить
                </MyButton>
            </div>
        </MyCard>
    );
};

export const TournamentDescriptionCard: FC = ({}) => {
    return (
        <MyCard className="text-sm w-[390px] h-full">
            <p>
                Один из разделов турнира - это спринт. <br />
                <br /> В этом разделе вы должны проехать от старта до финиша как
                можно быстрее, минуя препятствия и обгоняя соперников. <br />
                <br /> Спринт - это испытание для вашей скорости, реакции и
                маневренности. Вы можете выбрать любую трассу из нашего
                каталога.
                <br />
                <br /> Каждая трасса имеет свои особенности, такие как повороты,
                прыжки, туннели, ловушки и т.д. Вы можете участвовать в спринте
                в одиночку или в команде. <br />
                <br />
                Если вы любите скорость и азарт, то спринт - это то, что вам
                нужно. Просто зарегистрируйтесь на сайте, подключите свою машину
                и начните гонку. Не упустите свой шанс показать свое мастерство
                и смелость в гонках на радиоуправляемых машинах онлайн. Желаем
                вам удачи и приятной игры!
            </p>
        </MyCard>
    );
};

export const TournamentMapCard: FC = ({}) => {
    return (
        <MyCard className="text-sm w-[390px] h-full relative">
            <h4 className="font-gilroy_bold text-xl1">Круговая трасса</h4>
            <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
                <MyIcon width={316} height={108} src={"map"} />
            </div>
        </MyCard>
    );
};

const slotDays: SlotDay[] = [
    {
        day: new Date(),
        slots: [
            { time: new Date(1900090000), places: 25 },
            { time: new Date(2190000000), places: 15 },
            { time: new Date(3200000900), places: 127 },
            { time: new Date(4609000000), places: 3 },
            { time: new Date(5700009000), places: 1 },
        ],
    },
    {
        day: new Date(200000000000),
        slots: [
            { time: new Date(1900090000), places: 25 },
            { time: new Date(2190000000), places: 25 },
            { time: new Date(3200000900), places: 25 },
            { time: new Date(4609000000), places: 25 },
            { time: new Date(5700009000), places: 25 },
        ],
    },
    {
        day: new Date(1000000000),
        slots: [
            { time: new Date(1000000), places: 25 },
            { time: new Date(1000000), places: 25 },
            { time: new Date(1000000), places: 25 },
            { time: new Date(1000000), places: 25 },
            { time: new Date(1000000), places: 25 },
        ],
    },
    {
        day: new Date(10000000000),
        slots: [
            { time: new Date(10000000000), places: 25 },
            { time: new Date(10000000000), places: 25 },
            { time: new Date(10000000000), places: 25 },
            { time: new Date(10000000000), places: 25 },
            { time: new Date(10000000000), places: 25 },
        ],
    },
    {
        day: new Date(1000),
        slots: [
            { time: new Date(2000000000), places: 25 },
            { time: new Date(2000000000), places: 25 },
            { time: new Date(2000000000), places: 25 },
            { time: new Date(2000000000), places: 25 },
            { time: new Date(2000000000), places: 25 },
        ],
    },
];
