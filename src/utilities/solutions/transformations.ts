import { RotationAction } from '@/constants/rotationActions';

// This file defines the transformations needed to solve the up corners in the CFOP method.
// This transformation will keep Up layer not change except UFR piece
// UFR will be change follow [if consecutive apply this transformation]:
// UFR -> FDR -> FRU -> ... -> RUF -> ... -> UFR
// Each 2 steps will transform: UFR -> FRU -> RUF -> UFR
export const UFRTransformation = ['rR', 'rD', 'R', 'D'] as RotationAction[];

// This transformation will keep Down layer not change
// and keep BL, FR, BR Edge not change
// it move [FU to FL]
// +UU move FL to UF -> apply 2 time will make FL to LF
export const middleLayerPutFrontLeftTransformation = [
  'rU',
  'rL',
  'U',
  'L',
  'U',
  'F',
  'rU',
  'rF',
] as RotationAction[];

// This transformation will keep Down layer not change
// and keep BL, FL, BR Edge not change
// it move [FU to FR]
// +UU move FR to UF -> apply 2 time will make FR to RF
export const middleLayerPutFrontRightTransformation = [
  'U',
  'R',
  'rU',
  'rR',
  'rU',
  'rF',
  'U',
  'F',
] as RotationAction[];

// This transformation change UB to FU, UF to RU, UR to UB, UL unchanged
// other solved cells will not change
// this transform move 2 color to top => color in top always even number [exclude middle]
export const lastLayerCrossTransformation = ['F', 'R', 'U', 'rR', 'rU', 'rF'] as RotationAction[];

// This transformation only swap UL <->  UF
// UB, UR unchanged, other solved cells will not change
export const lastLayerEdgesTransformation = [
  'R',
  'U',
  'rR',
  'U',
  'R',
  'U',
  'U',
  'rR',
  'U',
] as RotationAction[];

// This transformation keep UFR unchanged
// swap URB -> LUB, UBL -> FUL, ULF -> BUR
// in simple word [BR -> BL -> LF -> BR]
// and if UFR is in correct position then this transformation will produce correct order after some times applied
export const lastLayerPositionCornersTransformation = [
  'U',
  'R',
  'rU',
  'rL',
  'U',
  'rR',
  'rU',
  'L',
] as RotationAction[];

// This transformation will swap UFR color after 2 times applied [UFR -> FRU -> RFU -> UFR]
// when all corners are in correct orientation then other cells will be all correct
export const lastLayerOrientCornersTransformation = ['rR', 'rD', 'R', 'D'] as RotationAction[];
