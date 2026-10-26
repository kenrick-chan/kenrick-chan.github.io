import type { Action, Direction, GameState, Status, Tile } from './types'

export const SIZE = 4
export const WIN_VALUE = 2048

type Grid = (Tile | null)[][]

const inBounds = (r: number, c: number): boolean =>
  r >= 0 && r < SIZE && c >= 0 && c < SIZE

function toGrid(tiles: Tile[]): Grid {
  const grid: Grid = Array.from({ length: SIZE }, () =>
    Array<Tile | null>(SIZE).fill(null),
  )
  for (const t of tiles) {
    if (!t.removing) grid[t.row][t.col] = t
  }
  return grid
}

export function addRandomTile(
  tiles: Tile[],
  nextId: number,
  rng: () => number = Math.random,
): { tiles: Tile[]; nextId: number } {
  const grid = toGrid(tiles)
  const empty: [number, number][] = []
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (!grid[r][c]) empty.push([r, c])
    }
  }
  if (empty.length === 0) return { tiles, nextId }

  const [row, col] = empty[Math.floor(rng() * empty.length)]
  const tile: Tile = {
    id: nextId,
    value: rng() < 0.9 ? 2 : 4,
    row,
    col,
    isNew: true,
    merged: false,
    removing: false,
  }
  return { tiles: [...tiles, tile], nextId: nextId + 1 }
}

/** Slides and merges every tile in one direction. Pure: returns new tile objects. */
export function slide(
  tiles: Tile[],
  direction: Direction,
): { tiles: Tile[]; gained: number; moved: boolean } {
  const dx = direction === 'left' ? -1 : direction === 'right' ? 1 : 0
  const dy = direction === 'up' ? -1 : direction === 'down' ? 1 : 0

  const live = tiles
    .filter((t) => !t.removing)
    .map((t) => ({ ...t, isNew: false, merged: false }))
  const grid = toGrid(live)

  // Walk from the edge the tiles are heading toward.
  const order = [0, 1, 2, 3]
  const rows = dy === 1 ? [...order].reverse() : order
  const cols = dx === 1 ? [...order].reverse() : order

  const absorbed: Tile[] = []
  const absorbedIds = new Set<number>()
  let gained = 0
  let moved = false

  for (const r of rows) {
    for (const c of cols) {
      const tile = grid[r][c]
      if (!tile) continue

      let nr = r
      let nc = c
      while (inBounds(nr + dy, nc + dx) && !grid[nr + dy][nc + dx]) {
        nr += dy
        nc += dx
      }

      const target = inBounds(nr + dy, nc + dx) ? grid[nr + dy][nc + dx] : null

      if (target && target.value === tile.value && !target.merged) {
        grid[r][c] = null
        target.value *= 2
        target.merged = true
        gained += target.value
        absorbedIds.add(tile.id)
        absorbed.push({ ...tile, row: target.row, col: target.col, removing: true })
        moved = true
      } else if (nr !== r || nc !== c) {
        grid[r][c] = null
        grid[nr][nc] = tile
        tile.row = nr
        tile.col = nc
        moved = true
      }
    }
  }

  return {
    tiles: [...live.filter((t) => !absorbedIds.has(t.id)), ...absorbed],
    gained,
    moved,
  }
}

export function canMove(tiles: Tile[]): boolean {
  const grid = toGrid(tiles)
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      const cell = grid[r][c]
      if (!cell) return true
      if (c < SIZE - 1 && grid[r][c + 1]?.value === cell.value) return true
      if (r < SIZE - 1 && grid[r + 1][c]?.value === cell.value) return true
    }
  }
  return false
}

export function createGame(best: number): GameState {
  const first = addRandomTile([], 1)
  const second = addRandomTile(first.tiles, first.nextId)
  return {
    tiles: second.tiles,
    score: 0,
    best,
    nextId: second.nextId,
    status: 'playing',
    keepGoing: false,
  }
}

export function gameReducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case 'new':
      return createGame(state.best)

    case 'keepGoing':
      return { ...state, status: 'playing', keepGoing: true }

    case 'cleanup':
      return { ...state, tiles: state.tiles.filter((t) => !t.removing) }

    case 'move': {
      if (state.status !== 'playing') return state

      const result = slide(state.tiles, action.direction)
      if (!result.moved) return state

      const added = addRandomTile(result.tiles, state.nextId)
      const score = state.score + result.gained
      const live = added.tiles.filter((t) => !t.removing)

      let status: Status = 'playing'
      if (!state.keepGoing && live.some((t) => t.value >= WIN_VALUE)) {
        status = 'won'
      } else if (!canMove(live)) {
        status = 'over'
      }

      return {
        ...state,
        tiles: added.tiles,
        nextId: added.nextId,
        score,
        best: Math.max(state.best, score),
        status,
      }
    }
  }
}
