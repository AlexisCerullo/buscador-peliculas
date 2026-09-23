import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <NavLink className="flex items-left size-12" to="/">
                <img src="../logo.png" alt="Logo del Sitio" />
            </NavLink>
        </nav>
    )
}

export default NavBar;