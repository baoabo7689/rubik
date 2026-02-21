import { RotationAction } from '@/constants/rotationActions';
import {
  middleLayerPutFrontLeftTransformation,
  middleLayerPutFrontRightTransformation,
} from './transformations';

export const BLSolution: Record<string, RotationAction[]> = {
  FL: [], // already in correct position
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

  LB: [], // already in correct position from previous step
  BL: [], // already in correct position from previous step

  BR: [], // already in correct position from previous step
  RB: [], // already in correct position from previous step
};
