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

interface LoginFormInputs {
    email: string
    password: string
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
