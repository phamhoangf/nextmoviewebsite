'use client'

import { useSession } from "next-auth/react"
import UnauthPage from "@/components/unauth-page"
import { useContext } from "react"
import { GlobalContext } from "@/context"
import ManageAccounts from "@/components/manage-accounts"

export default function Movies() {
    const { loggedInAccount } = useContext(GlobalContext)

    const {data: session} = useSession()

    if(session === null) return <UnauthPage />
    if (loggedInAccount === null) return <ManageAccounts />;


    return <div>Movies</div>
}