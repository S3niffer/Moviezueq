import YButton from "../../../Components/YButton"

const LoginForm = ({ buttonValue }: EntranceFormProps) => {
    return (
        <form className='flex items-center flex-col gap-3 mb-2 px-2 480:w-64 sm:w-80 lg:w-96 480:gap-4 sm:gap-6 md:gap-10'>
            <input
                type='text'
                placeholder='ایمیل'
                className='outline-none px-1.5 bg-transparent border-b border-b-added-slategray text-added-slategray focus:border-b-added-schoolbus focus:text-added-white transition-all duration-300 480:border-b-2 md:border-b-[3px] w-11/12'
                onKeyDown={e => {
                    e.currentTarget.style.direction = "ltr"
                }}
                onBlur={e => {
                    if (e.target.value) return
                    e.currentTarget.style.direction = "rtl"
                }}
            />
            <input
                type='password'
                placeholder='گذرواژه'
                className='outline-none px-1.5 bg-transparent border-b border-b-added-slategray text-added-slategray focus:border-b-added-schoolbus focus:text-added-white transition-all duration-300 480:border-b-2 md:border-b-[3px] w-11/12'
                onKeyDown={e => {
                    e.currentTarget.style.direction = "ltr"
                }}
                onBlur={e => {
                    if (e.target.value) return
                    e.currentTarget.style.direction = "rtl"
                }}
            />
            <YButton
                type='submit'
                value={buttonValue}
            />
        </form>
    )
}
export default LoginForm
