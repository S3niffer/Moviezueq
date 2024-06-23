import axios from "axios"

const byPassCorsAxiosInstance = axios.create({
    baseURL: "/auth",
})

export const useAuthGetToken = async <T extends LoginRequest>(method: T["method"], url: T["url"], data: T["data"]) => {
    const { data: response } = await byPassCorsAxiosInstance({ method, url, data })

    return response as T["response"]
}

export const useAuthRegisterUser = async <T extends RegisterRequest>(method: T["method"], url: T["url"], data: T["data"]) => {
    const headers = { "Content-Type": "application/json" }
    const { data: response } = await byPassCorsAxiosInstance({ method, url, data, headers })

    return response as T["response"]
}

export const useAuthGetUserWithToken = async <T extends GetUserWithTokenRequest>(
    method: T["method"],
    url: T["url"],
    token: T["token"]
) => {
    const { data: response } = await byPassCorsAxiosInstance({
        method,
        url,
        headers: {
            authorization: `Bearer ${token}`,
            accept: "application/json",
        },
    })

    return response as T["response"]
}
