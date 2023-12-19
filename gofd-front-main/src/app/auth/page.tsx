import { AuthTabs } from "@/components/organisms/AuthTabs";

export default function AuthPage() {
    return (
        <div className="flex justify-center items-center">
            <div className="w-[26.75rem] flex flex-col justify-center items-center gap-10">
                <div className="flex flex-col w-full">
                    <AuthTabs />
                </div>
            </div>
        </div>
    );
}
