"use client";
import { MyButton } from "@/components/atoms/MyButton";
import Image from "next/image";

export default function WelcomePage() {
    return (
        <>
            <div className="relative">
                <Image
                    src="/images/fon.png"
                    alt="fon"
                    width={428}
                    height={207}
                    style={{
                        objectFit: "contain",
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
            </div>
            <div className="flex w-full gap-5">
                <MyButton className="border-2 leading-[130%] font-tilda text-base border-white text-white w-1/2">
                    Выход
                </MyButton>
                <MyButton
                    onClick={() => {
                        window.location.href = "/home";
                    }}
                    className="border-2 leading-[130%] font-tilda text-base border-white bg-white w-1/2"
                >
                    Далее
                </MyButton>
            </div>
        </>
    );
}
