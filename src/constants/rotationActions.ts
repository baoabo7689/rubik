export const rotationActions = [
  'U',
  'D',
  'R',
  'L',
  'F',
  'B',
  'UD',
  'RL',
  'FB',
  'rU',
  'rD',
  'rR',
  'rL',
  'rF',
  'rB',
  'rUD',
  'rRL',
  'rFB',
  'Separate',
] as const;

export const rotationActionDescriptionKeys: Record<string, string> = {
  U: 'U',
  rU: 'rU',
  D: 'D',
  rD: 'rD',
  R: 'R',
  rR: 'rR',
  L: 'L',
  rL: 'rL',
  F: 'F',
  rF: 'rF',
  B: 'B',
  rB: 'rB',
  UD: 'UD',
  RL: 'RL',
  FB: 'FB',
  rUD: 'rUD',
  rRL: 'rRL',
  rFB: 'rFB',
  Separate: 'Separate',
};

export const ToClockwiseRotationMap = {
  rU: 'U',
  rD: 'D',
  rR: 'R',
  rL: 'L',
  rF: 'F',
  rB: 'B',
  rUD: 'UD',
  rRL: 'RL',
  rFB: 'FB',
};

export type RotationAction = (typeof rotationActions)[number];

export type CounterClockwiseRotationAction =
  | 'rU'
  | 'rD'
  | 'rR'
  | 'rL'
  | 'rF'
  | 'rB'
  | 'rUD'
  | 'rRL'
  | 'rFB'
  | 'Separate';

export type ClockwiseRotationAction = Exclude<RotationAction, CounterClockwiseRotationAction>;
