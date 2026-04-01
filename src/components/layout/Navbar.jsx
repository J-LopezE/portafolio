import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useThemeContext } from "../../store/ThemeContext";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { isDark, toggleTheme } = useThemeContext();
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);

  const isEN = i18n.language === "en";

  const toggleLang = () => {
    i18n.changeLanguage(isEN ? "es" : "en");
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const LINKS = [
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.projects"), href: "#projects" },
    { label: t("nav.aiAgent"), href: "#ai" },
    { label: t("nav.github"), href: "#github" },
    { label: t("nav.contact"), href: "#contact" },
  ];

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
          onClick={toggleLang}
          aria-label="Toggle language"
          className="navbar__lang-btn"
        >
          {isEN ? "ES" : "EN"}
        </button>
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="navbar__theme-btn"
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        <button className="navbar__cta" onClick={(e) => goTo(e, "#contact")}>
          {t("nav.hire")}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
