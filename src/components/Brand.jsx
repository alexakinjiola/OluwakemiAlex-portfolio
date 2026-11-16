import { Link } from 'react-router'

export default function Brand({ tone = 'dark' }) {
  return (
    <Link to="/" className={`brand brand--${tone}`} aria-label="Oluwakemi Alex, home">
      <span className="brand-name">Oluwakemi Alex</span>
      <span className="brand-role">Virtual Assistant</span>
    </Link>
  )
}
