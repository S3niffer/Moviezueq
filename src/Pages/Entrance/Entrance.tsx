import { useState } from "react"
import Navbar from "../../Components/Layouts/Navbar"
import EntranceCardContent from "./Layouts/EntranceCard"
import RegisterForm from "./Layouts/RegisterForm"
import LoginForm from "./Layouts/LoginForm"

const Entrance = () => {
    const [formName, setFormName] = useState<EntranceActiveForm>("register")

    const _formChanger = () => {
        setFormName(prv => (prv === "login" ? "register" : "login"))
    }
    return (
        <div className='h-screen overflow-y-auto ltr'>
            <div className='rtl'>
                <Navbar />
                <div className='relative h-[380px] 480:h-[415px] sm:h-[480px] md:h-[540px] lg:h-[610px] mb-8 480:mb-16 sm:mb-24 md:mb-32 lg:mb-48'>
                    <div className='absolute left-1/2 top-[calc(var(--navbar-height)+32px)] 480:top-[calc(var(--navbar-height)+48px)] sm:top-[calc(var(--navbar-height)+64px)] md:top-[calc(var(--navbar-height)+80px)] lg:top-[calc(var(--navbar-height)+96px)] -translate-x-1/2  z-10 entranceCardContainer'>
                        <div
                            className={`entranceCard relative transition-transform duration-500 ${
                                formName === "register" ? " rotateCard " : ""
                            }`}
                        >
                            {formName !== "register" ? (
                                <EntranceCardContent
                                    cardName='عضویت'
                                    cardClass='entranceCard-register'
                                    Form={RegisterForm}
                                    formChanger={_formChanger}
                                />
                            ) : (
                                <EntranceCardContent
                                    cardName='ورود'
                                    cardClass='entranceCard-login'
                                    Form={LoginForm}
                                    formChanger={_formChanger}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Entrance
