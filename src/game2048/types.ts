export type Direction = 'left' | 'right' | 'up' | 'down'

export type Status = 'playing' | 'won' | 'over'

export interface Tile {
  id: number
  value: number
  row: number
  col: number
  /** Just spawned; plays the "appear" animation. */
  isNew: boolean
  /** Result of a merge this move; plays the "pop" animation. */
  merged: boolean
  /** Merged into another tile; slides into place, then gets cleaned up. */
  removing: boolean
}

export interface GameState {
  tiles: Tile[]
  score: number
  best: number
  nextId: number
  status: Status
  keepGoing: boolean
}

export type Action =
  | { type: 'move'; direction: Direction }
  | { type: 'new' }
  | { type: 'keepGoing' }
  | { type: 'cleanup' }
