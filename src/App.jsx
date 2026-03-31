/**
 * @fileoverview Root application component
 * @description Defines the main layout and routing structure.
 * All sections of the portfolio are composed here.
 * @module App
 */

import { useThemeContext } from './store/ThemeContext'

/**
 * Root component — entry point of the UI tree
 * @returns {JSX.Element}
 */
const App = () => {
  const { isDark, toggleTheme } = useThemeContext()

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)', color: 'var(--text)' }}>
      {/* Temporary theme toggle — will be replaced by Navbar */}
      <button
        onClick={toggleTheme}
        style={{ padding: '10px 20px', margin: '20px', background: 'var(--indigo)', color: '#fff', borderRadius: '8px', border: 'none', cursor: 'pointer' }}
      >
        {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
      <h1 style={{ padding: '20px', fontFamily: 'Inter' }}>
        Jorge Israel López — Portfolio
      </h1>
    </div>
  )
}

export default App