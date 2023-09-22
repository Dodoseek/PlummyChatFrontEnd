'use client';
import { usePathname } from "next/navigation";
import { FC } from "react";

const Htag: FC = () => {
    function modifyString(inputString: string) {
        if (inputString.length < 2) {
            return null;
        }
        const secondChar = inputString[1].toUpperCase();
        const modifiedString = secondChar + inputString.slice(2);
        return modifiedString;
    }

    return (
        <h1 className='font-bold font-inco text-gray-600 w-auto text-2xl'>{modifyString(usePathname()!)}</h1>
    );
};


export default Htag;