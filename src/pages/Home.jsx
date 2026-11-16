import { companies, services, process, values, person } from '../data/site.js'
import useTitle from '../hooks/useTitle.js'
import Button from '../components/Button.jsx'
import Icon from '../components/Icon.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHead from '../components/SectionHead.jsx'
import Portrait from '../components/Portrait.jsx'
import AgendaCard from '../components/AgendaCard.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import StatsBand from '../components/StatsBand.jsx'
import Marquee from '../components/Marquee.jsx'
import ContactBlock from '../components/ContactBlock.jsx'
import SplitText from '../motion/SplitText.jsx'
import Parallax from '../motion/Parallax.jsx'

const facts = [
  { icon: 'workspace_premium', title: '5 years', text: 'Experience' },
  { icon: 'location_on', title: 'Lagos, Nigeria', text: 'Working with UK & NG teams' },
  { icon: 'schedule', title: 'Remote & part-time', text: 'Flexible hours' },
  { icon: 'school', title: 'ALX-trained', text: 'Virtual Assistant Programme' },
]

export default function Home() {
  useTitle()

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="hero" aria-labelledby="hero-title">
        <Parallax className="hero-shape" speed={40} aria-hidden="true" />
        <Parallax className="hero-leaf-wrap" speed={120} rotate={10} aria-hidden="true"><div className="hero-leaf sway" /></Parallax>
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <Reveal className="hero-chip-row">
              <span className="hero-chip"><span className="dot" aria-hidden="true" />{person.availability}</span>
            </Reveal>
            <Reveal as="p" className="kicker kicker--line" delay={1}>Hi, I’m Oluwakemi</Reveal>
            <SplitText as="h1" className="display hero-title" id="hero-title" delay={0.15} stagger={0.08}>
              The calm behind a <span className="script">busy</span> desk.
            </SplitText>
            <Reveal as="p" className="lead" delay={4}>
              I’m a virtual assistant who keeps inboxes clear, calendars honest and hiring pipelines
              moving, so founders and remote teams can spend their attention where it counts.
            </Reveal>
            <Reveal className="hero-actions" delay={5}>
              <Button to="/contact">Work with me</Button>
              <Button to="/services" variant="link" icon={null}>
                <span className="circle-icon" aria-hidden="true"><Icon name="east" /></span>
                See how I help
              </Button>
            </Reveal>
            <Reveal className="trusted" delay={6}>
              <ul className="trusted-marks" aria-hidden="true">
                {companies.map((c) => <li key={c}>{c[0]}</li>)}
              </ul>
              <p>Trusted by teams at <b>{companies.slice(0, -1).join(', ')}</b> and <b>{companies.at(-1)}</b></p>
            </Reveal>
          </div>
          <div className="hero-media">
            <Portrait />
          </div>
        </div>
        <Reveal className="scroll-cue" delay={8} aria-hidden="true">
          <span className="scroll-cue-line"><span /></span>
          <span>Scroll</span>
        </Reveal>
      </section>

      <Marquee />

      {/* ---------- About ---------- */}
      <section className="section about-intro" aria-labelledby="about-intro-title">
        <div className="wrap about-grid">
          <Reveal className="about-visual" variant="scale">
            <AgendaCard />
          </Reveal>
          <div className="about-copy">
            <Reveal as="p" className="kicker kicker--line"><span className="kicker-num">01</span>About me</Reveal>
            <SplitText as="h2" className="h2" id="about-intro-title">
              I’m all about calm systems, clear updates and nothing <em>slipping</em>.
            </SplitText>
            <Reveal as="p" delay={2}>
              I trained as a teacher and found my craft in keeping things in order. For five years I’ve supported
              founders and companies across Nigeria and the UK, taking the scattered, time-consuming parts of a busy
              role and turning them into something quiet and dependable.
            </Reveal>
            <Reveal delay={3}><Button to="/about" variant="olive">More about me</Button></Reveal>
          </div>
          <ul className="about-facts">
            {facts.map((f, i) => (
              <Reveal as="li" key={f.title} delay={i + 2}>
                <span className="af-icon"><Icon name={f.icon} /></span>
                <span><b>{f.title}</b><small>{f.text}</small></span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Services ---------- */}
      <section className="section bg-ivory" aria-labelledby="services-title">
        <div className="wrap">
          <SectionHead
            id="services-title"
            align="center"
            num="02"
            eyebrow="Services"
            title={<>How I can take work <em>off your plate</em>.</>}
            intro="Four things I own end-to-end, with the systems and follow-through to make them disappear from your worry list."
          />
          <div className="grid-4">
            {services.map((s, i) => (
              <Reveal key={s.id} delay={i + 1} className="h-full">
                <ServiceCard service={s} index={i + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <StatsBand />

      {/* ---------- Process ---------- */}
      <section className="section" aria-labelledby="process-title">
        <div className="wrap">
          <SectionHead id="process-title" align="center" num="03" eyebrow="How we’d start" title={<>Simple to begin. <em>Easy</em> to keep.</>} />
          <ol className="steps">
            {process.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i + 1} className="step spot">
                <span className="step-icon"><Icon name={p.icon} /></span>
                <span className="step-num">Step {i + 1}</span>
                <h3 className="h4">{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ---------- Why me ---------- */}
      <section className="section section--flush-top" aria-labelledby="why-title">
        <div className="wrap">
          <Reveal className="why-panel" variant="scale">
            <div className="why-photo">
              <picture>
                <source srcSet="/images/oluwakemi-cutout-600.webp" type="image/webp" />
                <img src="/images/oluwakemi.jpg" alt="" width="600" height="677" decoding="async" />
              </picture>
            </div>
            <div className="why-copy">
              <p className="kicker kicker--line kicker--light"><span className="kicker-num">04</span>Why work with me</p>
              <SplitText as="h2" className="h2" id="why-title">Support you never have to think about.</SplitText>
              <p>Clear updates, sensible questions and minimal supervision. You delegate once and move on with your day.</p>
              <Button to="/contact" variant="light">Start a conversation</Button>
            </div>
            <ul className="why-list">
              {values.map((v) => (
                <li key={v.title}>
                  <span className="why-icon"><Icon name={v.icon} /></span>
                  {v.title.replace(/\.$/, '')}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <ContactBlock
        num="05"
        title={<>Have a busy week in mind? I’d love to <em>hear about it</em>.</>}
        lead="Tell me what’s on your plate and I’ll tell you exactly how I’d take it off."
      />
    </>
  )
}
