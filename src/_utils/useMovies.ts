import { useInfiniteQuery } from "@tanstack/react-query"
import useSelectGenre from "../Lib/zustand/genre"

const useMovies = () => {
    const Genre = useSelectGenre(store => store.selected)

    if (Genre) {
        const FilltredByGenre = useInfiniteQuery<MovieListDB>({
            queryKey: ["Movies", Genre],
            queryFn: ({ pageParam }) =>
                fetch(`https://moviesapi.ir/api/v1/genres/${Genre}/movies?page=${pageParam}`).then(res => res.json()),
            initialPageParam: 1,
            getNextPageParam: (lastPage, allPages) => {
                const currentPageNumber = allPages.length
                const totalPages = lastPage.metadata.page_count

                return +currentPageNumber == totalPages ? undefined : +currentPageNumber + 1
            },
        })

        return FilltredByGenre
    } else {
        const AllMovies = useInfiniteQuery<MovieListDB>({
            queryKey: ["Movies"],
            queryFn: ({ pageParam }) => fetch(`https://moviesapi.ir/api/v1/movies?page=${pageParam}`).then(res => res.json()),
            initialPageParam: 1,
            getNextPageParam: (lastPage, allPages) => {
                const currentPageNumber = allPages.length
                const totalPages = lastPage.metadata.page_count

                return +currentPageNumber == totalPages ? undefined : +currentPageNumber + 1
            },
        })

        return AllMovies
    }
}

export default useMovies
