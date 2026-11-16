import { person } from '../data/site.js'
import useTitle from '../hooks/useTitle.js'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import ContactForm from '../components/ContactForm.jsx'
import Icon from '../components/Icon.jsx'

export default function Contact() {
  useTitle('Contact')

  const details = [
    { icon: 'mail', label: 'Email', value: person.email, href: `mailto:${person.email}` },
    { icon: 'call', label: 'Phone', value: person.phone, href: person.phoneHref },
    { icon: 'link', label: 'LinkedIn', value: 'Connect with me', href: person.linkedin, external: true },
    { icon: 'location_on', label: 'Based in', value: `${person.location}, working with teams anywhere` },
  ]

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let’s take the busywork <em>off your plate</em>.</>}
        lead="Tell me a little about your role and what’s slowing you down. I usually reply within a day."
      />

      <section className="section section--flush-top" aria-label="Contact details and form">
        <div className="wrap contact-page">
          <Reveal className="contact-details">
            <h2 className="h4">Reach me directly</h2>
            <ul>
              {details.map((d) => (
                <li key={d.label}>
                  <span className="ci"><Icon name={d.icon} /></span>
                  <span>
                    <small>{d.label}</small>
                    {d.href ? (
                      <a href={d.href} {...(d.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                        {d.value}{d.external && <span className="sr-only"> (opens in a new tab)</span>}
                      </a>
                    ) : <span>{d.value}</span>}
                  </span>
                </li>
              ))}
            </ul>
            <p className="avail-card"><span className="dot" aria-hidden="true" />{person.availability}</p>
          </Reveal>

          <Reveal className="contact-form-card" delay={1}>
            <h2 className="h3">Send a message</h2>
            <p className="form-intro">You’ll get an instant confirmation by email.</p>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
