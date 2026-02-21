import { RotationAction } from '@/constants/rotationActions';
import { UFRTransformation } from './transformations';

export const UBLSolution: Record<string, RotationAction[]> = {
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

  // U, U: flip
  UBL: [], // already in place
  ULB: [], // no solution
  // BLU to FRU
  BLU: [
    'U',
    'U',
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    'rU',
    'rU',
  ],
  // BUL to FUR -> no solution
  BUL: [],
  // LUB to RUF
  LUB: ['U', 'U', ...UFRTransformation, ...UFRTransformation, 'rU', 'rU'],
  // LBU to RFU -> no solution
  LBU: [],

  // rU: R -> B -> L -> F -> R
  // ULF to UFR
  ULF: [
    'rU',
    ...UFRTransformation,
    'rU',
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    'U',
    'U',
  ],
  // UFL to URF -> no solution
  UFL: [],
  // FLU to RFU
  FLU: [],
  // FUL to RUF
  FUL: ['rU', ...UFRTransformation, 'rU', ...UFRTransformation, 'U', 'U'],
  // LUF to FUR -> no solution
  LUF: [],
  // LFU to FRU
  LFU: [
    'rU',
    ...UFRTransformation,
    'rU',
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    'U',
    'U',
  ],

  // Down corners
  // revert 0.5: D to F, F to U
  // DFR back FUR -> no solution
  DFR: [],
  // DRF back FRU
  DRF: ['U', 'U', ...UFRTransformation, ...UFRTransformation, ...UFRTransformation, 'rU', 'rU'],
  // FDR back UFR
  FDR: [
    'U',
    'U',
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    'rU',
    'rU',
  ],
  // FRD back URF -> no solution
  FRD: [],
  // RDF back RFU -> no solution
  RDF: [],
  // RFD back RUF
  RFD: ['U', 'U', ...UFRTransformation, 'rU', 'rU'],

  // rD: L -> B -> R -> F -> L
  // DRB to DFR -> no solution
  DRB: [],
  // DBR to DRF
  DBR: [
    'rD',
    'U',
    'U',
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    'rU',
    'rU',
  ],
  // BRD to RFD
  BRD: ['rD', 'U', 'U', ...UFRTransformation, 'rU', 'rU'],
  // BDR to RDF -> no solution
  BDR: [],
  // RDB to FDR
  RDB: [
    'rD',
    'U',
    'U',
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    'rU',
    'rU',
  ],
  // RBD to FRD -> no solution
  RBD: [],

  // D, D: flip
  // DBL to DFR -> no solution
  DBL: [],
  // DLB to DRF
  DLB: [
    'D',
    'D',
    'U',
    'U',
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    'rU',
    'rU',
  ],
  // BLD to FRD -> no solution
  BLD: [],
  // BDL to FDR
  BDL: [
    'D',
    'D',
    'U',
    'U',
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    'rU',
    'rU',
  ],
  // LDB to RDF -> no solution
  LDB: [],
  // LBD to RFD
  LBD: ['D', 'D', 'U', 'U', ...UFRTransformation, 'rU', 'rU'],

  // D: L -> F -> R -> B -> L
  // DLF to DFR -> no solution
  DLF: [],
  // DFL to DRF
  DFL: [
    'D',
    'U',
    'U',
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    'rU',
    'rU',
  ],
  // LDF to FDR
  LDF: [
    'D',
    'U',
    'U',
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    'rU',
    'rU',
  ],
  // LFD to FRD -> no solution
  LFD: [],
  // FDL to RDF -> no solution
  FDL: [],
  // FLD to RFD
  FLD: ['D', 'U', 'U', ...UFRTransformation, 'rU', 'rU'],
};
