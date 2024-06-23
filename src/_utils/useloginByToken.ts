import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import useAuthenticationApi from "../Lib/axios/AuthenticationApi"
import useAuthentication from "../Lib/zustand/authentication"
import usePopUp from "../Lib/zustand/popup"

const useloginByToken = (stopLoading: () => void) => {
    const Navigate = useNavigate()

    const setUser = useAuthentication(store => store.setUser)

    const show = usePopUp(store => store.show)

    const { mutate } = useMutation({
        mutationFn: (token: LoginResponse["access_token"]) =>
            useAuthenticationApi<RegisterResponse>("POST", "/authentication", { token }),
        onSuccess: (response: RegisterResponse) => {
            stopLoading()
            show({ mode: "login" })
            localStorage.setItem("User", JSON.stringify(response))
            setUser(response)

            Navigate("/")
        },
    })

    const _loginHandler = (token?: LoginResponse["access_token"]) => {
        const localToken: LoginResponse["access_token"] | null = localStorage.getItem("token")
        if (token) {
            localStorage.setItem("token", JSON.stringify(token))
            mutate(token)
        } else if (localToken) {
            mutate(localToken)
        } else return "bruh" // pop error
    }

    return _loginHandler
}

export default useloginByToken
