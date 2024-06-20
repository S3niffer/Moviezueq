import { create } from "zustand"

const useAuthentication = create<authenticationStore>(set => {
    const _funcs: Pick<authenticationStore, "setUser" | "logout"> = {
        logout: () => set(prv => ({ ...prv, status: false })),
        setUser: user => set(prv => ({ ...prv, status: true, user })),
    }

    const localUser = localStorage.getItem("User")
    const user = localUser && (JSON.parse(localUser) as RegisterResponse)
    if (user && "name" in user) return { status: true, user, ..._funcs }

    return { status: false, user: {}, ..._funcs }
})

export default useAuthentication
