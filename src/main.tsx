import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import MovingDot from './MovingDot.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

createRoot(document.getElementById('moving-dot')!).render(
  <StrictMode>
    <MovingDot />
  </StrictMode>,
)
