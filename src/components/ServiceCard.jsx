import { Link } from 'react-router'
import Icon from './Icon.jsx'

export default function ServiceCard({ service, detailed = false, index }) {
  return (
    <article className={`service-card spot${detailed ? ' service-card--detailed' : ''}`}>
      <div className="svc-top">
        <span className={`svc-icon svc-icon--${service.tone}`}><Icon name={service.icon} /></span>
        {index && <span className="svc-num" aria-hidden="true">0{index}</span>}
      </div>
      <h3 className="h4">{detailed ? service.long : service.title}</h3>
      <p>{detailed ? service.text : service.short}</p>
      {detailed ? (
        <ul className="tags" aria-label={`${service.long} includes`}>
          {service.tags.map((t) => <li key={t}>{t}</li>)}
        </ul>
      ) : (
        <Link to={`/services#${service.id}`} className="text-link">
          Learn more<span className="sr-only"> about {service.title.toLowerCase()}</span>
          <Icon name="arrow_forward" />
        </Link>
      )}
    </article>
  )
}
