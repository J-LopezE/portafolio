/**
 * @fileoverview Application entry point
 * @description Renders the root React component into the DOM.
 * Wraps the app with global providers.
 * @module main
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './store/ThemeContext'
import App from './App.jsx'
import './styles/global.css'

/**
 * Mount the React app into the #root DOM element.
 * StrictMode enables additional runtime warnings in development.
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)