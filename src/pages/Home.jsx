import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageProvider.jsx'
import Seo from '../components/Seo.jsx'
import InquiryForm from '../components/InquiryForm.jsx'
import Reveal from '../components/Reveal.jsx'
import { group } from '../data/group.js'
import { companyBySlug } from '../data/companies.js'
import { cta, sections, glance, quickContact, contactForm, seo } from '../data/ui.js'

export default function Home() {
  const { t } = useLang()

  // Each "Rooted in Oman. / Built for Growth. / Driven by Vision." phrase
  // renders on its own forced line (not just wherever it happens to wrap),
  // with the final word of the last phrase kept in the highlight box.
  const headlineFull = t(group.hero.headline).trim()
  const headlinePhrases = headlineFull.split(/(?<=\.)\s+/).filter(Boolean)
  const lastPhrase = headlinePhrases[headlinePhrases.length - 1] || headlineFull
  const lastPhraseWords = lastPhrase.split(' ')
  const headlineKeyword = lastPhraseWords.pop()
  const lastPhraseRest = lastPhraseWords.join(' ')

  return (
    <>
      <Seo seoNode={seo.home} />

      <section className="hero">
        <div className="container hero__inner">
          <span className="t-pretitle">{t(group.hero.pretitle)}</span>
          <h1 className="t-h1 hero__headline">
            {headlinePhrases.map((phrase, i) => (
              <span className="hero__headline-line" key={i}>
                {i === headlinePhrases.length - 1
                  ? <>{lastPhraseRest} <span className="highlight-box">{headlineKeyword}</span></>
                  : phrase}
              </span>
            ))}
          </h1>
          <p className="t-lead">{t(group.hero.sub)}</p>
          <div className="hero__actions">
            <a href="#portfolio" className="btn btn--primary btn--arrow">{t(cta.explorePortfolio)}</a>
            <a href="#contact-router" className="btn btn--ghost">{t(cta.discussProject)}</a>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <Reveal as="div" className="container">
          <span className="eyebrow">{t(sections.glance)}</span>
          <h2 className="t-h2" style={{ marginBottom: 'var(--s-2)' }}>{t(glance.title)}</h2>
          <p className="t-lead pretitle-block">{t(glance.intro)}</p>
          <div className="stats-card">
            {glance.cards.map((c, i) => (
              <div className="stat-item" key={i}>
                <p className="stat-item__title">{t(c.title)}</p>
                <p className="stat-item__desc">{t(c.text)}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section" id="chairmans-message">
        <div className="container">
          <Reveal as="div" className={group.chairman.photo ? 'chairman' : 'chairman-solo'}>
            {group.chairman.photo && (
              <div className="chairman__portrait">
                <img className="chairman__photo" src={group.chairman.photo} alt={t(group.chairman.role)} />
              </div>
            )}
            <div className="chairman__body">
              <span className="eyebrow">{t(sections.leadership)}</span>
              <p className="chairman__quote">“{t(group.chairman.homeQuote)}”</p>
              {group.chairman.paragraphs.map((p, i) => (
                <p key={i} className="t-lead" style={{ marginTop: 'var(--s-3)' }}>{t(p)}</p>
              ))}
              <div className="chairman__sig-row">
                <p className="chairman__sig">— {t(group.chairman.role)}</p>
                {group.chairman.signature && (
                  <img className="chairman__signature" src={group.chairman.signature} alt="" />
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--alt" id="portfolio">
        <div className="container">
          <Reveal as="div">
            <span className="eyebrow">{t(sections.portfolio)}</span>
            <p className="t-lead pretitle-block">{t(group.capabilities.intro)}</p>
          </Reveal>

          {group.capabilities.pillars.map((p) => (
            <div key={p.id} style={{ marginBottom: 'var(--s-5)' }}>
              <h3 className="t-h3">{t(p.title)}</h3>
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

      <section className="section" id="approach">
        <div className="container">
          <span className="eyebrow">{t(sections.approach)}</span>
          <div className="steps">
            {group.approach.steps.map((step, i) => (
              <Reveal as="div" className="step" delay={i * 80} key={i}>
                <div className="step__num">0{i + 1}</div>
                <p className="t-h3" style={{ fontSize: 'var(--fs-body)', fontWeight: 600, marginTop: '0.6em' }}>{t(step.title)}</p>
                <div className="step__label">{t(step.text)}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="oman-vision-2040">
        <Reveal as="div" className="container">
          <span className="eyebrow">{t(sections.omanVision)}</span>
          <h2 className="t-h2" style={{ marginBottom: 'var(--s-3)', maxWidth: '32ch' }}>{t(group.omanVision.headline)}</h2>
          <p className="t-lead pretitle-block">{t(group.omanVision.body)}</p>
          <ul className="services-grid">
            {group.omanVision.focusAreas.map((f, i) => (
              <li key={i}>{t(f)}</li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section className="section" id="contact-router">
        <Reveal as="div" className="container contact-layout">
          <div>
            <span className="eyebrow">{t(sections.contact)}</span>
            <h2 className="t-h2" style={{ marginBottom: 'var(--s-2)' }}>{t(quickContact.headline)}</h2>
            <p className="t-lead">{t(quickContact.sub)}</p>
          </div>
          <InquiryForm
            idPrefix="quick"
            fields={quickContact.fields}
            sectorOptions={quickContact.sectorOptions}
            submitLabel={quickContact.submit}
            mailto={contactForm.hq.email}
          />
        </Reveal>
      </section>
    </>
  )
}
