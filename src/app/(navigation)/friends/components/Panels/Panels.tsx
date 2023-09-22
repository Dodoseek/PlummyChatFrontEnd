'use client';

import Link from 'next/link';
import { FC } from 'react'
import Image from 'next/image';
import { IsEmpty } from '@/app/(navigation)/components';
import { useGetFriendListByIdQuery } from '@/store/recipes/friends.recipe';
import Loading from '../../loading';
import DeleteFriend from '../Buttons/Buttons';

export const FriendPanel: FC<{ user: number, access_token:string }> = (props) => {

    const { isFetching, isLoading, isSuccess, data } = useGetFriendListByIdQuery({ ...props })
    return (
        <>
            {isSuccess && data!.friends.length > 0 ?
                data!.friends.map((user) => {
                    return (
                        <div key={user.id} className="flex mb-2 pr-1 w-full">
                            <div className="w-full h-20 flex bg-purple-100 hover:bg-purple-50 rounded-md">
                                <Link className='min-w-fit items-center flex ml-2' href={`/user/${user.slug}`}>
                                    <Image alt={user.full_name!} className='h-16 w-16 block rounded-full object-cover' width={50} height={50} src={user.image} />
                                </Link>
                                <div className="flex flex-col justify-center pr-5 w-full">
                                    <div className="flex justify-between items-center overflow-hidden ml-5">
                                        <Link href={`/${user.slug}`} >
                                            <h4 className='font-bold hover:text-gray-900 sm:w-auto w-36 whitespace-nowrap overflow-hidden text-ellipsis'>{user.full_name}</h4>
                                        </Link>
                                        <DeleteFriend user={user.id} access_token={props.access_token}/>    
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }) : <IsEmpty buttonToUsers={true} text='The friends list is empty' />
            }
            {isFetching || isLoading ? <Loading /> : null}
        </>
    )
}