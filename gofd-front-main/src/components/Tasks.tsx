import { Task } from "@/lib/types/tourner";
import { MyCard } from "@/components/atoms/MyCard";
import { MyProgress } from "@/components/atoms/MyProgress";
import Image from "next/image";
import { FC, useState, useEffect } from "react";

export const Tasks: FC = ({}) => {
    const [activeTask, setActiveTask] = useState<Task | null>(null);
    return (
        <div className="flex gap-5">
            <TaskList
                setActiveTask={(task: Task) => {
                    setActiveTask(task);
                }}
                activeTask={activeTask}
            />
            <TaskDetails task={activeTask} />
        </div>
    );
};

interface TaskListProps {
    setActiveTask: (task: Task) => void;
    activeTask: Task | null;
}

export const TaskDetails: FC<{ task: Task | null }> = ({ task }) => {
    return (
        <MyCard className="text-sm min-w-[650px] w-[650px]">
            {task ? (
                <>
                    <h2 className="font-gilroy_bold text-4xl1 mb-5">
                        {task?.name}
                    </h2>
                    <p className="mb-10">{task?.description}</p>
                    <h3 className="font-gilroy_bold text-base1 uppercase mb-[10px]">
                        Награда
                    </h3>
                    <p className="mb-10">{task?.reward}</p>
                    <h3 className="font-gilroy_bold text-base1 uppercase mb-[10px]">
                        Прогресс задачи
                    </h3>
                    <p className="mb-[10px]">
                        {task?.short_description} {task?.count} из {task?.max}
                    </p>
                    <MyProgress max={task?.max} count={task?.count} />
                </>
            ) : (
                <div className="w-full h-full flex items-center justify-center flex-col gap-5">
                    <h2 className="font-gilroy_bold text-4xl1">Задача</h2>
                    <p className="font-tilda_semibold text-base1">
                        Выберите один из списка
                    </p>
                </div>
            )}
        </MyCard>
    );
};

export const TaskList: FC<TaskListProps> = ({ setActiveTask, activeTask }) => {
    return (
        <div className="overflow-y-scroll h-[480px] pr-[10px] -mr-[10px] rounded-[5px]">
            <MyCard className=" w-[650px] flex flex-col gap-5">
                <h2 className="text-4xl1 font-gilroy_bold">Задачи</h2>
                <div className="flex gap-[10px]">
                    <Image
                        width={85}
                        height={85}
                        className="object-cover object-center aspect-square rounded-[5px]"
                        alt="person"
                        src={"/images/man.png"}
                    />
                    <div className="flex flex-col justify-between w-full">
                        <div className="space-y-[5px]">
                            <h5 className="text-base1 font-tilda_semibold">
                                Константин Константинович
                            </h5>
                            <p className="text-sm1 ">
                                Завершайте задания и получайте опыт
                            </p>
                        </div>
                        <div className="space-y-[5px] h-max">
                            <p className="text-[10px] leading-none">
                                До {9} ур. {75} / {100}
                            </p>
                            <MyProgress max={100} count={75} />
                        </div>
                    </div>
                </div>
                <div className="space-y-[10px]">
                    {tasks.map((task, key) => (
                        <TaskCover
                            {...task}
                            key={key}
                            onClick={() => {
                                setActiveTask(task);
                            }}
                            isActive={activeTask?.name === task.name}
                        />
                    ))}
                </div>
            </MyCard>
        </div>
    );
};
interface TaskCoverProps extends Task {
    isActive?: boolean;
    onClick: any;
}
const TaskCover: FC<TaskCoverProps> = ({
    name,
    short_description,
    cover_img_src,
    isActive,
    onClick,
}) => {
    return (
        <div
            className={`flex rounded-[5px] overflow-hidden cursor-pointer`}
            onClick={onClick}
        >
            <Image
                alt="task cover"
                src={cover_img_src}
                width={60}
                height={60}
                className="object-center aspect-square object-cover"
            />
            <div
                className={`flex flex-col gap-[5px] justify-center flex-grow px-[10px] ${
                    isActive ? "bg-orange" : "bg-white "
                }`}
            >
                <h4
                    className={`text-base1 font-gilroy_bold uppercase ${
                        isActive ? "text-white" : "text-[#2575C4]"
                    }`}
                >
                    {name}
                </h4>
                <p
                    className={`text-sm1 ${
                        isActive ? "text-white" : "text-black"
                    }`}
                >
                    {short_description}
                </p>
            </div>
        </div>
    );
};

const tasks: Task[] = [
    {
        name: "Первый заезд",
        short_description: "Совершите свой первый заезд, записавшись на турнир",
        cover_img_src: "/images/green-car.png",
        description: `Вы готовы к своему первому турниру? Запишитесь на участие в одном из доступных сезонных событий и покажите свое мастерство за рулем. Не важно, какое место вы займете, главное - принять участие и получить опыт. За выполнение этого достижения вы получите один бесплатный билет на любой будущий турнирный заезд. Не упустите свой шанс!`,
        reward: "1 бесплатное участие в турнире",
        max: 1,
        count: 0,
    },
    {
        name: "Время тренировок",
        short_description: "Пройдите тренировочный заезд",
        cover_img_src: "/images/man.png",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut reprehenderit suscipit praesentium iure, voluptatum alias quia. Ullam, ea officia! Inventore modi, minus quasi cumque quia magnam alias commodi consectetur et?",
        reward: "1 бесплатное участие в турнире",
        max: 10,
        count: 7,
    },
    {
        name: "Рекордсмен",
        short_description: "Побейде рекорд любой трассы",
        cover_img_src: "/images/fon.png",
        description: `Some description... Some description... Some description... Some description... Some description... Some description... Some description...`,
        reward: "REWARD REWARD REWARD",
        max: 1,
        count: 0,
    },
    {
        name: "I can do this all day",
        short_description: "Примите участие в туринире",
        cover_img_src: "/images/green-car.png",
        description: `Вы готовы к своему первому турниру? Запишитесь на участие в одном из доступных сезонных событий и покажите свое мастерство за рулем. Не важно, какое место вы займете, главное - принять участие и получить опыт. За выполнение этого достижения вы получите один бесплатный билет на любой будущий турнирный заезд. Не упустите свой шанс!`,
        reward: "1 бесплатное участие в турнире",
        max: 1,
        count: 0,
    },
    {
        name: "Снайпер",
        short_description: "Совершите свой первый заезд, записавшись на турнир",
        cover_img_src: "/images/green-car.png",
        description: `Вы готовы к своему первому турниру? Запишитесь на участие в одном из доступных сезонных событий и покажите свое мастерство за рулем. Не важно, какое место вы займете, главное - принять участие и получить опыт. За выполнение этого достижения вы получите один бесплатный билет на любой будущий турнирный заезд. Не упустите свой шанс!`,
        reward: "1 бесплатное участие в турнире",
        max: 1,
        count: 0,
    },
    {
        name: "Some task name",
        short_description: "Совершите свой первый заезд, записавшись на турнир",
        cover_img_src: "/images/green-car.png",
        description: `Вы готовы к своему первому турниру? Запишитесь на участие в одном из доступных сезонных событий и покажите свое мастерство за рулем. Не важно, какое место вы займете, главное - принять участие и получить опыт. За выполнение этого достижения вы получите один бесплатный билет на любой будущий турнирный заезд. Не упустите свой шанс!`,
        reward: "1 бесплатное участие в турнире",
        max: 1,
        count: 0,
    },
];
