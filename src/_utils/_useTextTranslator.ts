import useLanguage from "../Lib/zustand/language"

const _useTextTranslator = (FaText: string, EnText: string): string => {
    const lang = useLanguage(store => store.lang)

    return lang === "EN" ? EnText : FaText
}

export default _useTextTranslator
