import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation, useOutlet } from 'react-router'
import { motion, useReducedMotion } from 'motion/react'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import Intro from './Intro.jsx'
import ScrollProgress from './ScrollProgress.jsx'
import { useSmoothScroll, usePointerEffects, getLenis } from '../motion/effects.js'

// Jump (never glide) to the top or to a #target. A smooth scroll here would drag the
// new page past the viewport while its entrance animations are running.
function jumpTo(hash) {
  const lenis = getLenis()
  const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
  if (target) {
    if (lenis) lenis.scrollTo(target, { offset: -100, immediate: true, force: true })
    else window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 100, behavior: 'instant' })
    target.setAttribute('tabindex', '-1')
    target.focus({ preventScroll: true })
    return true
  }
  if (lenis) lenis.scrollTo(0, { immediate: true, force: true })
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  return false
}

export default function Layout() {
  const location = useLocation()
  const outlet = useOutlet()
  const mainRef = useRef(null)
  const first = useRef(true)
  const reduce = useReducedMotion()

  useSmoothScroll()
  usePointerEffects()

  // On every page change, move to the top *before* the browser paints the new page,
  // so it always enters from its own beginning (no half-scrolled, cut-off first frame).
  useLayoutEffect(() => {
    if (first.current) return
    const hadTarget = jumpTo(location.hash)
    if (!hadTarget) mainRef.current?.focus({ preventScroll: true })
  }, [location.pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  // Deep links (#section) on first load, and same-page hash changes.
  useEffect(() => {
    if (first.current) {
      first.current = false
      if (location.hash) setTimeout(() => jumpTo(location.hash), 60)
      return
    }
    if (location.hash) jumpTo(location.hash)
  }, [location.hash])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Intro />
      <ScrollProgress />
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main id="main" ref={mainRef} tabIndex={-1}>
        <motion.div
          key={location.pathname}
          initial={reduce || first.current ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {outlet}
        </motion.div>
      </main>
      <Footer />
    </>
  )
}
