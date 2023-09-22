'use client';
import { FriendRequest } from "@/types/friends";
import { FC } from "react";
import Image from "next/image";
import { DeleteRequestButton, FriendButtons } from "..";
import { useGetMyRecievedRequestsQuery, useGetMySendedRequestsQuery } from "@/store/recipes/friends.recipe";
import { IsEmpty } from "@/app/(navigation)/components";

export const ReceivedPanel = ({access_token}:{access_token:string}) => {
    const {data} = useGetMyRecievedRequestsQuery({access_token: access_token});
    return (
        <>
        {data?.results.length! > 0 ? data?.results.map(({ id, is_active, receiver, sender, timestamp })=>{
            return (
            <article id={id.toString()} className='h-28 my-1 flex flex-col justify-center items-center px-5 bg-purple-600/20 rounded-md'>
                <div className="flex flex-row justify-end items-end text-end w-full border-b border-purple-500">
                    <time className='text-end text-purple-500'>{timestamp.toString()}</time>
                </div>
                <div className='flex flex-row py-2 items-center justify-between w-full'>
                    <div className='flex items-center w-full'>
                        <Image className='image-default' alt={sender.full_name!} src={sender.image} width={50} height={50} />
                        <p className='w-full ps-5 text-start text-ellipsis'>{sender.full_name}</p>
                    </div>
                    <div className="flex justify-between w-40">
                        <FriendButtons action='accept' user_id={sender.id} access_token={access_token} />
                        <FriendButtons action='reject' user_id={sender.id} access_token={access_token} />
                    </div>
                </div>
            </article>
            )
        }) : <IsEmpty buttonToUsers={false} text='No friend requests' />}
        </>
    )
};

export const SendedPanel = ({access_token}:{access_token:string}) => {
    const {data} = useGetMySendedRequestsQuery({access_token: access_token});
    return (
        <>
        {data?.results.length! > 0 ?data?.results.map(({ id, is_active, receiver, sender, timestamp })=>{
            return(
            <article id={id.toString()} className='h-28 my-1 flex flex-col justify-center items-center px-5 bg-purple-600/20 rounded-md'>
                <div className="flex flex-row justify-end items-end text-end w-full border-b border-purple-500">
                    <time className='text-end text-purple-500'>{timestamp.toString()}</time>
                </div>
                <div className='flex flex-row py-2 items-center justify-between w-full'>
                    <div className='flex items-center w-full'>
                        <Image className='image-default' alt={receiver.full_name!} src={receiver.image} width={50} height={50} />
                        <p className='w-full ps-5 text-start text-ellipsis'>{receiver.full_name}</p>
                    </div>
                    <div className="flex justify-center w-40">
                        <DeleteRequestButton user_id={receiver.id} access_token={access_token} />
                    </div>
                </div>
            </article>
            )
        }) : <IsEmpty buttonToUsers={false} text='You have not sent a friend request' />}
        </>
    )
};