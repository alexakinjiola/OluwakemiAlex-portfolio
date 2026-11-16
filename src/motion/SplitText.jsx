import { Children, Fragment, isValidElement, useEffect, useRef, useState } from 'react'
import { useIntro } from './intro.jsx'

// Headline reveal: each word rises from behind a mask. Elements (like the script word) move as one unit.
// The words stay real text, so screen readers and copy-paste see a normal sentence.
export default function SplitText({ as: Tag = 'h2', children, className = '', delay = 0, stagger = 0.06, ...rest }) {
  const ref = useRef(null)
  const { ready } = useIntro()
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) { setInView(true); return }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); io.disconnect() } }, { rootMargin: '0px 0px -10% 0px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  let i = 0
  const word = (content, key) => {
    const d = delay + i++ * stagger
    return (
      <span className="sw" key={key}>
        <span className="sw-in" style={{ transitionDelay: `${d}s` }}>{content}</span>
      </span>
    )
  }

  const parts = []
  const walk = (nodes, prefix) => Children.forEach(nodes, (child, ci) => {
    const k = `${prefix}${ci}`
    if (typeof child === 'string') {
      child.split(/(\s+)/).forEach((tok, ti) => {
        if (!tok) return
        if (/^\s+$/.test(tok)) parts.push(' ')
        else parts.push(word(tok, `${k}-${ti}`))
      })
    } else if (isValidElement(child) && child.type === Fragment) {
      walk(child.props.children, `${k}.`)
    } else if (isValidElement(child) && child.type === 'br') {
      parts.push(<br key={`br-${k}`} />)
    } else if (child != null && child !== false) {
      parts.push(word(child, `el-${k}`))
    }
  })
  walk(children, '')

  return (
    <Tag ref={ref} className={`split${inView && ready ? ' is-in' : ''}${className ? ` ${className}` : ''}`} {...rest}>
      {parts}
    </Tag>
  )
}
