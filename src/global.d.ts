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
