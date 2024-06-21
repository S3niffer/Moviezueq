import { Link } from "react-router-dom"
import _useTextTranslator from "../../../_utils/_useTextTranslator"
import MoviezueqBox from "../../../Components/MoviezueqBox"
import breadCrumbIcon from "/Pics/Breadcrumb.png"

const BreadCrumb = ({ movieId }: { movieId: string | undefined }) => {
    return (
        <div className='container'>
            <MoviezueqBox>
                <div className='flex items-center'>
                    <Link
                        to={"/"}
                        className='hover:text-added-schoolbus transition-colors'
                    >
                        {_useTextTranslator("همه فیلم ها", "All movies")}
                    </Link>
                    <div className='w-10 aspect-square sm:w-12 md:w-14'>
                        <img
                            src={breadCrumbIcon}
                            alt='flash icon'
                        />
                    </div>
                    <Link
                        to={`/movie/${movieId}`}
                        className='text-added-schoolbus'
                        aria-disabled
                    >
                        {_useTextTranslator("فیلم شماره (", "Movie number (")}
                        {movieId}
                        {" )"}
                    </Link>
                </div>
            </MoviezueqBox>
        </div>
    )
}
export default BreadCrumb
