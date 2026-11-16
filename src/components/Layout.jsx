import { useEffect, useRef } from 'react'
import { useLocation, useOutlet } from 'react-router'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import Intro from './Intro.jsx'
import ScrollProgress from './ScrollProgress.jsx'
import { useSmoothScroll, usePointerEffects, getLenis } from '../motion/effects.js'

function scrollToTarget(hash) {
  const lenis = getLenis()
  const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
  if (target) {
    if (lenis) lenis.scrollTo(target, { offset: -100, immediate: true })
    else target.scrollIntoView({ block: 'start' })
    target.setAttribute('tabindex', '-1')
    target.focus({ preventScroll: true })
    return true
  }
  if (lenis) lenis.scrollTo(0, { immediate: true })
  else window.scrollTo(0, 0)
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

  // Same-page hash changes (no transition happens).
  useEffect(() => {
    if (first.current) { first.current = false; if (location.hash) setTimeout(() => scrollToTarget(location.hash), 50) }
  }, [location.hash])

  const onEntered = () => {
    const hadTarget = scrollToTarget(location.hash)
    if (!hadTarget) mainRef.current?.focus({ preventScroll: true })
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Intro />
      <ScrollProgress />
      <div className="grain" aria-hidden="true" />
      <Nav />
      <main id="main" ref={mainRef} tabIndex={-1}>
        <AnimatePresence mode="wait" initial={false} onExitComplete={onEntered}>
          <motion.div
            key={location.pathname}
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }}
            exit={reduce ? { opacity: 1 } : { opacity: 0, y: -16, transition: { duration: 0.32, ease: [0.7, 0, 0.84, 0] } }}
          >
            {outlet}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}
