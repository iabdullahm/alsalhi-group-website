import { useEffect } from 'react'
import { useLang } from '../i18n/LanguageProvider.jsx'

function setMeta(name, content, attr = 'name') {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/** Sets document title + meta description/OG per page, per language. */
export default function Seo({ seoNode }) {
  const { lang, t } = useLang()
  useEffect(() => {
    if (!seoNode) return
    const entry = seoNode[lang] || seoNode.en
    if (!entry) return
    document.title = entry.title
    setMeta('description', entry.description)
    setMeta('og:title', entry.title, 'property')
    setMeta('og:description', entry.description, 'property')
  }, [seoNode, lang, t])
  return null
}
