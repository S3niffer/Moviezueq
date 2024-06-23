import { create } from "zustand"

const useLanguage = create<languageStore>(set => {
    type langT = languageStore["lang"]
    const localLang = localStorage.getItem("lang")
    const DefaultLang: langT = localLang === "FA" || localLang === "EN" ? localLang : "FA"

    return {
        lang: DefaultLang,
        ChangeLanguage: lang =>
            set(prv => {
                localStorage.setItem("lang", lang)

                return { ...prv, lang }
            }),
    }
})

export default useLanguage
