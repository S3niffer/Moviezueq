import Logo from "../Logo"
import LanguageSelector from "./LanguageSelector"

const Navbar = () => {
    return (
        <div className='bg-added-oxfordblue h-navBarHeight'>
            <nav className='container py-1 flex items-center justify-between 480:py-1.5 sm:py-2.5 h-full '>
                <div className='w-1/3'>خوش آمدید</div>
                <Logo className='w-1/4 text-center' />
                <LanguageSelector className='w-1/3 text-end' />
            </nav>
        </div>
    )
}
export default Navbar
