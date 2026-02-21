import { RotationAction } from '@/constants/rotationActions';
import RubikModel from '@/models/RubikModel';
import { assignEdgePieceColors, EDGE_PIECES, EdgePiece, getCellColor } from './pieceTypes';
import { rotateRubikByActions } from '../rotateUtilities';
import { lastLayerEdgesTransformation } from './transformations';

function findEdge(faceA: string, faceB: string) {
  return EDGE_PIECES.find(
    (edge) =>
      edge.positions.some((pos) => pos.face === faceA) &&
      edge.positions.some((pos) => pos.face === faceB)
  );
}

function getULActions(
  lColor: string,
  ulEdgeColor: string,
  ubEdgeColor: string,
  urEdgeColor: string
): RotationAction[] {
  if (ulEdgeColor === lColor) {
    return [];
  }

  if (ubEdgeColor === lColor) {
    return ['rU'];
  }

  if (urEdgeColor === lColor) {
    return ['U', 'U'];
  }

  return ['U'];
}

function getFRBActions(
  rubik: RubikModel,
  fEdge: EdgePiece,
  rEdge: EdgePiece,
  bEdge: EdgePiece,
  fColor: string,
  rColor: string,
  bColor: string
): RotationAction[] {
  assignEdgePieceColors(rubik, fEdge);
  assignEdgePieceColors(rubik, rEdge);
  assignEdgePieceColors(rubik, bEdge);
  const fEdgeColor = fEdge.positions[1].color!;
  const rEdgeColor = rEdge.positions[1].color!;

  if (fEdgeColor === fColor && rEdgeColor === rColor) {
    return [];
  }

  if (fEdgeColor === fColor && rEdgeColor === bColor) {
    return ['U', 'U', ...lastLayerEdgesTransformation, 'rU', 'rU'];
  }

  if (fEdgeColor === rColor && rEdgeColor === fColor) {
    return ['U', ...lastLayerEdgesTransformation, 'rU'];
  }

  if (fEdgeColor === rColor && rEdgeColor === bColor) {
    return ['U', 'U', ...lastLayerEdgesTransformation, 'rU', ...lastLayerEdgesTransformation, 'rU'];
  }

  if (fEdgeColor === bColor && rEdgeColor === fColor) {
    return ['U', ...lastLayerEdgesTransformation, 'U', ...lastLayerEdgesTransformation, 'rU', 'rU'];
  }

  return [
    'U',
    ...lastLayerEdgesTransformation,
    'U',
    ...lastLayerEdgesTransformation,
    'rU',
    ...lastLayerEdgesTransformation,
    'rU',
  ];
}

/**
 * Solve the last layer edges (fifth step of CFOP method)
 * @param rubik - The current Rubik's cube state
 * @returns Array of rotation actions to complete the last layer edges
 */
export function solveLastLayerEdges(rubik: RubikModel): {
  actions: RotationAction[];
  afterRubik: RubikModel;
} {
  // console.log('Before Step 5:' + toFlattenStyleString(rubik));

  const lColor = getCellColor(rubik, { face: 'L', row: 1, col: 1, color: null })!;
  const fColor = getCellColor(rubik, { face: 'F', row: 1, col: 1, color: null })!;
  const rColor = getCellColor(rubik, { face: 'R', row: 1, col: 1, color: null })!;
  const bColor = getCellColor(rubik, { face: 'B', row: 1, col: 1, color: null })!;

  const ulEdge = findEdge('U', 'L')!;
  const ubEdge = findEdge('U', 'B')!;
  const urEdge = findEdge('U', 'R')!;
  const ufEdge = findEdge('U', 'F')!;
  assignEdgePieceColors(rubik, ulEdge);
  assignEdgePieceColors(rubik, ubEdge);
  assignEdgePieceColors(rubik, urEdge);
  assignEdgePieceColors(rubik, ufEdge);

  const ulEdgeColor = ulEdge.positions[1].color!;
  const ubEdgeColor = ubEdge.positions[1].color!;
  const urEdgeColor = urEdge.positions[1].color!;

  const ulActions = getULActions(lColor, ulEdgeColor, ubEdgeColor, urEdgeColor);
  const afterUL = rotateRubikByActions(rubik, ulActions);

  const frbActions = getFRBActions(afterUL, ufEdge, urEdge, ubEdge, fColor, rColor, bColor);
  const afterFRB = rotateRubikByActions(afterUL, frbActions);

  return {
    actions: ['Separate', ...ulActions, ...frbActions] as RotationAction[],
    afterRubik: afterFRB,
  };
}
