import { Link } from "react-router-dom"
import MoviezueqBox from "../../../Components/MoviezueqBox"

const BreadCrumb = ({ movieId }: { movieId: string | undefined }) => {
    return (
        <div className='container'>
            <MoviezueqBox>
                <Link
                    to={"/"}
                    className='hover:text-added-schoolbus transition-colors'
                >
                    همه فیلم ها
                </Link>
                {" > "}
                <Link
                    to={`/movie/${movieId}`}
                    className='text-added-schoolbus'
                    aria-disabled
                >
                    فیلم شماره {movieId}
                </Link>
            </MoviezueqBox>
        </div>
    )
}
export default BreadCrumb
