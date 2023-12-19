"use client";
import { MyButton } from "@/components/atoms/MyButton";
import { MyCard } from "@/components/atoms/MyCard";
import { MyCardBottom } from "@/components/atoms/MyCardBottom";
import { MyIcon } from "@/components/atoms/MyIcon";
import { Menu } from "@headlessui/react";
import clsx from "clsx";
import Image from "next/image";
import { FC } from "react";

export const Profile: FC = () => {
    return (
        <div className="flex gap-5 ">
            <ProfileCard />
            <div className="flex flex-col gap-5">
                <div className="relative w-[877px] h-[350px]">
                    <Image
                        src="/images/fon.png"
                        className="rounded-[5px]"
                        alt="fon"
                        fill
                        style={{
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                    />

                    <Image
                        className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
                        src="/images/play-button.png"
                        alt="play"
                        width={67}
                        height={67}
                        style={{
                            objectFit: "contain",
                            objectPosition: "center",
                        }}
                    />
                    <h2 className="absolute bottom-0 left-0 pb-5 pl-5">
                        Инструкция по платформе
                    </h2>
                </div>
                <div className="flex max-h-[111px]">
                    <MyCard className="bg-blue_bg w-1/2 rounded-none rounded-s-[5px] flex flex-col gap-5">
                        <h2 className="font-gilroy_bold text-xl leading-[100%] uppercase text-white">
                            Ваш баланс
                        </h2>
                        <h2 className="font-gilroy_bold text-4xl leading-[100%] ">
                            0 <span className="text-2xl">тг.</span>
                        </h2>
                    </MyCard>
                    <MyCard className="bg-white w-1/2 rounded-none rounded-e-[5px] ">
                        <div className="flex justify-between">
                            <div className="w-[168px]">
                                <h2 className="font-gilroy_bold text-xl leading-[100%] uppercase text-blue_text">
                                    Пополнить баланс
                                </h2>
                            </div>

                            <div className="flex justify-end pt-6">
                                <MyIcon
                                    width={64}
                                    height={51}
                                    src="wallet"
                                    alt="waller"
                                ></MyIcon>
                            </div>
                        </div>
                    </MyCard>
                </div>
            </div>
        </div>
    );
};

export const ProfileCard: FC = () => {
    return (
        <div>
            <div className="relative min-w-[429px]">
                <Image
                    src="/images/man.png"
                    alt="fon"
                    width={429}
                    height={370}
                    style={{
                        objectFit: "contain",
                        objectPosition: "center",
                    }}
                />
                <div className="w-[429px] h-[370px] absolute top-0 left-0 avatar-mask"></div>
                <div className="absolute top-0 right-0 z-10 pt-5 pr-5">
                    <Menu>
                        <Menu.Button className="rounded-[5px] text-blue_text font-semibold flex justify-center items-center gap-[10px] text-sm leading-[130%]">
                            <div className="w-[120px] flex justify-end">
                                <Image
                                    src="/icons/menu.svg"
                                    width={14}
                                    height={2}
                                    alt="icon"
                                />
                            </div>
                        </Menu.Button>
                        <Menu.Items
                            className={clsx(
                                "absolute mt-[10px]",
                                `w-[120px] [&>*]:w-full [&>*:hover]:bg-white_hover [&>*]:px-[10px] [&>*]:py-[5px] [&>*]:rounded-none rounded-[5px] overflow-hidden`
                            )}
                        >
                            <Menu.Item>
                                <MyButton className="bg-white !justify-start">
                                    Удалить фото
                                </MyButton>
                            </Menu.Item>
                            <Menu.Item>
                                <MyButton className="bg-white !justify-start">
                                    Заменить фото
                                </MyButton>
                            </Menu.Item>
                        </Menu.Items>
                    </Menu>
                </div>
                <h2 className="absolute bottom-0 left-0 font-tilda_semibold font-semibold leading-[100%] pb-5 pl-5">
                    Константин Константинович
                </h2>
            </div>
            <MyCardBottom
                text="Редактировать профиль"
                icon={<MyIcon width={46} height={45} src="edit" alt="edit" />}
            ></MyCardBottom>
        </div>
    );
};
