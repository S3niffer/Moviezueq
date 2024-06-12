import { Link } from "react-router-dom"
import LogoPic from "/Pics/logo.png"
const Logo = ({ className }: { className?: string }) => {
    return (
        <Link
            to={"/"}
            className={className + ' hover:scale-110 transition-transform duration-500'}
        >
            <img
                src={LogoPic}
                alt='website logo'
                className='w-full'
            />
        </Link>
    )
}
export default Logo
