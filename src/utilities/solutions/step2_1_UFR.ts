import { RotationAction } from '@/constants/rotationActions';
import { UFRTransformation } from './transformations';

export const UFRSolution: Record<string, RotationAction[]> = {
  UFR: [], // already in place
  URF: [], // no steps to make URF into UFR
  FUR: [], // no steps to make FUR into UFR
  RFU: [], // no steps to make RFU into UFR
  FRU: [...UFRTransformation, ...UFRTransformation, ...UFRTransformation, ...UFRTransformation],
  RUF: [...UFRTransformation, ...UFRTransformation],

  URB: [
    'U', // move URB to UFR
    ...UFRTransformation,
    'rU', // move up edges back to original position
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
  ],
  UBR: [], // no steps to make UBR into UFR
  BRU: [], // no steps to make BRU into UFR
  BUR: [
    'U', // move BUR to RUF
    ...UFRTransformation,
    'rU', // move up edges back to original position
    ...UFRTransformation,
  ],
  RUB: [], // no steps to make RUB into UFR
  RBU: [
    'U', // move RBU to FRU
    ...UFRTransformation,
    'rU', // move up edges back to original position
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
  ],

  UBL: [
    'U',
    'U', // move UBL to UFR
    ...UFRTransformation,
    'rU',
    'rU', // move up edges back to original position],
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
  ],
  ULB: [], // no steps to make UFR into ULB
  BLU: [
    'U',
    'U', // move BLU to FRU
    ...UFRTransformation,
    'rU',
    'rU', // move up edges back to original position],
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
  ],
  BUL: [], // no steps to make UFR into BUL
  LUB: [
    'U',
    'U', // move LUB to RUF
    ...UFRTransformation,
    'rU',
    'rU', // move up edges back to original position],
    ...UFRTransformation,
  ],
  LBU: [], // no steps to make UFR into LBU

  ULF: [
    'rU', // move ULF to UFR
    ...UFRTransformation,
    'U', // move up edges back to original position
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
  ],
  UFL: [], // no steps to make UFR into UFL
  FLU: [], // no steps to make UFR into FLU
  FUL: [
    'rU', // move FUL to RUF
    ...UFRTransformation,
    'U', // move up edges back to original position
    ...UFRTransformation,
  ],
  LUF: [], // no steps to make UFR into LUF
  LFU: [
    'rU', // move LFU to FRU
    ...UFRTransformation,
    'U', // move up edges back to original position
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
  ],

  // Down corners
  DFR: [], // no steps to make UFR into DFR
  FDR: [
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
  ],
  DRF: [...UFRTransformation, ...UFRTransformation, ...UFRTransformation],
  FRD: [], // no steps to make UFR into FRD
  RDF: [], // no steps to make UFR into RDF
  RFD: [...UFRTransformation],

  RDB: [
    'rD', // move RDB to FDR
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
  ],
  DRB: [], // 'rD' -> move DRB to DFR
  DBR: ['rD', ...UFRTransformation, ...UFRTransformation, ...UFRTransformation], // move DBR to DRF
  BRD: ['rD', ...UFRTransformation], // move BRD to RFD
  BDR: [], // 'rD' -> move BDR to RDF
  RBD: [], // 'rD' -> move RBD to FRD

  BDL: [
    'D',
    'D', // move BDL to FDR
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
  ],
  DBL: [], // 'D', 'D' -> move DBL to DFR
  DLB: ['D', 'D', ...UFRTransformation, ...UFRTransformation, ...UFRTransformation], // move DLB to DRF
  BLD: [], // 'D', 'D' -> move BLD to FRD
  LDB: [], // 'D', 'D' -> move LDB to RDF
  LBD: ['D', 'D', ...UFRTransformation], // move LBD to RFD

  LDF: [
    'D', // move LDF to FDR
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
    ...UFRTransformation,
  ],
  DLF: [], // 'D' -> move DLF to DFR
  DFL: ['D', ...UFRTransformation, ...UFRTransformation, ...UFRTransformation], // move DFL to DRF
  LFD: [], // 'D' -> move LFD to FRD
  FDL: [], // 'D' -> move FDL to RDF
  FLD: ['D', ...UFRTransformation], // move FLD to RFD
};
