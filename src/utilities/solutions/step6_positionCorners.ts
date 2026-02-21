import { RotationAction } from '@/constants/rotationActions';
import RubikModel from '@/models/RubikModel';
import {
  assignCornerPieceColors,
  CORNER_PIECES,
  CornerPiece,
  findCorner,
  getCellColor,
  isCornerMatchColor,
} from './pieceTypes';
import { rotateRubikByActions } from '../rotateUtilities';
import { lastLayerPositionCornersTransformation } from './transformations';

function getFRActions(
  rubik: RubikModel,
  frCorner: CornerPiece,
  rbCorner: CornerPiece,
  blCorner: CornerPiece
): RotationAction[] {
  const upColor = getCellColor(rubik, { face: 'U', row: 1, col: 1, color: null })!;
  const frontColor = getCellColor(rubik, { face: 'F', row: 1, col: 1, color: null })!;
  const rightColor = getCellColor(rubik, { face: 'R', row: 1, col: 1, color: null })!;

  if (isCornerMatchColor(frCorner, upColor, frontColor, rightColor)) {
    return [];
  }

  if (isCornerMatchColor(rbCorner, upColor, frontColor, rightColor)) {
    return [
      ...lastLayerPositionCornersTransformation,
      ...lastLayerPositionCornersTransformation,
      'U',
      ...lastLayerPositionCornersTransformation,
      'rU',
    ];
  }

  if (isCornerMatchColor(blCorner, upColor, frontColor, rightColor)) {
    return [
      ...lastLayerPositionCornersTransformation,
      'U',
      ...lastLayerPositionCornersTransformation,
      'rU',
    ];
  }

  return ['U', ...lastLayerPositionCornersTransformation, 'rU'];
}

function getRB_BL_LFActions(
  rubik: RubikModel,
  rbCorner: CornerPiece,
  blCorner: CornerPiece,
  lfCorner: CornerPiece
): RotationAction[] {
  assignCornerPieceColors(rubik, rbCorner);
  assignCornerPieceColors(rubik, blCorner);
  assignCornerPieceColors(rubik, lfCorner);

  const upColor = getCellColor(rubik, { face: 'U', row: 1, col: 1, color: null })!;
  const rightColor = getCellColor(rubik, { face: 'R', row: 1, col: 1, color: null })!;
  const backColor = getCellColor(rubik, { face: 'B', row: 1, col: 1, color: null })!;

  if (isCornerMatchColor(rbCorner, upColor, rightColor, backColor)) {
    return [];
  }

  if (isCornerMatchColor(blCorner, upColor, rightColor, backColor)) {
    return [...lastLayerPositionCornersTransformation, ...lastLayerPositionCornersTransformation];
  }

  return [...lastLayerPositionCornersTransformation];
}

/**
 * Solve the last layer position corners (sixth step of CFOP method)
 * @param rubik - The current Rubik's cube state
 * @returns Array of rotation actions to complete the last layer position corners
 */
export function solveLastLayerPositionCorners(rubik: RubikModel): {
  actions: RotationAction[];
  afterRubik: RubikModel;
} {
  // console.log('Before Step 6:' + toFlattenStyleString(rubik));

  const frCorner = findCorner('U', 'F', 'R')!;
  const rbCorner = findCorner('U', 'R', 'B')!;
  const blCorner = findCorner('U', 'B', 'L')!;
  const lfCorner = findCorner('U', 'L', 'F')!;
  assignCornerPieceColors(rubik, frCorner);
  assignCornerPieceColors(rubik, rbCorner);
  assignCornerPieceColors(rubik, blCorner);
  assignCornerPieceColors(rubik, lfCorner);

  const frActions = getFRActions(rubik, frCorner, rbCorner, blCorner);
  const afterFR = rotateRubikByActions(rubik, frActions);

  const rb_bl_lfActions = getRB_BL_LFActions(afterFR, rbCorner, blCorner, lfCorner);
  const afterRB_BL_LF = rotateRubikByActions(afterFR, rb_bl_lfActions);

  return {
    actions: ['Separate', ...frActions, ...rb_bl_lfActions],
    afterRubik: afterRB_BL_LF,
  };
}
