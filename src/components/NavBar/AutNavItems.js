import NavLink from "./NavLink"
import { isLoggedIn } from "../../Auth/AuthService.ts";

function AuthNavItems() {
    if (isLoggedIn) {
        return (
            <>
                <NavLink to="/shoes/add" text="Donate Your Shoes(s)" />
            </>
        )
    } else {
        return (
            <>
                <NavLink to="/account/register" text="Register" />
            </>
        )
    }
}

export default AuthNavItems;