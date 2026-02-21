import RubikModel from '@/models/RubikModel';
import { rotateRubikByActions } from '../rotateUtilities';
import { assignEdgePieceColors, EDGE_PIECES, getCellColor, isEdgeMatchColor } from './pieceTypes';
import { RubikFaceName } from '@/constants/rubikFaces';
import { RotationAction } from '@/constants/rotationActions';
import { FLSolution } from './step3_1_FL';
import { FRSolution } from './step3_2_FR';
import { BLSolution } from './step3_3_BL';
import { BRSolution } from './step3_4_BR';

/**
 * Solve the middle layer (third step of CFOP method)
 * @param rubik - The current Rubik's cube state
 * @returns Array of rotation actions to complete the middle layer
 */
export function solveMiddleEdge(
  rubik: RubikModel,
  faceA: RubikFaceName,
  faceB: RubikFaceName,
  solution: Record<string, RotationAction[]>
): RotationAction[] {
  const colorA = getCellColor(rubik, { face: faceA, row: 1, col: 1, color: null });
  const colorB = getCellColor(rubik, { face: faceB, row: 1, col: 1, color: null });

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
 * Solve the middle layer (third step of CFOP method)
 * @param rubik - The current Rubik's cube state
 * @returns Array of rotation actions to complete the middle layer
 */
export function solveMiddleLayer(rubik: RubikModel): {
  actions: RotationAction[];
  afterRubik: RubikModel;
} {
  // flip rubik to make it easier to solve middle layer
  // we can keep it normal but need more transformation back from original solution to our rotations
  const flippedRubik = rotateRubikByActions(rubik, ['RL', 'RL']);

  const mflActions = solveMiddleEdge(flippedRubik, 'F', 'L', FLSolution);
  const afterMFL = rotateRubikByActions(flippedRubik, mflActions);

  const mfrActions = solveMiddleEdge(afterMFL, 'F', 'R', FRSolution);
  const afterMFR = rotateRubikByActions(afterMFL, mfrActions);

  const flippedRubik2 = rotateRubikByActions(afterMFR, ['UD', 'UD']);
  const mblActions = solveMiddleEdge(flippedRubik2, 'F', 'L', BLSolution);
  const afterMBL = rotateRubikByActions(flippedRubik2, mblActions);

  const mbrActions = solveMiddleEdge(afterMBL, 'F', 'R', BRSolution);
  const afterMBR = rotateRubikByActions(afterMBL, mbrActions);

  return {
    actions: [
      'Separate',
      'RL',
      'RL',
      ...mflActions,
      'Separate',
      ...mfrActions,
      'Separate',
      'UD',
      'UD',
      ...mblActions,
      'Separate',
      ...mbrActions,
    ],
    afterRubik: afterMBR,
  };
}
