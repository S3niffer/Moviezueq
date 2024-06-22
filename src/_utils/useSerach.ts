import { useMutation } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import useLayoutDataApi from "../Lib/axios/LayoutDataApi"

const useSerach = () => {
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
        if (serchValue) {
            setShowStatus(true)
        } else {
            setShowStatus(false)
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
        }
    }, [serchValue])

    useEffect(() => {
        setShowStatus(false)
        setSerchvalue("")
    }, [Location])

    return { serchValue, setSerchvalue, showStatus, isPending, result }
}
export default useSerach
