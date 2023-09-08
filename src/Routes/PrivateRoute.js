import { Navigate, Outlet } from "react-router-dom"
import { isLoggedIn } from "../Auth/AuthService.ts"

const PrivateRotue = () => {
    if (!isLoggedIn()) {
        return <Navigate to="/account/register" />
    }

    return <Outlet />
}

export default PrivateRotue;