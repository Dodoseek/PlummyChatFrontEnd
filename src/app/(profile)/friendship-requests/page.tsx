'use client';
import { Tabs } from '@/components/Tabs';
import { FC } from 'react'
import { useSession } from 'next-auth/react';
import { ReceivedPanel, SendedPanel } from './components';


const FriendListRequests: FC = () => {
    const session = useSession();
    return (
        <>
            <Tabs className='w-full h-full' 
            name={["Received requests", "Sended requests"]} 
            list={[<ReceivedPanel access_token={session.data?.access_token!}/>, 
            <SendedPanel access_token={session.data?.access_token!}/>]} />
        </>
    )
}

export default FriendListRequests
