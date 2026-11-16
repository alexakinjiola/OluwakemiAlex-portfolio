import { useEffect, useRef } from 'react'
import { Outlet, useLocation } from 'react-router'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  const { pathname, hash } = useLocation()
  const mainRef = useRef(null)
  const first = useRef(true)

  // On client-side navigation: start at the top and move focus to the new page,
  // so keyboard and screen-reader users land in the right place.
  useEffect(() => {
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null
    if (target) {
      target.scrollIntoView({ block: 'start' })
      target.setAttribute('tabindex', '-1')
      target.focus({ preventScroll: true })
    } else {
      window.scrollTo(0, 0)
      if (!first.current) mainRef.current?.focus({ preventScroll: true })
    }
    first.current = false
  }, [pathname, hash])

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <main id="main" ref={mainRef} tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
