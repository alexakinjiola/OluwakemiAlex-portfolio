import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router'
import { AnimatePresence, motion } from 'motion/react'
import { nav, person } from '../data/site.js'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import Icon from './Icon.jsx'

const EASE = [0.16, 1, 0.3, 1]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const { pathname } = useLocation()
  const toggleRef = useRef(null)
  const panelRef = useRef(null)
  const lastY = useRef(0)

  useEffect(() => setOpen(false), [pathname])

  // Becomes a floating pill once you scroll; tucks away while scrolling down, returns on the way up.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 24)
      setHidden(y > 480 && y > lastY.current + 4)
      if (y < lastY.current - 4 || y < 480) setHidden(false)
      lastY.current = y
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open)
    if (!open) return
    const t = setTimeout(() => panelRef.current?.querySelector('a')?.focus(), 60)
    const onKey = (e) => {
      if (e.key === 'Escape') { setOpen(false); toggleRef.current?.focus() }
      if (e.key === 'Tab' && panelRef.current) {
        const f = [...panelRef.current.querySelectorAll('a, button'), toggleRef.current]
        const i = f.indexOf(document.activeElement)
        if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus() }
        else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus() }
      }
    }
    document.addEventListener('keydown', onKey)
    return () => { clearTimeout(t); document.removeEventListener('keydown', onKey) }
  }, [open])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${hidden && !open ? ' is-hidden' : ''}${open ? ' is-open' : ''}`}>
      <div className="wrap">
        <nav className="nav" aria-label="Primary">
          <Logo />
          <ul className="nav-links">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === '/'}>
                  <span className="nl-roll" data-text={item.label}>{item.label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <Button to="/contact" className="nav-cta" icon="arrow_outward">Let’s talk</Button>
          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="burger" aria-hidden="true"><span /><span /></span>
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            ref={panelRef}
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            <ul>
              {nav.map((item, i) => (
                <motion.li
                  key={item.to}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.06, ease: EASE }}
                >
                  <NavLink to={item.to} end={item.to === '/'}>
                    <span className="mm-idx" aria-hidden="true">0{i + 1}</span>
                    {item.label}
                    <Icon name="arrow_outward" className="mm-arrow" />
                  </NavLink>
                </motion.li>
              ))}
            </ul>
            <motion.div
              className="mm-foot"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <p><span className="dot" aria-hidden="true" /> {person.availability}</p>
              <a href={`mailto:${person.email}`}>{person.email}</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
