import { person } from '../data/site.js'
import ContactForm from './ContactForm.jsx'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import SplitText from '../motion/SplitText.jsx'

export default function ContactBlock({ eyebrow = 'Let’s work together', num, title, lead }) {
  return (
    <section className="section section--flush-top contact-block" aria-labelledby="contact-block-title">
      <div className="wrap">
        <Reveal className="contact-shell" variant="scale">
          <div className="contact-aside">
            <div className="contact-leaf" aria-hidden="true" />
            <p className="kicker kicker--line">{num && <span className="kicker-num">{num}</span>}{eyebrow}</p>
            <SplitText as="h2" className="h2" id="contact-block-title">{title}</SplitText>
            {lead && <p className="contact-lead">{lead}</p>}
            <ul className="contact-list">
              <li>
                <span className="ci"><Icon name="mail" /></span>
                <span><small>Email</small><a href={`mailto:${person.email}`}>{person.email}</a></span>
              </li>
              <li>
                <span className="ci"><Icon name="call" /></span>
                <span><small>Phone</small><a href={person.phoneHref}>{person.phone}</a></span>
              </li>
              <li>
                <span className="ci"><Icon name="location_on" /></span>
                <span><small>Location</small>{person.location}, Nigeria</span>
              </li>
            </ul>
          </div>
          <div className="contact-form-wrap">
            <ContactForm compact />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
