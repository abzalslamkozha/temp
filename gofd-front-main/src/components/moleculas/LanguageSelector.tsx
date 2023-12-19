"use client";
import { MyButton } from "@/components/atoms/MyButton";
import { Menu } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";

export const LanguageSelector = ({ ...props }) => {
    return (
        <div className="relative">
            <Menu>
                <Menu.Button className="bg-white rounded-[5px] text-blue_text font-semibold px-5 py-[10px] flex justify-center items-center gap-[10px] text-sm leading-[130%]">
                    <Image
                        src="/icons/world.svg"
                        width={14}
                        height={14}
                        alt="icon"
                    />{" "}
                    Ру
                </Menu.Button>
                <Menu.Items
                    className={clsx(
                        "absolute mt-[10px]",
                        `w-[120px] [&>*]:w-full [&>*:hover]:bg-white_hover [&>*]:px-[10px] [&>*]:py-[5px] [&>*]:rounded-none rounded-[5px] overflow-hidden ${props.className}`
                    )}
                >
                    <Menu.Item>
                        <MyButton className="bg-white !justify-start">
                            Қазақша
                        </MyButton>
                    </Menu.Item>
                    <Menu.Item>
                        <MyButton className="bg-white !justify-start">
                            Русский
                        </MyButton>
                    </Menu.Item>
                    <Menu.Item>
                        <MyButton className="bg-white text-left !justify-start">
                            English
                        </MyButton>
                    </Menu.Item>
                </Menu.Items>
            </Menu>
        </div>
    );
};
