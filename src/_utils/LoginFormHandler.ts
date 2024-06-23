import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { SubmitHandler } from "react-hook-form"
import { useAuthGetToken } from "../Lib/axios/AuthenticationApi"
import usePopUp from "../Lib/zustand/popup"
import useloginByToken from "./useloginByToken"

const LoginFormHandler = () => {
    const [LoadingStatus, setLoadingStatus] = useState<boolean>(false)

    const show = usePopUp(store => store.show)

    const stopLoading = () => {
        setLoadingStatus(false)
    }

    const _LoginHandler = useloginByToken(stopLoading)

    const _Data_formater = (data: LoginFormInputs) => {
        const formated_data = new FormData()
        formated_data.append("username", data.email)
        formated_data.append("password", data.password)
        formated_data.append("grant_type", "password")

        return formated_data
    }

    const { mutate: _GetToken } = useMutation({
        mutationFn: (data: LoginFormInputs) => useAuthGetToken("POST", "/oauth/token", _Data_formater(data)),
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
