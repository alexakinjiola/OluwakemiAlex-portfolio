import { Link } from 'react-router'
import { MARK_O, MARK_A } from './markPaths.js'

/** The OA seal: an italic O cradling an upright A, inside a fine ring. */
export function Mark({ size = 44, tone = 'default', ring = true, className = '', ...rest }) {
  return (
    <svg
      className={`mark mark--${tone}${className ? ` ${className}` : ''}`}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {tone === 'solid' && <circle className="mark-bg" cx="60" cy="60" r="60" />}
      {ring && <circle className="mark-ring" cx="60" cy="60" r="55.5" fill="none" pathLength="1" />}
      <path className="mark-o" d={MARK_O} />
      <path className="mark-a" d={MARK_A} />
    </svg>
  )
}

/** Full lockup: seal + wordmark. */
export default function Logo({ tone = 'dark' }) {
  return (
    <Link to="/" className={`logo logo--${tone}`} aria-label="Oluwakemi Alex, Virtual Assistant. Home">
      <Mark size={44} tone={tone === 'light' ? 'light' : 'default'} />
      <span className="logo-words" aria-hidden="true">
        <span className="logo-name">Oluwakemi Alex</span>
        <span className="logo-role">Virtual Assistant</span>
      </span>
    </Link>
  )
}
