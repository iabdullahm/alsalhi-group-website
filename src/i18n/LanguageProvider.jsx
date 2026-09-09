import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'asg-lang'

const detect = () => {
  if (typeof window === 'undefined') return 'en'
  const stored = window.localStorage?.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'ar') return stored
  const nav = navigator.language || 'en'
  return nav.toLowerCase().startsWith('ar') ? 'ar' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detect)
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = dir
    try {
      window.localStorage?.setItem(STORAGE_KEY, lang)
    } catch {
      /* private mode */
    }
  }, [lang, dir])

  /** Resolve a {en, ar} node — strings, arrays and plain values all pass through. */
  const t = useCallback(
    (node, fallback = '') => {
      if (node === null || node === undefined) return fallback
      if (typeof node === 'string' || typeof node === 'number') return node
      if (Array.isArray(node)) return node
      if (typeof node === 'object' && (node.en !== undefined || node.ar !== undefined)) {
        return node[lang] ?? node.en ?? fallback
      }
      return fallback
    },
    [lang],
  )

  const value = useMemo(
    () => ({
      lang,
      dir,
      isRtl: dir === 'rtl',
      t,
      setLang,
      toggle: () => setLang((l) => (l === 'en' ? 'ar' : 'en')),
    }),
    [lang, dir, t],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLang = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used inside LanguageProvider')
  return ctx
}
