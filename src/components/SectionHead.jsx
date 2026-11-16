import Reveal from './Reveal.jsx'
import SplitText from '../motion/SplitText.jsx'

export default function SectionHead({ eyebrow, num, title, intro, align = 'left', id, tone }) {
  return (
    <div className={`sec-head sec-head--${align}${tone ? ` sec-head--${tone}` : ''}`}>
      {eyebrow && (
        <Reveal as="p" className="kicker kicker--line">
          {num && <span className="kicker-num">{num}</span>}
          {eyebrow}
        </Reveal>
      )}
      <SplitText as="h2" className="h2" id={id}>{title}</SplitText>
      {intro && <Reveal as="p" className="sec-intro" delay={2}>{intro}</Reveal>}
    </div>
  )
}
