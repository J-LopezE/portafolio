/**
 * @fileoverview Root application component
 * @description Defines the main layout and routing structure.
 * All sections of the portfolio are composed here.
 * @module App
 */

import { useEffect } from "react";
import { useThemeContext } from "./store/ThemeContext";
import Navbar from "./components/layout/Navbar";
import ParticlesBackground from "./components/layout/ParticlesBackground";
import AuroraEffect from "./components/layout/AuroraEffect";
import CodeSymbols from "./components/layout/CodeSymbols";
import Hero from "./sections/Hero";
import About from "./sections/About";
import useReveal from "./hooks/useReveal";

/**
 * Root component — entry point of the UI tree
 * @returns {JSX.Element}
 */
const App = () => {
  const { isDark, toggleTheme } = useThemeContext();
  useReveal();
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <ParticlesBackground />
      <AuroraEffect />
      <CodeSymbols />
      <Navbar />
      <main>
        <Hero />
        <hr className="sep" />
        <About />
      </main>
    </div>
  );
};

export default App;
