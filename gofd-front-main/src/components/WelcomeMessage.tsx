import { MyButton } from "@/components/atoms/MyButton";
import Link from "next/link";
import { FC } from "react";
import { Header } from "./moleculas/Header";

export const WelcomeMessage: FC = () => {
    return (
        <div className="w-[26.75rem] flex flex-col justify-center items-center gap-10">
            <Header />
            <div className="flex items-center justify-center">
                <h2 className="font-tilda leading-[130%] font-normal text-sm">
                    Добро пожаловать! Приглашаем вас поучаствовать в гоночном
                    турнире не выходя из дома. Все, что вам потребуется –
                    надежное интернет-соединение и желание одержать победу.
                    <br />
                    <br /> Соревнуйтесь с друзьями или со случайными
                    соперниками. Кто знает, может быть, именно вы станете
                    чемпионом турнира Game of Drones? <br />
                    <br /> Готовы принять вызов? Зарегистрируйтесь на сайте и
                    отправляйтесь на трассу. Не упустите шанс почувствовать
                    адреналин и веселье от гонок. Желаем вам удачи и приятной
                    игры!
                    <br />
                    <br /> На старт! Поехали!
                </h2>
            </div>
            <div className="flex w-full border-2 border-white rounded-[5px]">
                <MyButton className="rounded-[3px] text-base bg-white text-blue_text w-1/2">
                    Участвовать в турнире
                </MyButton>
                <Link href={"/auth"} className="w-1/2">
                    <MyButton className=" text-white w-full">
                        Вход / Регистрация
                    </MyButton>
                </Link>
            </div>
        </div>
    );
};
