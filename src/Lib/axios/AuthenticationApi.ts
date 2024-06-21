import axios, { Method } from "axios"

const byPassCorsAxiosInstance = axios.create({
    baseURL: "http://localhost:3000/api/moviesapi",
    headers: {
        "Content-Type": "application/json",
    },
})

const useAuthenticationApi = async <T = any>(method: Method, url: string, data?: any): Promise<T> => {
    const { data: response } = await byPassCorsAxiosInstance({
        method,
        url,
        data,
    })

    return response as T
}

export default useAuthenticationApi
