import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Chat } from "@/types/chat";

export const ChatPanel: FC<Omit<Chat, 'id' | 'users'>> = async ({ name, last_message, image }) => {
    const checkNumber = (string: string): string =>
        string.length === 1 ? '0' + string : string;

    return (
        <Link href='#' className="flex mb-2 pr-1 w-full">
            <div className="w-full h-20 flex bg-purple-100 hover:bg-purple-50 rounded-md">
                <Image alt={name} className='h-16 self-center w-16 ml-1 rounded-full object-cover' width={50} height={50} src={image} />
                <div className="flex flex-col justify-center pr-5 w-full relative">
                    <div className="flex justify-between items-center overflow-hidden ml-3">
                        <h4 className='font-bold'>{name}</h4>
                        <time className='text-sm'>{last_message.date ? checkNumber(last_message.date.toLocaleString()) : "Now"}</time>
                    </div>
                    <div className="flex">
                        <h3 className='ml-3 mt-2'>{last_message.text ?? "Write the first message!"}</h3>
                    </div>
                </div>
            </div>
        </Link>
    );
};