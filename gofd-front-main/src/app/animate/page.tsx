"use client";

import Image from "next/image";

export default function Home() {
    return (
        <main className="relative min-w-max">
            <div className="icon-game">
                <Image
                    alt="game"
                    width={255}
                    height={100}
                    src={"/icons/logo-parts/game.svg"}
                    className="w-[255px]"
                />
            </div>
            <div className="icon-of">
                <Image
                    alt="of"
                    width={50}
                    height={45}
                    src={"/icons/logo-parts/of.svg"}
                    className="w-[50px]"
                />
            </div>
            <div className="icon-drones">
                <Image
                    alt="drones"
                    width={320}
                    height={100}
                    src={"/icons/logo-parts/drones.svg"}
                    className="w-[320px]"
                />
            </div>
        </main>
    );
}
