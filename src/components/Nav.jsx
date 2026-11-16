import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router'
import { nav, person } from '../data/site.js'
import Brand from './Brand.jsx'
import Button from './Button.jsx'
import Icon from './Icon.jsx'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const toggleRef = useRef(null)
  const panelRef = useRef(null)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('menu-open', open)
    if (!open) return
    panelRef.current?.querySelector('a')?.focus()
    const onKey = (e) => {
      if (e.key === 'Escape') { setOpen(false); toggleRef.current?.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <nav className="nav wrap" aria-label="Primary">
        <Brand />
        <ul className="nav-links">
          {nav.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.to === '/'}>{item.label}</NavLink>
            </li>
          ))}
        </ul>
        <Button to="/contact" className="nav-cta" icon="arrow_outward">Work with me</Button>
        <button
          ref={toggleRef}
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? 'close' : 'menu'} />
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
        </button>
      </nav>

      <div id="mobile-menu" className="mobile-menu" ref={panelRef} hidden={!open}>
        <ul>
          {nav.map((item, i) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.to === '/'}>
                <span className="mm-idx" aria-hidden="true">0{i + 1}</span>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mm-foot">
          <p><span className="dot" aria-hidden="true" /> {person.availability}</p>
          <a href={`mailto:${person.email}`}>{person.email}</a>
        </div>
      </div>
    </header>
  )
}
