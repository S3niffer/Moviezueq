import { Link } from "react-router-dom"
import _useTextTranslator from "../../_utils/_useTextTranslator"
import useSerach from "../../_utils/useSerach"
import Loading from "../Loading"
import Portal from "../Portal"
import noImageFound from "/Pics/noImageFound.jpg"
import searchIcon from "/Pics/search-icon.png"

const SearchResultItems = ({ Movies }: { Movies: MovieBoxProps[] }) => {
    if (Movies.length === 0) {
        return (
            <div className='bg-added-oxfordblue rounded p-0.5 text-added-slategray text-center'>
                {_useTextTranslator("موردی یافت نشد!", "nothing found!")}
            </div>
        )
    }
    return Movies.map(movie => (
        <Link
            key={movie.id}
            className='bg-added-charcoal rounded flex items-center gap-1 group border border-added-slategray hover:border-added-white cursor-pointer overflow-hidden md:border-4 480:border-2 transition-colors'
            to={`/movie/${movie.id}`}
        >
            <div className='h-10 aspect-[2/3] 480:h-12 sm:h-16 md:h-24 lg:h-28 outline overflow-hidden outline-added-charcoal rounded group-hover:outline-added-white'>
                <img
                    src={movie.poster === "https://moviesapi.ir/images/" ? noImageFound : movie.poster}
                    alt={`${movie.title} poster`}
                    className='w-full h-full'
                />
            </div>
            <div className='flex-1 line-clamp-1 ltr text-center p-0.5 font-EnFont'>{movie.title}</div>
        </Link>
    ))
}

const SerachResultBox = ({ children }: { children: React.ReactNode }) => {
    return (
        <Portal>
            <div className='fixed z-40 top-[var(--navbar-height)] w-screen'>
                <div className='container rtl:rtl ltr:ltr flex justify-between text-added-white'>
                    <div className='w-1/5'></div>
                    <div className='w-3/6 rtl:pr-1 ltr:pl-1'>
                        <div className='rounded-sm border md:border-4 480:border-2 border-added-charcoal backdrop-blur-sm p-0.5 max-h-24  480:max-h-32 sm:max-h-40 md:max-h-48 lg:max-h-56 overflow-y-auto rtl:ltr 480:p-1 sm:p-1.5 md:p-2 lg:p-2.5'>
                            <div className='rtl:rtl flex flex-col gap-1 480:gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3'>{children}</div>
                        </div>
                    </div>
                    <div className='w-1/4 480:w-1/5'></div>
                </div>
            </div>
        </Portal>
    )
}

const SearchMovieInput = () => {
    const { serchValue, setSerchvalue, showStatus, isPending, result } = useSerach()

    return (
        <>
            <div className='rtl:mr-auto ltr:ml-auto flex items-center justify-start relative border-2 border-added-charcoal rounded-md outline-none has-[input:focus]:border-added-slategray'>
                <input
                    type='text'
                    className='bg-transparent outline-none h-7 sm:h-8 md:h-9 lg:h-10 placeholder:text-added-charcoal w-[88%] rtl:pr-1 ltr:pl-1 focus:placeholder:text-added-slategray rtl:480:pr-1.5 rtl:sm:pr-2 rtl:md:pr-2.5 ltr:480:pl-1.5 ltr:sm:pl-2 ltr:md:pl-2.5 rtl:rtl ltr:ltr'
                    placeholder={_useTextTranslator("دنبال چی میگردی؟", "what do u looking for?")}
                    value={serchValue}
                    onChange={e => setSerchvalue(e.target.value)}
                />
                <img
                    src={searchIcon}
                    alt='search icon'
                    className='absolute top-1/2 rtl:left-0.5 ltr:right-0.5 w-5 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform duration-300 sm:w-6 md:w-7 lg:w-8 rtl:480:left-1 rtl:md:left-1.5 ltr:480:right-1 ltr:md:right-1.5 md:hover:scale-125 md:duration-500'
                />
            </div>
            {showStatus ? (
                <SerachResultBox>{isPending ? <Loading /> : <SearchResultItems Movies={result} />}</SerachResultBox>
            ) : null}
        </>
    )
}
export default SearchMovieInput
