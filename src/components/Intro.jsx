import { useEffect, useRef, useState } from 'react'
import { motion, animate } from 'motion/react'
import { useIntro } from '../motion/intro.jsx'
import { MARK_O, MARK_A } from './markPaths.js'

const EASE = [0.76, 0, 0.24, 1]
const NAME = 'Oluwakemi Alex'

/** First-launch intro: the seal draws itself, the name rises, then the curtain lifts. */
export default function Intro() {
  const { playing, reveal, finish } = useIntro()
  const [phase, setPhase] = useState('draw') // draw -> lift
  const [count, setCount] = useState(0)
  const skipRef = useRef(null)

  useEffect(() => {
    if (!playing) return
    const counter = animate(0, 100, {
      duration: 2.1,
      ease: [0.33, 0, 0.2, 1],
      onUpdate: (v) => setCount(Math.round(v)),
    })
    const t1 = setTimeout(() => setPhase('lift'), 2450)
    const t2 = setTimeout(reveal, 2800)
    const t3 = setTimeout(finish, 3500)
    const onKey = (e) => { if (e.key === 'Escape') skip() }
    window.addEventListener('keydown', onKey)
    skipRef.current?.focus({ preventScroll: true })
    return () => { counter.stop(); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); window.removeEventListener('keydown', onKey) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing])

  function skip() { setPhase('lift'); reveal(); setTimeout(finish, 900) }

  if (!playing) return null

  const lifting = phase === 'lift'

  return (
    <div className="intro" role="dialog" aria-label="Welcome" aria-live="polite">
      <motion.div
        className="intro-panel intro-panel--accent"
        initial={{ y: 0 }}
        animate={{ y: lifting ? '-100%' : 0 }}
        transition={{ duration: 1, ease: EASE, delay: lifting ? 0.12 : 0 }}
      />
      <motion.div
        className="intro-panel"
        initial={{ y: 0 }}
        animate={{ y: lifting ? '-100%' : 0 }}
        transition={{ duration: 0.95, ease: EASE }}
      >
        <motion.div
          className="intro-center"
          animate={lifting ? { opacity: 0, y: -40 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <svg className="intro-mark" viewBox="0 0 120 120" aria-hidden="true">
            <motion.circle
              cx="60" cy="60" r="55.5" fill="none" className="mark-ring"
              initial={{ pathLength: 0, rotate: -90 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: [0.65, 0, 0.35, 1] }}
              style={{ originX: '50%', originY: '50%' }}
            />
            <motion.path
              d={MARK_O} className="mark-o"
              initial={{ opacity: 0, scale: 0.86 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{ originX: '50%', originY: '50%' }}
            />
            <motion.path
              d={MARK_A} className="mark-a"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
          </svg>

          <p className="intro-name" aria-label={NAME}>
            {NAME.split('').map((ch, i) => (
              <span className="intro-char-mask" key={i} aria-hidden="true">
                <motion.span
                  className="intro-char"
                  initial={{ y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.75 + i * 0.035, ease: [0.16, 1, 0.3, 1] }}
                >
                  {ch === ' ' ? ' ' : ch}
                </motion.span>
              </span>
            ))}
          </p>
          <motion.p
            className="intro-role"
            initial={{ opacity: 0, letterSpacing: '0.5em' }}
            animate={{ opacity: 1, letterSpacing: '0.3em' }}
            transition={{ duration: 1.1, delay: 1.25, ease: [0.16, 1, 0.3, 1] }}
          >
            Virtual Assistant
          </motion.p>
        </motion.div>

        <motion.div
          className="intro-foot"
          animate={{ opacity: lifting ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <span className="intro-count" aria-hidden="true">{String(count).padStart(3, '0')}</span>
          <span className="intro-line" aria-hidden="true"><span style={{ transform: `scaleX(${count / 100})` }} /></span>
          <button ref={skipRef} type="button" className="intro-skip" onClick={skip}>Skip intro</button>
        </motion.div>
      </motion.div>
    </div>
  )
}
