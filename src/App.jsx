import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Companies from './pages/Companies.jsx'
import CompanyPage from './pages/CompanyPage.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import LegalStub from './pages/LegalStub.jsx'
import { useLang } from './i18n/LanguageProvider.jsx'
import { legalStub } from './data/ui.js'

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0 })
  }, [pathname, hash])
  return null
}

export default function App() {
  const { lang } = useLang()
  return (
    <>
      <a href="#main" className="skip-link">{lang === 'ar' ? 'تخطَّ إلى المحتوى' : 'Skip to content'}</a>
      <div className="grain" aria-hidden="true" />
      <ScrollToTop />
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/:slug" element={<CompanyPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<LegalStub content={legalStub.privacy} />} />
          <Route path="/terms-of-service" element={<LegalStub content={legalStub.terms} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
