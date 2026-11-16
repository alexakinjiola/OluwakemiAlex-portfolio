import { createContext, useContext, useEffect, useState } from 'react'

// Whether the first-launch intro has finished, so page entrances can wait for it.
const IntroContext = createContext({ ready: true, playing: false })
export const useIntro = () => useContext(IntroContext)

const KEY = 'oa-intro-seen-v1'

export function shouldPlayIntro() {
  if (typeof window === 'undefined') return false
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false
  if (new URLSearchParams(window.location.search).has('intro')) return true
  try { return !localStorage.getItem(KEY) } catch { return false }
}

export function markIntroSeen() {
  try { localStorage.setItem(KEY, '1') } catch { /* private mode: replay is harmless */ }
}

export function IntroProvider({ children }) {
  const [playing, setPlaying] = useState(shouldPlayIntro)
  const [ready, setReady] = useState(!playing)

  useEffect(() => {
    document.documentElement.classList.toggle('is-intro', playing)
  }, [playing])

  const value = {
    playing,
    ready,
    reveal: () => setReady(true),
    finish: () => { markIntroSeen(); setReady(true); setPlaying(false) },
  }
  return <IntroContext.Provider value={value}>{children}</IntroContext.Provider>
}
