import _formatDuration from "../../../_utils/_formatDuration"
import _subStringHandler from "../../../_utils/_subStringHandler"
import _TranslateGenreNameToPersian from "../../../_utils/_TranslateGenreNameToPersian"
import _useTextTranslator from "../../../_utils/_useTextTranslator"

const DetailsSection = ({ actors, country, director, genres, runtime, title, type, year }: DetailsSectionI) => {
    return (
        <div className='flex flex-col gap-1 480:gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3'>
            <div className='flex justify-between md:flex-col'>
                {_useTextTranslator("عنوان", "title")}: <span className='flex-1 text-center font-EnFont'>{title}</span>
            </div>
            <div className='flex flex-wrap gap-y-1.5'>
                <div className='w-1/2 overflow-hidden flex items-center'>
                    <span className='border-b border-b-added-schoolbus'>{_useTextTranslator("سال", "year")}</span>:
                    <span className='mr-2'>{year}</span>
                </div>
                <div className='w-1/2 overflow-hidden flex items-center'>
                    <span className='border-b border-b-added-schoolbus'>{_useTextTranslator("زمان", "duration")}</span>:
                    <span className='mr-2'>{_formatDuration(runtime)}</span>
                </div>
                <div className='w-1/2 overflow-hidden flex items-center'>
                    <span className='border-b border-b-added-schoolbus'>{_useTextTranslator("محصول", "origin")}</span>:
                    <span className='mr-2 line-clamp-1'>{country}</span>
                </div>
                <div className='w-1/2 overflow-hidden flex items-center'>
                    <span className='border-b border-b-added-schoolbus'>{_useTextTranslator("دسته", "type")}</span>:
                    <span className='mr-2'>{type}</span>
                </div>
                <div className='w-1/2 overflow-hidden flex items-center '>
                    <span className='border-b border-b-added-schoolbus'>{_useTextTranslator("ژانر", "genre")}</span>:
                    <span className='mr-2 line-clamp-1'>
                        {genres.map((genre, index) => (
                            <span key={genre}>
                                {_TranslateGenreNameToPersian(genre)} {index !== genres.length - 1 ? "," : null}
                            </span>
                        ))}
                    </span>
                </div>
                <div className='w-1/2 overflow-hidden flex items-center'>
                    <span className='border-b border-b-added-schoolbus'>{_useTextTranslator("کارگردان", "director")}</span>:
                    <span className='mr-2 line-clamp-1'>{_subStringHandler(director, 20)}</span>
                </div>
                <div className='flex items-center'>
                    <span className='border-b border-b-added-schoolbus'>{_useTextTranslator("بازیگران", "actors")}</span>:
                    <span className='mr-2 line-clamp-1'>{actors}</span>
                </div>
            </div>
        </div>
    )
}
export default DetailsSection
