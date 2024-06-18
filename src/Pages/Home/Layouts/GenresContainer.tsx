import { useQuery } from "@tanstack/react-query"
import getGenreIconSrc from "../../../_utils/getGenreIconSrc"
import Loading from "../../../Components/Loading"

const GenreBox = ({ name }: GenreBoxProps) => {
    return (
        <li className='cursor-pointer hover:text-added-white transition-all group flex items-center gap-1 480:gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3'>
            <img
                src={getGenreIconSrc(name)}
                alt={`${name} genre`}
                className='w-3 480:w-4 sm:w-5 md:w-6 lg:w-7'
            />
            <span className='inline-block group-hover:-translate-x-2 480:group-hover:-translate-x-3 sm:group-hover:-translate-x-4 md:group-hover:-translate-x-5 lg:group-hover:-translate-x-6 transition-transform duration-500'>
                {name}
            </span>
        </li>
    )
}

const GenresContainer = () => {
    const { data: Gneres, isLoading } = useQuery<GenreBoxProps[]>({
        queryKey: ["genres"],
        queryFn: () => fetch("https://moviesapi.ir/api/v1/genres").then(res => res.json()),
    })

    if (isLoading) return <Loading />

    return (
        <ul className='text-added-slategray'>
            {Gneres?.map(genre => (
                <GenreBox
                    key={genre.id}
                    {...genre}
                />
            ))}
        </ul>
    )
}
export default GenresContainer
