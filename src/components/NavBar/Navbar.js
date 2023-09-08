import AuthNavItems from "./AutNavItems"

function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
            <div className="container">
                <a href="/" className="navbar-brand">ShoelessJoe</a>

                <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul className="navbar-nav flex-grow-1">
                        <AuthNavItems />
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar