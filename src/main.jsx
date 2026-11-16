import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { MotionConfig } from 'motion/react'
import App from './App.jsx'
import { IntroProvider } from './motion/intro.jsx'
import './styles/tokens.css'
import './styles/base.css'
import './styles/components.css'
import './styles/pages.css'
import './styles/effects.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <MotionConfig reducedMotion="user">
        <IntroProvider>
          <App />
        </IntroProvider>
      </MotionConfig>
    </BrowserRouter>
  </StrictMode>,
)
