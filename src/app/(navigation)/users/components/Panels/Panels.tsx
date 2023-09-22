'use client';

import Link from 'next/link';
import { FC } from 'react'
import Image from 'next/image';
import { DropDownUsers, IsEmpty } from '@/app/(navigation)/components';
import Loading from '../../loading';
import { useGetAllUsersQuery } from '@/store/recipes/user.recipe';

export const UsersPanel: FC<{ user: number }> = (props) => {

    const { isFetching, isLoading, isSuccess, data } = useGetAllUsersQuery()
    return (
        <>
            {isSuccess && data!.results.length > 0 ?
                data!.results.map((user) => {
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
                                        <DropDownUsers user={user}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                            </svg>
                                        </DropDownUsers>
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