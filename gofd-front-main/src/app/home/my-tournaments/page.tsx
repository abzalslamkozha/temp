import {
    GameStatistics,
    MyIncomingTournamentList,
} from "@/components/GameStatistics";
import { IncomingTournament } from "@/components/IncomingTournament";

export default function MyTournamentsPage() {
    return (
        <main className="flex h-max w-max gap-5">
            <GameStatistics />
            <div className="flex flex-col">
                <div className="grow">
                    <IncomingTournament tourner="GOD JR" date={new Date()} />
                </div>
            </div>
            <div className="flex flex-col">
                <div className="grow">
                    <MyIncomingTournamentList />
                </div>
            </div>
        </main>
    );
}
