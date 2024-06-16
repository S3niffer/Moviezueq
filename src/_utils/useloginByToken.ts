import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"

const useloginByToken = () => {
    const Navigate = useNavigate()

    const { mutate } = useMutation({
        mutationFn: (token: LoginResponse["access_token"]) =>
            fetch("http://localhost:3000/api/moviesapi/authentication", {
                method: "POST",
                body: JSON.stringify({ token: token }),
            }).then(res => res.json()),
        onSuccess: (response: RegisterResponse) => {
            localStorage.setItem("User", JSON.stringify(response))
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
