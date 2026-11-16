import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'motion/react'
import Icon from './Icon.jsx'
import Parallax from '../motion/Parallax.jsx'
import { useIntro } from '../motion/intro.jsx'

const EASE = [0.16, 1, 0.3, 1]

// Cut-out portrait on a soft disc. The scene tilts gently toward the pointer,
// and the cards float in once the page (or the intro) is ready.
export default function Portrait() {
  const { ready } = useIntro()
  const reduce = useReducedMotion()
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 80, damping: 18 })
  const sy = useSpring(my, { stiffness: 80, damping: 18 })
  const photoX = useTransform(sx, (v) => v * 10)
  const photoY = useTransform(sy, (v) => v * 8)
  const cardX = useTransform(sx, (v) => v * -18)
  const cardY = useTransform(sy, (v) => v * -14)

  const onMove = (e) => {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  const card = (delay) => ({
    initial: { opacity: 0, y: 24, scale: 0.94 },
    animate: ready ? { opacity: 1, y: 0, scale: 1 } : {},
    transition: { duration: 0.9, delay, ease: EASE },
  })

  return (
    <figure className="portrait" onPointerMove={onMove} onPointerLeave={onLeave}>
      <div className="portrait-ring" aria-hidden="true" />
      <motion.div
        className="portrait-disc"
        aria-hidden="true"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={ready ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1.2, ease: EASE }}
      />
      <Parallax className="portrait-leaf-wrap" speed={30} rotate={4} aria-hidden="true"><div className="portrait-leaf sway" /></Parallax>
      <Icon name="auto_awesome" fill className="portrait-spark portrait-spark--a twinkle" />
      <Icon name="auto_awesome" fill className="portrait-spark portrait-spark--b twinkle" />

      <motion.picture
        className="portrait-photo"
        style={{ x: photoX, y: photoY }}
        initial={{ opacity: 0, y: 60 }}
        animate={ready ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.3, delay: 0.15, ease: EASE }}
      >
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
      </motion.picture>

      <motion.div className="float-layer" style={{ x: cardX, y: cardY }} aria-hidden="true">
        <motion.div className="float-card float-card--years" {...card(0.55)}>
          <span className="fc-icon fc-icon--terra"><Icon name="workspace_premium" /></span>
          <span><b>5 years</b><small>Admin &amp; remote support</small></span>
        </motion.div>

        <motion.div className="float-card float-card--growth" {...card(0.7)}>
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
            <motion.path
              d="M2 32 C 20 30, 26 24, 40 25 S 62 16, 74 17 S 96 6, 118 4"
              initial={{ pathLength: 0 }}
              animate={ready ? { pathLength: 1 } : {}}
              transition={{ duration: 1.4, delay: 1, ease: [0.65, 0, 0.35, 1] }}
            />
          </svg>
          <small className="fc-foot">Errandpay content calendars</small>
        </motion.div>

        <motion.div className="float-card float-card--status" {...card(0.85)}>
          <span className="dot" />
          <span>Open to remote roles</span>
        </motion.div>
      </motion.div>
    </figure>
  )
}
