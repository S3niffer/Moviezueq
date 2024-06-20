import { create } from "zustand"

const usePopUp = create<popUpStore>(set => ({
    status: false,
    value: "login",
    show: value => set(store => ({ ...store, status: true, value })),
    close: () => set(store => ({ ...store, status: false })),
}))

export default usePopUp
