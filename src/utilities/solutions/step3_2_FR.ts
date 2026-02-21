import { RotationAction } from '@/constants/rotationActions';
import {
  middleLayerPutFrontLeftTransformation,
  middleLayerPutFrontRightTransformation,
} from './transformations';

export const FRSolution: Record<string, RotationAction[]> = {
  FL: [], // solved in previous step
  LF: [], // solved in previous step
  FR: [], // already in correct position
  RF: [
    ...middleLayerPutFrontRightTransformation,
    'U',
    'U',
    ...middleLayerPutFrontRightTransformation,
  ],

  FU: [...middleLayerPutFrontRightTransformation],
  UF: [
    ...middleLayerPutFrontRightTransformation,
    ...middleLayerPutFrontRightTransformation,
    'U',
    'U',
    ...middleLayerPutFrontRightTransformation,
  ],

  LU: ['rU', ...middleLayerPutFrontRightTransformation],
  UL: [
    'rU',
    ...middleLayerPutFrontRightTransformation,
    ...middleLayerPutFrontRightTransformation,
    'U',
    'U',
    ...middleLayerPutFrontRightTransformation,
  ],

  BU: ['U', 'U', ...middleLayerPutFrontRightTransformation],
  UB: [
    'U',
    'U',
    ...middleLayerPutFrontRightTransformation,
    ...middleLayerPutFrontRightTransformation,
    'U',
    'U',
    ...middleLayerPutFrontRightTransformation,
  ],

  RU: ['U', ...middleLayerPutFrontRightTransformation],
  UR: [
    'U',
    ...middleLayerPutFrontRightTransformation,
    ...middleLayerPutFrontRightTransformation,
    'U',
    'U',
    ...middleLayerPutFrontRightTransformation,
  ],

  BR: [
    'UD',
    'UD',
    ...middleLayerPutFrontLeftTransformation,
    'U',
    'U',
    'UD',
    'UD',
    'U',
    'U',
    ...middleLayerPutFrontRightTransformation,
    ...middleLayerPutFrontRightTransformation,
    'U',
    'U',
    ...middleLayerPutFrontRightTransformation,
  ],
  RB: [
    'UD',
    'UD',
    ...middleLayerPutFrontLeftTransformation,
    'U',
    'U',
    'UD',
    'UD',
    'U',
    'U',
    ...middleLayerPutFrontRightTransformation,
  ],

  LB: [
    'UD',
    'UD',
    ...middleLayerPutFrontRightTransformation,
    'U',
    'U',
    'UD',
    'UD',
    'U',
    'U',
    ...middleLayerPutFrontRightTransformation,
  ],
  BL: [
    'UD',
    'UD',
    ...middleLayerPutFrontRightTransformation,
    'U',
    'U',
    'UD',
    'UD',
    'U',
    'U',
    ...middleLayerPutFrontRightTransformation,
    ...middleLayerPutFrontRightTransformation,
    'U',
    'U',
    ...middleLayerPutFrontRightTransformation,
  ],
};
