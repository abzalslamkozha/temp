import { StyledComponentProps } from "@/lib/types/general";
import { formatDate } from "@/lib/utils/date.utils";
import { itemOrDash } from "@/lib/utils/general.utils";
import { MyCard } from "@/components/atoms/MyCard";
import { MyCardBottom } from "@/components/atoms/MyCardBottom";
import { MyIcon } from "@/components/atoms/MyIcon";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { TournamentData } from "@/lib/types/tourner";
const columnWidths = {
    date: 125,
    tourner: 125,
    result: 105,
    place: 105,
    gap: 20,
};

const tourners: TournamentData[] = [
    {
        date: new Date(1702202911267),
        tourner: "GOD JR",
        result: "Победа",
        place: 1,
    },
    {
        date: new Date(1702202911267),
        tourner: "GOD JR",
        result: "Победа",
        place: 1,
    },
    {
        date: new Date(1702202911267),
        tourner: "GOD Partner",
        result: "Победа",
        place: 1,
    },
    {
        date: new Date(1702202911267),
        tourner: "GOD Partner",
        result: "ТОП 5",
        place: 4,
    },
    {
        date: new Date(1702202911267),
        tourner: "GOD Partner",
        result: "ТОП 10",
        place: 7,
    },
    {
        date: new Date(1702202911267),
        tourner: "GOD Partner",
        result: "Победа",
        place: 1,
    },
    {
        date: new Date(1702202911267),
        tourner: "GOD Partner",
        result: "ТОП 5",
        place: 4,
    },
    {},
    {
        date: new Date(1702202911267),
        tourner: "GOD Partner",
        result: "Победа",
        place: 1,
    },
    {
        date: new Date(1702202911267),
        tourner: "GOD Partner",
        result: "ТОП 5",
        place: 4,
    },
    {
        date: new Date(1702202911267),
        tourner: "GOD Partner",
        result: "ТОП 10",
        place: 7,
    },
    {
        date: new Date(1702202911267),
        tourner: "GOD Partner",
        result: "Победа",
        place: 1,
    },
    {
        date: new Date(1702202911267),
        tourner: "GOD Partner",
        result: "ТОП 5",
        place: 4,
    },
    {
        date: new Date(1702202911267),
        tourner: "GOD Partner",
        result: "ТОП 10",
        place: 7,
    },
    {
        date: new Date(1702202911267),
        tourner: "GOD Partner",
        result: "Победа",
        place: 1,
    },
    {
        date: new Date(1702202911267),
        tourner: "GOD Partner",
        result: "ТОП 5",
        place: 4,
    },
    {
        date: new Date(1702202911267),
        tourner: "GOD Partner",
        result: "ТОП 10",
        place: 7,
    },
];

export const MyIncomingTournamentList: FC = ({}) => {
    return (
        <div className="rounded-[5px] overflow-hidden w-max min-w-max h-full flex flex-col justify-between">
            <MyCard className="w-[315px] flex flex-col gap-5 rounded-none flex-grow">
                <div className="flex text-sm31 leading-none !font-tilda items-center justify-between">
                    <h3>Мои турниры</h3>
                    <Link href={""} className="flex items-center gap-[10px]">
                        Список турниров{" "}
                        <Image
                            width={4}
                            height={8}
                            src={"/icons/right.svg"}
                            alt=""
                            className="mt-[4px]"
                        />
                    </Link>
                </div>
                <div className="overflow-y-scroll gray-scroll -mr-[12px] pr-[10px] min-h-[220px] max-h-[220px]">
                    {tourners.map((e, key) => (
                        <IncomingTournamentRow
                            {...e}
                            key={key}
                            className={clsx({
                                "bg-[rgba(255,255,255,0.20)]": key % 2 == 0,
                            })}
                        />
                    ))}
                </div>
            </MyCard>
            <MyCardBottom
                text="Список турниров"
                className="bg-white !text-blue_text"
                icon={<MyIcon src={"burger"} width={58} height={42} />}
            />
        </div>
    );
};

export const GameStatistics: React.FC = ({}) => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    return (
        <MyCard className="w-max min-w-max flex flex-col gap-5">
            <h1 className="font-gilroy_bold text-xl1">Статистика</h1>
            <div className="flex justify-between gap-8 items-center font-gilroy_bold text-4xl1">
                <div className="flex items-center gap-4">
                    Всего игр <div className="h-[2px] w-[60px] bg-white"></div>{" "}
                    0
                </div>
                <div className="flex items-center gap-4">
                    Всего побед{" "}
                    <div className="h-[2px] w-[30px] bg-white"></div> 0
                </div>
            </div>
            <div className="h-[2px] w-full bg-white"></div>
            <div className="flex">
                {arr.map((e, key) => (
                    <TournamentSquare
                        status={"H"}
                        className={key % 2 == 1 ? "!bg-[#1F66D0]" : ""}
                        key={key}
                    />
                ))}
            </div>
            <div
                className={clsx("flex font-semibold text-base1")}
                style={{ gap: columnWidths.gap }}
            >
                <div style={{ width: columnWidths.date }}>Дата</div>
                <div style={{ width: columnWidths.tourner }}>Турнир</div>
                <div style={{ width: columnWidths.result }}>Результат</div>
                <div style={{ width: columnWidths.place }}>Место</div>
            </div>
            <div className="overflow-y-scroll gray-scroll -mr-[12px] pr-[10px] min-h-[220px] max-h-[220px]">
                {tourners.map((e, key) => (
                    <TournamentRow
                        {...e}
                        key={key}
                        className={clsx({
                            "bg-[rgba(255,255,255,0.20)]": key % 2 == 0,
                        })}
                    />
                ))}
            </div>
        </MyCard>
    );
};
interface TournamentSquareProps extends StyledComponentProps {
    status: "H" | number;
}
const TournamentSquare: FC<TournamentSquareProps> = ({ className, status }) => {
    return (
        <div
            className={clsx(
                "w-[40px] aspect-square flex items-center justify-center font-tilda text-base1 font-semibold bg-[#2775EA]",
                className
            )}
        >
            {status}
        </div>
    );
};

interface TournamentRowProps extends StyledComponentProps, TournamentData {}

const TournamentRow: FC<TournamentRowProps> = ({
    className,
    date,
    tourner,
    result,
    place,
}) => {
    return (
        <div
            style={{ gap: columnWidths.gap }}
            className={clsx(
                "flex items-center font-tilda text-sm1 font-normal rounded-[5px] py-[5px] px-[10px]",
                className
            )}
        >
            <div style={{ width: columnWidths.date - 10 }}>
                {itemOrDash(formatDate(date))}
            </div>
            <div className="uppercase" style={{ width: columnWidths.tourner }}>
                {itemOrDash(tourner)}
            </div>
            <div style={{ width: columnWidths.result }}>
                {itemOrDash(result)}
            </div>
            <div style={{ width: columnWidths.place }}>{itemOrDash(place)}</div>
            <div className="flex-grow">
                {place == 1 && (
                    <Image
                        src={"/icons/cup.svg"}
                        alt="cup"
                        className="float-right"
                        width={12}
                        height={14}
                    />
                )}
            </div>
        </div>
    );
};

const IncomingTournamentRow: FC<TournamentRowProps> = ({
    className,
    date,
    tourner,
}) => {
    return (
        <div
            className={clsx(
                "flex items-center font-tilda text-sm1 leading-none font-normal rounded-[5px] py-[5px] px-[10px] justify-between",
                className
            )}
        >
            <div>{itemOrDash(formatDate(date))}</div>
            <div className="uppercase">{itemOrDash(tourner)}</div>
        </div>
    );
};
