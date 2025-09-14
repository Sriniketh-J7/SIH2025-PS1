import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { TechnicianProvider } from './contexts/TechnicianContext.jsx'

createRoot(document.getElementById('root')).render(
  <TechnicianProvider>
    <App />
  </TechnicianProvider>,
)
