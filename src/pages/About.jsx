import { aboutFacts, values, education } from '../data/site.js'
import useTitle from '../hooks/useTitle.js'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Icon from '../components/Icon.jsx'
import Button from '../components/Button.jsx'
import CtaBand from '../components/CtaBand.jsx'

export default function About() {
  useTitle('About')

  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>Nice to meet you.<br />I’m <em>Oluwakemi</em>.</>}
        lead="A virtual assistant who believes the best support is the kind you never have to think about."
      >
        <ul className="fact-row">
          {aboutFacts.map((f) => (
            <li key={f.label}>
              <span className="fact-icon"><Icon name={f.icon} /></span>
              <span><small>{f.label}</small><b>{f.value}</b></span>
            </li>
          ))}
        </ul>
      </PageHero>

      <section className="section story" aria-labelledby="story-title">
        <div className="wrap story-grid">
          <Reveal as="figure" className="story-media">
            <div className="story-arch">
              <picture>
                <source srcSet="/images/oluwakemi-cutout-600.webp 600w, /images/oluwakemi-cutout.webp 900w" sizes="(max-width: 900px) 90vw, 480px" type="image/webp" />
                <img src="/images/oluwakemi.jpg" alt="Portrait of Oluwakemi Mary Alex" width="900" height="1016" loading="lazy" decoding="async" />
              </picture>
            </div>
            <figcaption className="story-cap">
              <Icon name="location_on" />Lagos, Nigeria
            </figcaption>
          </Reveal>

          <Reveal className="story-copy" delay={1}>
            <p className="kicker">The short version</p>
            <h2 className="h2" id="story-title">I trained as a teacher. I found my craft in keeping things in order.</h2>
            <p>
              My degree from Obafemi Awolowo University is in Education and Chemistry, a background that taught me
              precision, patience and how to explain complicated things simply. Those instincts turned out to be
              exactly what remote teams needed.
            </p>
            <p>
              Over the last five years I’ve supported founders and companies across Nigeria and the UK: managing
              inboxes and calendars, running end-to-end recruitment support, and keeping social channels and records
              in good order. In 2024 I sharpened those skills through ALX Academy’s virtual assistant training.
            </p>
            <p>
              The through-line has never changed. I take the scattered, time-consuming parts of a busy role and turn
              them into something quiet and dependable.
            </p>
            <p className="signature" aria-hidden="true">Oluwakemi</p>
          </Reveal>
        </div>
      </section>

      <section className="section bg-ivory" aria-labelledby="values-title">
        <div className="wrap">
          <SectionHead id="values-title" align="center" eyebrow="How I work" title={<>Four things you can <em>count on</em>.</>} />
          <div className="grid-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i + 1} className="value-card">
                <span className="svc-icon svc-icon--terra"><Icon name={v.icon} /></span>
                <h3 className="h4">{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="edu-title">
        <div className="wrap edu-grid">
          <div className="edu-head">
            <SectionHead id="edu-title" eyebrow="Education & training" title="Where the discipline comes from." />
            <Reveal delay={1}><Button to="/experience" variant="ghost" icon="east">See my experience</Button></Reveal>
          </div>
          <ol className="edu-list">
            {education.map((e, i) => (
              <Reveal as="li" key={e.school} delay={i + 1} className="edu-item">
                <span className="edu-icon"><Icon name={i === education.length - 1 ? 'school' : 'verified'} /></span>
                <div>
                  <p className="edu-year">
                    {e.year}
                    {e.upcoming && <span className="chip">In progress</span>}
                  </p>
                  <h3 className="h4">{e.school}</h3>
                  <p className="edu-award">{e.award}</p>
                  <p>{e.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="Think we’d work well together?"
        lead="I’d love to hear what you’re building and where I can help."
        secondary={{ to: '/services', label: 'See my services' }}
      />
    </>
  )
}
