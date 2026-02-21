# Rubik

Rubik is a Next.js + TypeScript web app for simulating, editing, validating, shuffling, and solving a 3x3 Rubik's Cube using a beginner-style solving flow.

## Summary

- Interactive cube UI with both flattened faces and 3D visualization.
- Manual color editing mode for custom cube states.
- Import/export support using flattened string format.
- Validation utilities to detect invalid cube states.
- Step-by-step solver actions and auto-solve animation.
- Multi-language UI support through a language context and translation files.

## Tech Stack

- Next.js 13 (App Router)
- React 18
- TypeScript
- Tailwind CSS

## Run Locally

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Commands

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Production Build

```bash
npm run build
```

This project is configured for static export (`output: 'export'`) and writes build output to `out/`.

## Code Info

### Main App Flow

- `src/app/page.tsx`
  - Main cube workspace and action handling.
  - Manages state for cube model, rotation queue, animation, import errors, and action history.
  - Connects UI actions (shuffle, validate, solution, auto-solve, import/export, manual mode) to utility functions.

### UI Components (`src/components`)

- `Rubik3DComponent.tsx`: 3D cube rendering.
- `FlattenRubikComponent.tsx`: 2D flattened cube view.
- `RotateComponent.tsx`: rotation controls.
- `ColorPickerComponent.tsx`: color selection for manual editing.
- `ImportComponent.tsx`: import dialog/input.
- `Header.tsx`, `LanguageButton.tsx`, `HelpButton.tsx`, `ContactButton.tsx`: app shell and navigation controls.

### Domain Models (`src/models`)

- `RubikModel.ts`: central cube representation and default cube creation.
- `RubikFaceModel.ts`, `RubikCellModel.ts`: face/cell shape definitions.

### Core Utilities (`src/utilities`)

- `rotateUtilities.ts`: applies single/multi rotation actions.
- `shuffleUtilities.ts`: generates randomized scramble actions.
- `solveUtilities.ts`: generates solving steps/actions.
- `validateUtilities.ts`: validates cube correctness and formats errors.
- `ioUtilities.ts`: import/export converters for flattened string format.
- `renderUtilities.tsx`: helper rendering structures such as `FaceGrid`.

### Rotation Implementations

- `src/utilities/rotations/*`: low-level clockwise/combined rotation logic by face/layer.

### Solving Steps

- `src/utilities/solutions/*`: beginner-method solving steps split into focused modules (cross, corners, middle layer, last layer).

### Internationalization

- `src/context/LanguageContext.tsx`: runtime language provider.
- `src/i18n/en.ts`, `src/i18n/vi.ts`: translation sources.

## Notes

- `materials/` contains reference learning content used during development.
- Formatting: `npm run format` and `npm run format:check`.
