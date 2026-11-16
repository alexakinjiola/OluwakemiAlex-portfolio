import { Link } from 'react-router'
import { nav, person } from '../data/site.js'
import Brand from './Brand.jsx'
import Icon from './Icon.jsx'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <Brand tone="light" />
            <p>Virtual assistant and remote executive support, based in Lagos and working with teams anywhere.</p>
          </div>

          <div className="footer-col">
            <h2 className="footer-h">Explore</h2>
            <ul>
              {nav.slice(1).map((n) => <li key={n.to}><Link to={n.to}>{n.label}</Link></li>)}
            </ul>
          </div>

          <div className="footer-col">
            <h2 className="footer-h">Get in touch</h2>
            <ul className="footer-contact">
              <li><Icon name="mail" /><a href={`mailto:${person.email}`}>{person.email}</a></li>
              <li><Icon name="call" /><a href={person.phoneHref}>{person.phone}</a></li>
              <li><Icon name="location_on" /><span>{person.location}</span></li>
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
          <Link to="/contact" className="footer-avail"><span className="dot" aria-hidden="true" />{person.availability}</Link>
        </div>
      </div>
    </footer>
  )
}
