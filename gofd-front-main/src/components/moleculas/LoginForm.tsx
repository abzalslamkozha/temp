import { MyButton } from "@/components/atoms/MyButton";
import { MyInput } from "@/components/atoms/MyInput";
import Link from "next/link";
import { FC } from "react";

export const LoginForm: FC = () => {
    return (
        <div className="flex flex-col w-full gap-5">
            <MyInput name="email" placeholder="Почта" />
            <MyInput name="password" placeholder="Пароль" />
            <div>
                <Link className="font-tilda leading-[130%] " href="#">
                    Восстановить пароль
                </Link>
            </div>
            <MyButton
                onClick={() => {
                    window.location.href = "/welcome";
                }}
                className="bg-orange text-white"
            >
                Войти
            </MyButton>
            <div>
                <h2 className="text-sm text-center leading-[150%]">
                    Нажимая кнопку выше, вы соглашаетесь с{" "}
                    <span className="underline">
                        Политикой конфиденциальности
                    </span>{" "}
                    и{" "}
                    <span className="underline">
                        Пользовательским соглашением
                    </span>
                </h2>
            </div>
        </div>
    );
};
