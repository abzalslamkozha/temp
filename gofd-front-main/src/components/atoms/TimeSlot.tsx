import clsx from "clsx";
import { FC, ButtonHTMLAttributes } from "react";
interface TimeSlotProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    date?: Date;
    places?: number;
    isActive?: boolean;
}
export const TimeSlot: FC<TimeSlotProps> = ({
    date = new Date(),
    places,
    isActive,
    ...props
}) => {
    return (
        <button
            className={clsx(
                "flex cursor-pointer items-center justify-center border-[2px] border-orange px-[10px] py-[6px]",
                "text-white text-sm1 font-normal h-max rounded-[5px]",
                { "bg-orange": isActive }
            )}
            {...props}
        >
            {places ? (
                <>
                    {date?.getHours()}:{date?.getMinutes()} (мест {places})
                </>
            ) : (
                date?.toLocaleDateString()
            )}
        </button>
    );
};
