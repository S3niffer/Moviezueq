import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Popup from "./Components/Layouts/Popup"
import RoutesHandler from "./Router"
import RootAttributeChanger from "./_utils/RootAttributeChanger"

function App() {
    const MoviezueqClient = new QueryClient({
        defaultOptions: {
            queries: {
                gcTime: Infinity,
                staleTime: Infinity,
                refetchInterval: Infinity,
                refetchIntervalInBackground: false,
                refetchOnReconnect: false,
                refetchOnWindowFocus: false,
            },
        },
    })

    return (
        <QueryClientProvider client={MoviezueqClient}>
            {<RoutesHandler />}
            <Popup />
            <RootAttributeChanger />
        </QueryClientProvider>
    )
}

export default App
