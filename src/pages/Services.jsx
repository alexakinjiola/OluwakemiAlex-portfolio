import { services, process, tools } from '../data/site.js'
import useTitle from '../hooks/useTitle.js'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import Icon from '../components/Icon.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function Services() {
  useTitle('Services')

  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Everything that keeps a busy role <em>running</em>.</>}
        lead="Pick the pieces you need most, or hand me the whole back office. Here’s the full range."
      />

      <section className="section section--flush-top" aria-label="Service list">
        <div className="wrap grid-2">
          {services.map((s, i) => (
            <Reveal key={s.id} id={s.id} delay={(i % 2) + 1} className="anchor-target">
              <ServiceCard service={s} detailed />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="results" aria-labelledby="process-title">
        <div className="results-leaf" aria-hidden="true" />
        <div className="wrap">
          <SectionHead id="process-title" eyebrow="How we’d start" title="Simple to begin. Easy to keep." />
          <ol className="steps steps--dark">
            {process.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i + 1} className="step">
                <span className="step-num" aria-hidden="true">0{i + 1}</span>
                <span className="step-icon"><Icon name={p.icon} /></span>
                <h3 className="h4">{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" aria-labelledby="tools-title">
        <div className="wrap">
          <SectionHead id="tools-title" align="center" eyebrow="Tools I work in" title="Comfortable across the everyday stack." />
          <div className="grid-4">
            {tools.map((t, i) => (
              <Reveal key={t.title} delay={i + 1} className="tool-card">
                <div className="tool-head">
                  <span className="tool-icon"><Icon name={t.icon} /></span>
                  <h3 className="h5">{t.title}</h3>
                </div>
                <ul>
                  {t.items.map((it) => <li key={it}><Icon name="check" />{it}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure where to start?"
        lead="Send me a note about your week. I’ll suggest the two or three things I’d take off your hands first."
        secondary={{ to: '/experience', label: 'View experience' }}
      />
    </>
  )
}
