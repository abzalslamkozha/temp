"use client";
import { FC } from "react";
import { LoginForm } from "../moleculas/LoginForm";
import { RegisterForm } from "../moleculas/RegisterForm";
import { Tab } from "@headlessui/react";

export const AuthTabs: FC = () => {
    return (
        <Tab.Group>
            <Tab.List className="flex rounded-[5px] bg-blue_text">
                <Tab
                    className={({ selected }) =>
                        `
              w-full font-semibold rounded-[5px] py-2.5 text-sm leading-5 focus:outline-none
              ${
                  selected
                      ? "bg-white text-blue_text border-y-[3px] rounded-none rounded-s-[5px] border-white"
                      : "text-white hover:bg-white/[0.12] hover:text-white rounded-none rounded-s-[5px] border-l-[3px] border-y-[3px]"
              }
            `
                    }
                >
                    Вход
                </Tab>
                <Tab
                    className={({ selected }) =>
                        `
              w-full font-semibold rounded-[5px] py-2.5 text-sm leading-5 focus:outline-none
              ${
                  selected
                      ? "bg-white text-blue_text border-y-[3px] rounded-none rounded-e-[5px] border-white"
                      : "text-white hover:bg-white/[0.12] hover:text-white rounded-none rounded-e-[5px] border-r-[3px] border-y-[3px]"
              }
            `
                    }
                >
                    Регистрация
                </Tab>
            </Tab.List>
            <Tab.Panels className="flex justify-center pt-10">
                <Tab.Panel className="w-full">
                    <LoginForm />
                </Tab.Panel>
                <Tab.Panel className="w-full">
                    <RegisterForm />
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    );
};
