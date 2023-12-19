"use client";
import {
    TournamentDescriptionCard,
    TournamentEnrollCard,
    TournamentMapCard,
    TournamentRegisterCard,
} from "@/components/TournamentRegisterCard";
import { TrainingCard, TrainingCardWithSlots } from "@/components/TrainingCard";

export default function ParticipatePage() {
    return (
        <div className="flex gap-5 overflow-x-scroll max-w-[1325px] pb-5">
            <div className="flex flex-col">
                <div className="grow">
                    <TournamentEnrollCard
                        date={new Date()}
                        tourner="GOD JR"
                        isActive
                    />
                </div>
            </div>
            <div className="w-[420px] min-w-[420px] ">
                <TrainingCardWithSlots />
            </div>
            <div className="flex flex-col">
                <div className="grow">
                    <TournamentDescriptionCard />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="grow">
                    <TournamentMapCard />
                </div>
            </div>
        </div>
    );
}
