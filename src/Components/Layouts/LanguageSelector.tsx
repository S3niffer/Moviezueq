import iranFlag from "../../../public/Pics/Flags icon/iran.png"
import americaFlag from "../../../public/Pics/Flags icon/america.png"
const LanguageSelector = ({ className }: { className?: string }) => {
    return (
        <div className={className + " relative"}>
            <div className='absolute -top-2 left-0 border-2 z-50 border-added-charcoal rounded px-1 text-xs cursor-pointer hover:border-added-slategray bg-added-oxfordblue group flex flex-col transition-all duration-300'>
                <span>
                    انتخاب🌐<span className='font-EnFont text-[10px]'>Select</span>
                </span>
                <div className='max-h-0 transition-all duration-500 overflow-hidden ease-in-out group-hover:max-h-20'>
                    <div className='flex items-center justify-between border-b border-added-charcoal hover:border-added-schoolbus'>
                        فارسی
                        <img
                            src={iranFlag}
                            loading='lazy'
                            alt='iran emoji flag form iOS 17.4'
                            className='w-3 aspect-square'
                        />
                    </div>
                    <div className='flex items-center justify-between border-b border-added-charcoal hover:border-added-schoolbus mb-1 flex-row-reverse'>
                        English
                        <img
                            src={americaFlag}
                            loading='lazy'
                            alt='america emoji flag form iOS 17.4'
                            className='w-3 aspect-square'
                        ></img>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LanguageSelector
