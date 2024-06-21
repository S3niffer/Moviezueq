import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import Navbar from "../../Components/Layouts/Navbar"
import Loading from "../../Components/Loading"
import MoviezueqBox from "../../Components/MoviezueqBox"
import useLayoutDataApi from "../../Lib/axios/LayoutDataApi"
import getBgImageSrc from "../../_utils/getBgImageSrc"
import BreadCrumb from "./Layouts/BreadCrumb"
import DetailsSection from "./Layouts/DetailsSection"
import ImdbSection from "./Layouts/ImdbSection"
import Poster from "./Layouts/Poster"
import noImageFound from "/Pics/noImageFound.jpg"

const SingleMovie = () => {
    const { movieId } = useParams()

    const { data, isLoading, error } = useQuery({
        queryKey: ["Movie", movieId],
        queryFn: () => useLayoutDataApi("GET", `/movies/${movieId}`),
    })

    if (movieId && +movieId > 250) {
        return (
            <div className='rtl pt-[calc(var(--navbar-height)*1.5)]'>
                <Navbar />
                <BreadCrumb movieId={movieId} />
                <div className='container pb-[var(--yellow-BG)] mt-[var(--navbar-height)]'>
                    <MoviezueqBox>
                        <div className='text-center my-3'>
                            ! فیلم هایی که با ID بزرگتر از 250 هستن رو به این صورت نمایش داده میشود چون توسط توسعه دهنده اصلی Api
                            قرار داده نشدند و همه پراپرتی های مورد نیاز رو ندارند.
                            <hr />
                        </div>
                        {isLoading ? (
                            <Loading />
                        ) : data ? (
                            <div className='flex gap-3 items-stretch'>
                                <div className='flex justify-center'>
                                    <div className='w-32 480:w-36 sm:w-44 aspect-[2/3] outline overflow-hidden outline-added-slategray schoolbus rounded md:w-52 lg:w-72'>
                                        <img
                                            src={noImageFound}
                                            alt={`${data.title} movie poster`}
                                            className='w-full h-full'
                                        />
                                    </div>
                                </div>
                                <div className='flex-1 flex flex-col justify-between'>
                                    <div className='flex items-center justify-between'>
                                        <p>عنوان</p>
                                        <span>{data.title}</span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <p>سال</p>
                                        <span>{data.year}</span>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <p>کشور</p>
                                        <span>{data.country}</span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            "یافت نشد"
                        )}
                    </MoviezueqBox>
                </div>
            </div>
        )
    }

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
