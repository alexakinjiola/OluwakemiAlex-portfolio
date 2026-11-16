import Icon from './Icon.jsx'

// Cut-out portrait sitting on a soft circle, with floating detail cards around it.
export default function Portrait() {
  return (
    <figure className="portrait">
      <div className="portrait-ring" aria-hidden="true" />
      <div className="portrait-disc" aria-hidden="true" />
      <div className="portrait-leaf" aria-hidden="true" />
      <Icon name="auto_awesome" fill className="portrait-spark portrait-spark--a" />
      <Icon name="auto_awesome" fill className="portrait-spark portrait-spark--b" />

      <picture className="portrait-photo">
        <source
          srcSet="/images/oluwakemi-cutout-600.webp 600w, /images/oluwakemi-cutout.webp 900w"
          sizes="(max-width: 900px) 80vw, 460px"
          type="image/webp"
        />
        <img
          src="/images/oluwakemi.jpg"
          alt="Oluwakemi Mary Alex smiling, in a red off-shoulder top and pearl earrings"
          width="900"
          height="1016"
          fetchPriority="high"
        />
      </picture>

      <div className="float-card float-card--years" aria-hidden="true">
        <span className="fc-icon fc-icon--terra"><Icon name="workspace_premium" /></span>
        <span><b>5 years</b><small>Admin &amp; remote support</small></span>
      </div>

      <div className="float-card float-card--growth" aria-hidden="true">
        <span className="fc-row">
          <small>Brand visibility</small>
          <span className="fc-trend"><Icon name="trending_up" /></span>
        </span>
        <b>+23%</b>
        <svg viewBox="0 0 120 36" className="spark" focusable="false">
          <defs>
            <linearGradient id="sparkFill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#636F49" stopOpacity=".22" />
              <stop offset="1" stopColor="#636F49" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M2 32 C 20 30, 26 24, 40 25 S 62 16, 74 17 S 96 6, 118 4 L 118 36 L 2 36 Z" fill="url(#sparkFill)" stroke="none" />
          <path d="M2 32 C 20 30, 26 24, 40 25 S 62 16, 74 17 S 96 6, 118 4" />
        </svg>
        <small className="fc-foot">Errandpay content calendars</small>
      </div>

      <div className="float-card float-card--status" aria-hidden="true">
        <span className="dot" />
        <span>Open to remote roles</span>
      </div>
    </figure>
  )
}
