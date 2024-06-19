import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import Navbar from "../../Components/Layouts/Navbar"
import Loading from "../../Components/Loading"
import MoviezueqBox from "../../Components/MoviezueqBox"
import getBgImageSrc from "../../_utils/getBgImageSrc"
import BreadCrumb from "./Layouts/BreadCrumb"
import DetailsSection from "./Layouts/DetailsSection"
import ImdbSection from "./Layouts/ImdbSection"
import Poster from "./Layouts/Poster"

const SingleMovie = () => {
    const { movieId } = useParams()

    const { data, isLoading, error } = useQuery({
        queryKey: ["Movie", movieId],
        queryFn: () => fetch(`https://moviesapi.ir/api/v1/movies/${movieId}`).then(res => res.json()),
    })

    const BackgroundImageUrl = getBgImageSrc(data, isLoading)

    return (
        <div className='rtl pt-[calc(var(--navbar-height)*1.5)]'>
            <Navbar />
            <BreadCrumb movieId={movieId} />

            <div className='container pb-[var(--yellow-BG)] mt-[var(--navbar-height)]'>
                <MoviezueqBox>
                    {isLoading || !data ? (
                        <Loading />
                    ) : error ? (
                        <div>{error.message}</div>
                    ) : (
                        <div
                            className='bg-center bg-cover bg-no-repeat rounded-md overflow-hidden'
                            style={{ backgroundImage: `url(${BackgroundImageUrl})` }}
                        >
                            <div className='bg-black/40 p-2 480:p-2.5 sm:p-3 md:p-3.5 lg:p-4 flex flex-col gap-2 md:flex-row md:gap-4'>
                                <Poster {...data} />

                                <div className='grid w-full '>
                                    <ImdbSection {...data} />

                                    <DetailsSection {...data} />
                                </div>
                            </div>
                        </div>
                    )}
                </MoviezueqBox>
            </div>
        </div>
    )
}
export default SingleMovie
