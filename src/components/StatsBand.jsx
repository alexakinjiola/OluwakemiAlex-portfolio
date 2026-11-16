import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'

const stats = [
  { icon: 'workspace_premium', value: '5', unit: 'yrs', label: 'Admin & remote support' },
  { icon: 'trending_up', value: '+23', unit: '%', label: 'Brand visibility, Errandpay' },
  { icon: 'article', value: '+15', unit: '%', label: 'Online presence from blog' },
  { icon: 'apartment', value: '4', unit: '', label: 'Companies in two countries' },
]

export default function StatsBand() {
  return (
    <section className="stats-band" aria-label="Results at a glance">
      <div className="stats-leaf" aria-hidden="true" />
      <div className="wrap">
        <Reveal as="ul" className="stats">
          {stats.map((s) => (
            <li key={s.label}>
              <Icon name={s.icon} className="stats-icon" />
              <span>
                <b>{s.value}<span className="unit">{s.unit}</span></b>
                <small>{s.label}</small>
              </span>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
