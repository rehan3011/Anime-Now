import { Link, NavLink } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext.jsx";
import "../css/NavBar.css";

function NavBar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Anime App</Link>
            </div>
            <div className="navbar-links">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/favorites" className="nav-link">Favorites</NavLink>
                <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                    {theme === "dark" ? "☀️" : "🌙"}
                </button>
            </div>
        </nav>
    );
}

export default NavBar;