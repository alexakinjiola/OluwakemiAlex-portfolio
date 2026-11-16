import { companies, highlights, services, results, process } from '../data/site.js'
import useTitle from '../hooks/useTitle.js'
import Button from '../components/Button.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Portrait from '../components/Portrait.jsx'
import AgendaCard from '../components/AgendaCard.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import ContactBlock from '../components/ContactBlock.jsx'

export default function Home() {
  useTitle()

  return (
    <>
      {/* Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-wash" aria-hidden="true" />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <Reveal><p className="eyebrow">Hi, I’m Oluwakemi</p></Reveal>
            <Reveal as="h1" className="display hero-title" id="hero-title" delay={1}>
              The calm behind a <em>busy</em> desk.
            </Reveal>
            <Reveal as="p" className="lead" delay={2}>
              I keep inboxes clear, calendars honest and hiring pipelines moving, so founders and
              remote teams can spend their attention where it counts.
            </Reveal>
            <Reveal className="hero-actions" delay={3}>
              <Button to="/contact">Start a conversation</Button>
              <Button to="/services" variant="ghost" icon="east">See how I help</Button>
            </Reveal>
            <Reveal className="trusted" delay={4}>
              <p>Trusted by teams at</p>
              <ul>
                {companies.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </Reveal>
          </div>
          <Reveal className="hero-media" delay={2}>
            <Portrait />
          </Reveal>
        </div>
      </section>

      {/* Highlights strip */}
      <section className="strip-wrap" aria-label="At a glance">
        <div className="wrap">
          <Reveal as="ul" className="strip">
            {highlights.map((h) => (
              <li key={h.label}>
                <span className="strip-icon"><Icon name={h.icon} /></span>
                <span>
                  <b>{h.value}<span className="unit">{h.suffix}</span></b>
                  <small>{h.label}</small>
                </span>
              </li>
            ))}
          </Reveal>
        </div>
      </section>

      {/* About intro */}
      <section className="section about-intro" aria-labelledby="about-intro-title">
        <div className="wrap about-grid">
          <Reveal className="about-visual">
            <AgendaCard />
          </Reveal>
          <Reveal className="about-copy" delay={1}>
            <p className="eyebrow">About me</p>
            <h2 className="h2" id="about-intro-title">
              I trained as a teacher. I found my craft in keeping things <em>in order</em>.
            </h2>
            <p>
              Five years supporting founders and companies across Nigeria and the UK, from admin desks to
              remote recruitment. I take the scattered, time-consuming parts of a busy role and turn them
              into something quiet and dependable.
            </p>
            <Button to="/about" variant="soft">More about me</Button>
          </Reveal>
          <Reveal as="ul" className="about-points" delay={2}>
            <li><Icon name="task_alt" /><span><b>Nothing slips</b><small>Follow-through is the job</small></span></li>
            <li><Icon name="lock" /><span><b>Discreet by default</b><small>Your data, handled with care</small></span></li>
            <li><Icon name="school" /><span><b>ALX-trained</b><small>Virtual Assistant Programme</small></span></li>
            <li><Icon name="schedule" /><span><b>Remote &amp; part-time</b><small>UK and Nigeria hours</small></span></li>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-cream" aria-labelledby="services-title">
        <div className="wrap">
          <SectionHead
            id="services-title"
            align="center"
            eyebrow="Services"
            title={<>What I take off <em>your</em> plate.</>}
            intro="Four things I own end-to-end, with the systems and follow-through to make them disappear from your worry list."
          />
          <div className="grid-4">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i + 1} className="h-full">
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Results band */}
      <section className="results" aria-labelledby="results-title">
        <div className="results-leaf" aria-hidden="true" />
        <div className="wrap">
          <SectionHead id="results-title" eyebrow="Proof, not promises" title="Small, careful work that adds up." />
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

      {/* Process */}
      <section className="section" aria-labelledby="process-title">
        <div className="wrap">
          <SectionHead
            id="process-title"
            align="center"
            eyebrow="How we’d start"
            title="Simple to begin. Easy to keep."
          />
          <ol className="steps">
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

      {/* Quote */}
      <section className="quote-band" aria-label="A note on how I work">
        <div className="wrap">
          <Reveal as="figure" className="pull">
            <Icon name="format_quote" fill className="pull-mark" />
            <blockquote>
              <p>Order isn’t about control. It’s about giving people back their <em>attention</em>.</p>
            </blockquote>
            <figcaption>Oluwakemi Alex</figcaption>
          </Reveal>
        </div>
      </section>

      <ContactBlock
        title={<>Have a busy week in mind? I’d love to hear about it.</>}
        lead="Tell me what’s on your plate. I’ll tell you exactly how I’d take it off."
      />
    </>
  )
}
