import { useEffect, useState } from "react"
import _useTextTranslator from "../../../_utils/_useTextTranslator"
import useLogout from "../../../_utils/useLogout"
import MoviezueqBox from "../../../Components/MoviezueqBox"
import Portal from "../../../Components/Portal"
import YInputButton from "../../../Components/YInputButton"
import closeIcon from "/Pics/CloseIcon.png"

const LogoutButton = () => {
    const [ModalStatus, setModalStatus] = useState<boolean>(false)

    const _logout = useLogout()

    const _logoutHandler = () => {
        setModalStatus(true)
    }

    const closeModal = () => {
        setModalStatus(false)
    }

    useEffect(() => {
        const handleOnKeydown = (e: KeyboardEvent) => {
            if (e.key !== "Escape") return

            closeModal()
        }

        if (ModalStatus) {
            document.addEventListener("keydown", handleOnKeydown)
        } else {
            document.removeEventListener("keydown", handleOnKeydown)
        }

        return () => {
            document.removeEventListener("keydown", handleOnKeydown)
        }
    }, [ModalStatus])

    return (
        <>
            <div
                className='text-center relative flipUpward_container'
                onClick={_logoutHandler}
            >
                <div className='flipUpward_card bg-added-charcoal fill-added-white rounded hover:bg-added-schoolbus hover:fill-added-charcoal group transition-all duration-300 cursor-pointer'>
                    <div className='flipUpward_card-front'>
                        <YInputButton value={_useTextTranslator("خروج", "logout")} />
                    </div>
                    <button className='flipUpward_card-back relative'>
                        <YInputButton value={_useTextTranslator("خروج", "logout")} />
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            data-name='Layer 1'
                            viewBox='0 0 100 125'
                            x='0px'
                            y='0px'
                            className='w-5 fill-added-white group-hover:fill-added-charcoal absolute rtl:top-[15px] ltr:top-2.5 -translate-y-1/2 left-1/2 -translate-x-[55%] 480:w-6 rtl:480:top-[18px] ltr:480:top-[13px] sm:w-7 rtl:sm:top-[22px] ltr:sm:top-[18px] rtl:md:top-6 ltr:md:top-5 md:w-9 rtl:lg:top-[30px] ltr:lg:top-[26px] lg:w-11'
                        >
                            <path d='M81,66V34a15,15,0,0,0-30,0v3h6V34a9,9,0,0,1,18,0V66a9,9,0,0,1-18,0V63H51v3a15,15,0,0,0,30,0Z' />
                            <path d='M34,66.24,38.24,62l-9-9H57V47H29.24l9-9L34,33.76,19.88,47.88a3,3,0,0,0,0,4.24Z' />
                        </svg>
                    </button>
                </div>
            </div>
            <Portal>
                <div className={`${ModalStatus ? "block" : "hidden"}`}>
                    <div
                        className='fixed backdrop-blur z-40 top-0 right-0 left-0 bottom-0 flex items-center justify-center'
                        onClick={e => {
                            if (e.target !== e.currentTarget) return
                            closeModal()
                        }}
                    >
                        <div className='w-52 480:w-60 ltr:480:w-72 sm:w-72 ltr:sm:w-80 md:w-80 ltr:md:w-[400px] lg:w-96 ltr:lg:w-[500px] font-FaFont text-added-white 480:text-xl sm:text-2xl md:text-3xl lg:text-4xl rtl:rtl ltr:ltr rtl:font-FaFont ltr:font-EnFont'>
                            <MoviezueqBox>
                                <div className='flex flex-col gap-2 480:gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4 ltr:gap-3 ltr:480:gap-4 ltr:sm:gap-5 ltr:md:gap-6'>
                                    <button
                                        className='ml-auto w-6 aspect-square scale-90 hover:scale-105 transition-all duration-300 480:w-7 sm:w-8 md:w-9 lg:w-10'
                                        onClick={closeModal}
                                    >
                                        <img
                                            src={closeIcon}
                                            alt='close icon x mark'
                                        />
                                    </button>
                                    <div className='text-center'>
                                        {_useTextTranslator("میخوای بری؟", "do you want to leave?")}
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <button
                                            className='bg-[#ffdb00ea] hover:bg-[#ffeb10] rounded px-2 480:px-2.5 sm:px-3 md:px-3.5 lg:px-4 text-added-oxfordblue transition-all duration-300 ltr:py-1'
                                            onClick={closeModal}
                                        >
                                            {" "}
                                            {_useTextTranslator("دستم خورد", "missclick")}
                                        </button>
                                        <button
                                            className='text-[#ffffffea] hover:text-added-white bg-added-charcoal hover:bg-added-slategray rounded px-2 480:px-2.5 sm:px-3 md:px-3.5 lg:px-4 transition-all duration-300 ltr:py-1'
                                            onClick={_logout}
                                        >
                                            {_useTextTranslator("آره دیگه", "umm yeah")}{" "}
                                        </button>
                                    </div>
                                </div>
                            </MoviezueqBox>
                        </div>
                    </div>
                </div>
            </Portal>
        </>
    )
}
export default LogoutButton
