import { Link } from 'react-router'
import Icon from './Icon.jsx'

export default function Button({ to, href, variant = 'primary', icon = 'arrow_forward', children, className = '', ...rest }) {
  const cls = `btn btn--${variant}${className ? ` ${className}` : ''}`
  const inner = (
    <>
      <span>{children}</span>
      {icon && <Icon name={icon} className="btn-icon" />}
    </>
  )
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>
  return <button className={cls} {...rest}>{inner}</button>
}
