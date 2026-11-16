import Button from './Button.jsx'
import Reveal from './Reveal.jsx'

export default function CtaBand({ eyebrow = 'Let’s talk', title, lead, secondary }) {
  return (
    <section className="section cta-section" aria-labelledby="cta-title">
      <div className="wrap">
        <Reveal className="cta-band">
          <span className="cta-mono" aria-hidden="true">OA</span>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="h2" id="cta-title">{title}</h2>
          {lead && <p className="cta-lead">{lead}</p>}
          <div className="cta-actions">
            <Button to="/contact" variant="light">Start a conversation</Button>
            {secondary && <Button to={secondary.to} variant="outline-light" icon="east">{secondary.label}</Button>}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
