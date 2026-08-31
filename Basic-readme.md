## Component Tree

```bash
App
├── GameContainer
│   ├── WelcomeScreen
│   │   ├── Logo
│   │   └── PlayButton
│   │
│   ├── SetupScreen
│   │   ├── PlayerNameInput (x2)
│   │   └── ModeSelector (Friend/Robot)
│   │
│   └── GameScreen
│       ├── Header
│       │   ├── PlayerBadge (X)
│       │   ├── ScoreDisplay
│       │   └── PlayerBadge (O)
│       │
│       ├── Board
│       │   └── Cell (x9)
│       │
│       ├── TurnIndicator
│       │
│       └── ResultOverlay
│           ├── WinnerMessage
│           ├── ScoreSummary
│           └── ActionButtons
│
├── RobotStatus (optional - overlay)
└── SoundToggle (optional)
```

---

## Folder Structure

```bash
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Input.tsx
│   │
│   ├── game/
│   │   ├── WelcomeScreen.tsx
│   │   ├── SetupScreen.tsx
│   │   ├── GameScreen.tsx
│   │   ├── Board.tsx
│   │   ├── Cell.tsx
│   │   ├── Scoreboard.tsx
│   │   ├── TurnIndicator.tsx
│   │   └── ResultOverlay.tsx
│   │
│   └── layout/
│       └── GameContainer.tsx
│
├── logic/
│   ├── gameLogic.ts      # win detection, move validation
│   ├── robotLogic.ts     # AI strategies
│   └── constants.ts      # winning combinations
│
├── hooks/
│   ├── useGame.ts        # main game state hook
│   └── useAnimation.ts   # animation helpers
│
├── types/
│   └── game.ts           # TypeScript types
│
├── animations/
│   └── variants.ts       # Framer Motion variants
│
├── styles/
│   └── index.css         # Tailwind imports + custom
│
├── App.tsx
└── main.tsx
```
