import { create } from "zustand"

interface popUpStore {
    status: boolean
    value: "login" | "register"
    show: (value: popUpStore["value"]) => void
    close: () => void
}

const usePopUp = create<popUpStore>(set => ({
    status: false,
    value: "login",
    show: value => set(store => ({ ...store, status: true, value })),
    close: () => set(store => ({ ...store, status: false })),
}))

export default usePopUp
