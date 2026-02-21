import { RotationAction } from '@/constants/rotationActions';
import {
  middleLayerPutFrontLeftTransformation,
  middleLayerPutFrontRightTransformation,
} from './transformations';

export const FLSolution: Record<string, RotationAction[]> = {
  FL: [], // already in correct position
  // LF -> FU -> FL
  LF: [
    ...middleLayerPutFrontLeftTransformation,
    'U',
    'U',
    ...middleLayerPutFrontLeftTransformation,
  ],

  FU: [...middleLayerPutFrontLeftTransformation],
  UF: [
    ...middleLayerPutFrontLeftTransformation,
    ...middleLayerPutFrontLeftTransformation,
    'U',
    'U',
    ...middleLayerPutFrontLeftTransformation,
  ],

  LU: ['rU', ...middleLayerPutFrontLeftTransformation],
  UL: [
    'rU',
    ...middleLayerPutFrontLeftTransformation,
    ...middleLayerPutFrontLeftTransformation,
    'U',
    'U',
    ...middleLayerPutFrontLeftTransformation,
  ],

  BU: ['U', 'U', ...middleLayerPutFrontLeftTransformation],
  UB: [
    'U',
    'U',
    ...middleLayerPutFrontLeftTransformation,
    ...middleLayerPutFrontLeftTransformation,
    'U',
    'U',
    ...middleLayerPutFrontLeftTransformation,
  ],

  RU: ['U', ...middleLayerPutFrontLeftTransformation],
  UR: [
    'U',
    ...middleLayerPutFrontLeftTransformation,
    ...middleLayerPutFrontLeftTransformation,
    'U',
    'U',
    ...middleLayerPutFrontLeftTransformation,
  ],

  RF: [
    ...middleLayerPutFrontRightTransformation,
    'U',
    'U',
    ...middleLayerPutFrontLeftTransformation,
  ],
  FR: [
    ...middleLayerPutFrontRightTransformation,
    'U',
    'U',
    ...middleLayerPutFrontLeftTransformation,
    ...middleLayerPutFrontLeftTransformation,
    'U',
    'U',
    ...middleLayerPutFrontLeftTransformation,
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
    ...middleLayerPutFrontLeftTransformation,
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
    ...middleLayerPutFrontLeftTransformation,
    ...middleLayerPutFrontLeftTransformation,
    'U',
    'U',
    ...middleLayerPutFrontLeftTransformation,
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
    ...middleLayerPutFrontLeftTransformation,
    ...middleLayerPutFrontLeftTransformation,
    'U',
    'U',
    ...middleLayerPutFrontLeftTransformation,
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
    ...middleLayerPutFrontLeftTransformation,
  ],
};
