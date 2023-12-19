"use client";
import { MyButton } from "@/components/atoms/MyButton";
import { MyInput } from "@/components/atoms/MyInput";
import { Listbox, Transition } from "@headlessui/react";
import Image from "next/image";
import { FC, Fragment, useState } from "react";
const options = [
    { id: 1, name: "Молодежная лига" },
    { id: 2, name: "Локальная лига" },
];

export const ProfileDataForm: FC = () => {
    const [selectedOption, setSelectedOption] = useState(options[0]);
    return (
        <div className="flex flex-col gap-10 pt-5">
            <div className="flex flex-col gap-[10px] items-center justify-center">
                <button className="bg-blue-700 w-[100px] h-[100px] relative rounded-full p-2 bg-white text-white">
                    <Image
                        className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30"
                        src="/icons/plus.svg"
                        alt="play"
                        width={12}
                        height={12}
                        style={{
                            objectFit: "contain",
                            objectPosition: "center",
                        }}
                    />
                </button>
                <div>Загрузить фото</div>
            </div>
            <div className="flex flex-col gap-5">
                <MyInput name="surname" placeholder="Фамилия" />
                <MyInput name="name" placeholder="Имя" />
                <MyInput name="last_name" placeholder="Отчества" />{" "}
                <Listbox value={selectedOption} onChange={setSelectedOption}>
                    {({ open }) => (
                        <div className="relative">
                            <Listbox.Button className="relative font-tilda font-semibold w-full px-5 py-[10px] text-left bg-white rounded-[5px] shadow-md cursor-default text-black">
                                <span className="block truncate">
                                    {selectedOption.name}
                                </span>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
                                    <Image
                                        src={`/icons/down.svg`}
                                        alt="down"
                                        style={{
                                            objectFit: "contain",
                                            objectPosition: "center",
                                        }}
                                        width={8}
                                        height={4}
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-50 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md text-black shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {options.map((option) => (
                                        <Listbox.Option
                                            key={option.id}
                                            className={({ active }) =>
                                                `${
                                                    active
                                                        ? "text-amber-900 bg-amber-100"
                                                        : "text-black"
                                                } select-none relative py-2 pl-4 cursor-pointer pr-4 hover:opacity-70 !font-tilda !font-semibold`
                                            }
                                            value={option}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <span
                                                        className={`${
                                                            selected
                                                                ? "font-medium"
                                                                : "font-normal"
                                                        } block truncate`}
                                                    >
                                                        {option.name}
                                                    </span>
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    )}
                </Listbox>
            </div>
            <button className="w-full font-tilda font-medium rounded-[5px] border-white border-[3px] px-5 py-[10px] text-white leading-[130%] text-left relative">
                Сменить пароль
                <span className="absolute inset-y-0 right-0 flex items-center pr-5 pointer-events-none">
                    <Image
                        src={`/icons/lock.svg`}
                        alt="down"
                        style={{
                            objectFit: "contain",
                            objectPosition: "center",
                        }}
                        width={13}
                        height={15}
                    />
                </span>
            </button>
            <div className="flex w-full gap-5">
                <MyButton className="border-2 leading-[130%] font-tilda text-base border-white text-white w-1/2">
                    Назад
                </MyButton>
                <MyButton
                    onClick={() => {
                        window.location.href = "/home";
                    }}
                    className="border-2 leading-[130%] font-tilda text-base text-white  border-orange bg-orange w-1/2"
                >
                    Сохранить
                </MyButton>
            </div>
        </div>
    );
};
