import { useEffect } from "react"
import usePopUp from "../../Lib/zustand/popup"
import MoviezueqBox from "../MoviezueqBox"
import Portal from "../Portal"
import tickIcon from "/Pics/tick.png"

const Popup = () => {
    const { close, value, status } = usePopUp()

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
            <div className='fixed top-[calc(var(--navbar-height)*1.2)] right-[calc(var(--navbar-height)*1.2)] z-40 font-FaFont text-added-white 480:text-xl sm:text-2xl md:text-3xl lg:text-4xl rtl'>
                <MoviezueqBox>
                    <div className='flex items-center gap-2 border-b border-green-600 md:border-b-2'>
                        <img
                            src={tickIcon}
                            alt='green tick icon'
                            className='w-5 aspect-square 480:w-6 sm:w-7 md:w-8 lg:w-9'
                        />
                        <span>
                            با موفقیت
                            {value === "login" ? loginText : value === "register" ? registerText : "BRUH(error)"}
                            شدید
                        </span>
                    </div>
                    <div className={`bg-green-600 h-0.5 ${status ? "popupProgress" : ""}`}></div>
                </MoviezueqBox>
            </div>
        </Portal>
    )
}
export default Popup
