import { useState } from "react";

const LINKS = [
  { href: "#/", label: "Home", route: "/" },
  { href: "#/planner", label: "Planner", route: "/planner" },
  { href: "#/dashboard", label: "Dashboard", route: "/dashboard" },
];

export default function Navigation({ currentRoute }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="container navbar navbar-expand-md" aria-label="Main navigation">
        <a className="navbar-brand brand-mark" href="#/" aria-label="StudyPlanner home">
          <span className="brand-icon" aria-hidden="true">S</span>
          StudyPlanner
        </a>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="main-navigation"
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse${menuOpen ? " show" : ""}`} id="main-navigation">
          <ul className="navbar-nav ms-auto">
            {LINKS.map((link) => (
              <li className="nav-item" key={link.route}>
                <a
                  className={`nav-link ${currentRoute === link.route ? "active" : ""}`}
                  href={link.href}
                  aria-current={currentRoute === link.route ? "page" : undefined}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
