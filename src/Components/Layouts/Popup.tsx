import { useEffect } from "react"
import useLanguage from "../../Lib/zustand/language"
import usePopUp from "../../Lib/zustand/popup"
import MoviezueqBox from "../MoviezueqBox"
import Portal from "../Portal"
import tickIcon from "/Pics/tick.png"
import redxIcon from "/Pics/redx.png"

const Popup = () => {
    const { close, value, status } = usePopUp()

    const { mode, message } = value

    const lang = useLanguage(store => store.lang)

    useEffect(() => {
        if (!status) return

        const popTimeOut = setTimeout(() => {
            close()
        }, 3500)

        return () => {
            clearTimeout(popTimeOut)
        }
    }, [status])

    if (!status) return null

    const loginText = " وارد "
    const registerText = " عضو "

    return (
        <Portal>
            <div className='fixed top-[calc(var(--navbar-height)*1.2)] rtl:right-[calc(var(--navbar-height)*1.2)] ltr:left-[calc(var(--navbar-height)*1.2)] z-40 font-FaFont rtl:text-added-white rtl:480:text-xl rtl:sm:text-2xl rtl:md:text-3xl rtl:lg:text-4xl rtl:rtl ltr:ltr rtl:font-FaFont ltr:font-EnFont'>
                <MoviezueqBox>
                    <div
                        className={`flex items-center gap-2 border-b ${
                            mode !== "error" ? " border-green-600 " : " border-red-600 "
                        } md:border-b-2`}
                    >
                        <img
                            src={mode !== "error" ? tickIcon : redxIcon}
                            alt='green tick icon'
                            className='w-5 aspect-square 480:w-6 sm:w-7 md:w-8 lg:w-9'
                        />
                        <span>
                            {mode === "error" ? (
                                message
                            ) : lang === "FA" ? (
                                <>
                                    با موفقیت
                                    {mode === "login" ? loginText : registerText}
                                    شدید
                                </>
                            ) : (
                                <>
                                    You have successfully
                                    {mode === "login" ? " logged in " : " registered "}
                                </>
                            )}
                        </span>
                    </div>
                    <div
                        className={`h-0.5 ${status ? "popupProgress" : ""} ${
                            mode !== "error" ? " bg-green-600 " : " bg-red-600 "
                        }`}
                    ></div>
                </MoviezueqBox>
            </div>
        </Portal>
    )
}
export default Popup
