import Icon from './Icon.jsx'

// Arched portrait with soft floating cards, the signature of the hero.
export default function Portrait() {
  return (
    <figure className="portrait">
      <div className="portrait-blob" aria-hidden="true" />
      <div className="portrait-arch">
        <picture>
          <source srcSet="/images/oluwakemi-600.webp 600w, /images/oluwakemi.webp 900w" sizes="(max-width: 900px) 80vw, 460px" type="image/webp" />
          <img
            src="/images/oluwakemi.jpg"
            alt="Oluwakemi Mary Alex smiling, in a red off-shoulder top and pearl earrings"
            width="900"
            height="1016"
            fetchPriority="high"
          />
        </picture>
      </div>

      <div className="float-card float-card--years" aria-hidden="true">
        <span className="fc-icon fc-icon--bordeaux"><Icon name="workspace_premium" /></span>
        <span><b>5 years</b><small>Admin &amp; remote support</small></span>
      </div>

      <div className="float-card float-card--growth" aria-hidden="true">
        <small>Brand visibility, Errandpay</small>
        <b>+23%</b>
        <svg viewBox="0 0 120 36" className="spark" focusable="false">
          <path d="M2 32 C 20 30, 26 24, 40 25 S 62 16, 74 17 S 96 6, 118 4" />
        </svg>
      </div>

      <div className="float-card float-card--status" aria-hidden="true">
        <span className="dot" />
        <span>Open to remote roles</span>
      </div>
    </figure>
  )
}
