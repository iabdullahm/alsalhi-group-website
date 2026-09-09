import { Link } from 'react-router-dom'
import { useLang } from '../i18n/LanguageProvider.jsx'

export default function NotFound() {
  const { lang } = useLang()
  return (
    <section className="container page-hero" style={{ textAlign: 'center', minHeight: '50vh' }}>
      <h1 className="t-h1">404</h1>
      <p className="t-lead">{lang === 'ar' ? 'الصفحة غير موجودة.' : 'Page not found.'}</p>
      <Link to="/" className="btn btn--primary" style={{ marginTop: '1.5rem' }}>
        {lang === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
      </Link>
    </section>
  )
}
