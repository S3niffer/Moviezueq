import useLogout from "../../../_utils/useLogout"
import MoviezueqBox from "../../../Components/MoviezueqBox"
import YInputButton from "../../../Components/YInputButton"

const UserInfo = () => {
    const local_User = JSON.parse(localStorage.getItem("User") || "") as RegisterResponse
    const { name, email } = { name: local_User?.name || "", email: local_User?.email || "" }

    const _logout = useLogout()

    return (
        <section className='container'>
            <MoviezueqBox>
                <h4 className='text-center'>شما با این اطلاعات وارد شده اید</h4>
                <div className='flex items-center justify-between'>
                    <div>
                        <div className='flex gap-2 items-center 480:gap-2.5 sm:gap-3 md:gap-3.5 lg:gap-4'>
                            <p className='border-b border-added-schoolbus'>نام :</p>{" "}
                            <span className='text-added-slategray'>{name}</span>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <p className='border-b border-added-schoolbus'>پست الکترونیکی :</p>{" "}
                            <span className='text-added-slategray font-EnFont text-xs 480:text-sm sm:text-base md:text-lg lg:text-2xl'>
                                {email}
                            </span>
                        </div>
                    </div>
                    <div
                        className='text-center relative flipUpward_container'
                        onClick={_logout}
                    >
                        <div className='flipUpward_card bg-added-charcoal fill-added-white rounded hover:bg-added-schoolbus hover:fill-added-charcoal group transition-all duration-300 cursor-pointer'>
                            <div className='flipUpward_card-front'>
                                <YInputButton value={"خروج"} />
                            </div>
                            <button className='flipUpward_card-back relative'>
                                <YInputButton value={"خروج"} />
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    data-name='Layer 1'
                                    viewBox='0 0 100 125'
                                    x='0px'
                                    y='0px'
                                    className='w-5 fill-added-white group-hover:fill-added-charcoal absolute top-[15px] -translate-y-1/2 left-1/2 -translate-x-[55%] 480:w-6 480:top-[18px] sm:w-7 sm:top-[22px] md:top-6 md:w-9 lg:top-[30px] lg:w-11'
                                >
                                    <path d='M81,66V34a15,15,0,0,0-30,0v3h6V34a9,9,0,0,1,18,0V66a9,9,0,0,1-18,0V63H51v3a15,15,0,0,0,30,0Z' />
                                    <path d='M34,66.24,38.24,62l-9-9H57V47H29.24l9-9L34,33.76,19.88,47.88a3,3,0,0,0,0,4.24Z' />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </MoviezueqBox>
        </section>
    )
}
export default UserInfo
