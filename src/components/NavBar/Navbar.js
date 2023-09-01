import NavLink from "./NavLink"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div className="container">
                <a href="/" className="navbar-brand">ShoelessJoe</a>
            </div>

            <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                <ul className="navbar-nav flex-grow-1">
                    <NavLink to="/" text="ShoelessJoe" />
                    <NavLink to="/account/register" text="Register" />
                    <NavLink to="/account/login" text="Login" />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar