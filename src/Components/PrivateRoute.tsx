import { ReactNode } from "react"
import { Navigate } from "react-router-dom"
import useAuthentication from "../Lib/zustand/authentication"

const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const isLoggedIn = useAuthentication(store => store.status)

    if (isLoggedIn) return <>{children}</>

    Navigate({ to: "/entrance" })
}
export default PrivateRoute
