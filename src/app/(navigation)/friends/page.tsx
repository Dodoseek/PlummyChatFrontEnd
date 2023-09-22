import { authConfug } from '@/configs/auth';
import { getServerSession } from 'next-auth';
import { FC } from 'react'
import { FriendPanel } from './components/Panels/Panels';


const FriendsPage: FC = async () => {

    const session = await getServerSession(authConfug)
    return (
            <FriendPanel access_token={session?.access_token!} user={session?.user.id!} />
    );
}

export default FriendsPage