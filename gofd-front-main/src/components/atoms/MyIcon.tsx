import { Overwrite } from "@/lib/types/general";
import Image, { ImageProps } from "next/image";
import { FC } from "react";
type MyIconProps = Overwrite<
    ImageProps,
    {
        alt?: string;
    }
>;
export const MyIcon: FC<MyIconProps> = ({ ...props }) => {
    return (
        <Image
            className={`${props.className}`}
            src={`/icons/${props.src}.svg`}
            alt={`${props.src}`}
            style={{
                objectFit: "contain",
                objectPosition: "center",
            }}
            width={props.width}
            height={props.height}
        />
    );
};
