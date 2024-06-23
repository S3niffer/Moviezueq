import { useMutation } from "@tanstack/react-query"
import { useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import useLayoutDataApi from "../Lib/axios/LayoutDataApi"

const useSerach = () => {
    const input_ref = useRef<HTMLInputElement>(null)

    const _blur_timeOut = useRef<number | null>(null)

    const Location = useLocation()

    const [showStatus, setShowStatus] = useState<boolean>(false)

    const [serchValue, setSerchvalue] = useState("")

    const [result, setResult] = useState<MovieBoxProps[]>([])

    const { mutate, isPending, reset } = useMutation({
        mutationFn: (value: string) => useLayoutDataApi("GET", "/movies", { q: value }),
        onSuccess: response => {
            setResult(response.data)
        },
    })

    useEffect(() => {
        const _blur_handler = () => {
            _blur_timeOut.current = setTimeout(() => {
                setShowStatus(false)
            }, 200)
        }

        const _focus_handler = () => {
            if (_blur_timeOut.current !== null) {
                clearTimeout(_blur_timeOut.current)
            }

            setShowStatus(true)
        }

        if (serchValue) {
            setShowStatus(true)

            if (input_ref.current) {
                input_ref.current.addEventListener("blur", _blur_handler)
                input_ref.current.addEventListener("focus", _focus_handler)
            }
        } else {
            setShowStatus(false)

            if (input_ref.current) {
                input_ref.current.removeEventListener("blur", _blur_handler)
                input_ref.current.removeEventListener("focus", _focus_handler)
            }
        }

        const handler = setTimeout(() => {
            if (serchValue) {
                mutate(serchValue)
            } else {
                reset()
                setResult([])
            }
        }, 1000)

        return () => {
            clearTimeout(handler)

            if (_blur_timeOut.current !== null) {
                clearTimeout(_blur_timeOut.current)
            }

            if (input_ref.current) {
                input_ref.current.removeEventListener("blur", _blur_handler)
                input_ref.current.removeEventListener("focus", _focus_handler)
            }
        }
    }, [serchValue])

    useEffect(() => {
        setShowStatus(false)
        setSerchvalue("")
    }, [Location])

    return { serchValue, setSerchvalue, showStatus, isPending, result, input_ref }
}
export default useSerach
