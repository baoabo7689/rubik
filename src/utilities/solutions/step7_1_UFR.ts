import { RotationAction } from '@/constants/rotationActions';
import RubikModel from '@/models/RubikModel';
import { assignCornerPieceColors, findCorner, getCellColor } from './pieceTypes';
import { lastLayerOrientCornersTransformation } from './transformations';

export function solveUFR(rubik: RubikModel): RotationAction[] {
  const ufrCorner = findCorner('U', 'F', 'R')!;
  assignCornerPieceColors(rubik, ufrCorner);
  const cornerUpColor = ufrCorner.positions.find((pos) => pos.face === 'U')!.color;

  const upColor = getCellColor(rubik, { face: 'U', row: 1, col: 1, color: null })!;
  const frontColor = getCellColor(rubik, { face: 'F', row: 1, col: 1, color: null })!;

  if (cornerUpColor === upColor) {
    return [];
  }

  if (cornerUpColor === frontColor) {
    return [...lastLayerOrientCornersTransformation, ...lastLayerOrientCornersTransformation];
  }

  return [
    ...lastLayerOrientCornersTransformation,
    ...lastLayerOrientCornersTransformation,
    ...lastLayerOrientCornersTransformation,
    ...lastLayerOrientCornersTransformation,
  ];
}
