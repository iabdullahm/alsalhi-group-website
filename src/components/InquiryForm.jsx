import { useState } from 'react'
import { useLang } from '../i18n/LanguageProvider.jsx'

/**
 * Shared lead-routing inquiry form.
 * Used both as the full /contact page form and the shorter Home
 * "Quick Contact" mini-form — same mailto-based submit behaviour,
 * different field labels / sector options / copy per instance.
 */
export default function InquiryForm({ idPrefix, fields, sectorOptions, submitLabel, note, mailto, initialSector }) {
  const { t, lang } = useLang()
  const options = sectorOptions[lang] || sectorOptions.en

  // Track the selected sector by index (language-independent) so the
  // selection survives an EN/AR toggle instead of going stale against
  // the newly-resolved option strings.
  const initialIndex = (() => {
    if (!initialSector) return 0
    const i = sectorOptions.en.indexOf(initialSector)
    if (i !== -1) return i
    const j = sectorOptions.ar.indexOf(initialSector)
    return j !== -1 ? j : 0
  })()

  const [form, setForm] = useState({
    name: '', email: '', phone: '', organization: '',
    sectorIndex: initialIndex,
    message: '',
  })

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const sector = options[form.sectorIndex] || options[0]
    const subject = encodeURIComponent(`${sector} — Inquiry from ${form.name || 'website'}`)
    const bodyLines = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Company/Organization: ${form.organization}`,
      `Routed to: ${sector}`,
      '',
      form.message,
    ]
    const body = encodeURIComponent(bodyLines.join('\n'))
    window.location.href = `mailto:${mailto}?subject=${subject}&body=${body}`
  }

  const id = (key) => `${idPrefix}-${key}`

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor={id('name')}>{t(fields.name)}</label>
        <input id={id('name')} required value={form.name} onChange={update('name')} />
      </div>
      <div className="two-col" style={{ gap: 'var(--s-3)' }}>
        <div className="field">
          <label htmlFor={id('email')}>{t(fields.email)}</label>
          <input id={id('email')} type="email" required value={form.email} onChange={update('email')} />
        </div>
        <div className="field">
          <label htmlFor={id('phone')}>{t(fields.phone)}</label>
          <input id={id('phone')} type="tel" value={form.phone} onChange={update('phone')} />
        </div>
      </div>
      <div className="field">
        <label htmlFor={id('organization')}>{t(fields.organization)}</label>
        <input id={id('organization')} value={form.organization} onChange={update('organization')} />
      </div>
      <div className="field">
        <label htmlFor={id('sector')}>{t(fields.sector)}</label>
        <select
          id={id('sector')}
          value={form.sectorIndex}
          onChange={(e) => setForm((f) => ({ ...f, sectorIndex: Number(e.target.value) }))}
        >
          {options.map((opt, i) => (
            <option key={i} value={i}>{opt}</option>
          ))}
        </select>
      </div>
      <div className="field">
        <label htmlFor={id('message')}>{t(fields.message)}</label>
        <textarea id={id('message')} required value={form.message} onChange={update('message')} />
      </div>
      <button type="submit" className="btn btn--primary btn--arrow" style={{ justifySelf: 'start' }}>
        {t(submitLabel)}
      </button>
      {note && <p className="form-note">{t(note)}</p>}
    </form>
  )
}
