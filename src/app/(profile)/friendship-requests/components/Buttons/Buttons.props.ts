import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface FriendButtonsProps
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  user_id: number;
  access_token: string;
  action: 'accept' | 'reject';
}

export interface DeleteRequestButtonProps extends Omit<FriendButtonsProps, 'action'> {}
