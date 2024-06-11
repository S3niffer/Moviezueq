import iranFlag from "/Pics/Flags icon/iran.png"
import americaFlag from "/Pics/Flags icon/america.png"
const LanguageSelector = ({ className }: { className?: string }) => {
    return (
        <div className={className + " relative"}>
            <div className='absolute -top-2 left-0 border-2 z-50 border-added-charcoal rounded px-1 text-xs cursor-pointer hover:border-added-slategray bg-added-oxfordblue group flex flex-col transition-all duration-300 480:text-sm sm:text-base md:text-lg md:-top-3 lg:text-2xl'>
                <span>
                    انتخاب🌐<span className='font-EnFont text-[10px] sm:text-xs md:text-sm lg:text-base'>Select</span>
                </span>
                <div className='max-h-0 transition-all duration-500 overflow-hidden ease-in-out group-hover:max-h-28'>
                    <div className='flex items-center justify-between border-b border-added-charcoal hover:border-added-schoolbus sm:pb-1 lg:pb-2 480:border-b-2 md:border-b-4'>
                        فارسی
                        <img
                            src={iranFlag}
                            loading='lazy'
                            alt='iran emoji flag form iOS 17.4'
                            className='w-3 sm:w-5 base:w-6 lg:w-7 aspect-square md:translate-y-[2px]'
                        />
                    </div>
                    <div className='sm:mt-2 flex items-center justify-between border-b border-added-charcoal hover:border-added-schoolbus mb-1 flex-row-reverse font-EnFont text-[10px] sm:text-xs sm:pb-1 md:text-sm lg:text-base 480:border-b-2 md:border-b-4'>
                        English
                        <img
                            src={americaFlag}
                            loading='lazy'
                            alt='america emoji flag form iOS 17.4'
                            className='w-3 sm:w-5 base:w-6 lg:w-7 aspect-square'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LanguageSelector
