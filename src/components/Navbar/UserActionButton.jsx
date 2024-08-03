import Link from "next/link"
import { authUserSession } from "@/libs/auth-api"

const UserActionButton = async () => {
    const user = await authUserSession()
    const actionLabel = user ? "Sign Out" : "Sign In"
    const actionURL = user ? "signout" : "signin"

    return (
        <div className="flex gap-2 justify-between md:mt-0 mt-2">
            {
                user ? <Link href={'/users/dashboard'} className="py-1">Dashboard</Link> : null
            }
            <Link href={`/api/auth/${actionURL}`} className="bg-color-dark text-color-accent inline-block px-12 py-1 rounded">{actionLabel}</Link>
        </div>
    )

}

export default UserActionButton