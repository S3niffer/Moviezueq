import axios, { Method } from "axios"

const getLayoutDataAxiosInstance = axios.create({
    baseURL: "https://moviesapi.ir/api/v1",
})

const useLayoutDataApi = async <T = any>(method: Method, url: string, params?: any, data?: any): Promise<T> => {
    const { data: response } = await getLayoutDataAxiosInstance({ method, url, params, data })

    return response as T
}

export default useLayoutDataApi
