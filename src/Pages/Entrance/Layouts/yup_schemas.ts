import * as yup from "yup"

const Regex_email = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

export const Register_Schema = yup.object().shape({
    name: yup.string().required("وارد کردن نام اجباری می باشد."),
    password: yup.string().required("وارد کردن گذرواژه اجبای میباشد.").min(4, "گذرواژه باید حداقل دارای 4 کارکتر باشد."),
    email: yup
        .string()
        .required("وراد کردن پست الکترونیکی اجباری میباشد.")
        .matches(Regex_email, "پست الکترونیکی وارد شده معتبر نمی باشد."),
})

export const Login_Schema = Register_Schema.omit(["name"])
