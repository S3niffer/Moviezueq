import { create } from "zustand"

const useSelectGenre = create<genreStore>(set => ({
    selected: null,
    selectOne: genre =>
        set(prv => {
            if (prv.selected == genre) {
                return { ...prv, selected: null }
            }
            return { ...prv, selected: genre }
        }),
}))

export default useSelectGenre
