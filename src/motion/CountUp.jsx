import { useEffect, useRef, useState } from 'react'
import { animate, useReducedMotion } from 'motion/react'

// Counts a figure up once when it scrolls into view. Non-numeric values ("Zero") render as-is.
export default function CountUp({ value, duration = 1.6 }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const match = String(value).match(/^([+-]?)(\d+)$/)
  const [shown, setShown] = useState(match && !reduce ? `${match[1]}0` : value)

  useEffect(() => {
    if (!match || reduce) return
    const el = ref.current
    let ctrl
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      io.disconnect()
      ctrl = animate(0, Number(match[2]), {
        duration,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (v) => setShown(`${match[1]}${Math.round(v)}`),
      })
    }, { threshold: 0.6 })
    io.observe(el)
    return () => { io.disconnect(); ctrl?.stop() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, reduce])

  return <span ref={ref} aria-label={String(value)}><span aria-hidden="true">{shown}</span></span>
}
