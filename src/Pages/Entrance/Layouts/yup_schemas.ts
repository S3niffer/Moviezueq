import * as yup from "yup"

const Regex_email = /^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

export const Register_Schema = yup.object().shape({
    name: yup.string().required("name_req"),
    password: yup.string().required("password_req").min(4, "password_min"),
    email: yup.string().required("email_req").matches(Regex_email, "email_invalid"),
})

export const Login_Schema = Register_Schema.omit(["name"])
