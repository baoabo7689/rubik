import RubikModel from '@/models/RubikModel';
import type { RubikCellModel } from '@/models/RubikCellModel';
import type { RubikFaceModel } from '@/models/RubikFaceModel';
import { rotationActions } from '@/constants/rotationActions';

export type RotationAction = (typeof rotationActions)[number];

type RubikFaces = {
  U: RubikFaceModel;
  D: RubikFaceModel;
  R: RubikFaceModel;
  L: RubikFaceModel;
  F: RubikFaceModel;
  B: RubikFaceModel;
};

function cloneCell(cell: RubikCellModel): RubikCellModel {
  return { color: cell.color };
}

function cloneFace(face: RubikFaceModel): RubikFaceModel {
  return {
    name: face.name,
    cells: face.cells.map((row) => row.map((cell) => cloneCell(cell))) as RubikFaceModel['cells'],
  };
}

function rotateFaceClockwise(face: RubikFaceModel): RubikFaceModel {
  const source = face.cells;

  return {
    name: face.name,
    cells: [
      [cloneCell(source[2][0]), cloneCell(source[1][0]), cloneCell(source[0][0])],
      [cloneCell(source[2][1]), cloneCell(source[1][1]), cloneCell(source[0][1])],
      [cloneCell(source[2][2]), cloneCell(source[1][2]), cloneCell(source[0][2])],
    ],
  };
}

function getRow(face: RubikFaceModel, rowIndex: number): RubikCellModel[] {
  return face.cells[rowIndex].map((cell) => cloneCell(cell));
}

function setRow(face: RubikFaceModel, rowIndex: number, values: RubikCellModel[]) {
  const rowValues = values;
  face.cells[rowIndex][0] = cloneCell(rowValues[0]);
  face.cells[rowIndex][1] = cloneCell(rowValues[1]);
  face.cells[rowIndex][2] = cloneCell(rowValues[2]);
}

function getCol(face: RubikFaceModel, colIndex: number): RubikCellModel[] {
  return [
    cloneCell(face.cells[0][colIndex]),
    cloneCell(face.cells[1][colIndex]),
    cloneCell(face.cells[2][colIndex]),
  ];
}

function setCol(face: RubikFaceModel, colIndex: number, values: RubikCellModel[]) {
  face.cells[0][colIndex] = cloneCell(values[0]);
  face.cells[1][colIndex] = cloneCell(values[1]);
  face.cells[2][colIndex] = cloneCell(values[2]);
}

function reversed(values: RubikCellModel[]): RubikCellModel[] {
  return [...values].reverse().map((cell) => cloneCell(cell));
}

function applyRotateUClockwise(faces: RubikFaces) {
  faces.U = rotateFaceClockwise(faces.U);
  const front = getRow(faces.F, 0);
  const right = getRow(faces.R, 0);
  const back = getRow(faces.B, 0);
  const left = getRow(faces.L, 0);

  setRow(faces.F, 0, right);
  setRow(faces.R, 0, back);
  setRow(faces.B, 0, left);
  setRow(faces.L, 0, front);
}

function applyRotateDClockwise(faces: RubikFaces) {
  faces.D = rotateFaceClockwise(faces.D);
  const front = getRow(faces.F, 2);
  const right = getRow(faces.R, 2);
  const back = getRow(faces.B, 2);
  const left = getRow(faces.L, 2);

  setRow(faces.F, 2, right);
  setRow(faces.R, 2, back);
  setRow(faces.B, 2, left);
  setRow(faces.L, 2, front);
}

function applyRotateRClockwise(faces: RubikFaces) {
  faces.R = rotateFaceClockwise(faces.R);
  const up = getCol(faces.U, 2);
  const front = getCol(faces.F, 2);
  const down = getCol(faces.D, 2);
  const back = getCol(faces.B, 0);

  setCol(faces.U, 2, front);
  setCol(faces.B, 0, reversed(up));
  setCol(faces.D, 2, reversed(back));
  setCol(faces.F, 2, down);
}

function applyRotateLClockwise(faces: RubikFaces) {
  faces.L = rotateFaceClockwise(faces.L);
  const up = getCol(faces.U, 0);
  const front = getCol(faces.F, 0);
  const down = getCol(faces.D, 0);
  const back = getCol(faces.B, 2);

  setCol(faces.U, 0, reversed(back));
  setCol(faces.F, 0, up);
  setCol(faces.D, 0, front);
  setCol(faces.B, 2, reversed(down));
}

function applyRotateFClockwise(faces: RubikFaces) {
  faces.F = rotateFaceClockwise(faces.F);
  const up = getRow(faces.U, 2);
  const right = getCol(faces.R, 0);
  const down = getRow(faces.D, 0);
  const left = getCol(faces.L, 2);

  setRow(faces.U, 2, reversed(left));
  setCol(faces.R, 0, up);
  setRow(faces.D, 0, reversed(right));
  setCol(faces.L, 2, down);
}

function applyRotateBClockwise(faces: RubikFaces) {
  faces.B = rotateFaceClockwise(faces.B);
  const up = getRow(faces.U, 0);
  const right = getCol(faces.R, 2);
  const down = getRow(faces.D, 2);
  const left = getCol(faces.L, 0);

  setRow(faces.U, 0, right);
  setCol(faces.R, 2, reversed(down));
  setRow(faces.D, 2, left);
  setCol(faces.L, 0, reversed(up));
}

function applyClockwise(
  faces: RubikFaces,
  action: Exclude<RotationAction, 'rU' | 'rD' | 'rR' | 'rL' | 'rF' | 'rB'>
) {
  if (action === 'U') {
    applyRotateUClockwise(faces);
    return;
  }

  if (action === 'D') {
    applyRotateDClockwise(faces);
    return;
  }

  if (action === 'R') {
    applyRotateRClockwise(faces);
    return;
  }

  if (action === 'L') {
    applyRotateLClockwise(faces);
    return;
  }

  if (action === 'F') {
    applyRotateFClockwise(faces);
    return;
  }

  applyRotateBClockwise(faces);
}

function toClockwiseAction(
  action: RotationAction
): Exclude<RotationAction, 'rU' | 'rD' | 'rR' | 'rL' | 'rF' | 'rB'> {
  if (action === 'rU') return 'U';
  if (action === 'rD') return 'D';
  if (action === 'rR') return 'R';
  if (action === 'rL') return 'L';
  if (action === 'rF') return 'F';
  if (action === 'rB') return 'B';

  return action;
}

function turnsForAction(action: RotationAction): number {
  if (action.startsWith('r')) return 3;
  return 1;
}

export function rotateRubik(rubik: RubikModel, action: RotationAction): RubikModel {
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
