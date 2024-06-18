import { useEffect, useState } from "react"

type ImagesT = Pick<SingleMovieDetails, "images">

const getBgImageSrc = (Movie: ImagesT = { images: [""] }, status: boolean) => {
    const [{ src }, setImageSrc] = useState({ src: Movie.images[0], index: 0 })

    useEffect(() => {
        const srcChanger = setInterval(() => {
            setImageSrc(prv => {
                const length = Movie.images.length
                const index = prv.index
                if (length - 1 === index) {
                    return { src: Movie.images[0], index: 0 }
                } else {
                    return { src: Movie.images[index + 1], index: index + 1 }
                }
            })
        }, 4000)

        return () => {
            clearInterval(srcChanger)
        }
    }, [Movie])

    if (!status) {
        return src || Movie.images[0]
    } else return src
}
export default getBgImageSrc
