import _formatDuration from "../../../_utils/_formatDuration"
import _subStringHandler from "../../../_utils/_subStringHandler"
import _TranslateGenreNameToPersian from "../../../_utils/_TranslateGenreNameToPersian"

const DetailsSection = ({ actors, country, director, genres, runtime, title, type, year }: DetailsSectionI) => {
    return (
        <div className='flex flex-col gap-1 480:gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3'>
            <div className='flex justify-between md:flex-col'>
                عنوان: <span className='flex-1 text-center font-EnFont'>{title}</span>
            </div>
            <div className='flex flex-wrap gap-y-1.5'>
                <div className='w-1/2 overflow-hidden flex items-center'>
                    <span className='border-b border-b-added-schoolbus'>سال</span>:<span className='mr-2'>{year}</span>
                </div>
                <div className='w-1/2 overflow-hidden flex items-center'>
                    <span className='border-b border-b-added-schoolbus'>زمان</span>:
                    <span className='mr-2'>{_formatDuration(runtime)}</span>
                </div>
                <div className='w-1/2 overflow-hidden flex items-center'>
                    <span className='border-b border-b-added-schoolbus'>محصول</span>:
                    <span className='mr-2 line-clamp-1'>{country}</span>
                </div>
                <div className='w-1/2 overflow-hidden flex items-center'>
                    <span className='border-b border-b-added-schoolbus'>دسته</span>:<span className='mr-2'>{type}</span>
                </div>
                <div className='w-1/2 overflow-hidden flex items-center '>
                    <span className='border-b border-b-added-schoolbus'>ژانر</span>:
                    <span className='mr-2 line-clamp-1'>
                        {genres.map((genre, index) => (
                            <span key={genre}>
                                {_TranslateGenreNameToPersian(genre)} {index !== genres.length - 1 ? "," : null}
                            </span>
                        ))}
                    </span>
                </div>
                <div className='w-1/2 overflow-hidden flex items-center'>
                    <span className='border-b border-b-added-schoolbus'>کارگردان</span>:
                    <span className='mr-2 line-clamp-1'>{_subStringHandler(director, 20)}</span>
                </div>
                <div className='flex items-center'>
                    <span className='border-b border-b-added-schoolbus'>بازیگران</span>:
                    <span className='mr-2 line-clamp-1'>{actors}</span>
                </div>
            </div>
        </div>
    )
}
export default DetailsSection
