import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './index.css'
import App from './App.jsx'

gsap.registerPlugin(ScrollTrigger)

// Global GSAP config for maximum smoothness
gsap.config({ force3D: true, nullTargetWarn: false })
gsap.defaults({ ease: 'expo.out', overwrite: 'auto' })
ScrollTrigger.config({ ignoreMobileResize: true })

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
