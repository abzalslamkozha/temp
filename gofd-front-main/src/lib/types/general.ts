import { CSSProperties, ReactNode } from "react";
export interface StyledComponentProps {
    children?: ReactNode;
    className?: string;
    style?: CSSProperties;
}
export type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;

export interface Tab {
    tabName: string;
    href: string;
    regex?: RegExp;
}
