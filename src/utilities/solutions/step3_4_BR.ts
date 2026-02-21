import { RotationAction } from '@/constants/rotationActions';
import { middleLayerPutFrontRightTransformation } from './transformations';

export const BRSolution: Record<string, RotationAction[]> = {
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

  LB: [], // already in correct position from previous step
  BL: [], // already in correct position from previous step

  BR: [], // already in correct position from previous step
  RB: [], // already in correct position from previous step
};
