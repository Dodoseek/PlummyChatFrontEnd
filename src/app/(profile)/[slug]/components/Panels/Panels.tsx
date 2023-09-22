'use client';
import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image'
import { useGetFriendListByIdQuery } from "@/store/recipes/friends.recipe";
import { IsEmpty } from '@/app/(navigation)/components';


interface userInfo {
    title: string;
    value: any;
}

export const ProfileInfoPanel = (list:userInfo[]) => {
    return (
        <>
            {Object.values(list).map(({title, value})=>{
                return (
                <li
                    key={value}
                    className="relative rounded-md p-3 hover:bg-gray-100">
                    <h3 className="text-sm font-medium leading-5">
                        {value}
                    </h3>
                    <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                        <li>{title}</li>
                    </ul>
                </li>
                )
            })}
        </>
    )
};

export const FriendProfilePanel: FC<{user_id:number}> = ({user_id}) => {
    const {data} = useGetFriendListByIdQuery({user: user_id});
    return (
        <>
        {data?.friends.length! > 0 ? data?.friends.map(({id, slug, image, last_name, first_name, username})=>{
            return (
            <li
                key={id}
                className="
                relative rounded-md p-3 flex items-center justify-between
                hover:bg-gray-100">
                <Link
                    href={slug}
                    className='inset-0 flex justify-between w-9/12 items-center rounded-md
                        ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'>
                    <div className='
                        bg-violet-400 p-px rounded-full'>
                        <Image src={image} width={50} height={50} alt={first_name && last_name
                            ? `${first_name} ${last_name}`
                            : username} className='h-10 rounded-full object-cover' />
                    </div>
                    <h3 className="text-sm px-5 w-full overflow-ellipsis font-medium leading-5">
                        {first_name && last_name
                            ? `${first_name} ${last_name}`
                            : username}
                    </h3>
                </Link>
            </li>
            )
        }) : <IsEmpty buttonToUsers={false} text='The friends list is empty' />}
        </>
    )
};