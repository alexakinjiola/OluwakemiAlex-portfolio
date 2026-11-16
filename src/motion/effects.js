import { useEffect } from 'react'
import Lenis from 'lenis'

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
const finePointer = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches

let lenis = null
export const getLenis = () => lenis

/** Buttery smooth scrolling (skipped for reduced motion and touch, where native feels right). */
export function useSmoothScroll() {
  useEffect(() => {
    if (reduced() || !finePointer()) return
    lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 4), anchors: false })
    let id
    const raf = (time) => { lenis?.raf(time); id = requestAnimationFrame(raf) }
    id = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(id); lenis?.destroy(); lenis = null }
  }, [])
}

/** Spotlight glow that follows the pointer on any `.spot` element; magnetic pull on `.magnetic`. */
export function usePointerEffects() {
  useEffect(() => {
    if (reduced() || !finePointer()) return
    const onMove = (e) => {
      const spot = e.target.closest?.('.spot')
      if (spot) {
        const r = spot.getBoundingClientRect()
        spot.style.setProperty('--mx', `${e.clientX - r.left}px`)
        spot.style.setProperty('--my', `${e.clientY - r.top}px`)
      }
      const mag = e.target.closest?.('.magnetic')
      document.querySelectorAll('.magnetic.is-pulled').forEach((m) => {
        if (m !== mag) { m.classList.remove('is-pulled'); m.style.transform = '' }
      })
      if (mag) {
        const r = mag.getBoundingClientRect()
        const x = (e.clientX - (r.left + r.width / 2)) * 0.22
        const y = (e.clientY - (r.top + r.height / 2)) * 0.3
        mag.classList.add('is-pulled')
        mag.style.transform = `translate(${x}px, ${y}px)`
      }
    }
    const onLeave = () => document.querySelectorAll('.magnetic.is-pulled').forEach((m) => { m.classList.remove('is-pulled'); m.style.transform = '' })
    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    return () => { window.removeEventListener('pointermove', onMove); document.removeEventListener('pointerleave', onLeave) }
  }, [])
}
