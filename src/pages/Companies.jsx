import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageProvider.jsx'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import { companyBySlug } from '../data/companies.js'
import { group } from '../data/group.js'
import { sections, cta, seo } from '../data/ui.js'

export default function Companies() {
  const { t } = useLang()

  return (
    <>
      <Seo seoNode={seo.companies} />

      <section className="container page-hero">
        <span className="t-pretitle">{t(sections.portfolio)}</span>
        <h1 className="t-h1 hero__headline">{t(sections.portfolio)}</h1>
        <p className="t-lead">{t(group.capabilities.intro)}</p>
      </section>

      <section className="section">
        <div className="container">
          {group.capabilities.pillars.map((p) => (
            <div key={p.id} style={{ marginBottom: 'var(--s-5)' }}>
              <h2 className="t-h3">{t(p.title)}</h2>
              <p className="t-lead" style={{ fontSize: 'var(--fs-body)', marginBottom: 'var(--s-4)' }}>{t(p.subtitle)}</p>
              <div className="company-grid">
                {p.companies.map((slug, i) => {
                  const c = companyBySlug(slug)
                  return (
                    <Reveal as={Link} to={`/companies/${c.slug}`} className="company-card" delay={i * 90} style={{ '--accent': c.accent, '--logo-scale': c.logoScale || 1 }} key={slug}>
                      {!c.logoIsPlaceholder && (
                        <span className="company-card__logo"><img src={c.logo} alt="" /></span>
                      )}
                      <span className="company-card__index">{c.index}</span>
                      <h3 className="t-h3">{t(c.name)}</h3>
                      <p className="company-card__tagline">{t(c.tagline)}</p>
                      <span className="btn btn--ghost btn--arrow" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
                        {t(cta.discover)} {t(c.shortName)}
                      </span>
                    </Reveal>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
