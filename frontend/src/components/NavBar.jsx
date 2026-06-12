import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext.jsx";

function NavBar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Anime App</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
                <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
                    {theme === "dark" ? "☀️" : "🌙"}
                </button>
            </div>
        </nav>
    );
}

export default NavBar;