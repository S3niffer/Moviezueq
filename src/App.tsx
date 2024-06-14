import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import RoutesHandler from "./Router"

function App() {
    const MoviezueqClient = new QueryClient()
    return <QueryClientProvider client={MoviezueqClient}>{<RoutesHandler />}</QueryClientProvider>
}

export default App
