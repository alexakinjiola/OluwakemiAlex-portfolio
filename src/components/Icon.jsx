// Google Material Symbols (Rounded). Decorative by default; pass `label` when the icon carries meaning on its own.
export default function Icon({ name, label, fill = false, className = '' }) {
  return (
    <span
      className={`icon${fill ? ' icon--fill' : ''}${className ? ` ${className}` : ''}`}
      aria-hidden={label ? undefined : true}
      role={label ? 'img' : undefined}
      aria-label={label}
    >
      {name}
    </span>
  )
}
