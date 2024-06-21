import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import useAuthenticationApi from "../Lib/axios/AuthenticationApi"
import useAuthentication from "../Lib/zustand/authentication"
import usePopUp from "../Lib/zustand/popup"

const RegisterFormHandler = () => {
    const [LoadingStatus, setLoadingStatus] = useState<boolean>(false)

    const setUser = useAuthentication(store => store.setUser)

    const show = usePopUp(store => store.show)

    const Navigate = useNavigate()

    const onRegister = (response: RegisterResponse) => {
        show("register")
        setLoadingStatus(false)
        localStorage.setItem("User", JSON.stringify(response))
        setUser(response)

        Navigate("/")
    }

    const { mutate: _RegisterHandler } = useMutation({
        mutationFn: (data: RegisterFormInputs) => useAuthenticationApi<RegisterResponse>("POST", "/register", data),
        onSuccess: onRegister,
    })

    const _FormHandler: SubmitHandler<RegisterFormInputs> = FormData => {
        setLoadingStatus(true)
        _RegisterHandler(FormData)
    }

    return { _FormHandler, LoadingStatus }
}
export default RegisterFormHandler
