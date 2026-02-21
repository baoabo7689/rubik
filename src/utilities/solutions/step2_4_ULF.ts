import { RotationAction } from '@/constants/rotationActions';
import { UFRTransformation } from './transformations';

export const ULFSolution: Record<string, RotationAction[]> = {
  UFR: [], // UFR is solved in step2_1_UFR
  URF: [], // UFR is solved in step2_1_UFR
  FUR: [], // UFR is solved in step2_1_UFR
  FRU: [], // UFR is solved in step2_1_UFR
  RUF: [], // UFR is solved in step2_1_UFR
  RFU: [], // UFR is solved in step2_1_UFR

  URB: [], // URB is solved in step2_2_URB
  UBR: [], // URB is solved in step2_2_URB
  BRU: [], // URB is solved in step2_2_URB
  BUR: [], // URB is solved in step2_2_URB
  RUB: [], // URB is solved in step2_2_URB
  RBU: [], // URB is solved in step2_2_URB

  UBL: [], // UBL is solved in step2_3_UBL
  ULB: [], // UBL is solved in step2_3_UBL
  BLU: [], // UBL is solved in step2_3_UBL
  BUL: [], // UBL is solved in step2_3_UBL
  LUB: [], // UBL is solved in step2_3_UBL
  LBU: [], // UBL is solved in step2_3_UBL

  // rU: R -> B -> L -> F -> R
  ULF: [], // already in place
  // UFL to URF -> no solution
  UFL: [],
  // FLU to RFU -> no solution
  FLU: [],
  // FUL to RUF
  FUL: ['rU', ...UFRTransformation, ...UFRTransformation, 'U'],
  // LUF to FUR -> no solution
  LUF: [],
  // LFU to FRU
  LFU: [
    'rU',
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    'U',
  ],

  // Down corners
  // revert 0.5: D to F, F to U
  // same as make to UFR then move UFR to ULF
  DFR: [], // no solution
  DRF: ['rU', ...UFRTransformation, ...UFRTransformation, ...UFRTransformation, 'U'],
  FDR: [
    'rU',
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    'U',
  ],
  FRD: [],
  RDF: [],
  RFD: ['rU', ...UFRTransformation, 'U'],

  DRB: [],
  DBR: ['rU', 'rD', ...UFRTransformation, ...UFRTransformation, ...UFRTransformation, 'U'],
  BRD: ['rU', 'rD', ...UFRTransformation, 'U'],
  BDR: [],
  RDB: [
    'rU',
    'rD',
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    'U',
  ],
  RBD: [],

  DBL: [],
  DLB: ['rU', 'D', 'D', ...UFRTransformation, ...UFRTransformation, ...UFRTransformation, 'U'],
  BLD: [],
  BDL: [
    'rU',
    'D',
    'D',
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    'U',
  ],
  LDB: [],
  LBD: ['rU', 'D', 'D', ...UFRTransformation, 'U'],

  DLF: [],
  DFL: ['rU', 'D', ...UFRTransformation, ...UFRTransformation, ...UFRTransformation, 'U'],
  LDF: [
    'rU',
    'D',
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    'U',
  ],
  LFD: [],
  FDL: [],
  FLD: ['rU', 'D', ...UFRTransformation, 'U'],
};
