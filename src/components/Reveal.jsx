import { useEffect, useRef, useState } from 'react'

/**
 * Wraps children in a div that fades + rises into place the first time it
 * scrolls into view (Robok-style scroll reveal). One-shot: once visible,
 * the observer disconnects and the class stays applied.
 */
export default function Reveal({ children, as: Tag = 'div', className = '', delay = 0, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            obs.disconnect()
          }
        })
      },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const style = delay ? { transitionDelay: `${delay}ms`, ...rest.style } : rest.style

  return (
    <Tag ref={ref} className={`reveal${visible ? ' visible' : ''}${className ? ` ${className}` : ''}`} {...rest} style={style}>
      {children}
    </Tag>
  )
}
