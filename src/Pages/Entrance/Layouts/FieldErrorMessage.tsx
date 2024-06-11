import { FieldError } from "react-hook-form"

const FieldErrorMessage = ({ Field }: { Field: FieldError | undefined }) => {
    if (!Field) return <div className='h-4 480:h-5 sm:h-6 md:h-7 lg:h-8'></div>

    const Message = Field.message

    return (
        <span className='text-xs inline-block 480:text-sm sm:text-base md:text-xl lg:text-2xl text-added-schoolbus'>
            &#9754;&#32;{Message}
        </span>
    )
}
export default FieldErrorMessage
