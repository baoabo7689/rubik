import RubikModel from '@/models/RubikModel';
import type { RubikFaceModel } from '@/models/RubikFaceModel';
import { cloneCell } from '@/utilities/rotations/helpers';
import type { RubikFaces } from '@/utilities/rotations/types';
import {
  applyRotateFBClockwise,
  applyRotateBClockwise,
  applyRotateDClockwise,
  applyRotateFClockwise,
  applyRotateLClockwise,
  applyRotateRLClockwise,
  applyRotateRClockwise,
  applyRotateUDClockwise,
  applyRotateUClockwise,
} from '@/utilities/rotations';
import {
  ClockwiseRotationAction,
  ToClockwiseRotationMap,
  RotationAction,
} from '@/constants/rotationActions';

const RotationFunctions = {
  U: applyRotateUClockwise,
  D: applyRotateDClockwise,
  R: applyRotateRClockwise,
  L: applyRotateLClockwise,
  F: applyRotateFClockwise,
  B: applyRotateBClockwise,
  UD: applyRotateUDClockwise,
  RL: applyRotateRLClockwise,
  FB: applyRotateFBClockwise,
};

function cloneFace(face: RubikFaceModel): RubikFaceModel {
  return {
    name: face.name,
    cells: face.cells.map((row) => row.map((cell) => cloneCell(cell))) as RubikFaceModel['cells'],
  };
}

function applyClockwise(faces: RubikFaces, action: ClockwiseRotationAction) {
  RotationFunctions[action as keyof typeof RotationFunctions](faces);
  return;
}

function toClockwiseAction(action: RotationAction): ClockwiseRotationAction {
  return (ToClockwiseRotationMap[action as keyof typeof ToClockwiseRotationMap] ||
    action) as ClockwiseRotationAction;
}

function turnsForAction(action: RotationAction): number {
  if (action.startsWith('r')) return 3;
  return 1;
}

export function rotateRubik(rubik: RubikModel, action: RotationAction): RubikModel {
  if (action === 'Separate') {
    return rubik;
  }

  const faces: RubikFaces = {
    U: cloneFace(rubik.U),
    D: cloneFace(rubik.D),
    R: cloneFace(rubik.R),
    L: cloneFace(rubik.L),
    F: cloneFace(rubik.F),
    B: cloneFace(rubik.B),
  };

  const clockwiseAction = toClockwiseAction(action);
  const turnCount = turnsForAction(action);

  for (let index = 0; index < turnCount; index += 1) {
    applyClockwise(faces, clockwiseAction);
  }

  return new RubikModel(faces);
}

export function rotateRubikByActions(rubik: RubikModel, actions: RotationAction[]): RubikModel {
  return actions.reduce((currentRubik, action) => rotateRubik(currentRubik, action), rubik);
}
