import { MyButton } from "@/components/atoms/MyButton";
import { MyInput } from "@/components/atoms/MyInput";
import { FC } from "react";

export const RegisterForm: FC = () => {
    return (
        <div className="flex flex-col w-full gap-5">
            <MyInput name="email" placeholder="Почта" />
            <MyInput name="iin" placeholder="ИИН" />
            <MyInput name="password" placeholder="Пароль" />
            <MyInput
                name="confirm_password"
                placeholder="Подтверждение пароля"
            />

            <MyButton
                className="bg-orange text-white"
                onClick={() => {
                    window.location.href = "/welcome/profile-data";
                }}
            >
                Войти
            </MyButton>
            <div className="flex items-center gap-[10px]">
                <input
                    className="w-6 h-4 border-2 bg-white rounded-sm"
                    type="checkbox"
                    name="agree"
                />
                <label className="text-sm leading-[150%] ">
                    Я ознакомлен(а) и согласен(на) с{" "}
                    <span className="underline">
                        Политикой конфиденциальности
                    </span>{" "}
                    и{" "}
                    <span className="underline">
                        Пользовательским соглашением
                    </span>
                </label>
            </div>
        </div>
    );
};
