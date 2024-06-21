import { create } from "zustand"

const useLanguage = create<languageStore>(set => ({
    lang: "FA",
    ChangeLanguage: lang => set(prv => ({ ...prv, lang })),
}))

export default useLanguage
