import RubikModel from '@/models/RubikModel';
import { rotateRubikByActions } from '../rotateUtilities';
import { RubikFaceName } from '@/constants/rubikFaces';
import { RotationAction } from '@/constants/rotationActions';
import {
  assignCornerPieceColors,
  CORNER_PIECES,
  getCellColor,
  isCornerMatchColor,
} from './pieceTypes';
import { UFRSolution } from './step2_1_UFR';
import { URBSolution } from './step2_2_URB';
import { UBLSolution } from './step2_3_UBL';
import { ULFSolution } from './step2_4_ULF';

/**
 * Find the edge piece with A-B colors and return steps to position it correctly
 * @param rubik - The current Rubik's cube state
 * @returns Array of rotation actions needed to position the corner correctly
 */
export function solveCorner(
  rubik: RubikModel,
  faceA: RubikFaceName,
  faceB: RubikFaceName,
  faceC: RubikFaceName,
  solution: Record<string, RotationAction[]>
): RotationAction[] {
  // Get center colors for the specified faces
  const colorA = getCellColor(rubik, { face: faceA, row: 1, col: 1, color: null });
  const colorB = getCellColor(rubik, { face: faceB, row: 1, col: 1, color: null });
  const colorC = getCellColor(rubik, { face: faceC, row: 1, col: 1, color: null });

  // Find the corner piece that has these three colors
  for (const corner of CORNER_PIECES) {
    assignCornerPieceColors(rubik, corner);

    if (!isCornerMatchColor(corner, colorA, colorB, colorC)) {
      continue;
    }

    const positionA = corner.positions.find((pos) => pos.color === colorA)!.face;
    const positionB = corner.positions.find((pos) => pos.color === colorB)!.face;
    const positionC = corner.positions.find((pos) => pos.color === colorC)!.face;
    const cornerPosition = `${positionA}${positionB}${positionC}`;
    return solution[cornerPosition as keyof typeof solution] || [];
  }

  return [];
}

/**
 * Solve the up corners (second step of CFOP method)
 * @param rubik - The current Rubik's cube state
 * @returns Array of rotation actions to complete the up corners
 */
export function solveUpCorners(rubik: RubikModel): {
  actions: RotationAction[];
  afterRubik: RubikModel;
} {
  const ufrActions = solveCorner(rubik, 'U', 'F', 'R', UFRSolution);
  const afterUFR = rotateRubikByActions(rubik, ufrActions);

  const urbActions = solveCorner(afterUFR, 'U', 'R', 'B', URBSolution);
  const afterURB = rotateRubikByActions(afterUFR, urbActions);

  const ublActions = solveCorner(afterURB, 'U', 'B', 'L', UBLSolution);
  const afterUBL = rotateRubikByActions(afterURB, ublActions);

  const ulfActions = solveCorner(afterUBL, 'U', 'L', 'F', ULFSolution);
  const afterULF = rotateRubikByActions(afterUBL, ulfActions);

  return {
    afterRubik: afterULF,
    actions: [
      'Separate',
      ...ufrActions,
      'Separate',
      ...urbActions,
      'Separate',
      ...ublActions,
      'Separate',
      ...ulfActions,
    ],
  };
}
