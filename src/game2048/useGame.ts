import { useCallback, useEffect, useReducer } from 'react'
import { createGame, gameReducer } from './logic'
import type { Direction } from './types'

const BEST_KEY = 'best2048'

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

export function useGame() {
  const [state, dispatch] = useReducer(gameReducer, undefined, () =>
    createGame(loadBest()),
  )

  const move = useCallback(
    (direction: Direction) => dispatch({ type: 'move', direction }),
    [],
  )
  const newGame = useCallback(() => dispatch({ type: 'new' }), [])
  const keepGoing = useCallback(() => dispatch({ type: 'keepGoing' }), [])

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

  return { state, move, newGame, keepGoing }
}
