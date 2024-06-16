import { ReactNode } from "react"
import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const loaclUser = localStorage.getItem("User")
    const User = loaclUser ? (JSON.parse(loaclUser) as RegisterResponse) : false
    const isLoggedIn = "name" in (User || {})

    if (isLoggedIn) return <>{children}</>

    Navigate({ to: "/entrance" })
}
export default PrivateRoute
