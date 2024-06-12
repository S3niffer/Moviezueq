import searchIcon from "/Pics/search-icon.png"

const SearchMovieInput = () => {
    return (
        <div className='mr-auto flex items-center justify-start relative border-2 border-added-charcoal rounded-md outline-none has-[input:focus]:border-added-slategray'>
            <input
                type='text'
                className='bg-transparent outline-none h-7 sm:h-8 md:h-9 lg:h-10 placeholder:text-added-charcoal w-[88%] pr-1 focus:placeholder:text-added-slategray'
                placeholder='دنبال چی میگردی؟'
            />
            <img
                src={searchIcon}
                alt='search icon'
                className='absolute top-1/2 left-0.5 w-5 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform duration-300'
            />
        </div>
    )
}
export default SearchMovieInput
