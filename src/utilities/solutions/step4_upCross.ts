import { RotationAction } from '@/constants/rotationActions';
import RubikModel from '@/models/RubikModel';
import { assignEdgePieceColors, EDGE_PIECES, EdgePiece, getCellColor } from './pieceTypes';
import { rotateRubikByActions } from '../rotateUtilities';
import { lastLayerCrossTransformation } from './transformations';

function findEdge(faceA: string, faceB: string) {
  return EDGE_PIECES.find(
    (edge) =>
      edge.positions.some((pos) => pos.face === faceA) &&
      edge.positions.some((pos) => pos.face === faceB)
  );
}

function countUpColor(
  ubEdge: EdgePiece,
  urEdge: EdgePiece,
  ufEdge: EdgePiece,
  ulEdge: EdgePiece,
  upColor: string
) {
  let upCount = 0;

  [ubEdge, urEdge, ufEdge, ulEdge].forEach((edge) => {
    if (edge.positions[0].color === upColor) {
      upCount++;
    }
  });

  return upCount;
}

/**
 * Solve the last layer cross (fourth step of CFOP method)
 * @param rubik - The current Rubik's cube state
 * @returns Array of rotation actions to complete the last layer cross
 */
export function solveLastLayerCross(rubik: RubikModel): {
  actions: RotationAction[];
  afterRubik: RubikModel;
} {
  const upColor = getCellColor(rubik, { face: 'U', row: 1, col: 1, color: null })!;

  const ubEdge = findEdge('U', 'B')!;
  const urEdge = findEdge('U', 'R')!;
  const ufEdge = findEdge('U', 'F')!;
  const ulEdge = findEdge('U', 'L')!;

  assignEdgePieceColors(rubik, ubEdge);
  assignEdgePieceColors(rubik, urEdge);
  assignEdgePieceColors(rubik, ufEdge);
  assignEdgePieceColors(rubik, ulEdge);

  const upCount = countUpColor(ubEdge, urEdge, ufEdge, ulEdge, upColor);

  // lastLayerCrossTransformation
  // this transform move 2 color to top => color in top always even number [exclude middle]
  if (upCount === 4) {
    return {
      actions: [],
      afterRubik: rubik,
    };
  }

  if (upCount === 0) {
    const actions = [
      'Separate',
      ...lastLayerCrossTransformation,
      'U',
      'U',
      ...lastLayerCrossTransformation,
      ...lastLayerCrossTransformation,
    ] as RotationAction[];
    const afterLastLayerCross = rotateRubikByActions(rubik, actions);
    return { actions, afterRubik: afterLastLayerCross };
  }

  if (ulEdge.positions[0].color === upColor && urEdge.positions[0].color === upColor) {
    const actions = ['Separate', ...lastLayerCrossTransformation] as RotationAction[];
    const afterLastLayerCross = rotateRubikByActions(rubik, actions);
    return { actions, afterRubik: afterLastLayerCross };
  }

  if (ubEdge.positions[0].color === upColor && ufEdge.positions[0].color === upColor) {
    const actions = ['Separate', 'U', ...lastLayerCrossTransformation] as RotationAction[];
    const afterLastLayerCross = rotateRubikByActions(rubik, actions);
    return { actions, afterRubik: afterLastLayerCross };
  }

  if (ulEdge.positions[0].color === upColor && ubEdge.positions[0].color === upColor) {
    const actions = [
      'Separate',
      ...lastLayerCrossTransformation,
      ...lastLayerCrossTransformation,
    ] as RotationAction[];
    const afterLastLayerCross = rotateRubikByActions(rubik, actions);
    return { actions, afterRubik: afterLastLayerCross };
  }

  if (ubEdge.positions[0].color === upColor && urEdge.positions[0].color === upColor) {
    const actions = [
      'Separate',
      'rU',
      ...lastLayerCrossTransformation,
      ...lastLayerCrossTransformation,
    ] as RotationAction[];
    const afterLastLayerCross = rotateRubikByActions(rubik, actions);
    return { actions, afterRubik: afterLastLayerCross };
  }

  if (urEdge.positions[0].color === upColor && ufEdge.positions[0].color === upColor) {
    const actions = [
      'Separate',
      'U',
      'U',
      ...lastLayerCrossTransformation,
      ...lastLayerCrossTransformation,
    ] as RotationAction[];
    const afterLastLayerCross = rotateRubikByActions(rubik, actions);
    return { actions, afterRubik: afterLastLayerCross };
  }

  const actions = [
    'Separate',
    'U',
    ...lastLayerCrossTransformation,
    ...lastLayerCrossTransformation,
  ] as RotationAction[];
  const afterLastLayerCross = rotateRubikByActions(rubik, actions);
  return { actions, afterRubik: afterLastLayerCross };
}
