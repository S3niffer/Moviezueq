import { RouteObject, useRoutes } from "react-router-dom"
import Entrance from "./Pages/Entrance"

const Routes: RouteObject[] = [
    { path: "/sign-up", element: <Entrance /> },
    { path: "/sign-in", element: <Entrance /> },
    { path: "/", element: <div>HomePage</div> },
]

export default () => useRoutes(Routes)
