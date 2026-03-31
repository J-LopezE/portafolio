/**
 * @fileoverview Custom hook for dark/light theme management
 * @module hooks/useTheme
 */

import { useState, useEffect } from 'react'

/**
 * Manages dark/light theme with localStorage persistence
 * @returns {{ isDark: boolean, toggleTheme: function }}
 */
const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    return saved ? saved === 'dark' : true
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.remove('light')
    } else {
      root.classList.add('light')
    }
    localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light')
  }, [isDark])

  const toggleTheme = () => setIsDark(prev => !prev)

  return { isDark, toggleTheme }
}

export default useTheme