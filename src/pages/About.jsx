import { useLang } from '../i18n/LanguageProvider.jsx'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import { group } from '../data/group.js'
import { sections, seo } from '../data/ui.js'

export default function About() {
  const { t } = useLang()

  return (
    <>
      <Seo seoNode={seo.about} />

      <section className="container page-hero" style={{ maxWidth: 'var(--maxw)', paddingBottom: 'var(--s-6)' }}>
        <span className="t-pretitle">{t(sections.overview)}</span>
        <h1 className="t-h1 hero__headline" style={{ marginBlock: 'var(--s-3)' }}>{t(group.aboutHero.title)}</h1>
        <p className="t-lead" style={{ maxWidth: '58ch' }}>{t(group.aboutHero.subtitle)}</p>
      </section>

      <section className="section section--alt">
        <Reveal as="div" className="container">
          <span className="eyebrow">{t(sections.story)}</span>
          {group.story.map((p, i) => (
            <p key={i} className="t-lead" style={{ marginTop: i === 0 ? 0 : 'var(--s-4)', maxWidth: '66ch' }}>{t(p)}</p>
          ))}
        </Reveal>
      </section>

      <section className="section" id="chairmans-message">
        <Reveal as="div" className="container chairman">
          <div>
            <span className="eyebrow">{t(sections.chairman)}</span>
            <p className="chairman__quote about-chairman-quote">“{t(group.chairman.paragraphs[0])}”</p>
            <p className="chairman__sig">— {t(group.chairman.role)}</p>
          </div>
          <div className="chairman__body">
            {group.chairman.paragraphs.slice(1).map((p, i) => (
              <p key={i}>{t(p)}</p>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="section section--alt">
        <Reveal as="div" className="container two-col vision-mission">
          <div>
            <span className="eyebrow">{t(sections.vision)}</span>
            <p className="t-h3" style={{ fontWeight: 500 }}>{t(group.vision)}</p>
          </div>
          <div>
            <span className="eyebrow">{t(sections.mission)}</span>
            <p className="t-h3" style={{ fontWeight: 500 }}>{t(group.mission)}</p>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">{t(sections.values)}</span>
          <div className="value-grid value-grid--values">
            {group.values.map((v, i) => (
              <Reveal as="div" className="value-card" delay={i * 70} key={v.id}>
                <p className="value-card__label">{t(v.label)}</p>
                <p className="value-card__text">{t(v.text)}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
