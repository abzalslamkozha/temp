"use client";
import { MyButton } from "@/components/atoms/MyButton";
import { MyIcon } from "@/components/atoms/MyIcon";
import { SwitchTabs } from "@/components/moleculas/SwitchTabs";
import { tabs } from "@/lib/consts/general.consts";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathName = usePathname();
    const handleSwitchTabName = (tempPathName: string) => {
        for (const tab of tabs) {
            if (tab.regex?.test(tempPathName)) {
                setActiveTab(tab.tabName);
                break;
            }
        }
    };
    useEffect(() => {
        handleSwitchTabName(pathName);
    }, [pathName]);
    const [activeTab, setActiveTab] = useState<string>("");
    return (
        <div className="flex justify-center">
            <div className="flex overflow-x-scroll no-scroll">
                <main className="">
                    <header className="flex items-center justify-between w-full mb-10">
                        <MyIcon
                            src={"icon"}
                            alt={"logo"}
                            width={110}
                            height={60}
                        />
                        <MyButton className="bg-white">
                            <MyIcon src={"exit"} width={16} height={16} /> Выйти
                        </MyButton>
                    </header>
                    <SwitchTabs
                        tabs={tabs}
                        activeContent={activeTab}
                        rootClassName="mb-5"
                    />
                    {children}
                </main>
            </div>
        </div>
    );
}
