import { useEffect } from 'react'

const BASE = 'Oluwakemi Mary Alex'

export default function useTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · ${BASE}, Virtual Assistant` : `${BASE} · Virtual Assistant & Remote Executive Support`
  }, [title])
}
