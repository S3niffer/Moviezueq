import useLanguage from "../Lib/zustand/language"

const _TranslateGenreNameToPersian = (name: string): string => {
    const lang = useLanguage(store => store.lang)

    if (lang === "EN") return name
    switch (name) {
        case "Crime":
            return "جنایی"
        case "Drama":
            return "درام"
        case "Action":
            return "اکشن"
        case "Biography":
            return "زندگینامه"
        case "History":
            return "تاریخی"
        case "Adventure":
            return "ماجراجویی"
        case "Fantasy":
            return "فانتزی"
        case "Western":
            return "وسترن"
        case "Comedy":
            return "کمدی"
        case "Sci-Fi":
            return "علمی تخیلی"
        case "Mystery":
            return "معمایی"
        case "Thriller":
            return "هیجان انگیز"
        case "Family":
            return "خانوادگی"
        case "War":
            return "جنگی"
        case "Animation":
            return "انیمیشن"
        case "Romance":
            return "عاشقانه"
        case "Horror":
            return "ترسناک"
        case "Music":
            return "موسیقی"
        case "Film-Noir":
            return "فیلم نوآر"
        case "Musical":
            return "موزیکال"
        case "Sport":
            return "ورزشی"

        default:
            return name
    }
}
export default _TranslateGenreNameToPersian
