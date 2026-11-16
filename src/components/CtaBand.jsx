import Button from './Button.jsx'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import SplitText from '../motion/SplitText.jsx'

export default function CtaBand({ eyebrow = 'Let’s talk', title, lead, secondary }) {
  return (
    <section className="section cta-section" aria-labelledby="cta-title">
      <div className="wrap">
        <Reveal className="cta-band" variant="scale">
          <div className="cta-leaf" aria-hidden="true" />
          <div className="cta-copy">
            <p className="kicker kicker--line">{eyebrow}</p>
            <SplitText as="h2" className="h2" id="cta-title">{title}</SplitText>
            {lead && <p className="cta-lead">{lead}</p>}
          </div>
          <div className="cta-actions">
            <Button to="/contact">Start a conversation</Button>
            {secondary && <Button to={secondary.to} variant="ghost" icon="east">{secondary.label}</Button>}
            <p className="cta-note"><Icon name="schedule" />Usually replies within a day</p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
