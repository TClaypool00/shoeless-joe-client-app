function NavLink(props) {
    return (
        <li className="nav-item">
            <a className="nav-link text-dark" href={props.to}>{props.text}</a>
        </li>
    )
}

export default NavLink