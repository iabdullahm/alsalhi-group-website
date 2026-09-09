import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageProvider.jsx'
import { footer } from '../data/ui.js'
import { companies } from '../data/companies.js'
import { group } from '../data/group.js'

export default function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <p className="footer__brand">{t(group.name)}</p>
            <p className="footer__tagline">{t(footer.tagline)}</p>
          </div>
          <div>
            <p className="footer__heading">{t(footer.quickLinks)}</p>
            <div className="footer__list">
              <Link to="/">{t(footer.links.home)}</Link>
              <Link to="/about">{t(footer.links.aboutUs)}</Link>
              <Link to="/#portfolio">{t(footer.links.businessPortfolio)}</Link>
              <Link to="/#approach">{t(footer.links.ourApproach)}</Link>
              <Link to="/#oman-vision-2040">{t(footer.links.omanVision2040)}</Link>
              <Link to="/contact">{t(footer.links.contactUs)}</Link>
            </div>
          </div>
          <div>
            <p className="footer__heading">{t(footer.ourCompanies)}</p>
            <div className="footer__list">
              {companies.map((c) => (
                <Link key={c.id} to={`/companies/${c.slug}`}>{t(c.name)}</Link>
              ))}
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <span>© {year} {t(group.name)}. {t(footer.rights)}</span>
          <span style={{ display: 'flex', gap: '1.2em' }}>
            <Link to="/privacy-policy">{t(footer.legal.privacyPolicy)}</Link>
            <Link to="/terms-of-service">{t(footer.legal.termsOfService)}</Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
