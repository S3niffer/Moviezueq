import { RouteObject, useRoutes } from "react-router-dom"
import Entrance from "./Pages/Entrance/Entrance"
import Home from "./Pages/Home/Home"
import PrivateRoute from "./Components/PrivateRoute"

const Routes: RouteObject[] = [
    { path: "/entrance", element: <Entrance /> },
    {
        path: "/",
        element: (
            <PrivateRoute>
                <Home />
            </PrivateRoute>
        ),
    },
]

export default () => useRoutes(Routes)
