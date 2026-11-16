import { Link } from 'react-router'
import Icon from './Icon.jsx'

export default function Button({ to, href, variant = 'primary', icon = 'arrow_forward', magnetic = true, children, className = '', ...rest }) {
  const cls = `btn btn--${variant}${magnetic && variant !== 'link' ? ' magnetic' : ''}${className ? ` ${className}` : ''}`
  const inner = (
    <>
      <span className="btn-fill" aria-hidden="true" />
      <span className="btn-label">{children}</span>
      {icon && <span className="btn-icon-wrap" aria-hidden="true"><Icon name={icon} className="btn-icon" /><Icon name={icon} className="btn-icon btn-icon--next" /></span>}
    </>
  )
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>
  return <button className={cls} {...rest}>{inner}</button>
}
