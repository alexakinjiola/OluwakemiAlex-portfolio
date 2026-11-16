import { experience, results } from '../data/site.js'
import useTitle from '../hooks/useTitle.js'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Icon from '../components/Icon.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function Experience() {
  useTitle('Experience')

  return (
    <>
      <PageHero
        num="03"
        eyebrow="Experience"
        title={<>Five years of <em>handled</em>.</>}
        lead="A track record of quiet, reliable support across the UK and Nigeria, from admin desks to remote recruitment."
      />

      <section className="section section--flush-top" aria-label="Work history">
        <div className="wrap">
          <ol className="timeline">
            {experience.map((job, i) => (
              <Reveal as="li" key={job.company} className="tl-item" delay={1}>
                <div className="tl-when">
                  <span className={`tl-node${job.current ? ' is-current' : ''}`} aria-hidden="true" />
                  <p className="tl-date">{job.when}</p>
                  {job.current && <span className="chip chip--live"><span className="dot" aria-hidden="true" />Current role</span>}
                </div>
                <article className="tl-card spot">
                  <header className="tl-head">
                    <div>
                      <h2 className="h4">{job.role}{job.note && <span className="tl-note"> ({job.note})</span>}</h2>
                      <p className="tl-company"><Icon name="apartment" />{job.company}<span aria-hidden="true">·</span>{job.place}</p>
                    </div>
                    <span className="tl-focus">{job.focus}</span>
                  </header>
                  <ul className="tl-points">
                    {job.points.map((pt) => <li key={pt}><Icon name="check" />{pt}</li>)}
                  </ul>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="results" aria-labelledby="numbers-title">
        <div className="results-leaf" aria-hidden="true" />
        <div className="wrap">
          <SectionHead id="numbers-title" eyebrow="By the numbers" title="A few results worth repeating." />
          <ul className="results-grid">
            {results.map((r, i) => (
              <Reveal as="li" key={r.text} delay={i + 1}>
                <b>{r.value}<span className="unit">{r.unit}</span></b>
                <p>{r.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Looking for support you can rely on?"
        lead="Let’s find out how I can help your team this quarter."
        secondary={{ to: '/about', label: 'More about me' }}
      />
    </>
  )
}
