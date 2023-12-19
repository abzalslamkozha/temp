import { FC } from "react";
import { MyIcon } from "../atoms/MyIcon";
import { LanguageSelector } from "./LanguageSelector";
interface HeaderProps {
    languageSelectorDropClassName?: string;
}
export const Header: FC<HeaderProps> = ({ languageSelectorDropClassName }) => {
    return (
        <header className="flex items-center justify-between w-full">
            <MyIcon src={"icon"} alt={"logo"} width={110} height={60} />
            <div className="flex gap-10">
                <div className="flex gap-[10px]">
                    <MyIcon
                        src={"instagram"}
                        alt={"instagram"}
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
                <LanguageSelector className={languageSelectorDropClassName} />
            </div>
        </header>
    );
};
