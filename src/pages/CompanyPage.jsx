import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useLang } from '../i18n/LanguageProvider.jsx'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import { companies, companyBySlug } from '../data/companies.js'
import { sections, cta } from '../data/ui.js'

export default function CompanyPage() {
  const { t } = useLang()
  const { slug } = useParams()
  const company = companyBySlug(slug)

  useEffect(() => {
    if (company) document.title = `${company.name.en} — Al Salhi Group`
  }, [company])

  if (!company) return <Navigate to="/companies" replace />

  const related = companies.filter((c) => c.id !== company.id).slice(0, 3)

  return (
    <>
      <Seo seoNode={{
        en: { title: `${company.name.en} — Al Salhi Group`, description: company.overview.en },
        ar: { title: `${company.name.ar} — مجموعة الصالحي`, description: company.overview.ar },
      }} />

      <section className="container page-hero" style={{ '--accent': company.accent }}>
        {!company.logoIsPlaceholder && (
          <div className="company-hero">
            <img className="company-hero__logo" src={company.logo} alt={t(company.name)} />
          </div>
        )}
        <span className="t-pretitle">{t(sections.portfolio)}</span>
        <h1 className="t-h1 hero__headline">{t(company.name)}</h1>
        <p className="t-h3" style={{ color: company.accent, fontWeight: 500, marginBottom: 'var(--s-2)' }}>
          {t(company.heroTagline)}
        </p>
        <p className="t-lead">{t(company.overview)}</p>
        <div className="hero__actions">
          <Link to="/contact" state={{ sector: t(company.contactSector) }} className="btn btn--primary btn--arrow">
            {t(cta.discussProject)}
          </Link>
          <Link to="/companies" className="btn btn--ghost">{t(cta.backToCompanies)}</Link>
        </div>
      </section>

      <section className="section section--alt" style={{ '--accent': company.accent }}>
        <div className="container">
          <span className="eyebrow">{t(cta.ourServices)}</span>
          <div className="value-grid">
            {company.capabilities.map((cap, i) => (
              <Reveal as="div" className="value-card" delay={i * 70} style={{ borderColor: 'var(--c-line)' }} key={i}>
                <p className="value-card__label" style={{ color: company.accent }}>{t(cap.title)}</p>
                <p className="value-card__text">{t(cap.text)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <Reveal as="div" className="container" style={{ display: 'grid', gap: 'var(--s-4)' }}>
          <p className="t-lead" style={{ maxWidth: '72ch' }}>{t(company.closing)}</p>
          <Link to="/contact" state={{ sector: t(company.contactSector) }} className="btn btn--primary btn--arrow" style={{ justifySelf: 'start' }}>
            {t(company.ctaLabel)}
          </Link>
        </Reveal>
      </section>

      <section className="section section--alt">
        <div className="container">
          <span className="eyebrow">{t(sections.portfolio)}</span>
          <div className="related-companies">
            {related.map((c) => (
              <Link to={`/companies/${c.slug}`} className="company-card" style={{ '--accent': c.accent }} key={c.id}>
                {!c.logoIsPlaceholder && (
                  <span className="company-card__logo"><img src={c.logo} alt="" /></span>
                )}
                <span className="company-card__index">{c.index}</span>
                <h3 className="t-h3">{t(c.name)}</h3>
                <p className="company-card__tagline">{t(c.tagline)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
