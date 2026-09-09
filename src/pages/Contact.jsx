import { useLocation } from 'react-router-dom'
import { useLang } from '../i18n/LanguageProvider.jsx'
import Seo from '../components/Seo.jsx'
import InquiryForm from '../components/InquiryForm.jsx'
import Reveal from '../components/Reveal.jsx'
import { contactForm, sections, seo } from '../data/ui.js'

export default function Contact() {
  const { t } = useLang()
  const location = useLocation()
  const initialSector = location.state?.sector

  return (
    <>
      <Seo seoNode={seo.contact} />

      <section className="container page-hero">
        <span className="t-pretitle">{t(sections.contact)}</span>
        <h1 className="t-h1 hero__headline">{t(contactForm.title)}</h1>
        <p className="t-lead">{t(contactForm.intro)}</p>
      </section>

      <section className="section">
        <Reveal as="div" className="container contact-layout">
          <div>
            <span className="eyebrow">{t(contactForm.hq.officeLabel)}</span>
            <p className="t-h3" style={{ fontWeight: 500, marginBottom: 'var(--s-4)' }}>{t(contactForm.hq.office)}</p>

            <ul className="list-check">
              <li>
                <strong style={{ color: 'var(--c-paper)' }}>{t(contactForm.hq.emailLabel)}:</strong>{' '}
                <a href={`mailto:${contactForm.hq.email}`}>{contactForm.hq.email}</a>
              </li>
              <li>
                <strong style={{ color: 'var(--c-paper)' }}>{t(contactForm.hq.phoneLabel)}:</strong>{' '}
                <a href={`tel:${contactForm.hq.phone.replace(/\s+/g, '')}`}>{contactForm.hq.phone}</a>
              </li>
              <li>
                <strong style={{ color: 'var(--c-paper)' }}>{t(contactForm.hq.hoursLabel)}:</strong>{' '}
                {t(contactForm.hq.hours)}
              </li>
            </ul>
          </div>

          <div>
            <p className="t-h3" style={{ marginBottom: 'var(--s-3)' }}>{t(contactForm.formTitle)}</p>
            <InquiryForm
              idPrefix="full"
              fields={contactForm.fields}
              sectorOptions={contactForm.sectorOptions}
              submitLabel={contactForm.submit}
              note={contactForm.note}
              mailto={contactForm.hq.email}
              initialSector={initialSector}
            />
          </div>
        </Reveal>
      </section>
    </>
  )
}
