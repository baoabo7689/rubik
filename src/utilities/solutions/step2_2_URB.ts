import { RotationAction } from '@/constants/rotationActions';
import { UFRTransformation } from './transformations';

export const URBSolution: Record<string, RotationAction[]> = {
  UFR: [], // UFR is solved in step2_1_UFR
  URF: [], // UFR is solved in step2_1_UFR
  FUR: [], // UFR is solved in step2_1_UFR
  FRU: [], // UFR is solved in step2_1_UFR
  RUF: [], // UFR is solved in step2_1_UFR
  RFU: [], // UFR is solved in step2_1_UFR

  URB: [], // already in place
  UBR: [], // no steps to make URB into UBR
  // 'U': move BRU to RFU -> no steps to make RFU into UFR
  BRU: [],
  // 'U': move BRU to RUF -> 2 transform RUF to UFR -> rU make UFR back to URB
  BUR: ['U', ...UFRTransformation, ...UFRTransformation, 'rU'],
  // 'U': move RUB to FUR -> no steps to make FUR into UFR
  RUB: [],
  // 'U': move RBU to FRU -> 4 transform FRU to UFR -> rU make UFR back to URB
  RBU: [
    'U',
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    'rU',
  ],

  // 'U', 'U': move UBL to UFR
  UBL: [
    'U',
    'U',
    ...UFRTransformation,
    'rU',
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    'rU',
  ],
  ULB: [], // no steps to make ULB into URB
  // 'U', 'U': move BLU to FRU
  BLU: [
    'U',
    'U',
    ...UFRTransformation,
    'rU',
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    'rU',
  ],
  BUL: [], // no steps to make BUL into URB
  // 'U', 'U': move LUB to RUF
  LUB: ['U', 'U', ...UFRTransformation, 'rU', ...UFRTransformation, 'rU'],
  LBU: [], // no steps to make LBU into URB

  // 'rU': move ULF to UFR
  ULF: [
    'rU',
    ...UFRTransformation,
    'U',
    'U',
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    'rU',
  ],
  UFL: [], // no steps to make UFL into URB
  // 'rU': move FLU to RFU -> no steps to make FLU into URB
  FLU: [],
  // 'rU': move FUL to RUF
  FUL: ['rU', ...UFRTransformation, 'U', 'U', ...UFRTransformation, 'rU'],
  // 'rU': move LUF to FUR -> no steps to make LUF into URB
  LUF: [],
  // 'rU': move LFU to FRU
  LFU: [
    'rU',
    ...UFRTransformation,
    'U',
    'U',
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    'rU',
  ],

  // Down corners
  // 0.5 step FUR to DFR -> no steps to make DFR into URB
  // revert 0.5: D to F, F to U
  DFR: [],
  // 0.5 step DRF back to FUR
  DRF: ['U', ...UFRTransformation, ...UFRTransformation, ...UFRTransformation, 'rU'],
  // 0.5 step FDR back to UFR
  FDR: [
    'U',
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    'rU',
  ],
  // 0.5 step FDR back to URF -> no steps to make FRD into URB
  FRD: [],
  // 0.5 step RDF back to RFU -> no steps to make RDF into URB
  RDF: [],
  // 0.5 step RDF back to RUF
  RFD: ['U', ...UFRTransformation, 'rU'],

  // rD: L -> B -> R -> F -> L
  // DRB -> DFR -> no solution
  DRB: [],
  // DBR -> DRF
  DBR: ['rD', 'U', ...UFRTransformation, ...UFRTransformation, ...UFRTransformation, 'rU'],
  // BRD -> RFD
  BRD: ['rD', 'U', ...UFRTransformation, 'rU'],
  // BDR -> RDF -> no solution
  BDR: [],
  // RDB -> FDR
  RDB: [
    'rD',
    'U',
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    'rU',
  ],
  // RBD -> FRD
  RBD: [],

  // D, D
  // DBL -> DFR -> no solution
  DBL: [],
  // DLB -> DRF
  DLB: ['D', 'D', 'U', ...UFRTransformation, ...UFRTransformation, ...UFRTransformation, 'rU'],
  // BLD -> FRD -> no solution
  BLD: [],
  // BDL -> FDR
  BDL: [
    'D',
    'D',
    'U',
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    'rU',
  ],
  // LDB -> RDF -> no solution
  LDB: [],
  // LBD -> RFD
  LBD: ['D', 'D', 'U', ...UFRTransformation, 'rU'],

  // D: L -> F -> R -> B -> L
  // DLF -> DFR -> no solution
  DLF: [],
  // DLF -> DRF
  DFL: ['D', 'U', ...UFRTransformation, ...UFRTransformation, ...UFRTransformation, 'rU'],
  // LDF -> FDR
  LDF: [
    'D',
    'U',
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    'rU',
  ],
  // LFD -> FRD -> no solution
  LFD: [],
  // FDL -> RDF -> no solution
  FDL: [],
  // FLD -> RFD
  FLD: ['D', 'U', ...UFRTransformation, 'rU'],
};
