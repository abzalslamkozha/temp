import { MyCardBottom } from "@/components/atoms/MyCardBottom";
import { MyIcon } from "@/components/atoms/MyIcon";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode } from "react";

interface TournamentsCardProps {
    event: {
        track: string;
        start_time: string;
        description: ReactNode;
        payment?: number;
    };
}

export const TournamentsCard: FC<TournamentsCardProps> = ({ event }) => {
    return (
        <div className="min-w-[391px] min-h-[481px]">
            <div className="relative w-full h-[370px] ">
                <Image
                    src="/images/fon.png"
                    alt="fon"
                    className="rounded-t-[5px]"
                    fill
                    style={{
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                />
                <div className="absolute top-0 left-0 p-5 flex flex-col h-full justify-between">
                    <div className="flex gap-5 flex-col">
                        <h2 className="font-gilroy_bold text-4xl1">
                            {event.track}
                        </h2>
                        <h2 className="font-tilda text-sm1">
                            Начало турнира &nbsp;&nbsp; {event.start_time}
                        </h2>
                        <h2 className="text-white text-sm">
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

            <Link href="/home/tournaments/1">
                <MyCardBottom
                    text="Подробнее"
                    className="bg-orange text-white"
                    icon={
                        <MyIcon src={"burger-white"} width={52} height={43} />
                    }
                />
            </Link>
        </div>
    );
};
