import _useTextTranslator from "../../../_utils/_useTextTranslator"
import useLanguage from "../../../Lib/zustand/language"

const EntranceCard = ({ cardName, cardClass, Form, formChanger }: EntranceCard) => {
    const lang = useLanguage(store => store.lang)

    return (
        <div className={`bg-added-oxfordblue p-1.5 480:p-3 sm:p-6 md:p-8 rounded ${cardClass}`}>
            <p className='text-center'>
                {cardName === "ورود" ? _useTextTranslator("ورود", "login") : _useTextTranslator("عضویت", "register")}
            </p>
            <div className='mt-2 flex justify-center'>
                <Form
                    buttonValue={
                        cardName === "ورود" ? _useTextTranslator("ورود", "login") : _useTextTranslator("عضویت", "register")
                    }
                />
            </div>
            <span>
                *
                {lang === "FA" ? (
                    <>
                        برای{" "}
                        <button
                            onClick={formChanger}
                            className='text-added-schoolbus '
                        >
                            {cardName === "ورود" ? _useTextTranslator("عضویت", "register") : _useTextTranslator("ورود", "login")}
                        </button>{" "}
                        کلیک کنید
                    </>
                ) : (
                    <>
                        click to
                        <button
                            onClick={formChanger}
                            className='text-added-schoolbus '
                        >
                            {cardName === "ورود" ? _useTextTranslator("عضویت", "register") : _useTextTranslator("ورود", "login")}
                        </button>
                    </>
                )}
            </span>
        </div>
    )
}
export default EntranceCard
