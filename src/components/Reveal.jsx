import { useEffect, useRef, useState } from 'react'
import { useIntro } from '../motion/intro.jsx'

// Fades content up once as it enters the viewport (and, on first launch, once the intro has lifted).
export default function Reveal({ as: Tag = 'div', delay = 0, variant = 'up', className = '', children, ...rest }) {
  const ref = useRef(null)
  const { ready } = useIntro()
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { setInView(true); return }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); io.disconnect() }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant}${inView && ready ? ' is-in' : ''}${className ? ` ${className}` : ''}`}
      style={delay ? { '--d': `${delay * 90}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  )
}
