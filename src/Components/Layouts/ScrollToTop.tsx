import arrowUp from "/Pics/arrowUp.png"

const ScrollToTop = () => {
    const _ScrollHandler = () => {
        window.scrollTo({
            behavior: "smooth",
            top: 0,
        })
    }

    return (
        <>
            <div className='mb-14'></div>
            <div
                className='cursor-pointer sticky top-[calc(99vh-var(--navbar-height))] bg-added-schoolbus hover:scale-105 sm:hover:scale-110 transition-all p-1 rounded-full aspect-square w-6 480:w-8 sm:w-10 md:w-12 lg:w-14 flex items-center justify-center'
                onClick={_ScrollHandler}
            >
                <img
                    src={arrowUp}
                    alt='arrow to the up'
                />
            </div>
        </>
    )
}
export default ScrollToTop
