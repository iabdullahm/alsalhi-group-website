import { useLang } from '../i18n/LanguageProvider.jsx'
import Seo from '../components/Seo.jsx'

/** Minimal placeholder page for Privacy Policy / Terms of Service. */
export default function LegalStub({ content }) {
  const { t } = useLang()

  return (
    <>
      <Seo seoNode={{
        en: { title: `${content.title.en} — Al Salhi Group`, description: content.body.en },
        ar: { title: `${content.title.ar} — مجموعة الصالحي`, description: content.body.ar },
      }} />
      <section className="container page-hero" style={{ minHeight: '40vh' }}>
        <h1 className="t-h1 hero__headline">{t(content.title)}</h1>
        <p className="t-lead">{t(content.body)}</p>
      </section>
    </>
  )
}
