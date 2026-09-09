import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLang } from '../i18n/LanguageProvider.jsx'
import { nav } from '../data/ui.js'
import { companies } from '../data/companies.js'
import { group } from '../data/group.js'
import asgLogo from '../assets/logos/asg-full.png'

export default function Nav() {
  const { t, toggle } = useLang()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`nav${scrolled ? ' scrolled' : ''}`}>
        <Link to="/" className="nav__brand" onClick={() => setOpen(false)}>
          <img className="nav__logo" src={asgLogo} alt={t(group.name)} />
        </Link>

        <nav className="nav__links" aria-label={t(nav.home)}>
          <NavLink to="/" className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`} end>
            {t(nav.home)}
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}>
            {t(nav.about)}
          </NavLink>
          <div className="nav__dropdown">
            <NavLink to="/companies" className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}>
              {t(nav.companies)}
            </NavLink>
            <div className="nav__dropdown-panel">
              {companies.map((c) => (
                <Link key={c.id} to={`/companies/${c.slug}`} className="nav__dropdown-item">
                  {t(c.name)}
                </Link>
              ))}
            </div>
          </div>
          <NavLink to="/contact" className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}>
            {t(nav.contact)}
          </NavLink>
        </nav>

        <div className="nav__actions">
          <button className="nav__lang" onClick={toggle} aria-label="Switch language">
            {t(nav.langSwitch)}
          </button>
          <button className="nav__burger" onClick={() => setOpen(true)} aria-label="Open menu">☰</button>
        </div>
      </header>

      {open && (
        <div className="mobile-menu" role="dialog" aria-modal="true">
          <button className="mobile-menu__close" onClick={() => setOpen(false)} aria-label="Close menu">✕</button>
          <Link className="mobile-menu__link" to="/" onClick={() => setOpen(false)}>{t(nav.home)}</Link>
          <Link className="mobile-menu__link" to="/about" onClick={() => setOpen(false)}>{t(nav.about)}</Link>
          <Link className="mobile-menu__link" to="/companies" onClick={() => setOpen(false)}>{t(nav.companies)}</Link>
          {companies.map((c) => (
            <Link key={c.id} className="nav__link" to={`/companies/${c.slug}`} onClick={() => setOpen(false)}>
              — {t(c.name)}
            </Link>
          ))}
          <Link className="mobile-menu__link" to="/contact" onClick={() => setOpen(false)}>{t(nav.contact)}</Link>
        </div>
      )}
    </>
  )
}
