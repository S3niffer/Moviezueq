import { useNavigate } from "react-router-dom"

const useLogout = () => {
    const Navigate = useNavigate()
    const _logoutHandler = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("User")

        Navigate("/entrance")
    }
    return _logoutHandler
}

export default useLogout
