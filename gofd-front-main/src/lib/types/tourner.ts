export interface TournamentData {
    date?: Date;
    tourner?: string;
    result?: string;
    place?: number;
}

export interface Slot {
    time: Date;
    places: number;
}
export interface SlotDay {
    slots: Slot[];
    day: Date;
}
export interface Task {
    name: string;
    description: string;
    reward: string;
    short_description: string;
    max: number;
    count: number;
    cover_img_src: string;
}
