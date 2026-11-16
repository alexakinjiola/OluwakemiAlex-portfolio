import { Link } from 'react-router'
import { nav, person } from '../data/site.js'
import Logo, { Mark } from './Logo.jsx'
import Icon from './Icon.jsx'
import SplitText from '../motion/SplitText.jsx'
import Reveal from './Reveal.jsx'
import { getLenis } from '../motion/effects.js'

export default function Footer() {
  const toTop = () => {
    const lenis = getLenis()
    if (lenis) lenis.scrollTo(0, { duration: 1.4 })
    else window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
    document.getElementById('main')?.focus({ preventScroll: true })
  }

  return (
    <footer className="site-footer">
      <Mark size={520} tone="light" className="footer-watermark" />
      <div className="wrap">
        <div className="footer-cta">
          <Reveal as="p" className="kicker kicker--line kicker--on-dark">Let’s work together</Reveal>
          <SplitText as="p" className="footer-big">
            Let’s make your week <span className="script">lighter</span>.
          </SplitText>
          <Reveal className="footer-cta-row" delay={2}>
            <a className="footer-mail magnetic" href={`mailto:${person.email}`}>
              <span>{person.email}</span>
              <Icon name="arrow_outward" />
            </a>
            <Link to="/contact" className="footer-round magnetic" aria-label="Go to the contact page">
              <span>Start a conversation</span>
            </Link>
          </Reveal>
        </div>

        <div className="footer-top">
          <div className="footer-brand">
            <Logo tone="light" />
            <p>Calm, capable administrative, recruitment and content support for founders and remote teams.</p>
          </div>

          <div className="footer-col">
            <h2 className="footer-h">Explore</h2>
            <ul>
              {nav.slice(1).map((n) => <li key={n.to}><Link to={n.to} className="u-link">{n.label}</Link></li>)}
            </ul>
          </div>

          <div className="footer-col">
            <h2 className="footer-h">Get in touch</h2>
            <ul className="footer-contact">
              <li><Icon name="mail" /><a className="u-link" href={`mailto:${person.email}`}>{person.email}</a></li>
              <li><Icon name="call" /><a className="u-link" href={person.phoneHref}>{person.phone}</a></li>
              <li><Icon name="location_on" /><span>{person.location}, Nigeria</span></li>
            </ul>
          </div>

          <div className="footer-col">
            <h2 className="footer-h">Elsewhere</h2>
            <a className="footer-social" href={person.linkedin} target="_blank" rel="noopener noreferrer">
              <span>LinkedIn</span>
              <Icon name="arrow_outward" />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {person.name}. All rights reserved.</span>
          <span className="footer-avail"><span className="dot" aria-hidden="true" />{person.availability}</span>
          <button type="button" className="to-top" onClick={toTop}>
            Back to top <Icon name="north" />
          </button>
        </div>
      </div>
    </footer>
  )
}
