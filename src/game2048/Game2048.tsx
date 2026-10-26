import { useRef } from 'react'
import type { TouchEvent } from 'react'
import { SIZE } from './logic'
import { useGame } from './useGame'
import './game2048.css'

// Tiles are 22.5% of the board with a 3.333% gap, so one step = 25.833% / 22.5%.
const STEP = 114.815
const CELL_STEP = 25.833

export default function Game2048() {
  const { state, move, newGame, keepGoing } = useGame()
  const touchStart = useRef<{ x: number; y: number } | null>(null)

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    const t = e.touches[0]
    touchStart.current = { x: t.clientX, y: t.clientY }
  }

  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    const start = touchStart.current
    if (!start) return
    touchStart.current = null

    const t = e.changedTouches[0]
    const dx = t.clientX - start.x
    const dy = t.clientY - start.y
    if (Math.max(Math.abs(dx), Math.abs(dy)) < 24) return

    if (Math.abs(dx) > Math.abs(dy)) move(dx > 0 ? 'right' : 'left')
    else move(dy > 0 ? 'down' : 'up')
  }

  return (
    <div className="game2048">
      <header className="g-header">
        <h1>2048</h1>
        <div className="g-scores">
          <div className="g-score">
            <small>Score</small>
            <b>{state.score}</b>
          </div>
          <div className="g-score">
            <small>Best</small>
            <b>{state.best}</b>
          </div>
        </div>
      </header>

      <div className="g-bar">
        <p>
          Join the tiles and reach <b>2048</b>.
        </p>
        <button onClick={newGame}>New game</button>
      </div>

      <div
        className="g-board"
        aria-label="2048 game board"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {Array.from({ length: SIZE * SIZE }, (_, i) => (
          <div
            key={i}
            className="g-cell"
            style={{
              left: `${(i % SIZE) * CELL_STEP}%`,
              top: `${Math.floor(i / SIZE) * CELL_STEP}%`,
            }}
          />
        ))}

        {state.tiles.map((t) => {
          const classes = [
            'g-tile',
            `d${String(t.value).length}`,
            t.value > 2048 && 'big',
            t.isNew && 'new',
            t.merged && 'pop',
          ]
            .filter(Boolean)
            .join(' ')

          return (
            <div
              key={t.id}
              className={classes}
              data-value={t.value}
              style={{
                transform: `translate(${t.col * STEP}%, ${t.row * STEP}%)`,
                zIndex: t.removing ? 1 : 2,
              }}
            >
              {t.value}
            </div>
          )
        })}

        {state.status !== 'playing' && (
          <div className="g-overlay">
            <h2>{state.status === 'won' ? 'You win!' : 'Game over'}</h2>
            <div>
              {state.status === 'won' && (
                <button onClick={keepGoing}>Keep going</button>
              )}
              <button onClick={newGame}>Try again</button>
            </div>
          </div>
        )}
      </div>

      <p className="g-hint">Use the arrow keys, WASD, or swipe on the board.</p>
    </div>
  )
}
