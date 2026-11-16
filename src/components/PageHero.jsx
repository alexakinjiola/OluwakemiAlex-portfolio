import Reveal from './Reveal.jsx'

export default function PageHero({ eyebrow, title, lead, children }) {
  return (
    <section className="page-hero">
      <div className="page-hero-leaf" aria-hidden="true" />
      <div className="wrap">
        <Reveal><p className="eyebrow">{eyebrow}</p></Reveal>
        <Reveal as="h1" className="display page-title" delay={1}>{title}</Reveal>
        {lead && <Reveal as="p" className="lead" delay={2}>{lead}</Reveal>}
        {children && <Reveal delay={3}>{children}</Reveal>}
      </div>
    </section>
  )
}
