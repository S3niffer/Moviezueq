import { ComponentProps } from "react"

const YButton = (props: Omit<ComponentProps<"input">, "className">) => {
    return (
        <input
            className='rounded bg-added-charcoal w-14 hover:bg-added-schoolbus hover:text-added-charcoal transition-all duration-300 480:w-16 sm:w-20 sm:py-0.5 md:w-28 lg:w-32 lg:py-1.5 cursor-pointer'
            {...props}
        />
    )
}
export default YButton
