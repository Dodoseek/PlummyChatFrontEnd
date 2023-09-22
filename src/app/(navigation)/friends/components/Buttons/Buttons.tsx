import { IconDefault } from "@/components/Utility"
import { useDeleteFriendMutation } from "@/store/recipes/friends.recipe"
import { FC } from "react"

const DeleteFriend: FC<{ user: number, access_token: string }> = (data) => {

    const [trigger] = useDeleteFriendMutation()

    const handleDeleteFriend = async () => {
        if (window.confirm("Are you sure?")) {
            await trigger(data).unwrap()
        }
    }

    return (
        <button onClick={() => handleDeleteFriend()} className="w-1/12 flex hover:bg-purple-500 justify-center p-2 rounded-lg bg-purple-400">
            <IconDefault type="user_delete" className="h-6 w-6" color="white" />
        </button >
    )
}

export default DeleteFriend