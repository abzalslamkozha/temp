"use client";
import { FC } from "react";
import { MyButton } from "../atoms/MyButton";
import { MyIcon } from "../atoms/MyIcon";
import Link from "next/link";
import { Tab } from "@/lib/types/general";
import clsx from "clsx";

interface SwitchTabsProps {
    tabs: Tab[];
    activeContent: string;
    rootClassName?: string;
}

export const SwitchTabs: FC<SwitchTabsProps> = ({
    tabs,
    activeContent,
    rootClassName,
}) => {
    return (
        <div className={clsx("flex flex-col w-max", rootClassName)}>
            <div className="flex gap-[1px]">
                {tabs?.map((tab, key) => (
                    <Link
                        href={tab.href}
                        key={key}
                        className={`font-tilda_semibold flex items-center justify-center w-[198px] py-[10px] max-h-[40px] text-sm leading-5 focus:outline-none
                ${
                    activeContent === tab.tabName
                        ? "bg-orange text-white"
                        : "bg-white text-blue_text"
                }
                ${key === 0 ? "rounded-l-[5px]" : ""} 
                ${key === tabs.length - 1 ? "rounded-r-[5px]" : ""}
              `}
                    >
                        <span
                            className={`${
                                activeContent === tab.tabName
                                    ? "font-bold text-white"
                                    : "text-secondary"
                            }`}
                        >
                            {tab.tabName}
                        </span>
                    </Link>
                ))}
                <div className="flex pl-5 gap-5 ">
                    <MyButton className="font-tilda_semibold min-w-[205px] bg-blue_bg px-10 backdrop-blur-md min-h-[40px] w-full text-white">
                        Студенческая лига
                    </MyButton>

                    <div className="flex gap-[10px] w-full">
                        <MyIcon
                            src={"instagram"}
                            alt={"insta"}
                            width={38}
                            height={38}
                        />
                        <MyIcon
                            src={"facebook"}
                            alt={"facebook"}
                            width={38}
                            height={38}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
