'use client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { FC } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const IconDefault: FC<PropsUtilityData> = ({
  width = 10,
  color = 'violet',
  type,
  className,
  fill = 'none' }) => {
  const router = useRouter()
  switch (type) {
    case 'loading':
      return (
        <svg className={`animate-spin ${className}`}
          width={`${width}px`}
          height={`${width}px`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          fill={fill}>
          <g fill={color} fillRule="evenodd" clipRule="evenodd">
            <path d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z" opacity=".2" />
            <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z" />
          </g>
        </svg >
      )
    case "error":
      return (
        <svg
          width={width}
          height={width}
          xmlns="http://www.w3.org/2000/svg"
          fill={fill}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={color}
          className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
      )
    case "success":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={fill}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={color}
          className="w-6 h-6"
          width={width} height={width}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case "add_user":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={fill}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={color}
          className="w-6 h-6"
          width={width} height={width}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case "close":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill={fill}
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke={color}
          className="w-6 h-6"
          width={width} height={width}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case "back_button":
      return (
        <button onClick={() => { router.back() }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={fill}
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={color}
            width={width}
            height={width}
            className={className}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      )
    case "user_delete":
      return (
        <svg xmlns="http://www.w3.org/2000/svg"
          fill={fill}
          viewBox="0 0 24 24"
          stroke={color}
          strokeWidth={1.5}
          className={className}
          width={width}
          height={width}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
        </svg>

      )
    default:
      return <></>
  }
};


const Navigation: FC<Links> = ({ links }) => {

  const pathname = usePathname()
  return (
    <>
      {
        links.map(({ href, icon }) =>
          <Link key={href} href={href} className={pathname === href ? ' nav-item-active' : 'nav-item'} >
            {icon}
          </Link>
        )
      }
    </>
  )
}

export default Navigation