import Icon from './Icon.jsx'

// An illustrative "sorted day": shows the kind of work she owns without inventing numbers.
const items = [
  { time: '08:30', icon: 'inbox', title: 'Inbox triaged', meta: 'Flagged 3 for your reply', done: true },
  { time: '10:00', icon: 'event_available', title: 'Interviews scheduled', meta: 'Calendly, no clashes', done: true },
  { time: '13:00', icon: 'edit_calendar', title: 'Content calendar', meta: 'This week’s posts queued', done: true },
  { time: '16:30', icon: 'summarize', title: 'Weekly report', meta: 'In your inbox by 5', done: false },
]

export default function AgendaCard() {
  return (
    <div className="agenda" role="img" aria-label="Illustration of an organised workday: inbox triaged, interviews scheduled, content calendar queued and a weekly report on the way.">
      <div className="agenda-leaf" aria-hidden="true" />
      <div className="agenda-card" aria-hidden="true">
        <div className="agenda-head">
          <span>
            <small>Your Monday</small>
            <b>Already sorted.</b>
          </span>
          <span className="agenda-pill"><Icon name="check_circle" fill />3 of 4</span>
        </div>
        <ul>
          {items.map((it) => (
            <li key={it.time} className={it.done ? 'is-done' : ''}>
              <span className="agenda-icon"><Icon name={it.icon} /></span>
              <span className="agenda-text"><b>{it.title}</b><small>{it.time} · {it.meta}</small></span>
              <Icon name={it.done ? 'check_circle' : 'radio_button_unchecked'} fill={it.done} className="agenda-check" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
