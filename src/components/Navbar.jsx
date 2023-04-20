import { NavLink } from "react-router-dom";
import "../components/Navbar.css"

export default function Navbar() {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active");
    return (
        <nav className="navbar">
            <NavLink className={setActiveClass} to="/">
                Home
            </NavLink>
            {" - "}
            <NavLink className={setActiveClass} to="/pokemones">
                Pokemones
            </NavLink>
        </nav>
    );
}
