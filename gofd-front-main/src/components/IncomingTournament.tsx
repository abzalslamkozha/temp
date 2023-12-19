import { TournamentData } from "@/lib/types/tourner";
import { formatDate } from "@/lib/utils/date.utils";
import { itemOrDash } from "@/lib/utils/general.utils";
import { MyCardBottom } from "@/components/atoms/MyCardBottom";
import { MyIcon } from "@/components/atoms/MyIcon";
import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";
import Link from "next/link";
interface IncomingTournamentProps extends TournamentData {}
export const IncomingTournament: FC<IncomingTournamentProps> = ({
    tourner,
    date,
}) => {
    return (
        <div className="rounded-[5px] overflow-hidden flex flex-col relative w-[320px] h-full font-tilda_semibold">
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
                    01:16:13
                    {/* {itemOrDash(formatDate(date))} */}
                </h2>
            </div>
            {tourner && (
                <Link
                    className="cursor-pointer"
                    href={"/home/tournaments/1/participate"}
                >
                    <MyCardBottom
                        text="На страницу турнира"
                        icon={<MyIcon src={"play"} width={50} height={50} />}
                    />
                </Link>
            )}
        </div>
    );
};
