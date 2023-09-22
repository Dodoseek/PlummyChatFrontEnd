import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ListData {
    count: number,
    next: string,
    previous: string,
}

export interface TabObject extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    name: string[],
    list: React.ReactNode[]
  }

  export interface PropsUtilityData {
    width?: number,
    color?: string
    className?: string,
    type: "loading" | 'error' | "success" | "add_user" | "close" | "back_button" | "user_delete"
    fill?: string;
}

export type Links = {
    links: Link[]
}

export type Link = {
    href: string,
    icon: React.ReactNode
}