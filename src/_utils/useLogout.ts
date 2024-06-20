import { useNavigate } from "react-router-dom"
import useAuthentication from "../Lib/zustand/authentication"

const useLogout = () => {
    const Navigate = useNavigate()

    const logout = useAuthentication(store => store.logout)

    const _logoutHandler = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("User")
        logout()

        Navigate("/entrance")
    }

    return _logoutHandler
}

export default useLogout
