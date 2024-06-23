import { create } from "zustand"

const usePopUp = create<popUpStore>(set => ({
    status: false,
    value: { mode: "login" },
    close: () => set({ status: false }),
    show: value => set({ value: value, status: true }),
}))

export default usePopUp
