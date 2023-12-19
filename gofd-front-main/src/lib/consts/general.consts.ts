import { Tab } from "../types/general";

export const tabs: Tab[] = [
    {
        tabName: "Про меня",
        href: "/home",
        regex: /^\/home*$/,
    },
    {
        tabName: "Мои турниры",
        href: "/home/my-tournaments",
        regex: /^\/home\/my-tournaments(?:\s+\w+)*$/,
    },
    {
        tabName: "Задачи",
        href: "/home/tasks",
        regex: /^\/home\/tasks(?:\s+\w+)*$/,
    },
    {
        tabName: "Турниры",
        href: "/home/tournaments",
        regex: /^\/home\/tournaments(?:\s+\w+)*$/,
    },
    {
        tabName: "Помощь",
        href: "/home/help",
        regex: /^\/home\/help(?:\s+\w+)*$/,
    },
];
