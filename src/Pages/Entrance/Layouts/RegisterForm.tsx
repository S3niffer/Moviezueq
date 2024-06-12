import YInputButton from "../../../Components/YInputButton"
import { useForm, SubmitHandler } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { Register_Schema } from "./yup_schemas"
import FieldErrorMessage from "./FieldErrorMessage"

const RegisterForm = ({ buttonValue }: EntranceFormProps) => {
    const Form = useForm<RegisterFormInputs>({ resolver: yupResolver(Register_Schema) })

    const _FormHandler: SubmitHandler<RegisterFormInputs> = Data => {
        console.log(Data)
    }

    return (
        <form
            className='flex items-center flex-col gap-1 480:gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 mb-2 px-2 w-48 480:w-64 sm:w-80 lg:w-96'
            onSubmit={Form.handleSubmit(_FormHandler)}
        >
            <div className='w-full flex flex-col gap-1'>
                <input
                    type='text'
                    placeholder='نام'
                    className='outline-none px-1.5 bg-transparent border-b border-b-added-slategray text-added-slategray focus:border-b-added-schoolbus focus:text-added-white transition-all duration-300 480:border-b-2 md:border-b-[3px] w-11/12'
                    {...Form.register("name")}
                />
                <FieldErrorMessage Field={Form.formState.errors.name} />
            </div>
            <div className='w-full flex flex-col gap-1'>
                <input
                    type='password'
                    placeholder='گذرواژه'
                    className='outline-none px-1.5 bg-transparent border-b border-b-added-slategray text-added-slategray focus:border-b-added-schoolbus focus:text-added-white transition-all duration-300 480:border-b-2 md:border-b-[3px] w-11/12'
                    {...Form.register("password")}
                />
                <FieldErrorMessage Field={Form.formState.errors.password} />
            </div>
            <div className='w-full flex flex-col gap-1'>
                <input
                    type='text'
                    placeholder='پست الکترونیکی'
                    className='outline-none px-1.5 bg-transparent border-b border-b-added-slategray text-added-slategray focus:border-b-added-schoolbus focus:text-added-white transition-all duration-300 480:border-b-2 md:border-b-[3px] w-11/12'
                    {...Form.register("email")}
                />
                <FieldErrorMessage Field={Form.formState.errors.email} />
            </div>
            <YInputButton
                type='submit'
                value={buttonValue}
            />
        </form>
    )
}
export default RegisterForm
