import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useThemeContext } from "../../store/ThemeContext";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { isDark, toggleTheme } = useThemeContext();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__logo">JL</div>
      <div className="navbar__links">
        {LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="navbar__link"
            onClick={(e) => goTo(e, link.href)}
          >
            {link.label}
          </a>
        ))}
      </div>
      <div className="navbar__actions">
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="navbar__theme-btn"
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <button className="navbar__cta" onClick={(e) => goTo(e, "#contact")}>
          Hire me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
