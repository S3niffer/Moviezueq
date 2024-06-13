import { ReactNode } from "react"

const MoviezueqBox = ({ children }: { children: ReactNode }) => {
    return (
        <div className='sticky z-10 bg-added-oxfordblue rounded after:absolute after:block after:inset-0 after:top-0 after:bottom-0 after:left-0 after:right-0 after:rounded after:bg-added-schoolbus after:-z-[2] after:translate-x-[var(--yellow-BG)] after:translate-y-[var(--yellow-BG)] before:absolute before:block before:inset-0 before:top-0 before:right-0 before:bottom-0 before:left-0 before:rounded before:bg-added-white before:-z-[1] before:translate-x-[var(--white-BG)] before:translate-y-[var(--white-BG)]'>
            <div className='bg-added-oxfordblue rounded p-1.5 480:p-2 sm:p-2.5 md:p-3 lg:p-3.5'>{children}</div>
        </div>
    )
}
export default MoviezueqBox
