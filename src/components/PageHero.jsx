import Reveal from './Reveal.jsx'
import SplitText from '../motion/SplitText.jsx'
import Parallax from '../motion/Parallax.jsx'

export default function PageHero({ eyebrow, num, title, lead, children }) {
  return (
    <section className="page-hero">
      <Parallax className="page-hero-shape" speed={50} aria-hidden="true" />
      <Parallax className="page-hero-leaf-wrap" speed={90} rotate={6} aria-hidden="true">
        <div className="page-hero-leaf sway" />
      </Parallax>
      <div className="wrap">
        <Reveal as="p" className="kicker kicker--line">
          {num && <span className="kicker-num">{num}</span>}
          {eyebrow}
        </Reveal>
        <SplitText as="h1" className="display page-title" delay={0.1}>{title}</SplitText>
        {lead && <Reveal as="p" className="lead" delay={3}>{lead}</Reveal>}
        {children && <Reveal delay={4}>{children}</Reveal>}
      </div>
    </section>
  )
}
