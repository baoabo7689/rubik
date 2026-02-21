import { RotationAction } from '@/constants/rotationActions';

export const ULSolution: Record<string, RotationAction[]> = {
  UR: [], // solved in previous step
  RU: [], // solved in previous step
  UB: [], // solved in previous step
  BU: [], // solved in previous step
  UL: [], // already in correct position
  LU: ['L', 'rU', 'F', 'U'],

  UF: ['F', 'rU', 'rF', 'U'],
  FU: ['rF', 'rL'],

  RF: ['rU', 'rF', 'U'],
  FR: ['U', 'U', 'R', 'U', 'U'],
  FD: ['rF', 'U', 'U', 'R', 'U', 'U'],
  DF: ['rF', 'rU', 'rF', 'U'],
  FL: ['F', 'F', 'U', 'U', 'R', 'U', 'U'],
  LF: ['F', 'F', 'rU', 'rF', 'U'],

  RB: ['U', 'B', 'rU'],
  BR: ['U', 'U', 'rR', 'U', 'U'],
  BD: ['U', 'B', 'U', 'rR', 'U', 'U'],
  DB: ['U', 'B', 'B', 'rU'],
  LB: ['U', 'rB', 'rU'],
  BL: ['L'],

  DR: ['U', 'U', 'R', 'R', 'U', 'U'],
  RD: ['D', 'U', 'B', 'U', 'rR', 'U', 'U'],
  LD: ['D', 'rF', 'U', 'U', 'R', 'U', 'U'],
  DL: ['D', 'rF', 'rU', 'rF', 'U'],
};
