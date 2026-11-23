import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/fonts'
import './styles/global.scss'
import App from './App.tsx'
import { BreakpointProvider } from './contexts/breakpoint'
import { ThemeProvider } from './contexts/theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <BreakpointProvider>
        <App />
      </BreakpointProvider>
    </ThemeProvider>
  </StrictMode>,
)
