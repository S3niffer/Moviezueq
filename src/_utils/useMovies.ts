import { InfiniteData, useInfiniteQuery, UseInfiniteQueryResult } from "@tanstack/react-query"
import useLayoutDataApi from "../Lib/axios/LayoutDataApi"
import useSelectGenre from "../Lib/zustand/genre"

const useMovies = () => {
    const Genre = useSelectGenre(store => store.selected)

    const _returner = (result: UseInfiniteQueryResult<InfiniteData<MovieListDB, unknown>, Error>) => {
        const fetchedSoFar =
            result.data?.pages.reduce((total, next) => {
                return total + next.data.length
            }, 0) || 0

        return { ...result, fetchedSoFar }
    }

    if (Genre) {
        const FilltredByGenre = useInfiniteQuery<MovieListDB>({
            queryKey: ["Movies", Genre],
            queryFn: ({ pageParam }) => useLayoutDataApi("GET", `/genres/${Genre}/movies`, { page: pageParam }),
            initialPageParam: 1,
            getNextPageParam: (lastPage, allPages) => {
                const currentPageNumber = allPages.length
                const totalPages = lastPage.metadata.page_count

                return +currentPageNumber == totalPages ? undefined : +currentPageNumber + 1
            },
        })

        return _returner(FilltredByGenre)
    } else {
        const AllMovies = useInfiniteQuery<MovieListDB>({
            queryKey: ["Movies"],
            queryFn: ({ pageParam }) => useLayoutDataApi("GET", "/movies", { page: pageParam }),
            initialPageParam: 1,
            getNextPageParam: (lastPage, allPages) => {
                const currentPageNumber = allPages.length
                const totalPages = lastPage.metadata.page_count

                return +currentPageNumber == totalPages ? undefined : +currentPageNumber + 1
            },
        })

        return _returner(AllMovies)
    }
}

export default useMovies
