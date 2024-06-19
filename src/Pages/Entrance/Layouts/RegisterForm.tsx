import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import RegisterFormHandler from "../../../_utils/RegisterFormHandler"
import usePasswordVisibilityToggle from "../../../_utils/usePasswordVisibilityToggle"
import Loading from "../../../Components/Loading"
import YInputButton from "../../../Components/YInputButton"
import FieldErrorMessage from "./FieldErrorMessage"
import { Register_Schema } from "./yup_schemas"

const RegisterForm = ({ buttonValue }: EntranceFormProps) => {
    const Form = useForm<RegisterFormInputs>({ resolver: yupResolver(Register_Schema) })

    const { _FormHandler, LoadingStatus } = RegisterFormHandler()

    const { icon, inputType } = usePasswordVisibilityToggle()

    return (
        <form
            className='flex items-center flex-col gap-1 480:gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 mb-2 px-2 w-48 480:w-64 sm:w-80 lg:w-96'
            onSubmit={Form.handleSubmit(_FormHandler)}
        >
            <div className='w-full flex flex-col gap-1'>
                <input
                    type='text'
                    placeholder='نام'
                    className='outline-none px-1.5 bg-transparent border-b border-b-added-slategray text-added-slategray focus:border-b-added-schoolbus focus:text-added-white transition-all duration-300 480:border-b-2 md:border-b-[3px]'
                    {...Form.register("name")}
                />
                <FieldErrorMessage Field={Form.formState.errors.name} />
            </div>
            <div className='w-full flex flex-col gap-1 relative'>
                <input
                    type={inputType}
                    placeholder='گذرواژه'
                    className='outline-none px-1.5 bg-transparent border-b border-b-added-slategray text-added-slategray focus:border-b-added-schoolbus focus:text-added-white transition-all duration-300 480:border-b-2 md:border-b-[3px] pl-5 480:pl-6 sm:pl-7 md:pl-8 lg:pl-9 placeholder:text-base placeholder:480:text-xl placeholder:sm:text-2xl placeholder:md:text-3xl placeholder:lg:text-4xl placeholder:font-FaFont font-EnFont h-6 480:h-7 sm:h-8 md:h-9 lg:h-10 text-xs 480:text-sm sm:text-base md:text-lg lg:text-2xl'
                    {...Form.register("password")}
                />
                {icon}
                <FieldErrorMessage Field={Form.formState.errors.password} />
            </div>
            <div className='w-full flex flex-col gap-1'>
                <input
                    type='text'
                    placeholder='پست الکترونیکی'
                    className='outline-none px-1.5 bg-transparent border-b border-b-added-slategray text-added-slategray focus:border-b-added-schoolbus focus:text-added-white transition-all duration-300 480:border-b-2 md:border-b-[3px] placeholder:text-base placeholder:480:text-xl placeholder:sm:text-2xl placeholder:md:text-3xl placeholder:lg:text-4xl placeholder:font-FaFont font-EnFont h-6 480:h-7 sm:h-8 md:h-9 lg:h-10 text-xs 480:text-sm sm:text-base md:text-lg lg:text-2xl'
                    {...Form.register("email")}
                />
                <FieldErrorMessage Field={Form.formState.errors.email} />
            </div>

            {LoadingStatus ? (
                <Loading />
            ) : (
                <YInputButton
                    type='submit'
                    value={buttonValue}
                />
            )}
        </form>
    )
}
export default RegisterForm
