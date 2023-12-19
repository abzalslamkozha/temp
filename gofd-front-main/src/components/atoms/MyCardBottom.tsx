import { StyledComponentProps } from "@/lib/types/general";
import { MyCard } from "./MyCard";
import { FC, ReactNode } from "react";
import clsx from "clsx";
interface MyCardBottomProps extends StyledComponentProps {
    text: string;
    icon: ReactNode;
}
export const MyCardBottom: FC<MyCardBottomProps> = ({
    text,
    icon,
    className,
}) => {
    return (
        <MyCard
            className={clsx(
                "bg-orange h-[111px] rounded-none rounded-b-[5px] w-full",
                className
            )}
        >
            <div className="flex justify-between h-full">
                <div className="max-w-[168px]">
                    <h2 className="font-gilroy_bold text-xl leading-[100%] uppercase">
                        {text}
                    </h2>
                </div>
                <div className="flex items-end">{icon}</div>
            </div>
        </MyCard>
    );
};
