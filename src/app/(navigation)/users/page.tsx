import { authConfug } from '@/configs/auth';
import { NextPage } from 'next'
import { getServerSession } from 'next-auth';
import { UsersPanel } from './components/Panels/Panels';

const UsersPage: NextPage = async () => {
  const session = await getServerSession(authConfug)
  return (
    <UsersPanel user={session?.user.id!} />
  );
}

export default UsersPage