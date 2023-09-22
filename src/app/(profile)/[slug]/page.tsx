import { FC } from 'react'
import Image from 'next/image'
import { Tabs } from '@/components/Tabs'
import { RestrictiveUser } from '@/types/users'
import { getUserBySlug } from '@/services/UserActions'
import { SignOut } from './components/Buttons/Buttons'
import { FriendProfilePanel, ProfileInfoPanel } from './components/Panels/Panels'
import { generateListFromObject } from '@/constants/profile'

interface Params {
    slug: string
}

interface ProfileParams {
    params: Params
}

const Profile: FC<ProfileParams> = async ({ params }) => {

    const user = await getUserBySlug(params.slug) as RestrictiveUser
    const name = user.first_name && user?.last_name
        ? `${user?.first_name} ${user?.last_name}`
        : user?.username
    const userInfo = await generateListFromObject(user);

    return (
        <>
            <div className='flex flex-col items-center justify-evenly py-10'>
                <div className="p-px h-100 bg-white rounded-full">
                    <Image
                        alt={name}
                        src={user.image!} width={250} height={250} className='p-px h-64 w-64 object-cover bg-violet-600 rounded-full' />
                </div>
            </div>
            <div className='w-full flex items-center flex-col'>
                <Tabs className="w-full px-2 pb-5 sm:px-0" 
                name={["About User", "User Friends"]} 
                list={[<ProfileInfoPanel {...userInfo}/>,
                <FriendProfilePanel user_id={user.id}/>]}>
                </Tabs>
                <SignOut />
            </div>
        </>
    )
}

export default Profile