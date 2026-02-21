import { RotationAction } from '@/constants/rotationActions';

export const UBSolution: Record<string, RotationAction[]> = {
  UR: [], // solved in previous step
  RU: [], // solved in previous step
  UB: [], // already in correct position
  BU: ['B', 'rU', 'L', 'U'],

  UL: ['L', 'rU', 'rL', 'U'],
  LU: ['L', 'rU', 'rL', 'U', 'B', 'rU', 'L', 'U'],
  UF: ['F', 'U', 'U', 'rF', 'rU', 'rU'],
  FU: ['F', 'U', 'U', 'rF', 'rU', 'rU', 'B', 'rU', 'L', 'U'],

  FR: ['U', 'R', 'rU'],
  RF: ['U', 'U', 'rF', 'U', 'U'],
  FD: ['rF', 'U', 'R', 'rU'],
  DF: ['rF', 'U', 'U', 'rF', 'U', 'U'],
  FL: ['F', 'F', 'U', 'R', 'rU'],
  LF: ['F', 'F', 'U', 'U', 'rF', 'U', 'U'],

  RB: ['B'],
  BR: ['U', 'rR', 'rU'],
  DB: ['B', 'B'],
  BD: ['B', 'U', 'rR', 'rU'],
  LB: ['rB'],
  BL: ['B', 'B', 'U', 'rR', 'rU'],

  RD: ['D', 'B', 'U', 'rR', 'rU'],
  DR: ['D', 'B', 'B'],
  LD: ['rD', 'B', 'U', 'rR', 'rU'],
  DL: ['rD', 'B', 'B'],
};
