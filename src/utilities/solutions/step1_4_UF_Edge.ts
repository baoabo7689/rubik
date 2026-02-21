import { RotationAction } from '@/constants/rotationActions';

export const UFSolution: Record<string, RotationAction[]> = {
  UR: [], // solved in previous step
  RU: [], // solved in previous step
  UB: [], // solved in previous step
  BU: [], // solved in previous step
  UL: [], // solved in previous step
  LU: [], // solved in previous step
  UF: [], // already in correct position
  FU: ['F', 'rU', 'R', 'U'],

  RF: ['rF'],
  FR: ['rF', 'F', 'rU', 'R', 'U'],
  FD: ['F', 'U', 'rL', 'rU'],
  DF: ['F', 'F'],
  FL: ['U', 'rL', 'rU'],
  LF: ['F'],

  RB: ['rU', 'R', 'R', 'U', 'rF'],
  BR: ['rU', 'rR', 'U'],
  BD: ['D', 'D', 'F', 'U', 'rL', 'rU'],
  DB: ['D', 'D', 'F', 'F'],
  LB: ['U', 'L', 'L', 'rU', 'F'],
  BL: ['U', 'L', 'rU'],

  DR: ['rD', 'F', 'F'],
  RD: ['rD', 'F', 'U', 'rL', 'rU'],
  LD: ['U', 'rL', 'rU', 'F'],
  DL: ['U', 'L', 'L', 'rU'],
};
