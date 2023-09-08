import { Navigate, Outlet } from "react-router-dom"
import { isLoggedIn } from "../Auth/AuthService.ts"

const PublicRoute = () => {
    if (isLoggedIn()) {
        return <Navigate to="/" />
    }

    return <Outlet />
}

export default PublicRoute;