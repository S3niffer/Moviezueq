import { RouteObject, useRoutes } from "react-router-dom"
import Entrance from "./Pages/Entrance/Entrance"
import Home from "./Pages/Home/Home"

const Routes: RouteObject[] = [
    { path: "/entrance", element: <Entrance /> },
    { path: "/", element: <Home /> },
]

export default () => useRoutes(Routes)
