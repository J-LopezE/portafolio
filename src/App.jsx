/**
 * @fileoverview Root application component
 * @description Defines the main layout and routing structure.
 * All sections of the portfolio are composed here.
 * @module App
 */

import { useThemeContext } from "./store/ThemeContext";
import Navbar from "./components/layout/Navbar";
import Hero from "./sections/Hero";

/**
 * Root component — entry point of the UI tree
 * @returns {JSX.Element}
 */
const App = () => {
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        color: "var(--text)",
      }}
    >
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;
