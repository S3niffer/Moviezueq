const Poster = ({ poster, title }: { poster: string; title: string }) => {
    return (
        <div className='flex justify-center'>
            <div className='w-60 aspect-[2/3] outline overflow-hidden outline-added-slategray schoolbus rounded md:w-52 lg:w-72'>
                <img
                    src={poster}
                    alt={`${title} movie poster`}
                    className='w-full h-full'
                />
            </div>
        </div>
    )
}
export default Poster
