type EntranceActiveForm = "login" | "register"

interface EntranceFormProps {
    buttonValue: string
}

interface EntranceCard {
    cardName: string
    cardClass: string
    Form: ({ buttonValue }: EntranceFormProps) => JSX.Element
    formChanger: () => void
}

interface RegisterFormInputs {
    name: string
    email: string
    password: string
}

interface RegisterResponse {
    id: number
    name: string
    email: string
    created_at: string
    updated_at: string
}

interface LoginFormInputs {
    email: string
    password: string
}

interface LoginResponse {
    token_type: "Bearer"
    expires_in: number
    access_token: string
    refresh_token: string
}

interface GenreBoxProps {
    id: number
    name: string
}

interface MovieBoxProps {
    id: number
    title: string
    poster: string
    genres: string[]
    images: string[]
}

interface MovieListDB {
    data: MovieBoxProps[]
    metadata: {
        current_page: number
        per_page: number
        page_count: number
        total_count: number
    }
}

interface SingleMovieDetails {
    id: number
    title: string
    poster: string
    year: string
    rated: string
    released: string
    runtime: string
    director: string
    writer: string
    actors: string
    plot: string
    country: string
    awards: string
    metascore: string
    imdb_rating: string
    imdb_votes: string
    imdb_id: string
    type: string
    genres: string[]
    images: string[]
}

interface DetailsSectionI {
    title: string
    year: string
    runtime: string
    country: string
    type: string
    genres: string[]
    director: string
    actors: string
}
