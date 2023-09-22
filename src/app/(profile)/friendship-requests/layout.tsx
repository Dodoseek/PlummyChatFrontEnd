import HeaderProfile from "../components/Header/Header";

export default async function UsersLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <HeaderProfile name={'Friend List Requests'} settings={false} />
            <div className='scroll my-1'>
                {children}
            </div >
        </>
    );
}
