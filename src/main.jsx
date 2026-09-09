import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource-variable/montserrat'
import '@fontsource/almarai/400.css'
import '@fontsource/almarai/700.css'
import './styles/base.css'
import './styles/layout.css'
import { LanguageProvider } from './i18n/LanguageProvider.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LanguageProvider>
  </StrictMode>,
)
