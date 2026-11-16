import Icon from './Icon.jsx'

const items = ['Inbox management', 'Calendar & scheduling', 'Recruitment support', 'Content calendars', 'Social media', 'Data & records', 'Report preparation', 'Calendly bookings']

// Slow ticker of what she handles. Decorative: the same list lives in the services section.
export default function Marquee() {
  const row = items.map((t) => (
    <span className="mq-item" key={t}>{t}<Icon name="spa" className="mq-sep" /></span>
  ))
  return (
    <div className="marquee" aria-hidden="true">
      <div className="mq-track">
        <div className="mq-row">{row}</div>
        <div className="mq-row">{row}</div>
      </div>
    </div>
  )
}
