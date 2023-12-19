"use client";
import { MyCard } from "@/components/atoms/MyCard";
import { MyIcon } from "@/components/atoms/MyIcon";
import { MyModal } from "@/components/atoms/MyModal";
import Image from "next/image";
import { FC, useState } from "react";
import { FAQ } from "./static/FAQ";
import { Payment } from "./static/Payment";
import { PrivacyPolicy } from "./static/PrivacyPolicy";
import { Rules } from "./static/Rules";

export const Help: FC = () => {
    const [showQA, setShowQA] = useState(false);
    const [showPayment, setShowPayment] = useState(false);
    const [showRules, setShowRules] = useState(false);
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

    return (
        <>
            {showQA && (
                <MyModal
                    closeAction={() => {
                        setShowQA(false);
                    }}
                    className="flex "
                    bgColor="!bg-[#0F0F15]"
                >
                    <FAQ />
                </MyModal>
            )}
            {showPayment && (
                <MyModal
                    closeAction={() => {
                        setShowPayment(false);
                    }}
                    className="flex "
                >
                    <Payment />
                </MyModal>
            )}
            {showRules && (
                <MyModal
                    closeAction={() => {
                        setShowRules(false);
                    }}
                    className="flex "
                    bgColor="!bg-[#0F0F15]"
                >
                    <Rules />
                </MyModal>
            )}
            {showPrivacyPolicy && (
                <MyModal
                    closeAction={() => {
                        setShowPrivacyPolicy(false);
                    }}
                    className="flex"
                >
                    <PrivacyPolicy />
                </MyModal>
            )}
            <div className="flex flex-col gap-5">
                <div className="flex gap-5">
                    <div className="flex w-1/2 gap-5">
                        <MyCard
                            className="flex flex-col justify-center items-center gap-5 w-1/3 bg-orange min-h-[204px] min-w-[204px]"
                            onClick={() => {
                                setShowQA(true);
                            }}
                        >
                            <MyIcon
                                src="info-white"
                                alt="info-white"
                                width={47}
                                height={47}
                            />
                            <h2 className="font-gilroy_bold uppercase text-center">
                                Q&A
                            </h2>
                        </MyCard>
                        <MyCard
                            className="flex flex-col justify-center items-center gap-5 w-1/3 min-h-[204px] min-w-[204px] bg-white"
                            onClick={() => {
                                setShowPayment(true);
                            }}
                        >
                            <MyIcon
                                src="wallet"
                                alt="wallet"
                                width={60}
                                height={47}
                            />
                            <h2 className="font-gilroy_bold uppercase text-center text-blue_text">
                                Платежи
                            </h2>
                        </MyCard>
                        <MyCard
                            className="flex flex-col justify-center items-center gap-5 w-1/3 min-h-[204px] min-w-[204px] bg-white"
                            onClick={() => {
                                setShowRules(true);
                            }}
                        >
                            <MyIcon
                                src="rules"
                                alt="rules"
                                width={47}
                                height={47}
                            />
                            <h2 className="font-gilroy_bold uppercase text-center text-blue_text">
                                Правила участия
                            </h2>
                        </MyCard>
                    </div>
                    <div className="w-1/2">
                        <MyCard
                            className="flex flex-col w-full h-full bg-white justify-center items-center gap-5"
                            onClick={() => {
                                setShowPrivacyPolicy(true);
                            }}
                        >
                            <MyIcon
                                src="contract"
                                alt="contract"
                                width={36}
                                height={47}
                            />
                            <h2 className="font-gilroy_bold uppercase text-center text-blue_text">
                                Публичный договор-оферта и политика
                                конфиденциальность
                            </h2>
                        </MyCard>
                    </div>
                </div>
                <div>
                    <MyCard className="relative flex flex-col bg-blue_bg justify-center min-h-[257px]">
                        <div className="flex">
                            <div className="flex gap-5 w-1/2 justify-center">
                                <MyIcon
                                    src="astanaLogo"
                                    alt="astanaLogo"
                                    width={96}
                                    height={98}
                                />
                                <MyIcon
                                    src="astana"
                                    alt="astana"
                                    width={241}
                                    height={33}
                                />
                            </div>
                            <div className="flex w-1/2 justify-center">
                                <Image
                                    src="/icons/satbayev.svg"
                                    alt="satbayev"
                                    width={357}
                                    height={81.2}
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>
                        <div className="absolute bottom-0 pb-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <h2 className="font-gilroy_bold uppercase text-center whitespace-nowrap">
                                Наши партнеры
                            </h2>
                        </div>
                    </MyCard>
                </div>
            </div>
        </>
    );
};
