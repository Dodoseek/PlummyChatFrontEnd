'use client';
import { IconDefault } from "@/components/Utility";
import { useDeleteFriendMutation } from "@/store/recipes/friends.recipe";
import { signOut } from "next-auth/react"
import Link from "next/link"
import { FC } from "react"

export const SignOut: FC = () => {
    return (
        <>
            <Link className='plummy-button w-36' href="#" onClick={() => signOut({ callbackUrl: '/chat', })}>
                Sign Out
            </Link>
        </>
    )
};