import { RotationAction } from '@/constants/rotationActions';

export const URSolution: Record<string, RotationAction[]> = {
  UR: [], // already in correct position
  RU: ['rR', 'rF', 'rU'],

  UB: ['U'],
  BU: ['U', 'rR', 'rF', 'rU'],
  UL: ['U', 'U'],
  LU: ['U', 'U', 'rR', 'rF', 'rU'],
  UF: ['rU'],
  FU: ['rU', 'rR', 'rF', 'rU'],

  FR: ['R'],
  RF: ['rF', 'rU'],
  FD: ['rF', 'R'],
  DF: ['rF', 'rF', 'rU'],
  FL: ['F', 'F', 'R'],
  LF: ['F', 'F', 'rF', 'rU'],

  RB: ['B', 'U'],
  BR: ['rR'],
  BD: ['B', 'rR'],
  DB: ['B', 'B', 'U'],
  BL: ['B', 'B', 'rR'],
  LB: ['B', 'B', 'B', 'U'],

  RD: ['R', 'rF', 'rU'],
  DR: ['R', 'R'],
  LD: ['D', 'D', 'R', 'rF', 'rU'],
  DL: ['D', 'D', 'R', 'R'],
};
