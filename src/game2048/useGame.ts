import { useCallback, useEffect, useReducer, useState } from 'react'
import { createGame, gameReducer, parseSavedGame, toSavedGame } from './logic'
import type { Direction } from './types'

const BEST_KEY = 'best2048'
const SAVE_KEY = 'game2048-save'

const KEYS: Record<string, Direction> = {
  ArrowLeft: 'left',
  ArrowRight: 'right',
  ArrowUp: 'up',
  ArrowDown: 'down',
  a: 'left',
  d: 'right',
  w: 'up',
  s: 'down',
}

function loadBest(): number {
  try {
    return Number(localStorage.getItem(BEST_KEY)) || 0
  } catch {
    return 0
  }
}

function readSave(): string | null {
  try {
    return localStorage.getItem(SAVE_KEY)
  } catch {
    return null
  }
}

export function useGame() {
  const [state, dispatch] = useReducer(gameReducer, undefined, () =>
    createGame(loadBest()),
  )
  const [hasSave, setHasSave] = useState(() => readSave() !== null)
  const [notice, setNotice] = useState('')

  const move = useCallback(
    (direction: Direction) => dispatch({ type: 'move', direction }),
    [],
  )
  const newGame = useCallback(() => dispatch({ type: 'new' }), [])
  const keepGoing = useCallback(() => dispatch({ type: 'keepGoing' }), [])

  const save = useCallback(() => {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(toSavedGame(state)))
      setHasSave(true)
      setNotice('Game saved.')
    } catch {
      setNotice("Couldn't save. Browser storage may be blocked.")
    }
  }, [state])

  const load = useCallback(() => {
    const raw = readSave()
    if (raw === null) {
      setNotice('No saved game yet.')
      return
    }
    try {
      const saved = parseSavedGame(JSON.parse(raw))
      if (!saved) throw new Error('invalid save')
      dispatch({ type: 'load', state: saved })
      setNotice('Game loaded.')
    } catch {
      setNotice('The saved game is damaged and could not be loaded.')
    }
  }, [])

  // Keyboard controls
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const direction: Direction | undefined = KEYS[e.key]
      if (!direction) return
      e.preventDefault()
      move(direction)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [move])

  // Swipe anywhere on the page, and stop the page from scrolling
  useEffect(() => {
    let start: { x: number; y: number } | null = null

    const onTouchStart = (e: TouchEvent) => {
      const t = e.touches[0]
      start = { x: t.clientX, y: t.clientY }
    }

    const onTouchEnd = (e: TouchEvent) => {
      if (!start) return
      const t = e.changedTouches[0]
      const dx = t.clientX - start.x
      const dy = t.clientY - start.y
      start = null
      if (Math.max(Math.abs(dx), Math.abs(dy)) < 24) return // treat as a tap
      if (Math.abs(dx) > Math.abs(dy)) move(dx > 0 ? 'right' : 'left')
      else move(dy > 0 ? 'down' : 'up')
    }

    // Some mobile browsers ignore touch-action, so block scrolling explicitly
    const onTouchMove = (e: TouchEvent) => e.preventDefault()

    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    return () => {
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('touchmove', onTouchMove)
    }
  }, [move])

  // Remember the best score
  useEffect(() => {
    try {
      localStorage.setItem(BEST_KEY, String(state.best))
    } catch {
      /* storage unavailable: ignore */
    }
  }, [state.best])

  // Drop merged-away tiles once their slide animation has finished
  useEffect(() => {
    if (!state.tiles.some((t) => t.removing)) return
    const id = setTimeout(() => dispatch({ type: 'cleanup' }), 130)
    return () => clearTimeout(id)
  }, [state.tiles])

  // Fade the save/load message after a moment
  useEffect(() => {
    if (!notice) return
    const id = setTimeout(() => setNotice(''), 2500)
    return () => clearTimeout(id)
  }, [notice])

  return { state, move, newGame, keepGoing, save, load, hasSave, notice }
}
