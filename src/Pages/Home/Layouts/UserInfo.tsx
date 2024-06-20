import MoviezueqBox from "../../../Components/MoviezueqBox"
import useAuthentication from "../../../Lib/zustand/authentication"
import LogoutButton from "./LogoutButton"

const UserInfo = () => {
    const { name, email } = useAuthentication(store => store.user) as RegisterResponse

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
                    <LogoutButton />
                </div>
            </MoviezueqBox>
        </section>
    )
}
export default UserInfo
