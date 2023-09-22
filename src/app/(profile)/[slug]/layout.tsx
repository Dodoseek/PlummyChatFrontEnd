import { getUserBySlug } from "@/services/UserActions";
import HeaderProfile from "../components/Header/Header";

interface Params {
    slug: string
}

export default async function UsersLayout({
    children, params
}: {
    children: React.ReactNode;
    params: Params
}) {

    const user = await getUserBySlug(params.slug)
    const name = user.first_name && user?.last_name
        ? `${user?.first_name} ${user?.last_name}`
        : user?.username

    return (
        <>
            <HeaderProfile name={name} />
            <div className='scroll my-1'>
                {children}
            </div >
        </>
    );
}
