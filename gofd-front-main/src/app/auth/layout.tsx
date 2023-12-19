import { Header } from "@/components/moleculas/Header";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <main className="relative flex flex-col justify-center flex-grow">
            <div className="absolute top-0 left-0 w-full">
                <Header languageSelectorDropClassName="w-fit" />
            </div>
            {children}
        </main>
    );
}
