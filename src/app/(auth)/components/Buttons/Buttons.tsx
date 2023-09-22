'use client';
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation';
import { FC } from 'react'
import google_logo from '@/assets/google-icon.svg'
import Image from 'next/image'


// export const SignIn: FC = () => {

//     const searchParams = useSearchParams()!;
//     const callbackUrl = searchParams.get('callbackUrl') || '/chat';

//     const signInHandler = () => {
//         signIn('credentials', { callbackUrl, redirect: true })
//     }

//     return <button onClick={() => signInHandler()}>Sign In</button>
// }




export const ProviderButton: FC<ButtonAction> = ({ action, provider }) => {

    const searchParams = useSearchParams()!;
    const callbackUrl = searchParams.get('callbackUrl') || '/chat';
    const providerName = provider.charAt(0).toUpperCase() + provider.slice(1);

    return (
        <button
            className='w-full flex justify-center items-center py-1 border-2 
            font-semibold border-gray-400 rounded-md bg-white 
            hover:bg-gray-200'
            onClick={() => signIn(provider, { callbackUrl })}>
            {provider === 'google' && <Image src={google_logo} alt='' className='h-6' />}
            {action} with {providerName}
        </button>
    )
};
