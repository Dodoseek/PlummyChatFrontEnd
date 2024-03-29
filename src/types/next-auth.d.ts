import NextAuth, { DefaultSession, User } from 'next-auth';
import { JWT } from 'next-auth/jwt';
import { User as CustomUser } from '@/types/users';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: CustomUser;
    error?: string;
    access_token: string;
  }

  interface Account {
    meta: ResponseData;
  }

  interface User extends CustomUser {}
}

declare module 'next-auth/jwt' {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    user: CustomUser;
    access_token: string;
    refresh_token: string;
    error?: string;
    expires_in: number;
    provider: SignInProvider;
    expires_in_google: number | undefined;
    access_token_google: string | undefined;
    refresh_token_google: string | undefined;
  }
}
