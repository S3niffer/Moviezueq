import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"

const RegisterFormHandler = () => {
    const [LoadingStatus, setLoadingStatus] = useState<boolean>(false)

    const Navigate = useNavigate()

    const onRegister = (response: RegisterResponse) => {
        setLoadingStatus(false)
        localStorage.setItem("User", JSON.stringify(response))
        Navigate("/")
    }

    const { mutate: _RegisterHandler } = useMutation({
        mutationFn: async (data: RegisterFormInputs) => {
            const response = await fetch("http://localhost:3000/api/moviesapi/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })
            const result = await response.json()

            return result
        },
        onSuccess: onRegister,
    })

    const _FormHandler: SubmitHandler<RegisterFormInputs> = FormData => {
        setLoadingStatus(true)
        _RegisterHandler(FormData)
    }

    return { _FormHandler, LoadingStatus }
}
export default RegisterFormHandler
