import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("authToken")
  );

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("authToken"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2 className="logo">
          <Link to="/" className="logo-link">CureMap</Link>
        </h2>
      </div>

      <ul className="nav-links">
        {/* Always visible */}
        <li><Link to="/" className="nav-item">Home</Link></li>
        <li><Link to="/about" className="nav-item">About</Link></li>

        {!isLoggedIn && (
          <>
            <li><Link to="/login" className="nav-item">Login</Link></li>
            <li><Link to="/register" className="nav-item">Register</Link></li>
          </>
        )}

        {isLoggedIn && (
          <>
            <li><Link to="/symptoms" className="nav-item">Check Symptoms</Link></li>
            <li><Link to="/dashboard" className="nav-item">Dashboard</Link></li>
            <li><Link to="/profile" className="nav-item">Profile</Link></li>
          </>
        )}
      </ul>

      <div className="nav-right">
        <button
          className="theme-toggle"
          onClick={() =>
            setTheme(prev => (prev === "light" ? "dark" : "light"))
          }
        >
          {theme === "light" ? "🌙" : "🔆"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
