import _useTextTranslator from "../../_utils/_useTextTranslator"
import Navbar from "../../Components/Layouts/Navbar"
import ScrollToTop from "../../Components/Layouts/ScrollToTop"
import MoviezueqBox from "../../Components/MoviezueqBox"
import GenresContainer from "./Layouts/GenresContainer"
import MoviesContainer from "./Layouts/MoviesContainer"
import UserInfo from "./Layouts/UserInfo"

const Home = () => {
    return (
        <div className='rtl:rtl pt-[calc(var(--navbar-height)*1.5)]'>
            <Navbar />
            <UserInfo />
            <main className='mt-[var(--navbar-height)] container pb-[var(--yellow-BG)]'>
                <MoviezueqBox>
                    <div className='flex gap-2.5 480:gap-3.5 sm:gap-4 md:gap-5 lg:gap-6 rounded p-1.5'>
                        <div className='flex-[1.5] sm:flex-[1.35]'>
                            <h4 className=''>{_useTextTranslator("ژانر ها", "Genres")}</h4>
                        </div>
                        <div className='flex-[4]'>
                            <h4 className=''>{_useTextTranslator("فیلم ها", "Movies")}</h4>
                        </div>
                    </div>
                </MoviezueqBox>
                <div className='flex gap-2.5 480:gap-3.5 sm:gap-4 md:gap-5 lg:gap-6 rounded mt-2.5 480:mt-3.5 sm:mt-4 md:mt-5 lg:mt-6'>
                    <div className='flex-[1.5] sm:flex-[1.35] relative'>
                        <MoviezueqBox>
                            <GenresContainer />
                        </MoviezueqBox>
                        <ScrollToTop />
                    </div>
                    <div className='flex-[4]'>
                        <MoviezueqBox>
                            <MoviesContainer />
                        </MoviezueqBox>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Home
