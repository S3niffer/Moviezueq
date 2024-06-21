import React from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { Link } from "react-router-dom"
import _TranslateGenreNameToPersian from "../../../_utils/_TranslateGenreNameToPersian"
import useMovies from "../../../_utils/useMovies"
import Loading from "../../../Components/Loading"

const MovieBox = ({ genres, id, poster, title }: MovieBoxProps) => {
    return (
        <div className='bg-added-charcoal rounded-md p-1 480:p-1.5 sm:p-2 md:p-2.5 lg:p-3 flex w-full border border-added-slategray md:border-[3px] hover:border-added-white transition-colors'>
            <div className='w-14 aspect-[2/3] outline overflow-hidden outline-added-slategray rounded 480:w-16 sm:w-24 md:w-28 lg:w-32'>
                <img
                    src={poster}
                    alt={`${title} movie poster`}
                    className='w-full h-full'
                />
            </div>
            <div className='mr-2 flex-1 480:mr-2.5 sm:mr-3 md:mr-3.5 lg:mr-4 flex flex-col justify-between'>
                <div className=' flex-1 flex flex-col justify-evenly'>
                    <p>
                        عنوان:{" "}
                        <Link to={`/movie/${id}`}>
                            <span className='cursor-pointer text-center text-added-schoolbus font-EnFont text-[10px] 480:text-xs sm:text-sm md:text-base lg:text-lg line-clamp-1 ltr'>
                                {title}
                            </span>
                        </Link>
                    </p>
                    <p>
                        در ژانر:{" "}
                        <span className='pr-3 text-added-white'>
                            {genres.map((genre, index) => (
                                <React.Fragment key={genre}>
                                    <span>{_TranslateGenreNameToPersian(genre)}</span>
                                    {genres.length !== index + 1 ? " ," : null}
                                </React.Fragment>
                            ))}
                        </span>
                    </p>
                </div>
                <div className='flex justify-end w-full '>
                    <Link to={`/movie/${id}`}>
                        <button className='bg-added-slategray rounded text-xs leading-[0.1rem] border border-added-slategray hover:border-added-schoolbus transition-all duration-300 hover:pl-4 py-1.5 px-1 480:text-base 480:leading-[0.3rem] sm:text-lg sm:leading-[0.7rem] md:text-xl md:leading-4 lg:text-2xl lg:leading-5 lg:border-[3px]'>
                            بیشتر...
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const MoviesContainer = () => {
    const { data, isLoading, fetchNextPage, hasNextPage, fetchedSoFar } = useMovies()

    if (isLoading) return <Loading />

    return (
        <InfiniteScroll
            dataLength={fetchedSoFar}
            next={fetchNextPage}
            hasMore={hasNextPage}
            loader={<Loading />}
        >
            <div className='flex flex-wrap gap-1.5 480:gap-2 sm:gap-2.5 md:gap-3.5 lg:gap-4'>
                {data?.pages.map(page => {
                    return (
                        <React.Fragment key={page.metadata.current_page}>
                            {page.data.map(movie => (
                                <MovieBox
                                    key={movie.id}
                                    {...movie}
                                />
                            ))}
                        </React.Fragment>
                    )
                })}
            </div>
        </InfiniteScroll>
    )
}
export default MoviesContainer
