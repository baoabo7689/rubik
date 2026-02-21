import type { RubikFaceName } from '@/constants/rubikFaces';

/**
 * Represents a cell position on a face in a 3x3 grid (0-indexed)
 * Row and column indices: 0 = top/left, 1 = middle, 2 = bottom/right
 */
export interface CellPosition {
  face: RubikFaceName;
  color: string | null;

  row: number;
  col: number;
}

/**
 * Edge piece: belongs to exactly 2 faces
 * Each edge piece is identified by two cell positions on adjacent faces
 */
export interface EdgePiece {
  type: 'edge';
  positions: [CellPosition, CellPosition];
}

/**
 * Corner piece: belongs to exactly 3 faces
 * Each corner piece is identified by three cell positions on adjacent faces
 */
export interface CornerPiece {
  type: 'corner';
  positions: [CellPosition, CellPosition, CellPosition];
}

/**
 * All 12 edge pieces on a standard 3x3x3 Rubik's Cube
 */
export const EDGE_PIECES: readonly EdgePiece[] = [
  // Up face edges
  {
    type: 'edge',
    positions: [
      { face: 'U', row: 0, col: 1, color: null },
      { face: 'B', row: 0, col: 1, color: null },
    ],
  },
  {
    type: 'edge',
    positions: [
      { face: 'U', row: 1, col: 2, color: null },
      { face: 'R', row: 0, col: 1, color: null },
    ],
  },
  {
    type: 'edge',
    positions: [
      { face: 'U', row: 2, col: 1, color: null },
      { face: 'F', row: 0, col: 1, color: null },
    ],
  },
  {
    type: 'edge',
    positions: [
      { face: 'U', row: 1, col: 0, color: null },
      { face: 'L', row: 0, col: 1, color: null },
    ],
  },

  // Middle layer edges
  {
    type: 'edge',
    positions: [
      { face: 'F', row: 1, col: 2, color: null },
      { face: 'R', row: 1, col: 0, color: null },
    ],
  },
  {
    type: 'edge',
    positions: [
      { face: 'R', row: 1, col: 2, color: null },
      { face: 'B', row: 1, col: 0, color: null },
    ],
  },
  {
    type: 'edge',
    positions: [
      { face: 'B', row: 1, col: 2, color: null },
      { face: 'L', row: 1, col: 0, color: null },
    ],
  },
  {
    type: 'edge',
    positions: [
      { face: 'L', row: 1, col: 2, color: null },
      { face: 'F', row: 1, col: 0, color: null },
    ],
  },

  // Down face edges
  {
    type: 'edge',
    positions: [
      { face: 'D', row: 0, col: 1, color: null },
      { face: 'F', row: 2, col: 1, color: null },
    ],
  },
  {
    type: 'edge',
    positions: [
      { face: 'D', row: 1, col: 2, color: null },
      { face: 'R', row: 2, col: 1, color: null },
    ],
  },
  {
    type: 'edge',
    positions: [
      { face: 'D', row: 2, col: 1, color: null },
      { face: 'B', row: 2, col: 1, color: null },
    ],
  },
  {
    type: 'edge',
    positions: [
      { face: 'D', row: 1, col: 0, color: null },
      { face: 'L', row: 2, col: 1, color: null },
    ],
  },
] as const;

/**
 * All 8 corner pieces on a standard 3x3x3 Rubik's Cube
 */
export const CORNER_PIECES: readonly CornerPiece[] = [
  // Up face corners
  {
    type: 'corner',
    positions: [
      { face: 'U', row: 0, col: 0, color: null },
      { face: 'L', row: 0, col: 0, color: null },
      { face: 'B', row: 0, col: 2, color: null },
    ],
  },
  {
    type: 'corner',
    positions: [
      { face: 'U', row: 0, col: 2, color: null },
      { face: 'B', row: 0, col: 0, color: null },
      { face: 'R', row: 0, col: 2, color: null },
    ],
  },
  {
    type: 'corner',
    positions: [
      { face: 'U', row: 2, col: 2, color: null },
      { face: 'R', row: 0, col: 0, color: null },
      { face: 'F', row: 0, col: 2, color: null },
    ],
  },
  {
    type: 'corner',
    positions: [
      { face: 'U', row: 2, col: 0, color: null },
      { face: 'F', row: 0, col: 0, color: null },
      { face: 'L', row: 0, col: 2, color: null },
    ],
  },

  // Down face corners
  {
    type: 'corner',
    positions: [
      { face: 'D', row: 0, col: 0, color: null },
      { face: 'F', row: 2, col: 0, color: null },
      { face: 'L', row: 2, col: 2, color: null },
    ],
  },
  {
    type: 'corner',
    positions: [
      { face: 'D', row: 0, col: 2, color: null },
      { face: 'R', row: 2, col: 0, color: null },
      { face: 'F', row: 2, col: 2, color: null },
    ],
  },
  {
    type: 'corner',
    positions: [
      { face: 'D', row: 2, col: 2, color: null },
      { face: 'B', row: 2, col: 0, color: null },
      { face: 'R', row: 2, col: 2, color: null },
    ],
  },
  {
    type: 'corner',
    positions: [
      { face: 'D', row: 2, col: 0, color: null },
      { face: 'L', row: 2, col: 0, color: null },
      { face: 'B', row: 2, col: 2, color: null },
    ],
  },
] as const;

/**
 * Helper to get the color of a specific cell position from a Rubik model
 */
export function getCellColor(rubik: any, position: CellPosition): string | null {
  const face = rubik.getFace(position.face);
  return face.cells[position.row][position.col].color;
}

/**
 * Helper to return an edge piece with colors assigned from the Rubik model
 */
export function assignEdgePieceColors(rubik: any, edge: EdgePiece): EdgePiece {
  edge.positions.forEach((pos) => {
    pos.color = getCellColor(rubik, pos);
  });

  return { ...edge };
}

export function isEdgeMatchColor(
  edge: EdgePiece,
  color1: string | null,
  color2: string | null
): boolean {
  const edgeColors = [edge.positions[0].color, edge.positions[1].color].sort();
  const targetColors = [color1, color2].sort();

  return edgeColors[0] === targetColors[0] && edgeColors[1] === targetColors[1];
}

/**
 * Helper to return a corner piece with colors assigned from the Rubik model
 */
export function assignCornerPieceColors(rubik: any, corner: CornerPiece): CornerPiece {
  corner.positions.forEach((pos) => {
    pos.color = getCellColor(rubik, pos);
  });

  return { ...corner };
}

export function isCornerMatchColor(
  corner: CornerPiece,
  color1: string | null,
  color2: string | null,
  color3: string | null
): boolean {
  const cColor1 = corner.positions[0].color;
  const cColor2 = corner.positions[1].color;
  const cColor3 = corner.positions[2].color;

  const cornerColors = [cColor1, cColor2, cColor3].sort();
  const targetColors = [color1, color2, color3].sort();

  return (
    cornerColors[0] === targetColors[0] &&
    cornerColors[1] === targetColors[1] &&
    cornerColors[2] === targetColors[2]
  );
}

export function findCorner(faceA: string, faceB: string, faceC: string) {
  return CORNER_PIECES.find(
    (corner) =>
      corner.positions.some((pos) => pos.face === faceA) &&
      corner.positions.some((pos) => pos.face === faceB) &&
      corner.positions.some((pos) => pos.face === faceC)
  );
}
