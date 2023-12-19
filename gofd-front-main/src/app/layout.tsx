import "@/styles/globals.css";
import "@/styles/custom.css";
import "@/styles/animations.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import clsx from "clsx";

export const metadata: Metadata = {
    title: "Game of Drones",
    description: "Game platform",
};

const gilroyExtraBold = localFont({
    src: "./fonts/Gilroy-ExtraBold.woff2",
    display: "swap",
    variable: "--font-gilroy-extra-bold",
});

const tildaSans = localFont({
    src: "./fonts/TildaSans-Regular.woff2",
    display: "swap",
    variable: "--font-tilda-sans",
});

const tildaSansSemiBold = localFont({
    src: "./fonts/TildaSans-SemiBold.woff2",
    display: "swap",
    variable: "--font-tilda-sans-semi-bold",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={clsx(
                    `${gilroyExtraBold.variable} ${tildaSans.variable} ${tildaSansSemiBold.variable} ${tildaSans.className}`,
                    `text-white relative min-h-screen p-5 flex flex-col`
                )}
            >
                <Image
                    src={"/icons/vector.svg"}
                    alt="vector"
                    fill
                    className="-z-10 object-cover object-center"
                />
                {children}
            </body>
        </html>
    );
}
