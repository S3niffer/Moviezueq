import Logo from "../Logo"
import LanguageSelector from "./LanguageSelector"
import SearchMovieInput from "./SearchMovieInput"

const Navbar = () => {
    const loaclUser = localStorage.getItem("User")
    const User = loaclUser ? (JSON.parse(loaclUser) as RegisterResponse) : false
    const isLoggedIn = "name" in (User || {})

    if (isLoggedIn) {
        return (
            <div className='bg-added-oxfordblue h-navBarHeight fixed left-0 right-0 top-0 z-30 shadow shadow-added-charcoal'>
                <nav className='container py-1 flex items-center justify-between 480:py-1.5 sm:py-2.5 h-full '>
                    <Logo className='w-1/5' />
                    <div className='w-3/6 pr-1'>
                        <SearchMovieInput />
                    </div>
                    <LanguageSelector className='w-1/4 480:w-1/5 text-end mb-1 480:mb-1.5 sm:mb-2' />
                </nav>
            </div>
        )
    } else {
        return (
            <div className='bg-added-oxfordblue h-navBarHeight fixed left-0 right-0 top-0 z-50 shadow shadow-added-charcoal'>
                <nav className='container py-1 flex items-center justify-between 480:py-1.5 sm:py-2.5 h-full '>
                    <div className='w-1/3'>خوش آمدید</div>
                    <Logo className='w-1/4 text-center' />
                    <LanguageSelector className='w-1/3 text-end mb-1 480:mb-1.5 sm:mb-2' />
                </nav>
            </div>
        )
    }
}
export default Navbar
