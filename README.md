# 2048

A 2048 game built with React, TypeScript, and Vite.

## Run it

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check and build to dist/
npm run preview  # preview the production build
```

Controls: arrow keys, WASD, or swipe on the board.

## Structure

- `src/game2048/types.ts`: shared types
- `src/game2048/logic.ts`: pure game rules and reducer
- `src/game2048/useGame.ts`: hook for state, keyboard input, best score
- `src/game2048/Game2048.tsx`: the component
- `src/game2048/game2048.css`: scoped styles (light and dark)
