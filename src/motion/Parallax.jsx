import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion, useSpring } from 'motion/react'

// Moves decoration at a different speed to the page while its section is on screen.
export default function Parallax({ speed = 60, rotate = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })
  const y = useTransform(smooth, [0, 1], [speed, -speed])
  const r = useTransform(smooth, [0, 1], [-rotate, rotate])
  return (
    <motion.div ref={ref} className={className} style={reduce ? undefined : { y, rotate: r }} {...rest}>
      {children}
    </motion.div>
  )
}
