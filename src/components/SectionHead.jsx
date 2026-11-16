import Reveal from './Reveal.jsx'

export default function SectionHead({ eyebrow, title, intro, align = 'left', id }) {
  return (
    <Reveal className={`sec-head sec-head--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="h2" id={id}>{title}</h2>
      {intro && <p className="sec-intro">{intro}</p>}
    </Reveal>
  )
}
