import { Header } from "@/components/moleculas/Header";
import { ReactNode } from "react";

export default function WelcomeLayout({ children }: { children: ReactNode }) {
    return (
        <main className="relative flex-grow flex flex-col justify-center  py-[130px]">
            <div className="absolute -top-[130px] left-0 p-[inherit] w-full">
                <Header languageSelectorDropClassName="w-fit" />
            </div>
            <div className="flex justify-center items-center">
                <div className="w-[26.75rem] flex flex-col gap-5">
                    <h1 className="text-4xl  leading-[100%] font-tilda font-semibold">
                        Добро пожаловать!
                    </h1>
                    <h2 className="font-tilda leading-[150%] font-normal text-sm">
                        Перед тем, как воспользоваться всеми возможностями
                        платформы, заполните короткую анкету и посмотрите
                        инструкцию. И, кстати, она будет всегда под рукой, даже
                        после авторизации!
                    </h2>
                    {children}
                </div>
            </div>
        </main>
    );
}
