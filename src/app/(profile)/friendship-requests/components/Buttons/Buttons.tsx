'use client';
import { IconDefault } from "@/components/Utility";
import { useDeleteRequestMutation, useUpdateRequestMutation } from "@/store/recipes/friends.recipe";
import { FC } from "react";
import { DeleteRequestButtonProps, FriendButtonsProps } from "./Buttons.props";

export const FriendButtons: FC<FriendButtonsProps> = ({ user_id, access_token, action, ...props }) => {

    const [trigger, { }] = useUpdateRequestMutation()
    const sendRequestUpdate = async (user: number, is_active: boolean, access_token: string) => {
        if (window.confirm("Are you sure?")) {
            await trigger({ user, is_active, access_token }).unwrap();
        }
    };

    switch (action) {
        case "accept":
            return (
                <button {...props} onClick={() => sendRequestUpdate(user_id, true, access_token)} className='bg-green-500 hover:bg-green-400 w-10 h-10 flex shrink-0 grow-0 justify-center items-center rounded-full border border-green-600'>
                    <IconDefault type='add_user' color='#14532d' />
                </button>
            )
        case "reject":
            return (
                <button {...props} onClick={() => sendRequestUpdate(user_id, false, access_token)} className='bg-red-500 hover:bg-red-400 w-10 h-10 flex justify-center items-center rounded-full border border-red-600'>
                    <IconDefault type='close' color='#450a0a' />
                </button>
            )
        default:
            return <></>
    }
};

export const DeleteRequestButton: FC<DeleteRequestButtonProps> = ({ user_id, access_token, ...props }) => {

    const [trigger, { }] = useDeleteRequestMutation()
    const sendRequestUpdate = async (user: number, is_active: boolean, access_token: string) => {
        if (window.confirm("Are you sure?")) {
            await trigger({ user, access_token }).unwrap();
        }
    };

    return (
        <button {...props} onClick={() => sendRequestUpdate(user_id, false, access_token)}
            className='bg-red-500 hover:bg-red-400 h-10 w-10 flex justify-center 
            items-center rounded-full border border-red-600'>
            <IconDefault type='close' color='#450a0a' />
        </button>
    )
};