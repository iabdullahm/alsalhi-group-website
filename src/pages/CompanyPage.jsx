import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useLang } from '../i18n/LanguageProvider.jsx'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import { companies, companyBySlug } from '../data/companies.js'
import { sections, cta, projectStatusLabels } from '../data/ui.js'

/**
 * Decorative, content-free preview used inside an Applications & Systems
 * product card until a real screenshot is supplied for that project (see
 * `image` on a company's `projects` entries in data/companies.js). Purely
 * abstract geometry — no invented product data or copy — so it reads as
 * "software interface" without ever claiming to be the real thing.
 */
function ProductPreview({ kind }) {
  if (kind === 'menu') {
    return (
      <div className="preview-mock preview-mock--menu">
        <span className="preview-mock__qr" />
        <div className="preview-mock__lines">
          <span />
          <span />
          <span />
        </div>
        <span className="preview-mock__pill" />
      </div>
    )
  }
  return (
    <div className="preview-mock preview-mock--dashboard">
      <div className="preview-mock__stats">
        <span />
        <span />
        <span />
      </div>
      <div className="preview-mock__table">
        <span className="preview-mock__row" />
        <span className="preview-mock__row" />
        <span className="preview-mock__row" />
      </div>
    </div>
  )
}

/**
 * Layered, abstract "software interface" composition for the hero's right
 * column — panels, skeleton rows, and a small bar chart built from plain
 * divs in the existing brand palette. Decorative only (aria-hidden), never
 * a stand-in for a real product screenshot.
 */
function HeroVisual() {
  return (
    <div className="company-hero-visual" aria-hidden="true">
      <div className="hero-visual__panel hero-visual__panel--back" />
      <div className="hero-visual__panel hero-visual__panel--main">
        <div className="hero-visual__dots">
          <span />
          <span />
          <span />
        </div>
        <div className="hero-visual__row hero-visual__row--w70" />
        <div className="hero-visual__row hero-visual__row--w45" />
        <div className="hero-visual__chart">
          <span style={{ '--h': '38%' }} />
          <span style={{ '--h': '64%' }} />
          <span style={{ '--h': '50%' }} />
          <span style={{ '--h': '86%' }} />
          <span style={{ '--h': '58%' }} />
        </div>
        <div className="hero-visual__chips">
          <span className="hero-visual__chip" />
          <span className="hero-visual__chip" />
        </div>
      </div>
      <span className="hero-visual__badge" />
    </div>
  )
}

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

      <section className="company-hero-section" style={{ '--accent': company.accent }}>
        <div className="container company-hero-grid">
          <div className="company-hero-copy">
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
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="section section--alt" style={{ '--accent': company.accent }}>
        <div className="container">
          <h2 className="eyebrow">{t(cta.ourServices)}</h2>
          <div className="capabilities-grid">
            {company.capabilities.map((cap, i) => (
              <Reveal as="div" className="value-card capability-card" delay={i * 70} style={{ borderColor: 'var(--c-line)' }} key={i}>
                <span className="capability-card__mark" style={{ background: company.accent }} />
                <h3 className="value-card__label" style={{ color: company.accent }}>{t(cap.title)}</h3>
                <p className="value-card__text">{t(cap.text)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {company.projects && company.projects.length > 0 && (
        <section className="section" style={{ '--accent': company.accent }}>
          <div className="container">
            <h2 className="eyebrow">{t(sections.projects)}</h2>
            <div className="products-grid">
              {company.projects.map((project, i) => (
                <Reveal as="div" className="product-card" delay={i * 90} key={i}>
                  <div className="product-card__preview">
                    {project.image ? (
                      <img src={project.image} alt={t(project.name)} loading="lazy" />
                    ) : (
                      <ProductPreview kind={project.visual} />
                    )}
                  </div>
                  <div className="product-card__body">
                    <div className="product-card__head">
                      <h3 className="product-card__name">{t(project.name)}</h3>
                      <span className={`project-card__status project-card__status--${project.status}`}>
                        {t(projectStatusLabels[project.status])}
                      </span>
                    </div>
                    <p className="product-card__desc">{t(project.description)}</p>
                    {project.url && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--arrow product-card__cta">
                        {t(cta.visitProject)}
                      </a>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section section--tight">
        <div className="container">
          <Reveal as="div" className="tech-statement-panel">
            <p className="t-h3 tech-statement-panel__text">{t(company.closing)}</p>
            <Link to="/contact" state={{ sector: t(company.contactSector) }} className="btn btn--primary btn--arrow tech-statement-panel__cta">
              {t(company.ctaLabel)}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt section--tight">
        <div className="container">
          <h2 className="eyebrow">{t(sections.portfolio)}</h2>
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
