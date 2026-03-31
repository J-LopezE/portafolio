/**
 * @fileoverview Global theme context provider
 * @description Provides dark/light theme state to the entire application
 * using React Context API. Wraps the app so any component can access
 * theme state without prop drilling.
 * @module store/ThemeContext
 */

import { createContext, useContext } from 'react'
import useTheme from '../hooks/useTheme'

/**
 * @typedef {Object} ThemeContextValue
 * @property {boolean} isDark - Whether dark mode is active
 * @property {function} toggleTheme - Toggles between dark and light mode
 */

/** @type {React.Context<ThemeContextValue>} */
const ThemeContext = createContext(null)

/**
 * Theme provider component — wraps the app to provide theme state globally
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components
 * @returns {JSX.Element}
 *
 * @example
 * // In main.jsx
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 */
export const ThemeProvider = ({ children }) => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

/**
 * Custom hook to consume theme context
 * @returns {ThemeContextValue}
 * @throws {Error} If used outside of ThemeProvider
 *
 * @example
 * // In any component
 * const { isDark, toggleTheme } = useThemeContext()
 */
export const useThemeContext = () => {
  const context = useContext(ThemeContext)

  // Guard clause — prevents silent bugs if context is missing
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }

  return context
}

export default ThemeContext