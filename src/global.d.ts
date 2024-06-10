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
