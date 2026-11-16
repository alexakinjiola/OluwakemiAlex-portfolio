import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import CountUp from '../motion/CountUp.jsx'
import Parallax from '../motion/Parallax.jsx'

const stats = [
  { icon: 'workspace_premium', value: '5', unit: 'yrs', label: 'Admin & remote support' },
  { icon: 'trending_up', value: '+23', unit: '%', label: 'Brand visibility, Errandpay' },
  { icon: 'article', value: '+15', unit: '%', label: 'Online presence from blog' },
  { icon: 'apartment', value: '4', unit: '', label: 'Companies in two countries' },
]

export default function StatsBand() {
  return (
    <section className="stats-band" aria-label="Results at a glance">
      <Parallax className="stats-leaf-wrap" speed={40} rotate={8} aria-hidden="true"><div className="stats-leaf sway" /></Parallax>
      <div className="wrap">
        <ul className="stats">
          {stats.map((s, i) => (
            <Reveal as="li" key={s.label} delay={i + 1}>
              <Icon name={s.icon} className="stats-icon" />
              <span>
                <b><CountUp value={s.value} /><span className="unit">{s.unit}</span></b>
                <small>{s.label}</small>
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
