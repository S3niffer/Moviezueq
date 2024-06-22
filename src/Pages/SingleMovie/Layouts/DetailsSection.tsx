import _formatDuration from "../../../_utils/_formatDuration"
import _subStringHandler from "../../../_utils/_subStringHandler"
import _TranslateGenreNameToPersian from "../../../_utils/_TranslateGenreNameToPersian"
import _useTextTranslator from "../../../_utils/_useTextTranslator"

const DetailsSection = ({ actors, country, director, genres, runtime, title, type, year }: DetailsSectionI) => {
    return (
        <div className='flex flex-col gap-1 480:gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3 rtl:mt-3 rtl:480:mt-4 rtl:sm:mt-6 rtl:md:mt-0'>
            <div className='flex justify-between md:flex-col'>
                <div className='md:mb-1'>
                    <span className='border-b border-b-added-schoolbus'>{_useTextTranslator("عنوان", "Title")}: </span>
                </div>
                <span className='flex-1 text-center font-EnFont ltr:text-sm ltr:480:text-base ltr:sm:text-lg ltr:md:text-2xl ltr:lg:text-3xl'>
                    {title}
                </span>
            </div>
            <div className='flex flex-wrap gap-y-1.5'>
                <div className='w-1/2 overflow-hidden flex items-center'>
                    <span className='border-b border-b-added-schoolbus'>{_useTextTranslator("سال", "Year")}</span>:
                    <span className='rtl:mr-2 ltr:ml-2'>{year}</span>
                </div>
                <div className='w-1/2 overflow-hidden flex items-center'>
                    <span className='border-b border-b-added-schoolbus'>{_useTextTranslator("زمان", "Duration")}</span>:
                    <span className='rtl:mr-2 ltr:ml-2'>{_formatDuration(runtime)}</span>
                </div>
                <div className='w-1/2 overflow-hidden flex items-center'>
                    <span className='border-b border-b-added-schoolbus'>{_useTextTranslator("محصول", "Origin")}</span>:
                    <span className='rtl:mr-2 ltr:ml-2 line-clamp-1'>{country}</span>
                </div>
                <div className='w-1/2 overflow-hidden flex items-center'>
                    <span className='border-b border-b-added-schoolbus'>{_useTextTranslator("دسته", "Type")}</span>:
                    <span className='rtl:mr-2 ltr:ml-2'>{type}</span>
                </div>
                <div className='w-1/2 overflow-hidden flex items-center '>
                    <span className='border-b border-b-added-schoolbus'>{_useTextTranslator("ژانر", "Genre")}</span>:
                    <span className='rtl:mr-2 ltr:ml-2 line-clamp-1'>
                        {genres.map((genre, index) => (
                            <span key={genre}>
                                {_TranslateGenreNameToPersian(genre)} {index !== genres.length - 1 ? "," : null}
                            </span>
                        ))}
                    </span>
                </div>
                <div className='w-1/2 overflow-hidden flex items-center'>
                    <span className='border-b border-b-added-schoolbus'>{_useTextTranslator("کارگردان", "Director")}</span>:
                    <span className='rtl:mr-2 ltr:ml-2 line-clamp-1'>{_subStringHandler(director, 20)}</span>
                </div>
                <div className='flex items-center'>
                    <span className='border-b border-b-added-schoolbus'>{_useTextTranslator("بازیگران", "Actors")}</span>:
                    <span className='rtl:mr-2 ltr:ml-2 line-clamp-1'>{actors}</span>
                </div>
            </div>
        </div>
    )
}
export default DetailsSection
