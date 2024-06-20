import { useMutation } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const useSerach = () => {
    const Location = useLocation()

    const [showStatus, setShowStatus] = useState<boolean>(false)

    const [serchValue, setSerchvalue] = useState("")

    const [result, setResult] = useState<MovieBoxProps[]>([])

    const { mutate, isPending, reset } = useMutation({
        mutationFn: (value: string) => fetch(`https://moviesapi.ir/api/v1/movies?q=${value}`).then(res => res.json()),
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
    }, [Location])

    return { serchValue, setSerchvalue, showStatus, isPending, result }
}
export default useSerach
