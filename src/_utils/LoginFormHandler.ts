import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { SubmitHandler } from "react-hook-form"
import useAuthenticationApi from "../Lib/axios/AuthenticationApi"
import useloginByToken from "./useloginByToken"

const LoginFormHandler = () => {
    const [LoadingStatus, setLoadingStatus] = useState<boolean>(false)

    const stopLoading = () => {
        setLoadingStatus(false)
    }

    const _LoginHandler = useloginByToken(stopLoading)

    const { mutate: _GetToken } = useMutation({
        mutationFn: (data: LoginFormInputs) => useAuthenticationApi<LoginResponse>("POST", "/login", data),
        onSuccess: ({ access_token }: LoginResponse) => {
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
