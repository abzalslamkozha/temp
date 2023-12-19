import { Slot, SlotDay } from "@/lib/types/tourner";
import { MyButton } from "@/components/atoms/MyButton";
import { MyCard } from "@/components/atoms/MyCard";
import { MyCardBottom } from "@/components/atoms/MyCardBottom";
import { MyIcon } from "@/components/atoms/MyIcon";
import { TimeSlot } from "@/components/atoms/TimeSlot";
import clsx from "clsx";
import { FC, useState } from "react";

export const TrainingCard: React.FC = ({}) => {
    return (
        <MyCard className="w-[390px] h-[440px] flex flex-col items-center justify-center gap-5">
            <h2 className="text-4xl1 font-gilroy_bold">Тренировка</h2>
            <p className="text-base1 font-tilda_semibold">
                Выберите дату участия в тренировке
            </p>
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

export const TrainingCardWithSlots: React.FC = ({}) => {
    const [active, setActive] = useState<SlotDay>(slotDays[0]);
    const [activeTimeSlot, setActiveTimeSlot] = useState<Slot | null>(null);
    return (
        <MyCard className="w-[420px] min-h-[440px] flex flex-col justify-between gap-5">
            <div className="space-y-5">
                <h2 className="text-4xl1 font-gilroy_bold">Тренировка</h2>
                <p className="text-base1 font-tilda_semibold">
                    Выберите дату участия в тренировке
                </p>
                <div className="flex gap-[10px] flex-wrap">
                    {slotDays.map((slotDay, key) => (
                        <TimeSlot
                            date={slotDay.day}
                            isActive={
                                active?.day.getTime() == slotDay.day.getTime()
                            }
                            onClick={() => {
                                setActiveTimeSlot(null);
                                setActive(slotDay);
                            }}
                            key={key}
                        />
                    ))}
                </div>
            </div>
            <div className="space-y-5">
                <p className="text-base1 font-tilda_semibold">
                    Выберите дату участия в тренировке
                </p>
                <div className="flex gap-[10px] flex-wrap">
                    {active.slots.map((slot, key) => (
                        <TimeSlot
                            date={slot.time}
                            places={slot.places}
                            isActive={
                                activeTimeSlot?.time?.getTime() ==
                                slot.time.getTime()
                            }
                            onClick={() => {
                                setActiveTimeSlot(slot);
                            }}
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

export const IncomingTrainingCard: FC = () => {
    return (
        <div className="rounded-[5px] overflow-hidden">
            <MyCard className="space-y-10">
                <div className="space-y-5">
                    <h2 className="text-4xl1 font-gilroy_bold">Тренировка</h2>
                    <p className="w-[330px] text-sm">
                        Участникам предоставляется возможность провести 3
                        пробных заезда перед началом соревнований.
                        Продолжительность каждого заезда составляет около 15
                        минут. Рекомендуем отнестись к пробным заездам с
                        максимальной серьезностью и ответственностью, как к
                        реальным гонкам. Желаем успехов!
                    </p>
                </div>
                <div className="space-y-5 pb-[18px]">
                    <p className="text-base1 font-tilda_semibold text-center">
                        Начало через
                    </p>
                    <h2 className="text-4xl1 font-gilroy_bold text-center">
                        00:00:13
                    </h2>
                </div>
            </MyCard>
            <MyCard className="flex items-center justify-between bg-orange rounded-t-none h-[110px]">
                <h3 className="font-gilroy_bold text-xl1 uppercase">
                    Начать
                    <br /> тренировочный заезд
                </h3>
                <MyIcon src={"double-arrow"} width={60} height={50} />
            </MyCard>
        </div>
    );
};

const results = [100000, 200000, 300000];

export const TrainingResultsCard: React.FC = ({}) => {
    return (
        <MyCard className="w-[390px] min-h-[440px] flex flex-col justify-between gap-5">
            <div className="space-y-5">
                <h2 className="text-4xl1 font-gilroy_bold">Тренировка</h2>
                <p className="text-base1 font-tilda_semibold">
                    Ваши результаты
                </p>
                <div className="">
                    {results.map((e, key) => (
                        <div
                            className={clsx(
                                "flex items-center font-tilda text-sm1 leading-none font-normal rounded-[5px] py-[5px] px-[10px] justify-between",
                                {
                                    "bg-[rgba(255,255,255,0.20)]": key % 2 == 0,
                                }
                            )}
                            key={key}
                        >
                            <span>Заезд №{key}</span>
                            <span>
                                {Math.floor(e / 60000)} мин.{" "}
                                {(e % 60000) / 1000} сек.
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </MyCard>
    );
};
