import type RubikModel from '@/models/RubikModel';
import { rotateRubikByActions } from '@/utilities/rotateUtilities';
import { RubikFaceName } from '@/constants/rubikFaces';
import { assignEdgePieceColors, EDGE_PIECES, getCellColor, isEdgeMatchColor } from './pieceTypes';
import { URSolution } from './step1_1_UREdge';
import { UBSolution } from './step1_2_UBEdge';
import { ULSolution } from './step1_3_ULEdge';
import { UFSolution } from './step1_4_UF_Edge';
import { RotationAction } from '@/constants/rotationActions';

/**
 * Find the edge piece with A-B colors and return steps to position it correctly
 * @param rubik - The current Rubik's cube state
 * @returns Array of rotation actions needed to position the edge correctly
 */
export function solveEdge(
  rubik: RubikModel,
  faceA: RubikFaceName,
  faceB: RubikFaceName,
  solution: Record<string, RotationAction[]>
): RotationAction[] {
  // Get center colors for the specified faces
  const colorA = getCellColor(rubik, { face: faceA, row: 1, col: 1, color: null });
  const colorB = getCellColor(rubik, { face: faceB, row: 1, col: 1, color: null });

  // Find the edge piece that has these two colors
  for (const edge of EDGE_PIECES) {
    assignEdgePieceColors(rubik, edge);

    if (!isEdgeMatchColor(edge, colorA, colorB)) {
      continue;
    }

    const positionA = edge.positions.find((pos) => pos.color === colorA)!.face;
    const positionB = edge.positions.find((pos) => pos.color === colorB)!.face;
    const edgePosition = `${positionA}${positionB}`;
    return solution[edgePosition as keyof typeof solution] || [];
  }

  return [];
}

/**
 * Solve the up cross (first step of CFOP method)
 * @param rubik - The current Rubik's cube state
 * @returns Array of rotation actions to complete the up cross
 */
export function solveUpCross(rubik: RubikModel): {
  actions: RotationAction[];
  afterRubik: RubikModel;
} {
  const urActions = solveEdge(rubik, 'U', 'R', URSolution);
  const afterUR = rotateRubikByActions(rubik, urActions);

  const ubActions = solveEdge(afterUR, 'U', 'B', UBSolution);
  const afterUB = rotateRubikByActions(afterUR, ubActions);

  const ulActions = solveEdge(afterUB, 'U', 'L', ULSolution);
  const afterUL = rotateRubikByActions(afterUB, ulActions);

  const ufActions = solveEdge(afterUL, 'U', 'F', UFSolution);
  const afterUF = rotateRubikByActions(afterUL, ufActions);

  return {
    afterRubik: afterUF,
    actions: [
      ...urActions,
      'Separate',
      ...ubActions,
      'Separate',
      ...ulActions,
      'Separate',
      ...ufActions,
    ],
  };
}
