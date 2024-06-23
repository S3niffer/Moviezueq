import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { SubmitHandler } from "react-hook-form"
import useAuthenticationApi from "../Lib/axios/AuthenticationApi"
import usePopUp from "../Lib/zustand/popup"
import useloginByToken from "./useloginByToken"

const LoginFormHandler = () => {
    const [LoadingStatus, setLoadingStatus] = useState<boolean>(false)

    const show = usePopUp(store => store.show)

    const stopLoading = () => {
        setLoadingStatus(false)
    }

    const _LoginHandler = useloginByToken(stopLoading)

    const { mutate: _GetToken } = useMutation({
        mutationFn: (data: LoginFormInputs) => useAuthenticationApi<LoginResponse>("POST", "/login", data),
        onSuccess: (response: LoginResponse | LoginResponseError) => {
            if ("access_token" in response) {
                _LoginHandler(response.access_token)
            }

            if ("error" in response) {
                show({ mode: "error", message: response.message })
                stopLoading()
            }
        },
    })

    const _FormHandler: SubmitHandler<LoginFormInputs> = FormData => {
        setLoadingStatus(true)
        _GetToken(FormData)
    }

    return { _FormHandler, LoadingStatus }
}
export default LoginFormHandler
