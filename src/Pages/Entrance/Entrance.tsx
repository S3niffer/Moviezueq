import { useState } from "react"
import Navbar from "../../Components/Layouts/Navbar"
import EntranceCardContent from "./Layouts/EntranceCard"
import LoginForm from "./Layouts/LoginForm"
import RegisterForm from "./Layouts/RegisterForm"

const Entrance = () => {
    const [formName, setFormName] = useState<EntranceActiveForm>("register")

    const _formChanger = () => {
        setFormName(prv => (prv === "login" ? "register" : "login"))
    }
    return (
        <div className='rtl:rtl ltr:ltr pt-[calc(var(--navbar-height)*2)]'>
            <Navbar />
            <div className='container pb-[calc(var(--navbar-height)+var(--yellow-BG))] bg-added-delftblue'>
                <div className='sticky z-10 entranceCardContainer flex justify-center'>
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
