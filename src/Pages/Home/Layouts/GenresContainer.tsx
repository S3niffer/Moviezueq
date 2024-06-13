const GenreBox = ({ id, imageSrc, name }: GenreBoxProps) => {
    return (
        <li className='cursor-pointer hover:text-added-white transition-all group flex items-center gap-1'>
            <img
                src={imageSrc}
                alt={`${name} genre`}
                className='w-3 480:w-3.5 sm:w-4 md:w-5'
            />
            <span className='inline-block group-hover:-translate-x-2 480:group-hover:-translate-x-3 sm:group-hover:-translate-x-4 md:group-hover:-translate-x-5 lg:group-hover:-translate-x-6 transition-transform duration-500'>
                {name}
            </span>
        </li>
    )
}

const GenresContainer = () => {
    const Genres: GenreBoxProps[] = [
        { id: 1, name: "درام", imageSrc: "/Pics/Flags icon/iran.png" },
        { id: 2, name: "کمدی", imageSrc: "/Pics/Flags icon/iran.png" },
        { id: 3, name: "درام", imageSrc: "/Pics/Flags icon/iran.png" },
        { id: 4, name: "کمدی", imageSrc: "/Pics/Flags icon/iran.png" },
        { id: 5, name: "درام", imageSrc: "/Pics/Flags icon/iran.png" },
        { id: 6, name: "کمدی", imageSrc: "/Pics/Flags icon/iran.png" },
        { id: 7, name: "درام", imageSrc: "/Pics/Flags icon/iran.png" },
    ]
    return (
        <ul className='text-added-slategray'>
            {Genres.map(genre => (
                <GenreBox
                    key={genre.id}
                    {...genre}
                />
            ))}
        </ul>
    )
}
export default GenresContainer
