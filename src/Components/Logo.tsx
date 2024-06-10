import { Link } from "react-router-dom"
import LogoPic from "../../public/Pics/logo.png"
const Logo = ({ className }: { className?: string }) => {
    return (
        <Link
            to={"/"}
            className={className}
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
