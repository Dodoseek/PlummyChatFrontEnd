import type { Metadata } from "next";
import Footer from "@/components/Footer";
import { FC } from "react";
import { getServerSession } from "next-auth";
import { getMyRecievedRequests } from "@/services/FriendListActions";
import Link from "next/link";
import Image from "next/image";
import { authConfug } from "@/configs/auth";
import logo from '@/assets/plummychat.svg'
import ClientProvider from "../Provider";
import Htag from "./components/Htag/Htag";


export const metadata: Metadata = {
  title: "Plummy Chat",
  description: "Online chat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <ClientProvider>
      <Header />
      {children}
      <Footer />
    </ClientProvider>
  );
}


const Header: FC = async () => {
  const session = await getServerSession(authConfug)
  const requests = await getMyRecievedRequests(session?.access_token!)
  const has_requests = requests.count > 0 ? true : false

  return (
    <>
      <header
        className="rounded-b-md border-b border-x my-0 border-violet-400/20 hover:bg-purple-900/20 bg-purple-950/20 backdrop-blur-sm/20 inline-flex items-center justify-center px-4">
        <div className="flex relative justify-between items-center w-full">
          <Htag />
          <Link href={'/friendship-requests'} className="flex hover:backdrop-blur-sm hover:bg-purple-400/20 rounded-md absolute right-48 sm:right-64 top-0 items-center w-10 justify-center py-2 h-10">
            <div className="border-x border-purple-400 w-full h-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill={has_requests ? '#BD00FF' : "none"} viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#BD00FF"
                className={`w-full h-6 ${has_requests ? 'animate-bounce' : null}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
              </svg>
            </div>
          </Link>
          <Image src={logo} alt="plummy-chat" quality={100} className=" w-40 sm:w-56 h-10" priority />
        </div >
      </header >
    </>
  );
};


