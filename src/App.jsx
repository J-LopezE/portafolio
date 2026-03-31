/**
 * @fileoverview Root application component
 * @description Defines the main layout and routing structure.
 * All sections of the portfolio are composed here.
 * @module App
 */

import { useThemeContext } from './store/ThemeContext'
import Navbar from './components/layout/Navbar'

/**
 * Root component — entry point of the UI tree
 * @returns {JSX.Element}
 */
const App = () => {
  const { isDark, toggleTheme } = useThemeContext()

  return (
   <div style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)' }}>
      <Navbar />
      {/* Sections will be added here */}
      <main style={{ paddingTop: '80px', padding: '100px 36px 40px' }}>
        <h1 style={{ fontSize: '48px', fontWeight: 900 }}>
          Jorge Israel López
        </h1>
      </main>
    </div>
  )
}

export default App