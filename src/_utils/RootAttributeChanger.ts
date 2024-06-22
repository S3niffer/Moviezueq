import { useEffect } from "react"
import useLanguage from "../Lib/zustand/language"

const RootAttributeChanger = () => {
    const lang = useLanguage(store => store.lang)

    useEffect(() => {
        const Fa_attr = {
            class: "font-FaFont text-added-white bg-added-delftblue 480:text-xl sm:text-2xl md:text-3xl lg:text-4xl ltr min-h-screen",
            dir: "rtl",
            lang: "fa",
        }
        const En_attr = {
            class: "font-En_Font text-xs 480:text-sm sm:text-base md:text-lg lg:text-2xl ltr text-added-white bg-added-delftblue min-h-screen",
            dir: "ltr",
            lang: "en",
        }

        const root = document.getElementById("root") as HTMLDivElement

        if (lang === "FA") {
            root.setAttribute("class", Fa_attr["class"])
            root.setAttribute("dir", Fa_attr["dir"])
            root.setAttribute("lang", Fa_attr["lang"])
        } else {
            root.setAttribute("class", En_attr["class"])
            root.setAttribute("dir", En_attr["dir"])
            root.setAttribute("lang", En_attr["lang"])
        }
    }, [lang])

    return null
}
export default RootAttributeChanger
