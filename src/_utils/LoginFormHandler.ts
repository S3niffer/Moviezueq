import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { SubmitHandler } from "react-hook-form"
import usePopUp from "../Lib/zustand/popup"
import useloginByToken from "./useloginByToken"

const LoginFormHandler = () => {
    const [LoadingStatus, setLoadingStatus] = useState<boolean>(false)

    const show = usePopUp(e => e.show)

    const stopLoading = () => {
        setLoadingStatus(false)
    }

    const _LoginHandler = useloginByToken(stopLoading)

    const { mutate: _GetToken } = useMutation({
        mutationFn: async (data: LoginFormInputs) => {
            const response = await fetch("http://localhost:3000/api/moviesapi/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            const result = await response.json()

            return result
        },
        onSuccess: ({ access_token }: LoginResponse) => {
            show("login")
            _LoginHandler(access_token)
        },
    })

    const _FormHandler: SubmitHandler<LoginFormInputs> = FormData => {
        setLoadingStatus(true)
        _GetToken(FormData)
    }

    return { _FormHandler, LoadingStatus }
}
export default LoginFormHandler
