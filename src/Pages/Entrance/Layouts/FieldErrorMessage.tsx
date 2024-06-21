import { FieldError } from "react-hook-form"
import _useTextTranslator from "../../../_utils/_useTextTranslator"

const FieldErrorMessage = ({ Field }: { Field: FieldError | undefined }) => {
    const erro_messages = {
        name_req: _useTextTranslator("وارد کردن نام اجباری می باشد.", "name is required."),
        password_req: _useTextTranslator("وارد کردن گذرواژه اجبای میباشد.", "password is required."),
        password_min: _useTextTranslator("گذرواژه باید حداقل دارای 4 کارکتر باشد.", "password must contain 4 character."),
        email_req: _useTextTranslator("وراد کردن پست الکترونیکی اجباری میباشد.", "email is required."),
        email_invalid: _useTextTranslator("پست الکترونیکی وارد شده معتبر نمی باشد.", "invalid email"),
    }

    if (!Field) return <div className='h-4 480:h-5 sm:h-6 md:h-7 lg:h-8'></div>

    const Message = erro_messages[Field.message as keyof typeof erro_messages]

    return (
        <span className='text-xs inline-block 480:text-sm sm:text-base md:text-xl lg:text-2xl text-added-schoolbus'>
            {Message}
        </span>
    )
}
export default FieldErrorMessage
