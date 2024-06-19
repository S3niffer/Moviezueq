import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import RoutesHandler from "./Router"
import Popup from "./Components/Layouts/Popup"

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
        </QueryClientProvider>
    )
}

export default App
