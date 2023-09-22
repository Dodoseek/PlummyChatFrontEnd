'use client';
import { useRouter } from "next/navigation";
import { FC } from "react";

export const IsEmpty: FC<emptyData> = ({ buttonToUsers, text }) => {

    const router = useRouter()

    return (
        <>
            <div className='w-full h-full flex flex-col justify-center items-center text-center'>
                <h3 className=' text-2xl font-semibold'>{text}</h3>

                {buttonToUsers ?
                    <button className='plummy-button mt-5' onClick={() => { router.push('/users') }}>Find friends</button>
                    : null}
            </div>
        </>
    )
};

