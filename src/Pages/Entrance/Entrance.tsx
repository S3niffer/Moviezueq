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
        <div className='bg-added-delftblue h-screen'>
            <Navbar />
            <div className='h-[calc(100vh-var(--navbar-height))] relative'>
                <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 entranceCardContainer'>
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
    )
}
export default Entrance
